<template>
  <header class="w-full py-4">
    <div class="relative">
      <!-- navigation mobile -->
      <navigation-mobile v-show="menuStatus" @close-menu="handleMenuStatus" />
      <the-navigation @open-menu="handleMenuStatus" />
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import NavigationMobile from "@/modules/landing-page/components/Navigation/NavigationMobile.vue";
import TheNavigation from "@/modules/landing-page/components/Navigation/TheNavigation.vue";

const menuStatus = ref(false);

const handleMenuStatus = (payload) => {
  menuStatus.value = payload;

  if (menuStatus.value) {
    document.body.classList.add("overflow-hidden");
    return;
  }

  document.body.classList.remove("overflow-hidden");
};
</script>
