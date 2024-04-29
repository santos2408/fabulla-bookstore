<template>
  <template v-if="props.loading">
    <!-- <template v-if="props.device === 'mobile'">
      <div v-for="n in props.amount" :key="`skeleton-${n}`">
        <skeleton-component
          width="100%"
          height="17.5rem"
          border-radius="8px"
          class="mb-8 bg-brand-primary-50"
        >
        </skeleton-component>
      </div>
    </template>

    <template v-if="props.device === 'tablet'">
      <div v-for="n in props.amount" :key="`skeleton-${n}`">
        <skeleton-component
          width="100%"
          height="18.75"
          border-radius="8px"
          class="mb-8 bg-brand-primary-50"
        >
        </skeleton-component>
      </div>
    </template> -->

    <!-- <template v-if="props.device === 'desktop'"> -->
    <div v-for="n in props.amount" :key="`skeleton-${n}`">
      <skeleton-component
        width="100%"
        height="27.5rem"
        border-radius="8px"
        class="mb-8 bg-brand-primary-50"
      >
      </skeleton-component>
    </div>
    <!-- </template> -->
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
  // device: {
  //   type: String,
  //   required: true,
  // },
});
</script>
