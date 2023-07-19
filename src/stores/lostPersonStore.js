// matchesStore.js
import { defineStore } from "pinia";

export const uselostPersonStore = defineStore("lostPerson", {
  state: () => ({
    data: [],
  }),
  actions: {
    setData(data) {
      this.data = data;
    },
  },
});
