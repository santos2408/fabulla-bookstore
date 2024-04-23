<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore, SET_ON_MOBILE_STATUS } from "@/stores/user";

const userStore = useUserStore();

onMounted(() => {
  const screen = window.innerWidth;
  const desktop = 1024;
  const onMobile = screen < desktop;

  if (onMobile) {
    userStore[SET_ON_MOBILE_STATUS](true);
  } else {
    userStore[SET_ON_MOBILE_STATUS](false);
  }
});
</script>
