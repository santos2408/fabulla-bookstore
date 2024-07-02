<script setup>
import { ref, onMounted } from "vue";
import { ChevronRight, ChevronLeft } from "lucide-vue-next";

import { getImageUrl } from "@/utils/getImageUrl";
import { getFormattedCurrency } from "@/utils/formatters";

const props = defineProps({
  books: {
    type: Array,
    required: true,
  },
});

const swiperBooksOnSale = ref({});
const swiperBooksOnSaleOption = {
  slidesPerView: 2,
  spaceBetween: 24,
  centeredSlides: false,
  freeMode: true,

  pagination: {
    el: ".swiper-books-on-sale-pagination",
    bulletClass: "swiper-books-on-sale-pagination-bullet",
    bulletActiveClass: "swiper-books-on-sale-pagination-bullet-active",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-books-on-sale-next",
    prevEl: ".swiper-button-books-on-sale-prev",
    disabledClass: "swiper-button-books-on-sale-disabled",
  },

  breakpoints: {
    420: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2.5,
    },
    600: {
      slidesPerView: 2.5,
    },
    640: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 3.5,
      centeredSlides: false,
    },
    800: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    940: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    1000: {
      slidesPerView: 5,
      centeredSlides: false,
    },
    1100: {
      slidesPerView: 6,
      spaceBetween: 24,
      slidesPerGroup: 6,
      centeredSlides: false,
    },
  },
};

onMounted(async () => {
  Object.assign(swiperBooksOnSale.value, swiperBooksOnSaleOption);
  swiperBooksOnSale.value.initialize();
});
</script>

<template>
  <section class="wrapper mb-20 px-4 xl:mb-48">
    <div class="relative mb-8 flex justify-between">
      <h2 class="text-4xl font-semibold">Livros</h2>

      <div class="flex items-center gap-6">
        <div class="swiper-button-books-on-sale-prev">
          <ChevronLeft size="20" />
        </div>

        <div class="swiper-books-on-sale-pagination"></div>

        <div class="swiper-button-books-on-sale-next">
          <ChevronRight size="20" />
        </div>
      </div>
    </div>

    <div>
      <swiper-container ref="swiperBooksOnSale" init="false">
        <swiper-slide v-for="book in props.books" :key="book.id" class="pb-12">
          <router-link :to="{ name: 'home' }" class="relative block">
            <div class="absolute top-5 z-10 rounded-r-2xl bg-brand-secondary-600 px-5 py-2">
              <span class="text-2xl font-semibold text-brand-white">50%</span>
            </div>

            <img
              :src="getImageUrl('books', book.cover)"
              :alt="book.name"
              class="mb-4 h-auto rounded-xl"
            />

            <div class="mb-3">
              <h4 class="truncate font-bold uppercase text-brand-neutral-500" :title="book.name">
                {{ book.name }}
              </h4>
              <span class="truncate text-brand-primary-500" :title="book.author">
                {{ book.author }}
              </span>
            </div>
          </router-link>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <i class="pi pi-star-fill text-brand-secondary-500"></i>
              <span class="font-semibold text-brand-secondary-500">4.5</span>
            </div>

            <div class="flex flex-col items-end gap-0 sm:flex-row sm:items-baseline sm:gap-2">
              <span class="text-md font-bold text-brand-neutral-500">
                {{ getFormattedCurrency(book.discountPrice) }}
              </span>
              <span class="text-xs text-brand-neutral-200">
                <del>{{ getFormattedCurrency(book.originalPrice) }}</del>
              </span>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>
