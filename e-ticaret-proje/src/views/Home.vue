<template>
  <main class="flex flex-wrap">
    <div
      class="auto-cols-auto card-container"
      v-for="product in products"
      :key="product.id"
    >
      <div class="card">
        <img
          class="object-cover w-full h-full"
          :src="product.thumbnail"
          alt="Product Image"
        />
        <div class="card-body">
          <h2 class="card-title">{{ product.title }}</h2>
          <p class="card-description">{{ product.description }}</p>
          <p class="card-price">{{ product.price }}</p>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            @click="goToCategoryPage(product.category)"
            >{{ product.category }}</span
          >
          <button
            :class="isInCard(product.id) ? 'button-remove' : 'button-add'"
            @click="toggleCard(product)"
            class="w-full bg-transparent hover:bg-[#c90800] text-[#c90800] font-semibold hover:text-white py-2 px-4 border border-[#c90800] hover:border-transparent rounded"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useCardStore } from "../stores/addCard.js"; // Card store import

const products = ref([]);
const router = useRouter();
const cardStore = useCardStore(); // Initialize card store

const getUser = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    products.value = response.data.products;
  } catch (error) {
    console.error(error);
  }
};

const goToCategoryPage = (category) => {
  router.push(`/${category}`);
};

const isInCard = (productId) => {
  return cardStore.card.some((product) => product.id === productId);
};

const toggleCard = (product) => {
  if (isInCard(product.id)) {
    cardStore.removeFavorite(product.id);
  } else {
    cardStore.addCard(product);
  }
};

onMounted(() => {
  getUser();
});
</script>
