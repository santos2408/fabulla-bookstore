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
    <section class="wrapper relative mb-6 lg:mb-14">
      <div class="mb-8 flex flex-col items-center justify-center">
        <skeleton-component
          width="100%"
          height="2.5rem"
          class="mb-4 bg-brand-primary-50"
        ></skeleton-component>

        <skeleton-component
          width="100%"
          height="2.5rem"
          class="bg-brand-primary-50"
        ></skeleton-component>
      </div>

      <div class="grid grid-cols-3 gap-3">
        <div v-for="n in props.amount" :key="`skeleton-${n}`">
          <skeleton-component
            width="100%"
            height="40.375rem"
            border-radius="12px"
            class="mb-6 bg-brand-primary-50"
          >
          </skeleton-component>
        </div>
      </div>
    </section>
  </template>

  <slot v-else></slot>
</template>
