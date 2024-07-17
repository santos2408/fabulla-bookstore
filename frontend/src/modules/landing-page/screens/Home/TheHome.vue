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
import TheTestimonials from "@/modules/landing-page/components/Testimonials/TheTestimonials.vue";
import BlogPosts from "@/modules/landing-page/components/BlogPosts/BlogPosts.vue";
import TheStatistics from "@/modules/landing-page/components/TheStatistics/TheStatistics.vue";
import TheNewsletter from "@/modules/landing-page/components/TheNewsletter/TheNewsletter.vue";

// import BookGroup from "@/modules/landing-page/components/Books/Book/BookGroup/BookGroup.vue";
// import BookLoader from "@/modules/landing-page/components/Books/Book/BookGroup/BookLoader.vue";
// import BookItem from "@/modules/landing-page/components/Books/Book/BookItem/BookItem.vue";

const banners = ref([]);
const recommendeds = ref([]);
const populars = ref([]);
const flashSales = ref([]);
const onSaleBooks = ref([]);

const heroLoading = ref(true);
const highlightsLoader = ref(true);

onMounted(async () => {
  heroLoading.value = true;
  highlightsLoader.value = true;

  try {
    const response = await axios_api.get(`${API_BASE_URL}/home`);

    banners.value = response.data.banners;
    recommendeds.value = response.data.recommendeds;
    populars.value = response.data.populars;
    flashSales.value = response.data["flash-sales"];
    onSaleBooks.value = response.data["books-on-sale"];

    heroLoading.value = false;
    highlightsLoader.value = false;
  } catch (error) {
    console.log(error);
  }
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
      <TheTestimonials />
      <BlogPosts />
      <TheStatistics />
      <TheNewsletter />
    </template>
  </MainContent>
</template>
