// matchesStore.js
// import { defineStore } from "pinia";

// export const useMatchesStore = defineStore("matches", {
//   state: () => ({
//     matches: [],
//   }),
//   actions: {
//     setData(matches) {
//       this.matches = matches;
//     },
//   },
// });

import { defineStore } from "pinia";

export const useMatchesStore = defineStore("matches", {
  state: () => ({
    matches: [],
    listItems: [
      // Fügen Sie hier einige Beispiel-Daten hinzu
      { id: 0, name: "Item 1" },
      { id: 1, name: "Item 2" },
    ],
    optionsColor: [],
    optionsMaterial: [],
  }),
  actions: {
    setData(matches) {
      this.matches = matches;
    },
    setListItems(items) {
      this.listItems = items;
    },
    // Fügen Sie hier weitere Aktionen hinzu, falls benötigt
  },
});
