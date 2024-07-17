<script setup>
import { ref } from "vue";
import iconGroup from "@/components/icons/iconGroup.vue";
import iconBook from "@/components/icons/iconBook.vue";
import iconStore from "@/components/icons/iconStore.vue";
import iconLeaf from "@/components/icons/iconLeaf.vue";

const statistics = ref([
  {
    id: 1,
    title: "125.663",
    subtitle: "Clientes satisfeitos",
    icon: iconGroup,
  },
  {
    id: 2,
    title: "+50.672",
    subtitle: "Coleções de livros",
    icon: iconBook,
  },
  {
    id: 3,
    title: "1.562",
    subtitle: "Lojas cadastradas",
    icon: iconStore,
  },
  {
    id: 4,
    title: "457",
    subtitle: "Escritores famosos",
    icon: iconLeaf,
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
          class="flex flex-col items-center gap-12"
        >
          <div>
            <component :is="statistic.icon" />
          </div>

          <div class="flex flex-col gap-1 text-center">
            <h2 class="text-4xl font-bold text-brand-neutral-500">{{ statistic.title }}</h2>
            <p class="text-brand-neutral-200">{{ statistic.subtitle }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
