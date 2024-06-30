<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});

const inputValue = defineModel("inputValue", { type: [String, Number] });
</script>

<template>
  <input
    :id="props.id"
    v-model="inputValue"
    :type="props.type"
    class="rounded-md border p-3 ring-brand-primary-300 ring-offset-1 focus:outline-none focus:ring-2"
    :placeholder="props.placeholder"
  />
</template>
