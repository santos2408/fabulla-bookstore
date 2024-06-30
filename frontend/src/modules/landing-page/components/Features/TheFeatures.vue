<template>
  <div class="wrapper mb-7 lg:mb-20">
    <ul
      class="grid grid-cols-1 items-center justify-between justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <li
        v-for="feature in features"
        :key="`feature-${feature.id}`"
        class="flex flex-1 gap-4 lg:flex-col xl:flex-row"
      >
        <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary-50 p-3">
          <component :is="feature.icon" class="h-6" />
        </div>

        <div>
          <h3 class="mb-1 text-lg font-medium text-brand-neutral-500">{{ feature.title }}</h3>
          <p class="max-w-64 text-sm text-brand-neutral-200">
            {{ feature.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import lightningIcon from "@/components/icons/lightningIcon.vue";
import shieldIcon from "@/components/icons/shieldIcon.vue";
import likeIcon from "@/components/icons/likeIcon.vue";
import starIcon from "@/components/icons/starIcon.vue";

const features = [
  {
    id: 0,
    title: "Entrega Rápida",
    description: "Receba seus produtos em tempo recorde com nossa entrega rápida!",
    icon: lightningIcon,
  },
  {
    id: 1,
    title: "Pagamento Seguro",
    description: "Realize suas compras com segurança e tranquilidade na Fabulla.",
    icon: shieldIcon,
  },
  {
    id: 2,
    title: "Melhor Qualidade",
    description: "Produtos de primeira linha garantidos! Nossa prioridade é você.",
    icon: likeIcon,
  },
  {
    id: 3,
    title: "Devolução Garantida",
    description: "Satisfação garantida ou seu dinheiro de volta! Devolução sem complicações",
    icon: starIcon,
  },
];
</script>
