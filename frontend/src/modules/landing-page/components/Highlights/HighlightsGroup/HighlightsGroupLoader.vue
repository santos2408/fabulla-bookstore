<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <template v-if="props.loading">
    <div v-for="n in props.amount" :key="`skeleton-${n}`">
      <skeleton-component
        width="100%"
        height="27.5rem"
        border-radius="8px"
        class="mb-8 bg-brand-primary-50"
      >
      </skeleton-component>
    </div>
  </template>

  <slot v-else></slot>
</template>
