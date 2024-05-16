<template>
  <nav 
    class="hidden md:flex justify-between px-6 lg:px-[133px] py-6 lg:pt-6 bg-primary md:bg-white header items-center shadow-sm"
    :dir="locale == 'ar' ? 'rtl' : 'ltr'"
  >
    <div class="gap-6">
        <div class="hidden md:flex justify-center md:justify-start order-1">
          <nuxt-link :to="localePath('/')">
            <!-- 100x120 -->
            <NuxtImg
              v-if="!mainStore.loading_settings"
              :src="mainStore.route + mainStore.settings['logo']"
              class="w-[49px] h-[53px] min-w-[49px] min-h-[53px]"
              placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
            />
            <a-skeleton-button class="category-skelton" active v-if="mainStore.loading_settings"/>
          </nuxt-link>
        </div>
    </div>
    <div>
      <MainCategories></MainCategories>
    </div>
    <div class="hidden gap-2 md:flex md:gap-3 text-primary font-bold justify-end">
      <div class="flex gap-2 items-center">
        <LangSwitcher />
        <div class="flex items-center gap-3" v-if="!useCookie('token').value">
          <img 
            src="~/assets/images/common/user.svg"
            class="w-3 h-3"
          />
          <NuxtLink 
            :to="localePath('/login')"
            class="hovering-option after:bg-primary"
          >{{ $t("Login") }}</NuxtLink>
        </div>
      </div>
      <div>
        <NuxtLink :to="localePath('/search')" class="cursor-pointer relative w-[42px] h-[42px] p-2 text-center flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </NuxtLink>
      </div>
      <div></div>
      <CartDropdown />
      <div v-if="useCookie('token').value">
        <NuxtLink :to="localePath('/wishlist')" class="cursor-pointer relative w-[42px] h-[42px] p-2 text-center flex justify-center items-center" :dir="locale == 'ar' ? 'ltr' : 'rtl'">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <div class="text-[12px] text-primary rounded-full ms-1">
            {{ WishListStore.wishlist.length }}
          </div>
        </NuxtLink>
      </div>
      <UserDropdown />
    </div>
  </nav>
</template>

<script lang="ts" setup>
  // i18n Package
  const { locale } = useI18n();
  const localePath = useLocalePath()

  // Stores
  const mainStore = useMainStoreStore();
  const WishListStore = useMyWishlistStore()
</script>

<style>

</style>