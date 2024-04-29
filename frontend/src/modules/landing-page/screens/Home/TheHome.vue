<template>
  <main-content>
    <template #content>
      <hero-loader :loading="bannersLoading" :amount="1">
        <the-hero :banners="banners" :loading="bannersLoading" />
      </hero-loader>

      <the-features />

      <the-recommended :books="books" />

      <!-- <book-group title="Destaques" class="px-4">
        <book-loader :loading="productsLoading" :amount="6">
          <swiper-container ref="swiperHighlights" init="false" class="h-full">
            <swiper-slide v-for="product in products" :key="product.id">
              <book-item :data="product" />
            </swiper-slide>
          </swiper-container>
        </book-loader>
      </book-group> -->
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

// import BookGroup from "@/modules/landing-page/components/Books/Book/BookGroup/BookGroup.vue";
// import BookLoader from "@/modules/landing-page/components/Books/Book/BookGroup/BookLoader.vue";
// import BookItem from "@/modules/landing-page/components/Books/Book/BookItem/BookItem.vue";

const banners = ref([]);
const books = ref([]);
const bannersLoading = ref(false);
// const booksLoading = ref(false);

// const swiperHighlights = ref({});
// const swiperHighlightsOptions = ref({
//   slidesPerView: 2.3,
//   spaceBetween: 12,
//   freeMode: true,

//   breakpoints: {
//     400: {
//       slidesPerView: 2.5,
//     },
//     500: {
//       slidesPerView: 3,
//     },
//     640: {
//       slidesPerView: 4,
//     },
//     768: {
//       slidesPerView: 5,
//     },
//     1024: {
//       slidesPerView: 6,
//       spaceBetween: 20,
//     },
//   },
// });

onMounted(async () => {
  bannersLoading.value = true;

  const { data: heroBanners } = await axios_api.get(`${API_BASE_URL}/bannersHero`);
  const { data: recommendedBooks } = await axios_api.get(`${API_BASE_URL}/books`);

  banners.value = heroBanners;
  books.value = recommendedBooks;
  bannersLoading.value = false;

  // Object.assign(swiperHighlights.value, swiperHighlightsOptions.value);
  // swiperHighlights.value.initialize();
});
</script>
