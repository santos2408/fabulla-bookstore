<template>
  <div
    ref="navbar"
    class="fixed left-0 top-0 z-50 h-full w-full overflow-y-scroll bg-brand-white lg:hidden"
  >
    <div class="mb-4 flex items-center justify-between px-4 py-6">
      <logo-component :logo="settings.logo_default" size="w-full h-10 md:h-12" />
      <button
        type="buton"
        arial-label="Fechar menu de navegação"
        class="py-2"
        @click="emits('close-menu', false)"
      >
        <X />
      </button>
    </div>

    <ul class="mb-12 flex flex-col">
      <li
        v-for="item in items"
        :key="item.id"
        class="border-b border-brand-neutral-100 px-4 text-lg text-neutral-600 last:border-0 hover:bg-brand-neutral-50 hover:text-neutral-900"
      >
        <router-link :to="{ name: 'home' }" class="block py-4">{{ item.title }}</router-link>
      </li>
    </ul>

    <div class="flex flex-col gap-2 px-4 pb-8">
      <div class="flex flex-col md:flex-row md:gap-6">
        <div class="mb-6 w-full">
          <p class="mb-2 font-medium text-neutral-600">Para empresas</p>
          <!-- <the-button
            title="Anunciar vaga grátis"
            arial-label="Anunciar vaga grátis"
            type="button"
            type-class="primary"
            class="w-full"
          /> -->
          <button
            type="button"
            class="bg-brand-primary-500 px-6 py-3 font-semibold text-brand-white hover:bg-brand-primary-400"
          ></button>
        </div>

        <div class="mb-4 w-full">
          <p class="mb-2 font-medium text-neutral-600">Para candidatos</p>
          <!-- <the-button
            title="Cadastrar currículo grátis"
            arial-label="Cadastrar currículo grátis"
            type="button"
            type-class="primary"
            class="w-full"
          /> -->
        </div>
      </div>

      <div class="text-center font-medium text-neutral-600">
        <router-link
          :to="{ name: 'home' }"
          class="text-brand-primary-500 underline hover:text-brand-primary-600"
        >
          Já possuo cadastro
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useSettingsStore, GET_SETTINGS } from "@/stores/settings";

import { X } from "lucide-vue-next";

import LogoComponent from "@/components/shared/LogoComponent.vue";
// import TheButton from "@/components/shared/TheButton.vue";

const emits = defineEmits(["close-menu"]);

const settingsStore = useSettingsStore();
const settings = computed(() => settingsStore[GET_SETTINGS]);

const items = ref([
  {
    id: 0,
    title: "Vagas",
    route: "vagas",
    slug: "vagas",
  },
  {
    id: 1,
    title: "Empresas",
    route: "empresas",
    slug: "empresas",
  },
  {
    id: 2,
    title: "Candidatos",
    route: "candidatos",
    slug: "candidatos",
  },
  {
    id: 3,
    title: "Planos",
    route: "planos",
    slug: "planos",
  },
  {
    id: 4,
    title: "Suporte",
    route: "suporte",
    slug: "suporte",
  },
  {
    id: 5,
    title: "Sobre",
    route: "sobre",
    slug: "sobre",
  },
]);
</script>
