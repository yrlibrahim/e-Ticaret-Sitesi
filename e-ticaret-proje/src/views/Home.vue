<template>
  <div class="flex flex-wrap gap-2">
    <div class="auto-cols-auto" v-for="product in products" :key="product.id">
      <!-- <h2>{{ product.title }}</h2>
      <p>{{ product.price }}</p>
      <img :src="product.thumbnail" alt="Product Image" />
      <p>{{ product.category }}</p> -->
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const products = ref([]);

const getUser = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    products.value = response.data.products;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getUser();
});
</script>
