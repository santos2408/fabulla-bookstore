<script setup></script>

<template>
  <ul class="flex items-center gap-2 font-medium">
    <li class="">
      <RouterLink to="/" class="text-brand-neutral-200">Home</RouterLink>
      <span class="select-none text-brand-neutral-200"> /</span>
    </li>
    <li class="text-brand-neutral-200">
      <RouterLink :to="{ name: 'books' }" class="text-brand-primary-500">Livros</RouterLink>
    </li>
  </ul>
</template>
