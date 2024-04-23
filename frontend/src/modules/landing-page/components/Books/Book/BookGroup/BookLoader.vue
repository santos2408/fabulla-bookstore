<template>
  <template v-if="props.loading">
    <div v-for="n in props.amount" :key="`skeleton-${n}`">
      <skeleton-component
        width="100%"
        height="16rem"
        border-radius="16px"
        class="mb-2 bg-brand-primary-50"
      >
      </skeleton-component>

      <skeleton-component
        width="80%"
        height="1.6rem"
        border-radius="8px"
        class="mb-2 bg-brand-primary-50"
      >
      </skeleton-component>

      <skeleton-component
        width="60%"
        height="1rem"
        border-radius="8px"
        class="mb-6 bg-brand-primary-50"
      >
      </skeleton-component>
    </div>
  </template>

  <slot v-else></slot>
</template>

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

<style lang="scss" scoped></style>
