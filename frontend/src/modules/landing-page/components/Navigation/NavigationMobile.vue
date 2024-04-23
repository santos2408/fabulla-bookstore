<template>
  <div
    class="brand-gradient fixed bottom-6 left-2/4 z-50 h-16 w-[90%] -translate-x-2/4 overflow-hidden rounded-2xl bg-opacity-90 lg:hidden"
  >
    <ul class="flex h-full items-center justify-between px-4">
      <li
        v-for="item in items"
        :key="item.id"
        class="border-brand-primary-500 font-regular cursor-pointer text-xs text-brand-white opacity-80 transition duration-150 hover:-translate-y-1 hover:opacity-100"
      >
        <router-link :to="{ name: 'home' }" class="flex flex-col items-center gap-[2px] p-2">
          <component :is="item.icon" size="18" />
          <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PanelsTopLeft, Clapperboard, Layers, Crown, UserRound } from "lucide-vue-next";

const items = ref([
  {
    id: 0,
    title: "Início",
    route: "home",
    slug: "",
    icon: PanelsTopLeft,
  },
  {
    id: 1,
    title: "Filmes",
    route: "movies",
    slug: "movies",
    icon: Clapperboard,
  },
  {
    id: 2,
    title: "Séries",
    route: "tvshows",
    slug: "tvshows",
    icon: Layers,
  },
  {
    id: 3,
    title: "Animes",
    route: "animes",
    slug: "animes",
    icon: Crown,
  },
  {
    id: 4,
    title: "Perfil",
    route: "profile",
    slug: "profile",
    icon: UserRound,
  },
]);
</script>
