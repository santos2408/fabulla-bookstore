<template>
  <div class="flex h-full w-full flex-col">
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
