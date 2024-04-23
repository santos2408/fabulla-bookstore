<template>
  <div class="mb-16 flex items-center justify-between pt-5 md:pt-10">
    <div class="flex items-center justify-between lg:justify-start lg:gap-20">
      <logo-component :logo="settings.logo_default" size="w-full h-8 md:h-10" />
    </div>

    <nav class="hidden lg:block">
      <ul class="flex h-full items-center justify-center gap-8">
        <li
          v-for="item in items"
          :key="item.id"
          class="border-brand-primary-500 font-regular cursor-pointer text-base text-brand-white opacity-80 transition duration-150 hover:opacity-100"
        >
          <router-link :to="{ name: 'home' }" class="flex flex-col items-center gap-[2px] p-2">
            <component :is="item.icon" size="18" />
            <span>{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <div v-if="loginStatus" id="profile-container" class="relative hidden items-center lg:flex">
      <button
        id="profile"
        arial-label="Abrir menu do perfil"
        type="button"
        tabindex="0"
        class="h-12 w-12 cursor-pointer overflow-hidden rounded-full"
      >
        <img src="https://i.pravatar.cc/300" alt="Foto de perfil" width="48" height="48" />
      </button>

      <dropdown-profile
        class="absolute right-0 top-14 w-64"
        :is-active="dropdownActive"
        @close-dropdown="() => (dropdownActive = false)"
        @logout-user="logoutUser"
      />
    </div>

    <div v-else class="hidden gap-6 lg:flex">
      <div class="flex items-center gap-8">
        <button type="button" class="font-medium text-white">Entrar</button>
        <button
          type="button"
          class="brand-gradient flex items-center gap-2 rounded-xl px-6 py-3 text-base font-medium text-white"
          @click="loginUser"
        >
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import LogoComponent from "@/components/shared/LogoComponent.vue";
import DropdownProfile from "@/modules/landing-page/components/Navigation/Widget/DropdownProfile/DropdownProfile.vue";

import { useSettingsStore, GET_SETTINGS } from "@/stores/settings";
import { useUserStore, LOGIN_STATUS, SET_LOGIN_STATUS } from "@/stores/user";

import { useEventListener } from "@/composables/useEventListener";

const userStore = useUserStore();
const settingsStore = useSettingsStore();

const router = useRouter();

const items = ref([
  {
    id: 0,
    title: "Início",
    route: "home",
    slug: "",
  },
  {
    id: 1,
    title: "Filmes",
    route: "movies",
    slug: "movies",
  },
  {
    id: 2,
    title: "Séries",
    route: "tvshows",
    slug: "tvshows",
  },
  {
    id: 3,
    title: "Animes",
    route: "animes",
    slug: "animes",
  },
]);
const dropdownActive = ref(false);

const loginStatus = computed(() => userStore[LOGIN_STATUS]);
const settings = computed(() => settingsStore[GET_SETTINGS]);

const logoutUser = () => {
  userStore[SET_LOGIN_STATUS](false);
};

const loginUser = () => {
  router.push("/auth/login");
  // userStore[SET_LOGIN_STATUS](true);
};

const toggleDropdown = (event) => {
  const clickedElement = event.target;
  const clickedProfile = clickedElement.closest("#profile");
  const clickedInsideDropdown = clickedElement.closest("#dropdown");

  if (dropdownActive.value && clickedProfile) {
    dropdownActive.value = false;
    return;
  }

  if (clickedProfile || clickedInsideDropdown) {
    dropdownActive.value = true;
    return;
  }

  dropdownActive.value = false;
};

useEventListener(window, "click", toggleDropdown);
</script>
