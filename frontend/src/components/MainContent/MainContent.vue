<template>
  <div class="mx-auto flex h-full w-full max-w-screen-xl flex-col lg:px-4">
    <the-header />

    <main class="h-max w-full flex-1">
      <div class="h-full w-full">
        <slot name="content"></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
import TheHeader from "@/modules/landing-page/components/Header/TheHeader.vue";
</script>
