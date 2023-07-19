<template>
  <div class="wrapVueDatePicker">
    <VueDatePicker class="vueDatePicker" v-model="date"></VueDatePicker>
  </div>
</template>

<script>
//Docu: https://vue3datepicker.com/

import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: { VueDatePicker },
  setup() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = `${mm}/${dd}/${yyyy}`;
    const date = ref(formattedToday);

    return {
      date,
    };
  },
};
</script>

<style scoped>
.vueDatePicker {
  max-width: 300px;
  text-align: center;
}

.wrapVueDatePicker {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
