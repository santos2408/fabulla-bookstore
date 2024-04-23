<template>
  <main-content>
    <template #header>
      <the-header />
    </template>

    <template #content>
      <!-- <hero-loader :loading="heroLoading" :amount="1" :device="device">
        <the-hero :banners="banners" />
      </hero-loader>

      <book-group title="Destaques" class="px-4">
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

import { useFetchAllProducts } from "@/composables/useApi";
import { useEventListener } from "@/composables/useEventListener";

import MainContent from "@/components/MainContent/MainContent.vue";
import TheHeader from "@/modules/landing-page/components/Header/TheHeader.vue";
import TheHero from "@/modules/landing-page/components/Hero/TheHero.vue";
import HeroLoader from "@/modules/landing-page/components/Hero/HeroLoader/HeroLoader.vue";
import BookGroup from "@/modules/landing-page/components/Books/Book/BookGroup/BookGroup.vue";
import BookLoader from "@/modules/landing-page/components/Books/Book/BookGroup/BookLoader.vue";
import BookItem from "@/modules/landing-page/components/Books/Book/BookItem/BookItem.vue";

const rawBanners = ref([]);
const banners = ref([]);
const device = ref("mobile");
const heroLoading = ref(true);

const swiperHighlights = ref({});
const swiperHighlightsOptions = ref({
  slidesPerView: 2.3,
  spaceBetween: 12,
  freeMode: true,

  breakpoints: {
    400: {
      slidesPerView: 2.5,
    },
    500: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

const { products, productsLoading, fetchAllProducts } = useFetchAllProducts();

const setCurrentDevice = () => {
  const viewportWidth = window.innerWidth;
  const isMobile = viewportWidth <= 500;
  const isTablet = viewportWidth > 500 && viewportWidth <= 1000;

  if (isMobile) {
    device.value = "mobile";
  } else if (isTablet) {
    device.value = "tablet";
  } else {
    device.value = "desktop";
  }
};

const getCorrectArrayBanners = (rawBanners) => {
  return rawBanners.map((rawBanner) => ({
    id: rawBanner.id,
    image: rawBanner.images[device.value],
  }));
};

const handleResize = () => {
  setCurrentDevice();
  banners.value = getCorrectArrayBanners(rawBanners.value);
};

onMounted(async () => {
  setCurrentDevice();
  fetchAllProducts();

  const { data } = await axios_api.get(`${API_BASE_URL}/bannersHero`);

  rawBanners.value = data;
  banners.value = getCorrectArrayBanners(rawBanners.value);
  heroLoading.value = false;

  Object.assign(swiperHighlights.value, swiperHighlightsOptions.value);
  swiperHighlights.value.initialize();
});

useEventListener(window, "resize", handleResize);
</script>
