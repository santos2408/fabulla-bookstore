<template>
  <slot></slot>
</template>

<script setup>
import { onMounted } from "vue";
import scrollReveal from "scrollreveal";

const props = defineProps({
  classElement: {
    type: String,
    required: true,
    default: "",
  },
});

onMounted(() => {
  scrollReveal().reveal(`.${props.classElement}`, {
    reset: false,
    beforeReveal: function (element) {
      element.classList.add("animate__animated", "animate__fadeInDown");
    },
    // afterReset: function (element) {
    //   element.classList.remove("animate__animated", "animate__fadeInDown");
    // },
  });
});
</script>
