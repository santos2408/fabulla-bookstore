<template>
  <div class="flex items-center gap-5">
    <button
      type="button"
      class="h-full rounded-xl bg-brand-primary-50 px-6 font-medium text-brand-primary-500 hover:bg-brand-primary-600 hover:text-brand-white"
      @click="loginUser"
    >
      Entrar
    </button>

    <router-link
      :to="{ name: 'auth' }"
      class="flex h-full items-center gap-2 rounded-xl bg-brand-primary-500 px-6 font-medium hover:bg-brand-primary-600"
    >
      <UserRound size="21" class="text-brand-white" />
      <span class="text-brand-white">Cadastre-se</span>
    </router-link>
  </div>
</template>

<script setup>
import { UserRound } from "lucide-vue-next";
import { useUserStore, SET_LOGIN_STATUS } from "@/stores/user";

const userStore = useUserStore();

const loginUser = () => userStore[SET_LOGIN_STATUS](true);
</script>
