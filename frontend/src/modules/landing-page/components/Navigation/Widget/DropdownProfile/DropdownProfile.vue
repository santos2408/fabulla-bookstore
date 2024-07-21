<script setup>
import {
  LockKeyhole,
  BookmarkCheck,
  // Ban,
  ContactRound,
  LogOut,
  ShoppingCart,
  Heart,
} from "lucide-vue-next";
import { useEventListener } from "@/composables/useEventListener";

const emit = defineEmits(["close-dropdown", "logout-user"]);

const props = defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
});

useEventListener(window, "resize", () => emit("close-dropdown"));
</script>

<template>
  <div
    v-show="props.isActive"
    id="dropdown"
    class="z-50 hidden rounded-md border border-brand-neutral-100 bg-white text-sm shadow-md lg:block"
  >
    <ul class="flex flex-col border-b">
      <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
          <ContactRound size="18" class="text-brand-neutral-800" />
          Meu Perfil
        </router-link>
      </li>
      <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
          <ShoppingCart size="18" class="text-brand-neutral-800" />
          Meu Carrinho
        </router-link>
      </li>
      <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
          <Heart size="18" class="text-brand-neutral-800" />
          Lista de Desejos
        </router-link>
      </li>
    </ul>

    <ul class="flex flex-col border-b">
      <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
          <BookmarkCheck size="18" class="text-brand-neutral-800" />
          Preferências
        </router-link>
      </li>
      <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="gap2 flex items-center gap-2">
          <LockKeyhole size="18" class="text-brand-neutral-800" />
          Alterar senha
        </router-link>
      </li>
      <!-- <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
          <Ban size="18" class="text-brand-neutral-800" />
          Cancelar assinatura
        </router-link>
      </li> -->
    </ul>

    <ul class="flex flex-col">
      <li
        class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50"
        @click="() => emit('logout-user')"
      >
        <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
          <LogOut size="18" class="text-brand-neutral-800" />
          Sair
        </router-link>
      </li>
    </ul>
  </div>
</template>
