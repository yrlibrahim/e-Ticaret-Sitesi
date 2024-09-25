import { defineStore } from "pinia";
import { useCardStore } from "@/stores/cardStrores";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counters: {}, // Her ürün için ayrı counter tut
  }),
  actions: {
    // Yeni bir ürün eklendiğinde sayacı başlat
    initializeCounter(itemId) {
      if (!(itemId in this.counters)) {
        this.counters[itemId] = 1; // Yeni ürün için sayacı 1 olarak başlat
      }
    },
    increment(itemId) {
      // Sayacı başlatmak için kontrol et
      this.initializeCounter(itemId);
      const currentCount = this.counters[itemId];
      this.counters[itemId] = currentCount + 1;
    },
    decrement(itemId) {
      // Sayacı başlatmak için kontrol et
      this.initializeCounter(itemId);
      const currentCount = this.counters[itemId];
      if (currentCount > 1) {
        this.counters[itemId] = currentCount - 1;
      } else {
        const cardStore = useCardStore();
        cardStore.removeCard(itemId);
        this.counters[itemId] = 0;
        $toast.error("Ürün çıkarıldı!", {
          position: "top-right",
          duration: 3000,
        });
      }
    },
    getCount(itemId) {
      return this.counters[itemId] || 1; // Mevcut sayacı döndür
    },
    getTotalPrice(itemId) {
      const count = this.getCount(itemId);
      const cardStore = useCardStore();
      const product = cardStore.card.find((item) => item.id === itemId);
      return product ? product.price * count : 1; // Toplam fiyatı hesapla
    },
  },
});
