<script setup>
// import { ref, onMounted } from "vue";

import { Bookmark } from "lucide-vue-next";
import { getImageUrl } from "@/utils/getImageUrl";
import { ShoppingCart } from "lucide-vue-next";

import TheButton from "@/components/shared/TheButton.vue";
</script>

<template>
  <section class="w-[100%] bg-brand-primary-50 px-4 py-16 lg:px-0 xl:mb-36">
    <div class="wrapper">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-[670px_1fr] xl:gap-16">
        <div class="grid grid-cols-1 justify-between gap-12">
          <div>
            <h2 class="mb-4 text-left text-4xl font-semibold text-brand-neutral-500">
              Destaques da Semana
            </h2>
            <p class="max-w-lg text-left text-brand-neutral-500">
              Mergulhe na nossa seleção especial desta semana e descubra obras que capturam a
              essência de histórias incríveis e inesquecíveis.
            </p>
          </div>

          <div class="grid grid-cols-[240px_1fr] gap-4 rounded-xl bg-brand-white p-6 shadow-3xl">
            <div class="w-full flex-1 overflow-hidden">
              <img :src="getImageUrl('books', '03.png')" alt="" class="rounded-2xl" />
            </div>

            <div class="flex flex-col">
              <div class="relative mb-6 flex gap-4">
                <div class="relative">
                  <Bookmark size="64" class="text-brand-primary-500" />
                  <span
                    class="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-brand-secondary-500"
                  >
                    <i class="pi pi-star-fill text-sm text-brand-white"></i>
                  </span>
                </div>

                <div class="flex flex-col items-start gap-2">
                  <h3 class="text-left text-xl font-semibold text-brand-neutral-500">
                    A Guerra dos Tronos
                  </h3>
                  <span class="text-sm font-medium uppercase text-brand-primary-500">
                    Fantasy, Politc
                  </span>
                </div>
              </div>

              <div class="pl-3">
                <h4 class="mb-2 text-left text-lg font-medium text-brand-neutral-500">Signope</h4>
                <p ref="sinopsis" class="mb-6 text-left text-sm">
                  O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos
                  começou. Como Guardião do Norte, lorde Eddard Stark não fica feliz quando o rei
                  Robert o proclama...
                </p>

                <div class="mb-4 flex gap-12 text-left">
                  <div>
                    <h5 class="mb-1 text-sm text-brand-neutral-200">Escrito por</h5>
                    <p class="font-medium text-brand-neutral-500">George R.R Martin</p>
                  </div>

                  <div>
                    <h5 class="mb-1 text-sm text-brand-neutral-200">Ano</h5>
                    <p class="font-medium text-brand-neutral-500">1996</p>
                  </div>
                </div>

                <div class="flex justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-lg font-bold text-brand-neutral-500">R$ 39,90</span>
                    <span class="text-brand-neutral-200"><del>R$ 49,90</del></span>
                  </div>

                  <div>
                    <TheButton label="Adicionar" :icon="ShoppingCart" icon-pos="left" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="2lg:grid-cols-3 flex content-end gap-6 text-center lg:grid lg:grid-cols-2">
          <div class="self-end overflow-hidden">
            <img :src="getImageUrl('books', '01.png')" alt="" class="rounded-2xl" />
          </div>

          <div class="self-end overflow-hidden">
            <img :src="getImageUrl('books', '02.png')" alt="" class="rounded-2xl" />
          </div>

          <div class="self-end overflow-hidden">
            <img :src="getImageUrl('books', '03.png')" alt="" class="rounded-2xl" />
          </div>

          <div class="self-start overflow-hidden">
            <img :src="getImageUrl('books', '04.png')" alt="" class="rounded-2xl" />
          </div>

          <div class="2lg:block block self-start overflow-hidden lg:hidden">
            <img :src="getImageUrl('books', '05.png')" alt="" class="rounded-2xl" />
          </div>

          <div class="2lg:block block self-start overflow-hidden lg:hidden">
            <img :src="getImageUrl('books', '06.png')" alt="" class="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
