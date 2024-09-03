<template>
  <main class="flex flex-wrap gap-3">
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

const products = ref([]);
const router = useRouter();

const getUser = async () => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products/category/laptops"
    );
    products.value = response.data.products;
  } catch (error) {
    console.error(error);
  }
};

const goToCategoryPage = (category) => {
  router.push(`/${category}`);
};

onMounted(() => {
  getUser();
});
</script>
