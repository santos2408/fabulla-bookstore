<template>
  <section class="px-4 lg:px-0">
    <header-section :title="header.title" :description="header.description" />
    <the-countdown />
  </section>
</template>

<script setup>
import { ref } from "vue";

import HeaderSection from "@/components/shared/HeaderSection.vue";
import TheCountdown from "./components/TheCountdown.vue";

// import { axios_api, API_BASE_URL } from "@/services/axios_api";

const header = ref({
  title: "Ofertas Relâmpago",
  description:
    "Por tempo limitado, explore uma seleção exclusiva de livros com descontos arrasadores. Estas ofertas são como relâmpagos: rápidas, intensas e imperdíveis.",
});
</script>
