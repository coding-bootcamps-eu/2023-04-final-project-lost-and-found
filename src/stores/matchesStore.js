import { defineStore } from "pinia";

export const MatchesStore = defineStore("Matches", {
  state: () => ({
    dataset: [],
  }),
  actions: {
    setData(input) {
      this.dataset = input;
    },
    getData() {
      return this.dataset;
    },
  },
});
