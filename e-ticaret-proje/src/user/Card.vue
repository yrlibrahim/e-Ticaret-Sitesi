<template>
  <div>
    <div v-if="filteredCard.length === 0">Sepetiniz boş.</div>
    <div v-else>
      <div
        class="w-[70%] border-[1px] rounded-[15px] flex mb-5 py-4"
        v-for="item in filteredCard"
        :key="item.id"
      >
        <!--İmage Side Start-->
        <div class="card">
          <img class="w-24 h-24 me-4" :src="item.thumbnail" />
        </div>
        <!--İmage Side End-->
        <!--Card Details Side Start-->
        <div class="cart-body w-[70%]">
          <p class="truncate w-[90%]">
            {{ item.description }}
          </p>
          <b class="">{{ item.title }}</b>
          <p>{{ item.price }}</p>
          <p>Toplam: {{ store.getTotalPrice(item.id) }}₺</p>
        </div>
        <!--Card Details Side End-->
        <!--Delete Buttons end Counter Side End-->
        <div>
          <button
            class="pi pi-trash w-6 h-6 rounded-[25px] hover:bg-red-500 hover:text-white"
            @click="removeFromCard(item)"
          ></button>
          <!--Counter Side Start-->
          <div class="rounded-[10px] border-[1px] flex items-center gap-1 mt-5">
            <button
              class="rounded-[10px] border-[1px] p-2 w-8 h-8 flex items-center justify-center bg-neutral-300"
              @click="store.decrement(item.id)"
            >
              -
            </button>
            <span class="w-8 h-8 flex items-center justify-center">{{
              store.getCount(item.id)
            }}</span>
            <button
              class="rounded-[10px] border-[1px] p-2 w-8 h-8 flex items-center justify-center bg-neutral-300"
              @click="store.increment(item.id)"
            >
              +
            </button>
          </div>
          <!--Counter Side End-->
        </div>
        <!--Delete Buttons end Counter Side End-->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCardStore } from "../stores/addCard.js";
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import "primeicons/primeicons.css";
import { useCounterStore } from "@/stores/cardCounter.js";

const store = useCounterStore();
const $toast = useToast();
const cardStore = useCardStore();
const searchQuery = ref("");
const router = useRouter();

// Filtrelenmiş sepet verisi
const filteredCard = computed(() => {
  return cardStore.card.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Sepetten ürün kaldırma fonksiyonu
const removeFromCard = (item) => {
  cardStore.removeCard(item.id);
  $toast.error("Ürün çıkarıldı!", {
    position: "top-right",
    duration: 3000,
  });
};

// Kategori sayfasına yönlendirme
const goToCategoryPage = (category) => {
  router.push(`/${category}`);
};
</script>
