<template>
  <!-- main navigation -->
  <div class="flex items-center justify-between py-6 md:py-5">
    <div class="flex items-center justify-between px-4 lg:justify-start lg:gap-8 lg:px-0">
      <logo-component :logo="settings.logo_default" size="w-full h-10 sm:h-12" />

      <button
        type="button"
        arial-label="Abrir menu de navegação"
        class="py-2 lg:hidden"
        @click="emits('open-menu', true)"
      >
        <Menu class="text-brand-neutral-900" />
      </button>
    </div>

    <!-- <div id="profile-container" class="relative hidden items-center lg:flex">
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
    </div> -->

    <div class="hidden gap-5 lg:flex">
      <input-search />

      <button
        type="button"
        class="rounded-xl bg-brand-primary-50 px-6 py-4 font-medium text-brand-primary-500 transition duration-150 hover:bg-brand-primary-600 hover:text-brand-white"
        @click="loginUser"
      >
        Entrar
      </button>
      <button
        type="button"
        class="flex items-center gap-2 rounded-xl bg-brand-primary-500 px-6 py-4 font-medium text-brand-white transition duration-150 hover:bg-brand-primary-600"
      >
        <UserRound size="21" />
        <span>Cadastre-se</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import { Menu, UserRound } from "lucide-vue-next";
import LogoComponent from "@/components/shared/LogoComponent.vue";
import DropdownProfile from "@/modules/landing-page/components/Navigation/Widget/DropdownProfile/DropdownProfile.vue";
import InputSearch from "@/modules/landing-page/components/Navigation/Widget/Search/InputSearch.vue";

// import { useNavigationStore, SET_MENU_STATUS } from "@/stores/navigation";
import { useSettingsStore, GET_SETTINGS } from "@/stores/settings";
import { useUserStore, LOGIN_STATUS, SET_LOGIN_STATUS } from "@/stores/user";

import { useEventListener } from "@/composables/useEventListener";

const emits = defineEmits(["open-menu"]);

const userStore = useUserStore();
const settingsStore = useSettingsStore();

const router = useRouter();

const loginStatus = computed(() => userStore[LOGIN_STATUS]);
const settings = computed(() => settingsStore[GET_SETTINGS]);

const logoutUser = () => {
  userStore[SET_LOGIN_STATUS](false);
};

const loginUser = () => {
  router.push("/auth/login");
  // userStore[SET_LOGIN_STATUS](true);
};

const dropdownActive = ref(false);

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
