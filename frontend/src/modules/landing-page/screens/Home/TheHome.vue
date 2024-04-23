<template>
  <main-content>
    <template #header>
      <the-header />
      <the-hero />
    </template>
    <template #content>
      <!-- <book-group>
        <book-loader :loading="productsLoading" :amount="6">
          <book-item v-for="product in products" :key="product.id" :data="product" />
        </book-loader>
      </book-group> -->
    </template>
  </main-content>
</template>

<script setup>
// import { ref, onMounted } from "vue";

// import { axios_api, API_BASE_URL } from "@/services/axios_api";

// import { useFetchAllProducts } from "@/composables/useApi";
// import { useEventListener } from "@/composables/useEventListener";

import MainContent from "@/components/MainContent/MainContent.vue";
import TheHeader from "@/modules/landing-page/components/Header/TheHeader.vue";
import TheHero from "@/modules/landing-page/components/Hero/TheHero.vue";
// import HeroLoader from "@/modules/landing-page/components/Hero/HeroLoader/HeroLoader.vue";
// import BookGroup from "@/modules/landing-page/components/Books/Book/BookGroup/BookGroup.vue";
// import BookLoader from "@/modules/landing-page/components/Books/Book/BookGroup/BookLoader.vue";
// import BookItem from "@/modules/landing-page/components/Books/Book/BookItem/BookItem.vue";
</script>
