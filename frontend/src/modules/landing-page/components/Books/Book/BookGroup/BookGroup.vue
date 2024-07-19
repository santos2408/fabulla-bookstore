<template>
  <div>
    <div class="mb-3 flex items-center justify-between">
      <h2 class="text-xl font-medium">{{ props.title }}</h2>
      <button
        type="button"
        class="rounded-lg bg-brand-primary-50 px-6 py-3 text-sm font-medium text-brand-primary-500 hover:bg-brand-primary-600 hover:text-brand-white"
      >
        Ver mais
      </button>
    </div>

    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
