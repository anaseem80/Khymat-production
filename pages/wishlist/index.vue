<template>
  <MainBreadcrumb 
    :route="route.fullPath" 
    :name="'Wishlist'"
    title="Wishlist"
    description="Check all your categories to get what brand your needs"
  />
  <div class="p-6 lg:px-[133px] md:py-16" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <div
        v-if="WishListStore.wishlist.length == 0" 
        class="col-12 text-center m-auto"
      >
        <img src="~/assets/images/gif/empty.gif" width="250" class="m-auto" alt="empty">
        <h4 class="text-xl mb-4">{{ $t("Wishlist is empty! 😓") }}</h4>
        <NuxtLink 
        :to="localePath('/')"
        class="shrink-0 btn rounded-none text-white px-6 m-auto inline-block"
        >
        <span>{{ $t("Home") }}</span>
      </NuxtLink>
    </div>
    <div class="border rounded-lg" v-else>
      <h5 class="text-xl font-bold px-6 my-6">{{ $t("Wishlist") }}</h5>
      <table class="hidden md:table w-full">
      <thead class="">
        <tr>
          <th class="pl-6">{{ $t("Products") }}</th>
          <th>{{ $t("Price") }}</th>
          <th>{{ $t("Stock") }}</th>
          <th>{{ $t("Actions") }}</th>
        </tr>
      </thead>
      <tbody class="relative">
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-100" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <div class="w-full h-full absolute top-0 bg-neutral-950/[.08] grid place-content-center right-0" v-if="WishListStore.loading_remove_item">
              <loading-outlined class="text-primary drop-shadow-lg"/>
          </div>
        </transition>
        <tr class="relative" v-for="item in WishListStore.wishlist">
          <td class="w-3/6 pl-3">
            <div class="flex gap-4 items-center ml-2">
              <div class="flex gap-6 items-center">
                <div class="w-[72px] h-[72px] max-w-[72px] max-h-[72px]">
                <img 
                  :src="MainStore.route + item.image"
                  class="object-cover"
                />
              </div>
              <p class="w-full">{{ item.name }}</p>
              </div>
            </div>
          </td>
          <td>
            {{ item.price }} {{ $t("AED") }}
          </td>
          <td>
            <p 
            class="text-green-600 text-sm font-bold uppercase leading-[48px] tracking-tight"
            :class="{
              'text-green-600' : item.quantity !== 0,
              'text-red-600': item.quantity == 0
            }"
            >
            {{ item.quantity == 0 ? $t('Out of stock') : $t('Available') }}
            </p>
          </td>
          <td class="flex items-center gap-3">
            <!-- @click="onAddToCart(product.id)" :disabled="isLoading(`Add_Product_To_Cart${product.id}`)"  -->
            <!-- v-if="isLoading(`Add_Product_To_Cart${product.id}`)" -->
            <button @click="onAddToCart(item.id)" :disabled="isLoading(`Add_Product_To_Cart${item.id}`)" class="shrink-0 btn rounded-none text-white px-6 add-to-cart">
              <p><loading-outlined class="ml-3" v-if="isLoading(`Add_Product_To_Cart${item.id}`)"/></p>
              <span class="flex gap-2 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path class="stroke-white" d="M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4" stroke="#F57021" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {{ $t("Add to cart") }}
              </span> 
            </button>
            <svg @click="RemoveProductFromWishList(item)" class="cursor-pointer w-5 h-5 max-w-5 max-h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Regular/XCircle">
              <path id="Vector" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#929FA5" stroke-width="1.5" stroke-miterlimit="10"/>
              <path id="Vector_2" d="M15 9L9 15" stroke="#929FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_3" d="M15 15L9 9" stroke="#929FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </svg>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
    <div class="block md:hidden">
      <div class="items flex flex-col gap-4">
        <div class="border rounded-lg p-4 flex flex-col gap-3 relative overflow-hidden" v-for="item in WishListStore.wishlist">
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-100" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <div class="w-full h-full absolute top-0 bg-neutral-950/[.09] grid place-content-center right-0" v-if="ProductStore.loading_remove_product || ProductStore.loading_increase_decrease_product">
                <loading-outlined class="text-primary drop-shadow-lg"/>
            </div>
          </transition>
          <svg @click="RemoveProductFromWishList(item)" class="cursor-pointer w-5 h-5 max-w-5 max-h-5 mr-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Regular/XCircle">
            <path id="Vector" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#929FA5" stroke-width="1.5" stroke-miterlimit="10"/>
            <path id="Vector_2" d="M15 9L9 15" stroke="#929FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="Vector_3" d="M15 15L9 9" stroke="#929FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <div class="gap-3 flex justify-between flex-row-reverse mb-4">
            <p class="w-full">{{ item.name }}</p>
            <div class="w-[72px] h-[72px] max-w-[72px] max-h-[72px]">
              <img 
                :src="MainStore.route + item.image"
                class="object-cover"
              />
            </div>
          </div>
          <div class="flex justify-between flex-row-reverse items-center">
            <p 
            class="text-green-600 text-sm font-bold uppercase leading-[48px] tracking-tight"
            :class="{
              'text-green-600' : item.quantity !== 0,
              'text-red-600': item.quantity == 0
            }"
            >
            {{ item.quantity == 0 ? $t("Out of Stock") : $t("Available") }}
            </p>
            <span class="text-gray-500">{{ $t("Stock") }}</span>
          </div>
          <div class="flex justify-between flex-row-reverse items-center">
            <span class="text-gray-600">{{ item.price }} {{ $t("AED") }}</span>
            <span class="text-gray-500">{{ $t("Price") }}</span>
          </div>
          <button @click="onAddToCart(item.id)" :disabled="isLoading(`Add_Product_To_Cart${item.id}`)" class="shrink-0 btn text-white px-6 add-to-cart mt-3">
              <p><loading-outlined class="ml-3" v-if="isLoading(`Add_Product_To_Cart${item.id}`)"/></p>
              <span class="flex gap-2 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path class="stroke-white" d="M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4" stroke="#F57021" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {{ $t("Add to cart") }}
              </span> 
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // i18n Package
  const { locale } = useI18n();
  const localePath = useLocalePath()

  // Route
  const route = useRoute();

  // Stores
  const CartStore = useMyCartStore();
  const ProductStore = useProductStore();
  const MainStore = useMainStoreStore()
  const WishListStore = useMyWishlistStore()
  CartStore.GET_CART_DATA(locale.value)

  // Functions
  const onAddToCart = (id) =>{
    ProductStore.ADD_PRODUCT_TO_CART(id, 1, null, locale.value)
  }
  const RemoveProductFromWishList = (id) =>{
    WishListStore.DELETE_FROM_WISHLIST(id)
  }
const isLoading = (action) =>{
    if(ProductStore.loading_add_product && ProductStore.loading_add_product.name == action){
        return ProductStore.loading_add_product.status
    }
    return false
  }

  onMounted(() => {
    if(!useCookie('token').value){
      navigateTo(localePath('/login'))
    }
  })
  
  useHead({
    title: locale.value == 'ar' ? "خيمات زمان - المفضله" : "Khymat - Wishlist",
    meta: [
      { name: 'description', content: 'View and manage your saved products on your Khymat wishlist. Easily add them to your cart for a faster checkout process.' }, // Replace with a more specific description highlighting wishlist benefits
      { name: 'keywords', content: 'wishlist, saved items, Khymat' }, // Adjust keywords related to wishlist functionality
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - المفضله" : "Khymat - Wishlist" },
      { property: 'og:description', content: 'View and manage your saved products on your Khymat wishlist. Easily add them to your cart for a faster checkout process.' }, // Replace with the same description from 'name: 'description''
      { property: 'og:url', content: 'https://khaymatzaman.com/wishlist' }, // Replace with your actual wishlist page URL
      { property: 'og:type', content: 'website' }, // Use 'website' for general pages
      { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
      { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - المفضله" : "Khymat - Wishlist" },
      { name: 'twitter:description', content: 'View and manage your saved products on your Khymat wishlist. Easily add them to your cart for a faster checkout process.' }, // Replace with the same description from 'name: 'description''
      { name: 'twitter:card', content: 'summary' }, // Use 'summary' for general pages
    ],
  })
</script>

<style>

</style>