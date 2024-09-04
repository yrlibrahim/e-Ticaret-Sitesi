import { defineStore } from "pinia";

export const useCardStore = defineStore("card", {
  state: () => ({
    card: JSON.parse(localStorage.getItem("card")) || [],
  }),
  actions: {
    addCard(movie) {
      this.card.push(movie);
      localStorage.setItem("card", JSON.stringify(this.card));
    },
    removeFavorite(movieId) {
      this.card = this.card.filter((movie) => movie.id !== movieId);
      localStorage.setItem("card", JSON.stringify(this.card));
    },
  },
});
