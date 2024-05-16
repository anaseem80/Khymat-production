<template>
<div class="w-full md:w-[240px] md:min-w-[240px] bg-white rounded-[10px] justify-start items-start gap-2.5 md:inline-flex tabs">
  <div class="flex-col justify-center items-start gap-2 flex">
    <NuxtLink v-if="useCookie('token').value" :to="localePath(`/profile`)" class="text-zinc-600 text-base hover:bg-primary w-full pl-2 pr-6 py-1 hover:text-white transition-all font-medium">{{ $t("Profile") }}</NuxtLink>
    <NuxtLink v-if="useCookie('token').value" :to="localePath(`/profile/orders`)" class="text-zinc-600 text-base hover:bg-primary w-full pl-2 pr-6 py-1 hover:text-white transition-all font-medium">{{ $t("Order List") }}</NuxtLink>
    <NuxtLink v-if="useCookie('token').value" :to="localePath(`/profile/wallet`)" class="text-zinc-600 text-base hover:bg-primary w-full pl-2 pr-6 py-1 hover:text-white transition-all font-medium">{{ $t("My Wallet") }}</NuxtLink>
    <button v-if="useCookie('token').value" @click="logout()" class="text-red-500 text-base hover:bg-primary w-full pl-2 text-start pr-6 py-1 hover:text-white transition-all font-medium">{{ $t("Logout") }}</button>
  </div>
</div>
</template>

<script lang="ts" setup>
  // i18n Package
  const localePath = useLocalePath()

  // Stores
  const store = useLogoutStore()

  // Functions
  const logout = () =>{
      store.LOGOUT()
  }
</script>

<style>
.tabs .router-link-active{
  @apply text-white font-semibold bg-primary
}
</style>