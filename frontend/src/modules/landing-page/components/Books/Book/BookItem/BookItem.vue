<template>
  <div class="">
    <router-link
      :to="{ name: 'bookPage', params: { id: props.data.id } }"
      :data-book-id="props.data.id"
      class="group relative"
    >
      <img
        :src="getImageUrl('images/books', `${props.data.id}.png`)"
        :alt="props.data.title"
        class="mb-1 w-full rounded-xl md:mb-3"
      />

      <div class="mb-4 flex flex-col">
        <h3
          class="w-full truncate text-base font-semibold group-hover:text-brand-primary-500 lg:text-lg"
          :title="props.data.title"
        >
          {{ props.data.title }}
        </h3>
        <span
          class="text-brand-primary-300 w-full truncate text-xs lg:text-sm"
          :title="props.data.author"
        >
          {{ props.data.author }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { getImageUrl } from "@/utils/getImageUrl";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
