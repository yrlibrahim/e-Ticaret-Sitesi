<template>
  <div>
    <div v-if="filteredCard.length === 0">Sepetiniz boş.</div>
    <div v-else>
      <div
        class="w-full border-[1px] rounded-[15px] flex"
        v-for="item in filteredCard"
        :key="item.id"
      >
        <div class="card">
          <img class="w-24 h-24" :src="item.thumbnail" />
        </div>
        <div class="cart-body">
          <p class="truncate hover:overflow-visible w-[90%]">
            {{ item.description }}
          </p>
          <b class="">{{ item.title }}</b>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </div>
    <!-- <div v-else>
      <main class="flex flex-wrap">
        <div
          class="auto-cols-auto card-container"
          v-for="item in filteredCard"
          :key="item.id"
        >
          <div class="card">
            <img
              class="object-cover w-full h-full"
              :src="item.thumbnail"
              alt="item Image"
            />
            <div class="card-body">
              <h2 class="card-title">{{ item.title }}</h2>
              <p class="card-description">{{ item.description }}</p>
              <p class="card-price">{{ item.price }}</p>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                @click="goToCategoryPage(item.category)"
              >
                {{ item.category }}
              </span>
              <button
                class="w-full bg-transparent hover:bg-[#c90800] text-[#c90800] font-semibold hover:text-white py-2 px-4 border border-[#c90800] hover:border-transparent rounded"
                @click="removeFromCard(item)"
              >
                Sepetten Kaldır
              </button>
            </div>
          </div>
        </div>
      </main>
    </div> -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCardStore } from "../stores/addCard.js";
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

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
<style scoped></style>
