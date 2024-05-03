<template>
  <section class="px-4 lg:px-0">
    <header-section :title="header.title" :description="header.description" />

    <div class="relative select-none">
      <swiper-container ref="swiperSpecialOffers" init="false">
        <swiper-slide v-for="book in books" :key="book.id" class="pb-12">
          <div class="overflow-hidden rounded-xl border bg-brand-white transition duration-300">
            <div class="h-60 overflow-hidden">
              <a href="#">
                <img
                  :src="getImageUrl('books', book.cover)"
                  class="w-full rounded-md object-cover"
                />
              </a>
            </div>
            <div class="p-6">
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

              <p class="mb-2 text-brand-neutral-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ipsum eveniet eum.
                Doloremque optio inventore asperiores! Maiores quis, a placeat, illum consectetur,
                magni.
              </p>

              <span class="mb-4 block font-medium text-brand-neutral-500">Kevin Smilley</span>

              <div class="flex items-center justify-between">
                <button
                  type="button"
                  class="flex items-center gap-3 rounded-xl bg-brand-primary-500 px-6 py-4 font-medium text-brand-white transition duration-150 hover:bg-brand-primary-600"
                >
                  <ShoppingCart size="21" />
                  <span>Adicionar ao carrinho</span>
                </button>

                <span class="text-xl font-bold text-brand-neutral-500">R$18,78</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>

      <div class="swiper-button-special-offers-next">
        <ChevronRight />
      </div>
      <div class="swiper-button-special-offers-prev">
        <ChevronLeft />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { ChevronRight, ChevronLeft, ShoppingCart } from "lucide-vue-next";
import HeaderSection from "@/components/shared/HeaderSection.vue";

import { axios_api, API_BASE_URL } from "@/services/axios_api";
import { getImageUrl } from "@/utils/getImageUrl";

const books = ref([]);
const header = ref({
  title: "Ofertas Especiais",
  description:
    "Explore nossas ofertas especiais e descubra oportunidades imperdíveis para adicionar novos livros à sua coleção! Encontre grandes livros por ótimos preços.",
});
const swiperSpecialOffers = ref({});
const swiperSpecialOffersOption = {
  slidesPerView: 2,
  spaceBetween: 8,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-special-offers-next",
    prevEl: ".swiper-button-special-offers-prev",
    disabledClass: "swiper-button-special-offers-disabled",
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
      slidesPerView: 3,
      spaceBetween: 32,
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
  const { data: specialOffersBooks } = await axios_api.get(`${API_BASE_URL}/specialOffers`);
  books.value = specialOffersBooks;

  Object.assign(swiperSpecialOffers.value, swiperSpecialOffersOption);
  swiperSpecialOffers.value.initialize();
});
</script>
