<template>
  <div>
    <router-link
      :to="{ name: 'bookPage', params: { id: props.data.id } }"
      :data-book-id="props.data.id"
      class="group"
    >
      <div class="mb-3 h-[250px] overflow-hidden rounded-xl">
        <img
          :src="props.data.image_url"
          :alt="props.data.title"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="mb-4 flex flex-col">
        <h3
          class="w-full truncate text-lg font-semibold group-hover:text-brand-primary-500"
          :title="props.data.title"
        >
          {{ props.data.title }}
        </h3>
        <p class="w-full truncate text-sm text-brand-primary-300" :title="props.data.author">
          {{ props.data.author }}
        </p>
      </div>
    </router-link>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-1">
        <i class="pi pi-star-fill text-brand-orange-100"></i>
        <span class="font-semibold text-brand-orange-100">4.7</span>
      </div>

      <span class="text-md font-semibold text-brand-gray-500">{{ price }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const price = computed(() => {
  return Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    props.data.price,
  );
});
</script>
