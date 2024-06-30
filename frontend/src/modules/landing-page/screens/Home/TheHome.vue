<script setup>
import { ref, onMounted } from "vue";

import { axios_api, API_BASE_URL } from "@/services/axios_api";

import MainContent from "@/components/MainContent/MainContent.vue";
import TheHero from "@/modules/landing-page/components/Hero/TheHero.vue";
import HeroLoader from "@/modules/landing-page/components/Hero/HeroLoader/HeroLoader.vue";
import TheFeatures from "@/modules/landing-page/components/Features/TheFeatures.vue";
import HighlightsGroup from "@/modules/landing-page/components/Highlights/HighlightsGroup/HighlightsGroup.vue";
import HighlightsGroupLoader from "@/modules/landing-page/components/Highlights/HighlightsGroup/HighlightsGroupLoader.vue";
import TheRecommendeds from "@/modules/landing-page/components/Highlights/HighlightsItems/TheRecommendeds.vue";
import ThePopulars from "@/modules/landing-page/components/Highlights/HighlightsItems/ThePopulars.vue";

import SpecialOffers from "@/modules/landing-page/components/SpecialOffers/SpecialOffers.vue";
import FlashSale from "@/modules/landing-page/components/FlashSale/FlashSale.vue";
import BooksOnSale from "@/modules/landing-page/components/BooksOnSale/BooksOnSale.vue";
import FeaturedBooks from "@/modules/landing-page/components/FeaturedBooks/FeaturedBooks.vue";

// import BookGroup from "@/modules/landing-page/components/Books/Book/BookGroup/BookGroup.vue";
// import BookLoader from "@/modules/landing-page/components/Books/Book/BookGroup/BookLoader.vue";
// import BookItem from "@/modules/landing-page/components/Books/Book/BookItem/BookItem.vue";

const banners = ref([]);
const recommendeds = ref([]);
const populars = ref([]);
const flashSales = ref([]);
const onSaleBooks = ref([]);
const featuredBooks = ref([]);

const heroLoading = ref(true);
const highlightsLoader = ref(true);

onMounted(async () => {
  heroLoading.value = true;
  highlightsLoader.value = true;

  const promises = [
    axios_api.get(`${API_BASE_URL}/banners`),
    axios_api.get(`${API_BASE_URL}/recommendeds`),
    axios_api.get(`${API_BASE_URL}/populars`),
    axios_api.get(`${API_BASE_URL}/flashSale`),
    axios_api.get(`${API_BASE_URL}/booksOnSale`),
  ];

  const responses = await Promise.all(promises);

  banners.value = responses[0].data;
  recommendeds.value = responses[1].data;
  populars.value = responses[2].data;
  flashSales.value = responses[3].data;
  onSaleBooks.value = responses[4].data;

  heroLoading.value = false;
  highlightsLoader.value = false;
});
</script>

<template>
  <MainContent>
    <template #content>
      <HeroLoader :loading="heroLoading" :amount="1">
        <TheHero :banners="banners" :loading="heroLoading" />
      </HeroLoader>

      <TheFeatures />

      <HighlightsGroup>
        <HighlightsGroupLoader :loading="highlightsLoader" :amount="2">
          <TheRecommendeds :books="recommendeds" />
          <ThePopulars :books="populars" />
        </HighlightsGroupLoader>
      </HighlightsGroup>

      <SpecialOffers />
      <FlashSale :books="flashSales" />
      <BooksOnSale :books="onSaleBooks" />
      <FeaturedBooks />
    </template>
  </MainContent>
</template>
