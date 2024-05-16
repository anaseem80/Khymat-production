<template>
    <LayoutHeader />
    <div class="sticky-header-next-sec continer mx-auto rounded-xl  bg-white md:rounded-0 overflow-hidden md:overflow-visible ">
        <slot />
    </div>
    <div class="fixed flex flex-col gap-4 bottom-24 lg:bottom-6 left-6 z-10">
      <a :href="`https://wa.me/${mainStore.settings.company_phone}`" target="_blank" class="w-[70px] h-[70px] animate-bounce rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-1 transition-all">
        <img 
          src="~/assets/images/social/whatsapp.svg"
        />
      </a>
    </div>
    <LayoutFooter />
    <MainBottomBar />
    <UserMenuSmall />
</template>

<script setup>
  // Stores
  const mainStore = useMainStoreStore();
</script>

<style>
  .page-right-enter-active,
  .page-left-enter-active,
  .page-left-leave-active {
    transition: all 0.1s;
  }
  .page-right-enter-to,
  .page-left-enter-from,
  .page-left-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>