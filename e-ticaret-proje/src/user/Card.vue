<template>
  <div>
    <div v-if="filteredCard.length === 0">Sepetiniz boş.</div>
    <div v-else>
      <div class="flex flex-wrap card-box">
        <div
          v-for="movie in filteredCard"
          :key="movie.id"
          class="auto-cols-auto card-container"
        >
          <img
            class="object-cover w-full h-full"
            :src="movie.thumbnail"
            alt="Product Image"
          />
          <div class="card-body">
            <h2 class="card-title">{{ movie.title }}</h2>
            <p class="card-description">{{ movie.description }}</p>
            <p class="card-price">{{ movie.price }}</p>
            <button
              @click="removeFromCard(movie)"
              class="w-full bg-transparent hover:bg-[#c90800] text-[#c90800] font-semibold hover:text-white py-2 px-4 border border-[#c90800] hover:border-transparent rounded"
            >
              Sepetten Çıkar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCardStore } from "../stores/addCard.js";

const cardStore = useCardStore();
const searchQuery = ref("");

const filteredCard = computed(() => {
  return cardStore.card.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const removeFromCard = (movie) => {
  cardStore.removeFavorite(movie.id);
};
</script>
