<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: [Function, Object],
    default() {
      return undefined;
    },
    required: false,
  },
  iconPos: {
    type: String,
    default() {
      return "right";
    },
    validator(value) {
      return ["left", "right"].includes(value);
    },
    required: false,
  },
  loading: {
    type: Boolean,
    required: false,
  },
  // iconSize: {
  //   type: Number,
  //   default() {
  //     return 18;
  //   },
  //   required: false,
  // },
});
</script>

<template>
  <button
    :disabled="loading"
    class="flex items-center justify-center gap-3 rounded-xl bg-brand-primary-500 px-4 py-4 font-medium hover:bg-brand-primary-600"
    :class="{
      'flex items-center justify-center gap-2': icon,
      'cursor-pointer bg-brand-primary-600': loading,
    }"
  >
    <template v-if="props.icon">
      <template v-if="props.iconPos === 'left'">
        <component :is="props.icon" size="18" class="text-brand-white" />
      </template>
    </template>

    <span class="text-sm text-brand-white sm:text-base">{{ props.label }}</span>

    <template v-if="props.icon">
      <template v-if="props.iconPos === 'right'">
        <component :is="props.icon" size="18" class="text-brand-white" />
      </template>
    </template>
  </button>
</template>
