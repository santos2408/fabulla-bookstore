<template>
  <div class="mt-8 md:mt-16">
    <div
      class="bg-image absolute left-0 top-0 -z-10 h-[380px] w-full md:h-[600px]"
      :style="{ backgroundImage: `url(${getImageUrl('avatar.png')})` }"
    ></div>

    <div class="px-4 lg:px-0">
      <div class="flex flex-col items-center gap-8 lg:justify-center">
        <img
          :src="getImageUrl('avatar-logo.svg')"
          alt=""
          class="max-h-[160px] w-[500px] max-w-60 sm:max-w-full"
        />

        <div class="flex gap-2">
          <button
            type="button"
            class="brand-gradient flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white"
          >
            <icon-play />
            <span>Trailer</span>
          </button>
          <button
            type="button"
            class="flex gap-2 rounded-xl bg-[#28262D] px-6 py-3 text-base font-semibold text-white"
          >
            <BookmarkCheck size="22" />
            <span>Favoritar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BookmarkCheck } from "lucide-vue-next";
import iconPlay from "@/components/icons/iconPlay.vue";
import { getImageUrl } from "@/utils/getImageUrl";
</script>

<style scoped>
.bg-image {
  background-image: url("../../../../assets/images/avatar.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
