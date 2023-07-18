// matchesStore.js
import { defineStore } from "pinia";

export const useMatchesStore = defineStore("matches", {
  state: () => ({
    matches: [],
  }),
  actions: {
    setData(matches) {
      this.matches = matches;
    },
  },
});
