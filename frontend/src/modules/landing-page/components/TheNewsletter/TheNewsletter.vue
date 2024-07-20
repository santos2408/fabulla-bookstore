<script setup>
import { computed } from "vue";
import { getImageUrl } from "@/utils/getImageUrl";

const background = computed(
  () => `background-image: url(${getImageUrl("utils", "newsletter-bg.svg")})`,
);
</script>

<template>
  <section class="wrapper mb-20 px-4 xl:mb-48">
    <div
      class="rounded-2xl bg-brand-primary-500 bg-cover px-4 py-8 shadow-3xl lg:py-16"
      :style="background"
    >
      <h2
        class="mx-auto mb-6 max-w-[454px] text-center text-lg font-medium text-brand-white sm:mb-12 lg:max-w-2xl lg:text-2xl"
      >
        Inscreva-se na nossa newsletter e receba atualizações de novos livros e promoções
        imperdíveis!
      </h2>

      <form action="" class="flex flex-col justify-center gap-2 sm:flex-row sm:gap-0">
        <label
          for="newsletter"
          class="inline-flex items-center justify-center rounded-xl rounded-tr-xl bg-brand-primary-300/50 p-2 sm:w-96 sm:rounded-bl-xl sm:rounded-br-none sm:rounded-tr-none md:w-[480px]"
        >
          <input
            id="newsletter"
            type="text"
            placeholder="Digite seu e-mail aqui"
            class="w-full bg-transparent p-2 text-white placeholder:text-brand-white"
          />
        </label>
        <button
          type="button"
          class="rounded-xl bg-brand-white px-6 py-4 font-medium uppercase text-brand-neutral-500 hover:bg-brand-white/80 sm:rounded-bl-none sm:rounded-br-xl sm:rounded-tl-none sm:rounded-tr-xl"
        >
          Inscrever-se
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.teste {
  /* background-image: url(../../../../assets/images/utils/newsletter-bg.svg); */
}
</style>
