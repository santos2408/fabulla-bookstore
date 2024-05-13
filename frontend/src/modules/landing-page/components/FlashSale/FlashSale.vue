<template>
  <section class="px-4 lg:px-0 xl:mb-20">
    <header-section :title="header.title" :description="header.description" />
    <the-countdown class="mb-8 sm:mb-20" />

    <swiper-container ref="swiperFlashSale" init="false">
      <swiper-slide v-for="book in props.books" :key="book.id" class="w-56 text-center">
        <router-link :to="{ name: 'home' }">
          <img
            :src="getImageUrl('books', book.cover)"
            :alt="book.name"
            class="mb-4 h-auto rounded-xl"
          />

          <div class="mb-3 px-4">
            <h4 class="truncate font-bold uppercase text-brand-neutral-500" :title="book.name">
              {{ book.name }}
            </h4>
            <span class="truncate text-brand-primary-500" :title="book.author">
              {{ book.author }}
            </span>
          </div>
        </router-link>

        <div class="flex items-end justify-center gap-2">
          <span class="text-xl font-bold text-brand-primary-500">
            {{ getFormattedCurrency(book.discountPrice) }}
          </span>
          <span class="text-base text-brand-neutral-200">
            <del>{{ getFormattedCurrency(book.originalPrice) }}</del>
          </span>
        </div>
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import HeaderSection from "@/components/shared/HeaderSection.vue";
import TheCountdown from "./components/TheCountdown.vue";

import { getImageUrl } from "@/utils/getImageUrl";
import { getFormattedCurrency } from "@/utils/formatters";

const props = defineProps({
  books: {
    type: Array,
    required: true,
  },
});

const header = ref({
  title: "Ofertas Relâmpago",
  description:
    "Por tempo limitado, explore uma seleção exclusiva de livros com descontos arrasadores. Estas ofertas são como relâmpagos: rápidas, intensas e imperdíveis.",
});

const swiperFlashSale = ref({});
const swiperFlashSaleOption = {
  slidesPerView: 2,
  spaceBetween: 12,
  freeMode: true,

  breakpoints: {
    420: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    460: {
      slidesPerView: 2.8,
      spaceBetween: 12,
    },
    560: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    640: {
      slidesPerView: 3.5,
      spaceBetween: 12,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
    840: {
      slidesPerView: 4.5,
      spaceBetween: 12,
    },
    940: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 80,
    },
  },
};

onMounted(() => {
  Object.assign(swiperFlashSale.value, swiperFlashSaleOption);
  swiperFlashSale.value.initialize();
});
</script>
