<template>
  <section class="relative mb-8">
    <div class="max-h-80 w-full overflow-hidden lg:rounded-xl lg:border">
      <swiper-container ref="swiperHero" init="false" class="h-full">
        <swiper-slide v-for="banner in props.banners" :key="banner.id">
          <img
            ref="swiper-image"
            :src="getImageUrl('images/banner', banner.image)"
            class="w-full object-cover"
          />
        </swiper-slide>
      </swiper-container>
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
};

onMounted(async () => {
  Object.assign(swiperHero.value, swiperHeroOptions);
  swiperHero.value.initialize();
});
</script>
