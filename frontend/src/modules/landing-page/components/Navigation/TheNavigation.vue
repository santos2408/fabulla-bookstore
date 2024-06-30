<template>
  <div class="flex h-14 items-center justify-between">
    <div
      class="flex w-full items-center justify-between px-4 lg:w-auto lg:justify-start lg:gap-8 lg:px-0"
    >
      <logo-component :logo="settings.logo_default" size="h-full w-36" />

      <div class="flex gap-2 lg:hidden">
        <button
          type="button"
          arial-label="Pesquisar"
          class="rounded-lg border p-3 hover:bg-brand-primary-50"
          @click="toggleInputSearch"
        >
          <Search class="text-brand-neutral-500" />
        </button>

        <button
          type="button"
          arial-label="Abrir menu de navegação"
          class="rounded-lg border p-3 hover:bg-brand-primary-50"
          @click="emits('open-menu', true)"
        >
          <Menu class="text-brand-neutral-500" />
        </button>
      </div>
    </div>

    <div class="hidden h-full gap-5 lg:flex">
      <the-search />
      <authenticated-buttons v-if="loginStatus" />
      <authentication-buttons v-else />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Menu, Search } from "lucide-vue-next";

import LogoComponent from "@/components/shared/LogoComponent.vue";
import TheSearch from "@/modules/landing-page/components/Navigation/Widget/Search/TheSearch.vue";
import AuthenticationButtons from "@/modules/landing-page/components/Navigation/Widget/AuthenticationButtons/AuthenticationButtons.vue";
import AuthenticatedButtons from "@/modules/landing-page/components/Navigation/Widget/AuthenticatedButtons/AuthenticatedButtons.vue";

import { useSettingsStore, GET_SETTINGS } from "@/stores/settings";
import { useUserStore, LOGIN_STATUS } from "@/stores/user";

const emits = defineEmits(["open-menu"]);

const settingsStore = useSettingsStore();
const userStore = useUserStore();

const settings = computed(() => settingsStore[GET_SETTINGS]);
const loginStatus = computed(() => userStore[LOGIN_STATUS]);
</script>
