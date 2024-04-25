<template>
  <label
    class="flex w-[500px] items-center rounded-xl border border-brand-primary-100 xl:w-[700px]"
    @click.prevent=""
  >
    <div class="relative h-full w-[140px] rounded-l-xl">
      <div
        class="flex h-full cursor-pointer items-center justify-center gap-3 rounded-l-xl transition duration-150 hover:bg-brand-primary-50"
        @click="toggleSelect"
      >
        <LayoutGrid color="#6c5dd3" size="22" />
        <span class="font-medium text-brand-primary-500">{{ selectedCategory }}</span>
        <ChevronDown color="#6c5dd3" size="18" />
      </div>

      <ul
        v-show="selectStatus"
        class="absolute left-0 top-16 w-full overflow-hidden rounded-xl border border-brand-primary-100"
      >
        <li
          v-for="searchCategory in searchCategories"
          :key="`search-category-${searchCategory.id}`"
          :class="[
            'cursor-pointer',
            'p-3',
            'font-medium',
            'text-brand-primary-500',
            'transition',
            'duration-150',
            'hover:bg-brand-primary-50',
            selectedCategory === searchCategory.title ? 'bg-brand-primary-50' : '',
          ]"
          :data-select="searchCategory.title"
          @click="selectCategory"
        >
          {{ searchCategory.title }}
        </li>
      </ul>
    </div>

    <div class="h-full flex-1">
      <input
        type="text"
        placeholder="Pesquise entre milhares de livros"
        class="h-full w-full border-l border-r border-brand-primary-100 px-4 placeholder:text-base"
      />
    </div>

    <button
      type="submit"
      class="flex h-full cursor-pointer items-center gap-3 rounded-r-xl border-brand-primary-100 px-6 transition duration-150 hover:bg-brand-primary-50"
    >
      <Search color="#6c5dd3" size="22" />
    </button>
  </label>
</template>

<script setup>
import { ref } from "vue";
import { LayoutGrid, ChevronDown, Search } from "lucide-vue-next";

const searchCategories = ref([
  {
    id: 0,
    title: "Tudo",
  },
  {
    id: 1,
    title: "Título",
  },
  {
    id: 2,
    title: "Editora",
  },
  {
    id: 3,
    title: "Autor",
  },
  {
    id: 4,
    title: "ISBN",
  },
]);

const selectStatus = ref(false);
const selectedCategory = ref("Tudo");

const toggleSelect = () => {
  selectStatus.value = !selectStatus.value;
};

const selectCategory = (event) => {
  selectedCategory.value = event.target.dataset.select;
  toggleSelect();
};
</script>
