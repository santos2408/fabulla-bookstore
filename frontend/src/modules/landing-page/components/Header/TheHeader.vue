<template>
  <header class="z-10 w-full px-4 lg:px-0">
    <div class="relative">
      <!-- navigation mobile -->
      <navigation-mobile />
      <the-navigation />
    </div>
  </header>
</template>

<script setup>
import NavigationMobile from "@/modules/landing-page/components/Navigation/NavigationMobile.vue";
import TheNavigation from "@/modules/landing-page/components/Navigation/TheNavigation.vue";
</script>
