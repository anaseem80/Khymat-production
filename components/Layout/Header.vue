<template>
  <header class="md:bg-primary grid md:grid-cols-3 px-6 md:px-12 py-4 items-center" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="flex gap-4 items-center">

      <div class="border-0 shrink-0 pr-1 md:pr-5 hidden md:block">
        <a-skeleton-button class="category-skelton" active v-if="mainStore.loading_settings"/>
        <a class="flex items-center gap-2 hovering-option" v-else :href="`tel:${mainStore.settings.company_phone}`">
          <img
          src="~/assets/images/phone.svg"
          class="w-6 h-6"
          />
          <p class="text-white font-medium hidden md:block">{{ mainStore.settings.company_phone }}</p>
        </a>
      </div>
    </div>
    <div class="text-white text-sm leading-normal text-center hover:text-white hidden md:block">{{ $t("Follow Us") }} {{ $t("and get a chance to win 60% off") }}</div>
    <div class="md:hidden">
      <div class="flex justify-between items-center relative" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
        <LangSwitcher />
        <nuxt-link :to="localePath('/')">
          <!-- 100x120 -->
          <NuxtImg
            v-if="!mainStore.loading_settings"
            :src="mainStore.route + mainStore.settings['logo']"
            placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
            class="w-[80px] h-[88px] m-auto"
          />
        </nuxt-link>
        <div class="border-0 md:border-r-2 shrink-0 block md:hidden pr-1 md:pr-5">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" @click="mainStore.ToggleMenu()" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" class="w-6 h-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <nuxt-link :to="localePath('/search')">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>
    <div 
      class="gap-4 flex items-center"
      :class="{ 
        'ml-auto': locale == 'en',
        'mr-auto': locale == 'ar',
      }"
    >
      <div class="items-center gap-2 hidden md:flex text-white">
        {{ $t("Follow Us") }}  :
      </div>
      <div class="items-center gap-2 hidden md:flex">
        <a target="_blank" :href="mainStore.settings.github" class="hovering-option">
          <img
            src="~/assets/images/social/instagram.svg"
            placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
            class="w-4 h-4"
          />
        </a>
      </div>
      <div class="items-center gap-2 hidden md:flex">
        <a target="_blank" :href="mainStore.settings.facebook" class="hovering-option">
          <img
            src="~/assets/images/social/facebook.svg"
            placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
            class="w-4 h-4"
          />
        </a>
      </div>
      <div class="items-center gap-2 hidden md:flex">
        <a target="_blank" :href="mainStore.settings.twitter" class="hovering-option">
          <img
            src="~/assets/images/social/twitter.svg"
            placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
            class="w-4 h-4"
          />
        </a>
      </div>
    </div>
  </header>
  <Navbar></Navbar>
  <MainSideMenu></MainSideMenu>
</template>

<script setup>
  // Stores
  const mainStore = useMainStoreStore();
  mainStore.GET_SITE_SETTINGS();

  // i18n Package
  const { locale } = useI18n();
  const localePath = useLocalePath()

  onMounted(() => {
      var doc = document.documentElement;
      var w = window;
      var echeader = document.querySelector('.header');

      echeader.classList.remove('menu_fixed');
      var ecprevScroll = w.scrollY || doc.scrollTop;
      var eccurScroll;
      var ecdirection = 0;
      var ecprevDirection = 0;
      var ecscroll_top = window.scrollY + 1;

      var checkScroll = function() {
          eccurScroll = w.scrollY || doc.scrollTop;
          if (eccurScroll > ecprevScroll) { 
              //scrolled up
              ecdirection = 2;
          }
          else if (eccurScroll < ecprevScroll) { 
              //scrolled down
              ecdirection = 1;
          }

          if (ecdirection !== ecprevDirection) {
              toggleHeader(ecdirection, eccurScroll);
          }

          ecprevScroll = eccurScroll;
      };

      var toggleHeader = function(ecdirection, eccurScroll) {                   
          if (ecdirection === 2 && eccurScroll > 52) { 
              ecprevDirection = ecdirection;
              echeader.classList.add('menu_fixed_up');
              echeader.classList.remove('menu_fixed');
          }
          else if (ecdirection === 1) 
          {
              ecprevDirection = ecdirection;              
              echeader.classList.add('menu_fixed');  
              echeader.classList.remove('menu_fixed_up');            
          }
      };

      window.addEventListener('scroll', function() {
          var distance = document.querySelector('.sticky-header-next-sec').offsetTop;
          var windowScrollTop = window.scrollY;

          if (windowScrollTop <= distance + 50) {
              echeader.classList.remove('menu_fixed');
          }
          else {
              checkScroll();
          }
      });

      window.addEventListener('beforeunload', function() {
          window.removeEventListener('scroll', checkScroll);
      });

    // onBeforeUnmount(() => {
    //   window.removeEventListener('scroll', scrollHandler);
    // });
  });
</script>

<style>

</style>