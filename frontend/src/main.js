// css styles
import "@/assets/css/main.css";
import "@/assets/css/base.css";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

// primevue
import PrimeVue from "primevue/config";
import Lara from "@/assets/presets/lara";

import Button from "primevue/button";
import Skeleton from "primevue/skeleton";

// swiperjs
import { register } from "swiper/element/bundle";

import App from "./App.vue";
import router from "@/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(register);
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});

// primevue components
app.component("ButtonComponent", Button);
app.component("SkeletonComponent", Skeleton);

app.mount("#app");
