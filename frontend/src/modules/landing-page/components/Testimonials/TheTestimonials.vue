<script setup>
import { ref, onMounted } from "vue";
import HeaderSection from "@/components/shared/HeaderSection.vue";

const header = ref({
  title: "Depoimentos",
  description:
    "Leia o que nossos clientes têm a dizer sobre suas experiências conosco. Essa é nossa maior motivação e refletem o compromisso que temos com a excelência em nossos serviços.",
});

const testimonials = [
  {
    id: 1,
    testimonial:
      "A variedade de livros disponíveis é incrível! Sempre encontro o que estou procurando e mais um pouco. Atendimento de primeira!",
    user: "Ana Souza",
    rating: 5,
  },
  {
    id: 2,
    testimonial:
      "A livraria tem um ambiente tão acolhedor. Adoro passar horas explorando as prateleiras. Os funcionários são sempre prestativos e conhecem muito sobre literatura.",
    user: "João Pereira",
    rating: 5,
  },
  {
    id: 3,
    testimonial:
      "Encontrei edições raras e livros que procurava há anos. O acervo é realmente impressionante e a qualidade dos produtos é excelente.",
    user: "Maria Oliveira",
    rating: 5,
  },
  {
    id: 4,
    testimonial:
      "Encontrei edições raras e livros que procurava há anos. O acervo é realmente impressionante e a qualidade dos produtos é excelente.",
    user: "Maria Oliveira",
    rating: 5,
  },
  {
    id: 5,
    testimonial:
      "Encontrei edições raras e livros que procurava há anos. O acervo é realmente impressionante e a qualidade dos produtos é excelente.",
    user: "Maria Oliveira",
    rating: 5,
  },
];

const swiperTestimonials = ref({});
const swiperTestimonialsOption = {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  allowTouchMove: false,

  autoplay: {
    delay: 8000,
  },

  breakpoints: {
    520: {
      slidesPerView: 1.2,
    },
    800: {
      slidesPerView: 1.5,
    },
    1100: {
      slidesPerView: 1.8,
    },
    1400: {
      slidesPerView: 2.8,
    },
  },

  on: {
    async afterInit() {
      const getCenteredSlide = () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const currentCenteredSlide =
              swiperTestimonials.value.querySelector(".swiper-slide-active");

            if (currentCenteredSlide) {
              resolve(currentCenteredSlide);
            } else {
              reject();
            }
          }, 200);
        });

      const currentCenteredSlide = await getCenteredSlide();
      currentCenteredSlide.children[0].classList.add("shadow-3xl");
      currentCenteredSlide.children[0].classList.remove("opacity-50");
    },

    slideChangeTransitionStart() {
      const swiperSlides = Array.from(swiperTestimonials.value.children);

      swiperSlides.forEach((swiperElement) => {
        swiperElement.children[0].classList.remove("shadow-3xl");
        swiperElement.children[0].classList.add("opacity-50");
      });
    },

    slideChangeTransitionEnd() {
      const swiperSlides = Array.from(swiperTestimonials.value.children);

      const currentCenteredSlide = swiperSlides.filter((swiperSlide) =>
        Array.from(swiperSlide.classList).some((className) => className === "swiper-slide-active"),
      );

      currentCenteredSlide[0].children[0].classList.add("shadow-3xl");
      currentCenteredSlide[0].children[0].classList.remove("opacity-50");
    },
  },
};

onMounted(async () => {
  Object.assign(swiperTestimonials.value, swiperTestimonialsOption);
  swiperTestimonials.value.initialize();
});
</script>

<template>
  <section class="mb-20 px-4 xl:mb-20">
    <div class="mb-10 lg:mb-20">
      <HeaderSection :title="header.title" :description="header.description" />

      <div class="flex justify-center">
        <div class="-mr-4 h-14 w-14 overflow-hidden rounded-full border-2 border-white">
          <img src="https://i.pravatar.cc/56?img=3" alt="" />
        </div>
        <div class="-mr-4 h-14 w-14 overflow-hidden rounded-full border-2 border-white">
          <img src="https://i.pravatar.cc/56?img=4" alt="" />
        </div>
        <div class="-mr-4 h-14 w-14 overflow-hidden rounded-full border-2 border-white">
          <img src="https://i.pravatar.cc/56?img=5" alt="" />
        </div>
        <div class="-mr-4 h-14 w-14 overflow-hidden rounded-full border-2 border-white">
          <img src="https://i.pravatar.cc/56?img=8" alt="" />
        </div>
        <div
          class="-mr-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-brand-primary-500"
        >
          <span class="text-sm font-medium text-brand-white">21k+</span>
        </div>
      </div>
    </div>

    <div>
      <swiper-container ref="swiperTestimonials" init="false">
        <swiper-slide
          v-for="testimonial in testimonials"
          :key="`testimonial-${testimonial.id}`"
          class="pb-12"
        >
          <div
            class="border-brand-neutral-50 rounded-lg border bg-brand-white p-6 opacity-50 transition duration-300"
          >
            <p class="mb-8 text-center font-medium text-brand-neutral-500 lg:px-6 lg:text-lg">
              A variedade de livros disponíveis é incrível! Sempre encontro o que estou procurando e
              mais um pouco. Atendimento de primeira!
            </p>

            <div>
              <div class="flex gap-6">
                <img src="https://i.pravatar.cc/56" alt="" class="rounded-full" />
                <div class="flex flex-col">
                  <span class="font-semibold text-brand-neutral-500">Ana Souza</span>
                  <span class="text-regular text-sm text-brand-neutral-200">Book Lovers</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>
