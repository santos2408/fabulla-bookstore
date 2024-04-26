<template>
  <div
    v-show="props.isActive"
    id="dropdown"
    class="border-brand-neutral-100 z-50 hidden rounded-md border bg-white text-sm shadow-md lg:block"
  >
    <ul class="flex flex-col border-b">
      <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="gap2 flex items-center gap-2">
          <LockKeyhole size="18" class="text-brand-neutral-800" />
          Alterar senha
        </router-link>
      </li>
      <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
          <BookmarkCheck size="18" class="text-brand-neutral-800" />
          Configurar buscas salvas
        </router-link>
      </li>
    </ul>

    <ul class="flex flex-col border-b">
      <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
          <Ban size="18" class="text-brand-neutral-800" />
          Cancelar assinatura
        </router-link>
      </li>
      <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
          <ContactRound size="18" class="text-brand-neutral-800" />
          Dados pessoais e de contato
        </router-link>
      </li>
    </ul>

    <ul class="flex flex-col">
      <li class="text-brand-neutral-800 cursor-pointer px-4 py-3 hover:bg-brand-primary-50">
        <router-link :to="{ name: 'home' }" class="flex items-center gap-2">
          <Library size="18" class="text-brand-neutral-800" />
          Cadastro e assinatura
        </router-link>
      </li>
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

<script setup>
import { LockKeyhole, BookmarkCheck, Ban, ContactRound, Library, LogOut } from "lucide-vue-next";
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
