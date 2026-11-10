<script setup>
// import { ref, onMounted } from "vue";

// import { axios_api, API_BASE_URL } from "@/services/axios_api";

import MainContent from "@/components/MainContent/MainContent.vue";
import TheBreadcrumbs from "@/modules/books/components/TheBreadcrumbs/TheBreadcrumbs.vue";
import FilterOptions from "@/modules/books/components/FilterOptions/FilterOptions.vue";
</script>

<template>
  <MainContent>
    <template #content>
      <div class="wrapper px-4">
        <TheBreadcrumbs class="mb-20 mt-6" />

        <section class="grid grid-cols-[300px_1fr] gap-8">
          <div>
            <h2 class="mb-6 text-3xl font-bold">Filtros</h2>

            <FilterOptions />
          </div>
          <div>
            <h2 class="mb-6 text-3xl font-bold">Livros</h2>

            <div class="h-[600px] bg-red-200">
              <!--  -->
            </div>
          </div>
        </section>
      </div>
    </template>
  </MainContent>
</template>
