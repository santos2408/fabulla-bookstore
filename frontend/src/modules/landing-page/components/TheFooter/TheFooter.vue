<script setup>
import { shallowRef, computed } from "vue";

import { ChevronRight, MapPin, Phone, Mail } from "lucide-vue-next";
import { getImageUrl } from "@/utils/getImageUrl";

import LogoComponent from "@/components/shared/LogoComponent.vue";

import { useSettingsStore, GET_SETTINGS } from "@/stores/settings";

import iconFacebook from "@/components/icons/iconFacebook.vue";
import iconYoutube from "@/components/icons/iconYoutube.vue";
import iconSocialX from "@/components/icons/iconSocialX.vue";
import iconLinkedin from "@/components/icons/iconLinkedin.vue";
import iconInstagram from "@/components/icons/iconInstagram.vue";

const socials = shallowRef([
  {
    id: 1,
    label: "Facebook",
    icon: iconFacebook,
    bg: "hover:bg-blue-500/30 hover:border-blue-500/30",
  },
  {
    id: 2,
    label: "Youtube",
    icon: iconYoutube,
    bg: "hover:bg-red-500/30 hover:border-red-500/30",
  },
  {
    id: 3,
    label: "X - Twitter",
    icon: iconSocialX,
    bg: "hover:bg-black/20 hover:border-black/20",
  },
  {
    id: 4,
    label: "Linkedin",
    icon: iconLinkedin,
    bg: "hover:bg-blue-500/30 hover:border-blue-500/30",
  },
  {
    id: 5,
    label: "Instagram",
    icon: iconInstagram,
    bg: "hover:bg-red-500/30 hover:border-red-500/30",
  },
]);

const settingsStore = useSettingsStore();
const settings = computed(() => settingsStore[GET_SETTINGS]);
</script>

<template>
  <footer>
    <div
      class="wrapper grid grid-cols-1 px-4 pb-14 lg:grid-cols-2 lg:gap-16 xl:grid-cols-[2fr_1fr_1fr_1.5fr]"
    >
      <div class="mb-6">
        <div class="mb-4 max-w-max xl:mb-6">
          <LogoComponent :logo="settings.logo_default" size="h-full w-36 xl:w-44" />
        </div>
        <p class="mb-6 max-w-[670px] text-brand-neutral-500">
          Nossa loja online oferece uma vasta seleção de títulos cuidadosamente curados, abrangendo
          todos os gêneros imagináveis. De clássicos atemporais a best-sellers contemporâneos, de
          ficção emocionante a não-ficção esclarecedora, temos algo para cada tipo de leitor.
        </p>

        <h3 class="mb-3 text-lg font-medium text-brand-neutral-500">Siga-nos</h3>
        <ul class="flex flex-wrap items-center gap-4">
          <li
            v-for="social in socials"
            :key="social.id"
            :class="['rounded-lg', 'border', 'p-3', 'ease-in-out', 'cursor-pointer', social.bg]"
          >
            <component :is="social.icon" />
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h3 class="mb-3 text-lg font-medium text-brand-neutral-500 xl:mb-6">
          Categorias de Livros
        </h3>
        <div class="grid grid-cols-2 xl:gap-x-10">
          <ul class="grid gap-2 ease-in-out hover:text-brand-neutral-500">
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Ação</a>
            </li>
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Aventura</a>
            </li>
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Comédia</a>
            </li>
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Crime</a>
            </li>
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Drama</a>
            </li>
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Fantasia</a>
            </li>
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Horror</a>
            </li>
          </ul>

          <ul class="grid gap-2 text-brand-neutral-400 ease-in-out hover:text-brand-neutral-500">
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Leis</a>
            </li>
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Mistério</a>
            </li>
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Profissão</a>
            </li>
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Romance</a>
            </li>
            <li>
              <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Séries</a>
            </li>
            <li class="text-brand-primary-500">
              <a href="#" class="flex items-center gap-1 text-brand-primary-500 hover:underline">
                Ver mais
                <ChevronRight size="18" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mb-6 xl:ml-6">
        <h3 class="mb-3 text-lg font-medium text-brand-neutral-500 xl:mb-6">Links Rápidos</h3>
        <ul class="grid gap-2 ease-in-out hover:text-brand-neutral-500">
          <li>
            <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Sobre nós</a>
          </li>
          <li>
            <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Contate-nos</a>
          </li>
          <li>
            <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Produtos</a>
          </li>
          <li>
            <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Login</a>
          </li>
          <li>
            <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">Sign Up</a>
          </li>
          <li>
            <a href="#" class="text-brand-neutral-400 hover:text-brand-primary-500">FAQ</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-3 text-lg font-medium text-brand-neutral-500 xl:mb-6">Nossa Loja</h3>
        <ul class="flex flex-col gap-4">
          <li>
            <a href="#">
              <img
                :src="getImageUrl('utils', 'map.png')"
                alt="Localização no Google Maps da nossa loja"
                class="rounded-lg"
              />
            </a>
          </li>
          <li class="flex items-center gap-2">
            <MapPin class="text-brand-neutral-500" />
            <span class="flex-1 text-brand-neutral-400"
              >832 Thompson Drive, San Francisco CA94107, United States</span
            >
          </li>
          <li class="flex items-center gap-2">
            <Phone class="text-brand-neutral-500" />
            <span class="flex-1 text-brand-neutral-400">+ 123 345123 556</span>
          </li>
          <li class="flex items-center gap-2">
            <Mail class="text-brand-neutral-500" />
            <span class="text-brand-neutral-400">support@fabulla.com</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t py-6">
      <div
        class="wrapper flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0"
      >
        <p class="text-center text-brand-neutral-200">
          Fabulla - Book Store Website - © 2024 Todos os direitos reservados
        </p>
        <div class="flex flex-col text-center md:text-left">
          <a href="#" class="text-brand-neutral-200 hover:text-brand-neutral-500"
            >Code with 🥓 by Roger</a
          >
          <a href="#" class="text-brand-neutral-200 hover:text-brand-neutral-500"
            >Inspired design by Peterdraw</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
