<template>
  <div :dir="locale == 'ar' ? 'rtl' : 'ltr'" class="flex flex-col md:flex-row gap-10 p-6 lg:px-[133px] md:py-16 items-center mb-6 bg-stone-50 justify-end md:justify-between">
      <div class="flex flex-col gap-4">
        <h1 class="text-gray-900 text-xl md:text-3xl font-medium uppercase leading-10 tracking-tight">{{ $t(title) }}</h1>
        <p class="text-gray-400 md:text-base font-normal leading-snug">{{ $t(description) }}</p>
      </div>
      <div class="flex md:flex-row gap-3 flex-wrap items-center">
        <NuxtLink :to="localePath(route)" class="text-neutral-400 font-medium text-sm md:text-base">{{ $t(name) }}</NuxtLink>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 md:w-4 md:h-4">
            <path stroke-linecap="round" class="text-neutral-400" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <NuxtLink :to="localePath('/')" class="flex gap-3">
            <p class="text-neutral-400 font-medium text-sm md:text-base">{{ $t("Home") }}</p>
        </NuxtLink>
      </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps(['route', 'name', 'title', 'description'])

  // i18n Package
  const localePath = useLocalePath()
  const { locale } = useI18n();
</script>

<style>

</style>