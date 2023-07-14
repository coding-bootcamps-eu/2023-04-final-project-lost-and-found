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
    const date = ref();

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
