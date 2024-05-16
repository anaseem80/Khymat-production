<template>
    <span 
      class="absolute"
      :class="{ 
        'left-0': locale == 'ar',
        'right-0': locale == 'en',
      }"
    >
      <svg @click="mainStore.Verfiy_Modal('close')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-400 hover:text-red-600 w-6 h-6 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </span>
    <img
      src="~/assets/images/logo/logo.png"
      class="w-[80px] h-[100px] min-w-[80px] min-h-[100px] mb-8"
      :class="{ 
        'ml-auto': locale == 'ar',
        'mr-auto': locale == 'en',
      }"
    />
</template>

<script lang="ts" setup>
  // Stores
  const mainStore = useMainStoreStore();

  // i18n Package
  const { locale } = useI18n();
</script>

<style>

</style>