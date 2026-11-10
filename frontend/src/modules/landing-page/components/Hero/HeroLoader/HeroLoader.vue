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
    <section
      v-for="n in props.amount"
      :key="`skeleton-${n}`"
      class="wrapper relative mb-6 lg:mb-14"
    >
      <skeleton-component
        width="100%"
        height="27.75rem"
        border-radius="12px"
        class="mb-6 bg-brand-primary-50"
      >
      </skeleton-component>
    </section>
  </template>

  <slot v-else></slot>
</template>
