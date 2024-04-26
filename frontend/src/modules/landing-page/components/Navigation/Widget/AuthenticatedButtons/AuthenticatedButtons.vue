<template>
  <div id="profile-container" class="relative hidden items-center gap-4 lg:flex">
    <div
      class="flex h-full cursor-pointer items-center justify-center rounded-xl border border-brand-primary-50 px-4 transition duration-150 hover:bg-brand-primary-50"
    >
      <Heart class="text-brand-neutral-500" size="21" />
    </div>

    <div
      class="flex h-full cursor-pointer items-center justify-center rounded-xl border border-brand-primary-50 px-4 transition duration-150 hover:bg-brand-primary-50"
    >
      <ShoppingCart class="text-brand-neutral-500" size="21" />
    </div>

    <div id="profile" class="flex items-center gap-1">
      <button
        arial-label="Abrir menu do perfil"
        type="button"
        tabindex="0"
        class="h-12 w-12 cursor-pointer overflow-hidden rounded-xl"
      >
        <img src="https://i.pravatar.cc/300" alt="Foto de perfil" width="56" height="56" />
      </button>

      <ChevronDown class="text-brand-primary-500" size="18" />
    </div>

    <dropdown-profile
      class="absolute right-0 top-16 w-64"
      :is-active="dropdownActive"
      @close-dropdown="() => (dropdownActive = false)"
      @logout-user="logoutUser"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

import { ChevronDown, ShoppingCart, Heart } from "lucide-vue-next";
import DropdownProfile from "@/modules/landing-page/components/Navigation/Widget/DropdownProfile/DropdownProfile.vue";

import { useUserStore, SET_LOGIN_STATUS } from "@/stores/user";
import { useEventListener } from "@/composables/useEventListener";

const userStore = useUserStore();

const dropdownActive = ref(false);

const logoutUser = () => userStore[SET_LOGIN_STATUS](false);

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
