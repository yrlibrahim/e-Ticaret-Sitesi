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
            @click="toggleCard(product)"
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
import { useCardStore } from "../../stores/addCard"; // Card Store import
import { useToast } from "vue-toast-notification"; // Toast notification import
import "vue-toast-notification/dist/theme-sugar.css"; // Toast notification CSS

const products = ref([]);
const smartphonesProducts = ref([]);
const laptopsProducts = ref([]);
const router = useRouter();
const cardStore = useCardStore(); // Initialize card store
const $toast = useToast(); // Initialize toast notification

// Ürünleri API'den al
const fetchProducts = async () => {
  try {
    const [smartphonesResponse, laptopsResponse] = await Promise.all([
      axios.get("https://dummyjson.com/products/category/smartphones"),
      axios.get("https://dummyjson.com/products/category/laptops"),
    ]);

    smartphonesProducts.value = smartphonesResponse.data.products;
    laptopsProducts.value = laptopsResponse.data.products;

    products.value = [...smartphonesProducts.value, ...laptopsProducts.value];
  } catch (error) {
    console.error(error);
  }
};

// Kategori sayfasına gitme
const goToCategoryPage = (category) => {
  router.push(`/${category}`);
};

// Sepette olup olmadığını kontrol et
const isInCard = (productId) => {
  return cardStore.card.some((product) => product.id === productId);
};

// Sepete ekleme ve çıkarma işlemi
const toggleCard = (product) => {
  if (isInCard(product.id)) {
    cardStore.removeCard(product.id);
    $toast.error("Ürün başarıyla çıkarıldı!", {
      position: "top-right",
      duration: 3000,
    });
  } else {
    cardStore.addCard(product);
    $toast.success("Ürün başarıyla sepete eklendi!", {
      position: "top-right",
      duration: 3000,
    });
  }
};

onMounted(() => {
  fetchProducts();
});
</script>
