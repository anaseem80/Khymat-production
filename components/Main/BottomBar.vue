<template>
  <div class="z-30 bg-white fixed bottom-0 bottom-bar w-full block md:hidden shadow-bottom-bar max-h-[82px]">
    <ul class="flex flex-row gap-4 items-end justify-between relative z-2 p-4 pt-5" dir="ltr">
      <li class="shrink-0">
        <nuxt-link :to="localePath(`/profile`)" class="flex flex-col gap-1">
         <img 
            src="~/assets/images/user.svg"
            class="m-auto w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
          />
          <p class="text-gray-500 text-xs md:text-sm">{{ $t("Profile") }}</p>
        </nuxt-link>
      </li>
      <li class="shrink-0">
        <nuxt-link :to="localePath(`/wishlist`)" class="flex flex-col gap-1">
          <img 
            src="~/assets/images/heart-sm.svg"
            class="m-auto w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
          />
          <p class="text-gray-500 text-xs md:text-sm">{{ $t("Wishlist") }}</p>
        </nuxt-link>
      </li>
      <li class="shrink-0">
        <nuxt-link :to="localePath(`/cart`)">
          <div class="-top-6 right-0 left-0 m-auto cursor-pointer border-4 absolute w-[60px] h-[60px] bg-primary rounded-full p-2 text-center flex justify-center items-center">
            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3335 7.49984V4.99984C13.3335 3.15889 11.8411 1.6665 10.0001 1.6665C8.1592 1.6665 6.66681 3.15889 6.66681 4.99984V7.49984M2.99348 8.62648L2.49348 13.9598C2.35132 15.4762 2.28023 16.2344 2.53185 16.8201C2.75289 17.3345 3.14024 17.7599 3.63183 18.028C4.19142 18.3332 4.95295 18.3332 6.47602 18.3332H13.5243C15.0473 18.3332 15.8089 18.3332 16.3685 18.028C16.86 17.7599 17.2474 17.3345 17.4684 16.8201C17.7201 16.2344 17.649 15.4762 17.5068 13.9598L17.0068 8.62648C16.8868 7.34596 16.8267 6.7057 16.5388 6.22164C16.2851 5.79532 15.9104 5.4541 15.4623 5.24137C14.9535 4.99984 14.3104 4.99984 13.0243 4.99984L6.97602 4.99984C5.68989 4.99984 5.04682 4.99984 4.53799 5.24137C4.08987 5.4541 3.71515 5.79532 3.46153 6.22164C3.17355 6.7057 3.11353 7.34596 2.99348 8.62648Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div v-if="CartStore.cart">
              <div class="absolute w-5 h-5 leading-4 text-[12px] text-primary top-[-5px] right-[-10px] bg-white border-2 rounded-full">{{ CartStore.cart.cart_items.length }}</div>
            </div>
          </div>
          <p class="text-gray-500 text-xs md:text-sm">{{ $t("Cart") }}</p>
        </nuxt-link>
      </li>
      <li class="shrink-0">
        <nuxt-link :to="localePath(`/categories`)" class="flex flex-col gap-1">
          <img 
            src="~/assets/images/chat.svg"
            class="m-auto w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
          />
          <p class="text-gray-500 text-xs md:text-sm">{{ $t("Categories") }}</p>
        </nuxt-link>
      </li>
      <li class="shrink-0">
        <nuxt-link :to="localePath(`/`)" class="flex flex-col gap-1">
          <img 
            src="~/assets/images/home.svg"
            class="m-auto w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
          />
          <p class="text-gray-500 text-xs md:text-sm">{{ $t("Home") }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
  // Stores
  const CartStore = useMyCartStore()

  // i18n Package
  const localePath = useLocalePath()
  const { locale } = useI18n();

</script>

<style scoped>
  .shadow-bottom-bar{
    box-shadow:
    0px -1px 1px 0px rgba(0, 0, 0, 0.1),
    0px -2px 2px 0px rgba(0, 0, 0, 0.09),
    0px -5px 3px 0px rgba(0, 0, 0, 0.05),
    0px -10px 4px 0px rgba(0, 0, 0, 0.01),
    0px -15px 4px 0px rgba(0, 0, 0, 0);
  }
  .shadow-svg {
    box-shadow:
    inset 0 -1px 0px 0 rgba(0, 0, 0, 0.1),
    inset 0 -2px 0px 0 rgba(0, 0, 0, 0.09),
    inset 0 -5px 0px 0 rgba(0, 0, 0, 0.05),
    inset 0 -10px 0px 0 rgba(0, 0, 0, 0.01),
    inset 0 -15px 0px 0 rgba(0, 0, 0, 0);
  }
  /* .bottom-bar {
    background-image: url('~/public/images/bg-bottom-bar.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    width: 100%;
    height: 200px;
  } */
</style>