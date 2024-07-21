<template>
  <header class="wrapper w-full py-6">
    <div class="relative">
      <Transition name="slide-fade">
        <navigation-mobile v-show="menuStatus" @close-menu="handleMenuStatus" />
      </Transition>

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

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.2s;
}

.slide-fade-leave-active {
  transition: all 0.2s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
