<script setup>
import { shallowRef } from "vue";
import { UsersRound, BookText, Store, Leaf } from "lucide-vue-next";

const statistics = shallowRef([
  {
    id: 1,
    title: "125.663",
    subtitle: "Clientes satisfeitos",
    icon: UsersRound,
  },
  {
    id: 2,
    title: "+50.672",
    subtitle: "Coleções de livros",
    icon: BookText,
  },
  {
    id: 3,
    title: "1.562",
    subtitle: "Lojas cadastradas",
    icon: Store,
  },
  {
    id: 4,
    title: "457",
    subtitle: "Escritores famosos",
    icon: Leaf,
  },
]);
</script>

<template>
  <section class="wrapper mb-20 px-4 xl:mb-48">
    <div>
      <ul class="grid grid-cols-2 gap-y-10 md:grid-cols-4 lg:mx-auto lg:max-w-7xl lg:gap-0">
        <li
          v-for="statistic in statistics"
          :key="statistic.id"
          class="flex flex-col items-center gap-6 sm:gap-12"
        >
          <div>
            <component :is="statistic.icon" size="72" class="text-brand-primary-500" />
          </div>

          <div class="flex flex-col gap-1 text-center">
            <h2 class="text-2xl font-bold text-brand-neutral-500 sm:text-4xl">
              {{ statistic.title }}
            </h2>
            <p class="text-sm text-brand-neutral-200 sm:text-base">{{ statistic.subtitle }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
