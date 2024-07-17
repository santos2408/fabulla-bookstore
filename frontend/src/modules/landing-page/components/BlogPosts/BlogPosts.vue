<script setup>
import { ref, onMounted } from "vue";
import { MoveRight } from "lucide-vue-next";

import { getImageUrl } from "@/utils/getImageUrl";
import { getFormattedCurrency } from "@/utils/formatters";

import TheButton from "@/components/shared/TheButton.vue";

const posts = [
  {
    id: 1,
    title: "10 Livros Imperdíveis de 2024",
    description: "Uma lista dos melhores livros lançados em 2024 que você não pode deixar de ler.",
    username: "booklover123",
    userImage: "https://i.pravatar.cc/50",
  },
  {
    id: 2,
    title: "Como Organizar Sua Estante de Livros",
    description: "Dicas práticas para manter sua coleção de livros organizada e acessível.",
    username: "organizer_guru",
    userImage: "https://i.pravatar.cc/50",
  },
  {
    id: 3,
    title: "Os Melhores Clássicos da Literatura",
    description: "Uma análise dos livros clássicos que marcaram a história da literatura mundial.",
    username: "litfanatic",
    userImage: "https://i.pravatar.cc/50",
  },
  {
    id: 4,
    title: "Como Ler Mais em Menos Tempo",
    description: "Estratégias e técnicas para aumentar seu ritmo de leitura sem perder.",
    username: "speedreader",
    userImage: "https://i.pravatar.cc/50",
  },
];
</script>

<template>
  <section class="wrapper mb-20 px-4 xl:mb-48">
    <div class="mb-8 flex flex-col justify-between gap-8 xl:mb-16 xl:flex-row xl:items-end">
      <div>
        <h2 class="mb-4 text-left text-4xl font-semibold text-brand-neutral-500">
          Últimas Notícias
        </h2>
        <p class="max-w-lg text-left text-brand-neutral-500">
          Mergulhe na nossa seleção especial desta semana e descubra obras que capturam a essência
          de histórias incríveis e inesquecíveis.
        </p>
      </div>

      <div>
        <TheButton label="Ver mais" :icon="MoveRight" icon-pos="right" class="gap-10 lg:px-6" />
      </div>
    </div>

    <div>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <RouterLink v-for="post in posts" :key="post.id" to="/" class="group">
          <div class="mb-4 h-44 overflow-hidden rounded-lg">
            <img
              src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
              alt=""
              class="h-full w-full object-cover"
            />
          </div>

          <div>
            <div class="mb-8">
              <h6 class="mb-2 truncate text-lg font-medium text-brand-neutral-500">
                {{ post.title }}
              </h6>
              <p class="mb-1 text-brand-neutral-400">{{ post.description }}</p>
              <RouterLink to="/" class="font-medium text-brand-primary-500 group-hover:underline">
                Continuar lendo
              </RouterLink>
            </div>

            <div>
              <div class="flex items-center gap-4">
                <img src="https://i.pravatar.cc/50" alt="" class="rounded-full" />
                <div class="flex flex-col">
                  <span class="font-semibold text-brand-neutral-500">Ana Souza</span>
                  <span class="text-regular text-sm text-brand-neutral-200">2 dias atrás</span>
                </div>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
