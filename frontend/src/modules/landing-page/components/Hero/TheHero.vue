<template>
  <section class="relative mb-6 lg:mb-14">
    <div class="relative w-full overflow-hidden lg:rounded-xl lg:border">
      <swiper-container ref="swiperHero" init="false" class="h-full">
        <swiper-slide v-for="banner in props.banners" :key="banner.id">
          <a href="#">
            <img
              ref="swiper-image"
              :src="getImageUrl('banners', banner.image)"
              class="w-full object-cover"
            />
          </a>
        </swiper-slide>
      </swiper-container>

      <div class="swiper-hero-pagination"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getImageUrl } from "@/utils/getImageUrl";

const props = defineProps({
  banners: {
    type: Array,
    required: true,
  },
});

const swiperHero = ref({});
const swiperHeroOptions = {
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
  },

  pagination: {
    el: ".swiper-hero-pagination",
    bulletClass: "swiper-hero-pagination-bullet",
    bulletActiveClass: "swiper-hero-pagination-bullet-active",
    clickable: true,
  },
};

onMounted(() => {
  Object.assign(swiperHero.value, swiperHeroOptions);
  swiperHero.value.initialize();
});
</script>
