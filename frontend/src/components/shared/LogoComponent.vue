<template>
  <router-link :to="{ name: 'home' }">
    <img
      :src="getImageUrl(logo)"
      alt="Logo da FavelaJobs"
      role="img"
      :width="width"
      :height="height"
      :class="size"
    />
  </router-link>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "50",
  },
  height: {
    type: String,
    default: "50",
  },
  logo: {
    type: String,
    require: true,
    default: "",
  },
});

const getImageUrl = (imageName) => {
  return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
};
</script>

<style scoped></style>
