<script setup>
import { ref, onMounted } from "vue";
import { ChevronRight, ChevronLeft } from "lucide-vue-next";
import { getImageUrl } from "@/utils/getImageUrl";

const props = defineProps({
  books: {
    type: Array,
    required: true,
  },
});

const swiperPopular = ref({});
const swiperPopularOptions = {
  slidesPerView: 2,
  spaceBetween: 8,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-popular-next",
    prevEl: ".swiper-button-popular-prev",
    disabledClass: "swiper-button-popular-disabled",
  },

  breakpoints: {
    420: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    520: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.8,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    1140: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
};

const popularBackgroundOptions = {
  backgroundImage: `url(${getImageUrl("utils", "popular-bg.svg")})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

onMounted(() => {
  Object.assign(swiperPopular.value, swiperPopularOptions);
  swiperPopular.value.initialize();
});
</script>

<template>
  <div class="rounded-xl p-6 xl:px-10 xl:py-8" :style="popularBackgroundOptions">
    <div class="mb-6 sm:mb-8">
      <h3 class="mb-2 text-xl font-bold text-brand-neutral-500 sm:mb-4 sm:text-2xl">
        Popular em 2024
      </h3>
      <p class="max-w-sm text-sm text-brand-neutral-500">
        Explore os livros mais populares e envolventes deste ano! Nossa coleção "Popular em 2024".
      </p>
    </div>

    <div class="relative select-none">
      <swiper-container ref="swiperPopular" init="false">
        <swiper-slide v-for="book in props.books" :key="book.id">
          <a href="#">
            <img
              ref="swiper-image"
              :src="getImageUrl('books', book.cover)"
              class="w-full rounded-md object-cover"
            />
          </a>
        </swiper-slide>
      </swiper-container>

      <div class="swiper-button-popular-next">
        <ChevronRight />
      </div>
      <div class="swiper-button-popular-prev">
        <ChevronLeft />
      </div>
    </div>
  </div>
</template>
