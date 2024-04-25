<template>
  <!-- main navigation -->
  <div class="flex items-center justify-between py-6">
    <div
      class="flex w-full items-center justify-between px-4 lg:w-auto lg:justify-start lg:gap-8 lg:px-0"
    >
      <logo-component :logo="settings.logo_default" size="w-full h-10 sm:h-12" />

      <div class="flex gap-2 lg:hidden">
        <button
          type="button"
          arial-label="Abrir menu de navegação"
          class="rounded-lg border p-2 hover:bg-brand-primary-50"
          @click="toggleInputSearch"
        >
          <Search class="text-brand-neutral-500" />
        </button>

        <button
          type="button"
          arial-label="Abrir menu de navegação"
          class="rounded-lg border p-2 hover:bg-brand-primary-50 lg:hidden"
          @click="emits('open-menu', true)"
        >
          <Menu class="text-brand-neutral-500" />
        </button>
      </div>

      <div v-show="searchStatus" class="absolute left-0 top-24 w-full px-4 lg:hidden">
        <label
          class="relative flex w-full items-center justify-between gap-2 rounded-lg border border-brand-primary-100 bg-brand-white p-2 shadow"
        >
          <input type="text" placeholder="Pesquisar..." class="flex-1 p-2" />
          <button type="submit">
            <Search class="text-brand-primary-500" size="28" />
          </button>
        </label>
      </div>
    </div>

    <div class="hidden gap-5 lg:flex">
      <input-search />
      <authenticated-buttons v-if="loginStatus" />
      <authentication-buttons v-else />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Menu, Search } from "lucide-vue-next";

import LogoComponent from "@/components/shared/LogoComponent.vue";
import InputSearch from "@/modules/landing-page/components/Navigation/Widget/Search/InputSearch.vue";
import AuthenticationButtons from "@/modules/landing-page/components/Navigation/Widget/AuthenticationButtons/AuthenticationButtons.vue";
import AuthenticatedButtons from "@/modules/landing-page/components/Navigation/Widget/AuthenticatedButtons/AuthenticatedButtons.vue";

import { useSettingsStore, GET_SETTINGS } from "@/stores/settings";
import { useUserStore, LOGIN_STATUS } from "@/stores/user";

const emits = defineEmits(["open-menu"]);

const settingsStore = useSettingsStore();
const userStore = useUserStore();

const searchStatus = ref(false);

const settings = computed(() => settingsStore[GET_SETTINGS]);
const loginStatus = computed(() => userStore[LOGIN_STATUS]);

const toggleInputSearch = () => {
  searchStatus.value = !searchStatus.value;
};
</script>
