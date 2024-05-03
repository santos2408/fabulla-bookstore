<template>
  <div class="mb-8 text-center">
    <h2 class="mb-4 text-4xl font-semibold">{{ props.title }}</h2>
    <p class="mx-auto max-w-2xl text-brand-neutral-500">{{ props.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
    required: true,
  },
  description: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
