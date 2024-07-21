<script setup>
import { shallowRef } from "vue";

import {
  LockKeyhole,
  BookmarkCheck,
  ContactRound,
  LogOut,
  ShoppingCart,
  Heart,
  X,
} from "lucide-vue-next";

const emit = defineEmits(["close-menu"]);

const items = shallowRef([
  {
    id: 0,
    title: "Meu Perfil",
    route: "profile",
    slug: "profile",
    icon: ContactRound,
  },
  {
    id: 1,
    title: "Meu carrinho",
    route: "cart",
    slug: "cart",
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: "Lista de Desejos",
    route: "wishlist",
    slug: "wishlist",
    icon: Heart,
  },
  {
    id: 3,
    title: "Preferências",
    route: "preferences",
    slug: "preferences",
    icon: BookmarkCheck,
  },
  {
    id: 4,
    title: "Alterar Senha",
    route: "reset-password",
    slug: "reset-password",
    icon: LockKeyhole,
  },
]);
</script>

<template>
  <div
    ref="navbar"
    class="fixed left-0 top-0 z-50 h-full w-full overflow-y-scroll bg-black bg-opacity-40 lg:hidden"
    @click="() => emit('close-menu')"
  >
    <div
      class="absolute bottom-0 left-0 h-3/4 w-full rounded-t-2xl bg-brand-white px-4 py-6"
      @click.stop
    >
      <div class="mb-6 flex items-center justify-between border-b pb-8">
        <div class="flex items-center gap-4">
          <div class="h-12 w-12 cursor-pointer overflow-hidden rounded-xl">
            <img src="https://i.pravatar.cc/300" alt="Foto de perfil" width="56" height="56" />
          </div>

          <div>
            <h2 class="text-lg font-medium leading-none">Violet Norman</h2>
            <span class="text-sm leading-none text-brand-neutral-400">bayer.martin@yahoo.com</span>
          </div>
        </div>

        <button
          type="button"
          class="rounded-lg bg-brand-primary-500/10 p-3 hover:bg-brand-primary-500/50"
          @click="() => emit('close-menu')"
        >
          <X class="text-brand-neutral-500" />
        </button>
      </div>

      <ul class="flex flex-col">
        <li
          v-for="item in items"
          :key="item.id"
          class="hover:bg-brand-neutral-50 group rounded-lg px-4 text-brand-neutral-400 hover:bg-brand-primary-500"
        >
          <router-link :to="{ name: 'home' }" class="flex items-center gap-3 py-4">
            <component
              :is="item.icon"
              size="21"
              class="text-brand-neutral-400 transition-none group-hover:text-brand-white"
            />
            <span class="group-hover:text-brand-white">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>

      <button type="button" class="absolute bottom-4 flex items-center gap-3 px-4 py-6">
        <component :is="LogOut" size="21" class="text-brand-neutral-400" />
        Sair
      </button>
    </div>
  </div>
</template>
