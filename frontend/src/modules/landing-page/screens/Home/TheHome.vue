<template>
  <main-content>
    <template #content>
      <hero-loader :loading="bannersLoading" :amount="1">
        <the-hero :banners="banners" :loading="bannersLoading" />
      </hero-loader>

      <the-features />
      <the-recommended :books="books" />
      <special-offers />
      <flash-sale :books="flashSales" />
    </template>
  </main-content>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { axios_api, API_BASE_URL } from "@/services/axios_api";

import MainContent from "@/components/MainContent/MainContent.vue";
import TheHero from "@/modules/landing-page/components/Hero/TheHero.vue";
import HeroLoader from "@/modules/landing-page/components/Hero/HeroLoader/HeroLoader.vue";
import TheFeatures from "@/modules/landing-page/components/Features/TheFeatures.vue";
import TheRecommended from "@/modules/landing-page/components/Recommended/TheRecommended.vue";
import SpecialOffers from "@/modules/landing-page/components/SpecialOffers/SpecialOffers.vue";
import FlashSale from "@/modules/landing-page/components/FlashSale/FlashSale.vue";

// import BookGroup from "@/modules/landing-page/components/Books/Book/BookGroup/BookGroup.vue";
// import BookLoader from "@/modules/landing-page/components/Books/Book/BookGroup/BookLoader.vue";
// import BookItem from "@/modules/landing-page/components/Books/Book/BookItem/BookItem.vue";

const banners = ref([]);
const books = ref([]);
const flashSales = ref([]);
const bannersLoading = ref(false);

onMounted(async () => {
  bannersLoading.value = true;

  const { data: heroBanners } = await axios_api.get(`${API_BASE_URL}/bannersHero`);
  const { data: recommendedBooks } = await axios_api.get(`${API_BASE_URL}/books`);
  const { data: flashSalesBooks } = await axios_api.get(`${API_BASE_URL}/flashSale`);

  banners.value = heroBanners;
  books.value = recommendedBooks;
  flashSales.value = flashSalesBooks;
  bannersLoading.value = false;
});
</script>
