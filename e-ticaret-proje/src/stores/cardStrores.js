// stores/cardStore.js
import { defineStore } from "pinia";

export const useCardStore = defineStore("card", {
  state: () => ({
    card: [],
  }),
  actions: {
    addCard(product) {
      this.card.push(product);
    },
    removeFavorite(productId) {
      this.card = this.card.filter((product) => product.id !== productId);
    },
  },
  getters: {
    // Sepetteki toplam ürün sayısını hesaplar
    totalItemCount: (state) => state.card.length,
  },
});
