<template>
  <div
    class="mx-auto flex w-[100%] items-center justify-between rounded-xl border p-6 sm:w-max sm:justify-center sm:gap-16 sm:px-12"
  >
    <div class="flex flex-col items-center justify-center gap-2">
      <span class="text-4xl font-bold text-orange-500 sm:text-5xl">{{ countdown.days }}</span>
      <span class="font-medium text-brand-neutral-500">{{ days }}</span>
    </div>

    <div class="flex flex-col items-center justify-center gap-2">
      <span class="text-4xl font-bold text-orange-500 sm:text-5xl">{{ countdown.hours }}</span>
      <span class="font-medium text-brand-neutral-500">{{ hours }}</span>
    </div>

    <div class="flex flex-col items-center justify-center gap-2">
      <span class="text-4xl font-bold text-orange-500 sm:text-5xl">{{ countdown.minutes }}</span>
      <span class="font-medium text-brand-neutral-500">{{ minutes }}</span>
    </div>

    <div class="flex flex-col items-center justify-center gap-2">
      <span class="text-4xl font-bold text-orange-500 sm:text-5xl">{{ countdown.seconds }}</span>
      <span class="font-medium text-brand-neutral-500">{{ seconds }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";

const countdownId = ref(null);
const countdown = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const days = computed(() => (countdown.days >= 1 || countdown.days === 0 ? "Dias" : "Dia"));
const hours = computed(() => (countdown.hours > 1 || countdown.hours === 0 ? "Horas" : "Hora"));
const minutes = computed(() =>
  countdown.minutes > 1 || countdown.minutes === 0 ? "Minutos" : "Minuto",
);
const seconds = computed(() =>
  countdown.seconds > 1 || countdown.seconds === 0 ? "Segundos" : "Segundo",
);

const endDate = new Date("2024-08-18 19:00:00"); // from database

const updateCountdown = () => {
  const currentDateTimestamp = new Date().getTime();
  const endDateTimestamp = endDate.getTime();
  const timeleft = endDateTimestamp - currentDateTimestamp;

  if (timeleft <= 0) {
    return;
  }

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  const formattedDays = days >= 10 || days === 0 ? days : `0${days}`;
  const formattedHours = hours >= 10 || hours === 0 ? hours : `0${hours}`;
  const formattedMinutes = minutes >= 10 || minutes === 0 ? minutes : `0${minutes}`;
  const formattedSeconds = seconds >= 10 || seconds === 0 ? seconds : `0${seconds}`;

  countdown.days = formattedDays;
  countdown.hours = formattedHours;
  countdown.minutes = formattedMinutes;
  countdown.seconds = formattedSeconds;

  const countdownArray = Object.values(countdown);
  const isTimeFinished = countdownArray.every((item) => item === 0);

  if (isTimeFinished) {
    clearInterval(countdownId.value);
    return;
  }
};

onMounted(() => {
  countdownId.value = setInterval(updateCountdown, 1000);
});
</script>
