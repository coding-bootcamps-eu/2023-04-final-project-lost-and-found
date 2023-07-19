import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css"; // vue3-openlayers version < 1.0.0-*

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.component("VueDatePicker", VueDatePicker);

app.use(OpenLayersMap /* options */);

app.mount("#app");
