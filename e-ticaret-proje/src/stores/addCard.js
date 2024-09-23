import { defineStore } from "pinia";

export const useCardStore = defineStore("card", {
  state: () => ({
    card: JSON.parse(localStorage.getItem("card")) || [],
  }),
  actions: {
    addCard(item) {
      this.card.push(item);
      localStorage.setItem("card", JSON.stringify(this.card));
    },
    removeCard(itemId) {
      this.card = this.card.filter((item) => item.id !== itemId);
      localStorage.setItem("card", JSON.stringify(this.card));
    },
  },
});
