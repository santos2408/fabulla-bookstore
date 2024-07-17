<script setup>
import { ref, onMounted } from "vue";

import { ShoppingCart, MoveRight, MoveLeft } from "lucide-vue-next";
import HeaderSection from "@/components/shared/HeaderSection.vue";

const header = ref({
  title: "Ofertas Especiais",
  description:
    "Explore nossas ofertas especiais e descubra oportunidades imperdíveis para adicionar novos livros à sua coleção! Encontre grandes livros por ótimos preços.",
});
const swiperSpecialOffers = ref({});
const swiperSpecialOffersOption = {
  slidesPerView: 1,
  spaceBetween: 8,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-special-offers-next",
    prevEl: ".swiper-button-special-offers-prev",
    disabledClass: "swiper-button-special-offers-disabled",
  },

  breakpoints: {
    420: {
      slidesPerView: 1.1,
    },
    460: {
      slidesPerView: 1.3,
    },
    560: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 1.7,
    },
    700: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    840: {
      slidesPerView: 2.3,
      centeredSlides: false,
    },
    940: {
      slidesPerView: 2.5,
      centeredSlides: false,
    },
    1000: {
      slidesPerView: 2.7,
      centeredSlides: false,
    },
    1100: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },

  on: {
    async afterInit() {
      const getCenteredSlide = () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const currentCenteredSlide =
              swiperSpecialOffers.value.querySelector(".swiper-slide-next");

            if (currentCenteredSlide) {
              resolve(currentCenteredSlide);
            } else {
              reject();
            }
          }, 200);
        });

      const currentCenteredSlide = await getCenteredSlide();
      currentCenteredSlide.children[0].classList.add("shadow-3xl");
    },

    slideChangeTransitionStart() {
      const swiperSlides = Array.from(swiperSpecialOffers.value.children);

      swiperSlides.forEach((swiperElement) => {
        swiperElement.children[0].classList.remove("shadow-3xl");
      });
    },

    slideChangeTransitionEnd() {
      const swiperSlides = Array.from(swiperSpecialOffers.value.children);

      const currentCenteredSlide = swiperSlides.filter((swiperSlide) =>
        Array.from(swiperSlide.classList).some((className) => className === "swiper-slide-next"),
      );

      currentCenteredSlide[0].children[0].classList.add("shadow-3xl");
    },
  },
};

onMounted(async () => {
  Object.assign(swiperSpecialOffers.value, swiperSpecialOffersOption);
  swiperSpecialOffers.value.initialize();
});
</script>

<template>
  <section class="wrapper mb-20 px-4 xl:mb-28">
    <HeaderSection :title="header.title" :description="header.description" />

    <div class="relative select-none">
      <swiper-container ref="swiperSpecialOffers" init="false">
        <swiper-slide v-for="book in 6" :key="book.id" class="pb-12">
          <div class="overflow-hidden rounded-xl border bg-brand-white transition duration-300">
            <div class="flex h-44 items-center overflow-hidden lg:h-48 xl:h-60">
              <img src="https://placehold.co/436x240" class="w-full object-cover" />
            </div>
            <div class="p-4 lg:p-6">
              <h4 class="mb-4 text-xl font-semibold text-brand-neutral-500">
                Biblioteca da meia noite
              </h4>

              <ul class="mb-4 flex items-center gap-2">
                <li
                  class="rounded-full bg-brand-primary-50 px-4 py-2 text-xs font-medium text-brand-primary-500"
                >
                  Bibliografia
                </li>
                <li
                  class="rounded-full bg-brand-primary-50 px-4 py-2 text-xs font-medium text-brand-primary-500"
                >
                  Thriller
                </li>
                <li
                  class="rounded-full bg-brand-primary-50 px-4 py-2 text-xs font-medium text-brand-primary-500"
                >
                  Horror
                </li>
              </ul>

              <p class="mb-4 text-sm text-brand-neutral-500 md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ipsum eveniet eum.
                Doloremque optio inventore asperiores! Maiores quis, a placeat, illum consectetur,
                magni.
              </p>

              <span class="mb-6 block font-medium text-brand-neutral-500">Kevin Smilley</span>

              <div class="flex items-center justify-between">
                <button
                  type="button"
                  class="flex items-center justify-center gap-3 rounded-xl bg-brand-primary-500 px-4 py-4 font-medium text-brand-white transition duration-150 hover:bg-brand-primary-600"
                >
                  <ShoppingCart size="21" />
                  <span class="text-sm sm:text-base">Adicionar ao carrinho</span>
                </button>

                <span class="text-lg font-bold text-brand-neutral-500">R$18,78</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>

      <div class="swiper-button-special-offers-next">
        <MoveRight size="20" />
      </div>
      <div class="swiper-button-special-offers-prev">
        <MoveLeft size="20" />
      </div>
    </div>
  </section>
</template>
