<template>
  <div id="profile-container" class="relative hidden items-center lg:flex">
    <button
      id="profile"
      arial-label="Abrir menu do perfil"
      type="button"
      tabindex="0"
      class="h-14 w-14 cursor-pointer overflow-hidden rounded-xl"
    >
      <img src="https://i.pravatar.cc/300" alt="Foto de perfil" width="56" height="56" />
    </button>

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
