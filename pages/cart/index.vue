<template>
  <MainBreadcrumb 
    :route="route.fullPath" 
    :name="'Shopping Cart'"
    title="Shopping Cart"
    description="Check all your categories to get what brand your needs"
  />
  <div class="px-6 lg:px-[133px] py-16" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <transition name="fade" mode="out-in">
      <div v-if="CartStore.cart">
        <!-- No cart data section -->
        <div
            v-if="CartStore.cart.cart_items.length == 0" 
            class="col-12 text-center m-auto"
          >
            <img src="~/assets/images/gif/empty.gif" width="250" class="m-auto" alt="empty">
            <h4 class="text-xl mb-4">{{ $t("!😓 Cart is empty") }}</h4>
            <NuxtLink 
              :to="localePath(`/`)"
              class="shrink-0 btn rounded-none text-white px-6 m-auto inline-block"
            >
                <span>{{ $t("Return to Store") }}</span>
            </NuxtLink>
        </div>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <!-- User needs to login -->
      <div v-if="!useCookie('token').value">
        <div
            class="col-12 text-center m-auto"
          >
            <NuxtLink 
              :to="localePath(`/login`)"
              class="shrink-0 btn rounded-none text-white px-6 m-auto inline-block"
            >
                <span>{{ $t("Login") }}</span>
            </NuxtLink>
        </div>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="CartStore.cart">
        <!-- Cart Section -->
        <div class="grid xl:grid-cols-3 pb-16 gap-8 items-start" v-if="CartStore.cart.cart_items.length > 0" >
          <div class="block md:hidden">
            <div class="items flex flex-col gap-4">
              <div class="border rounded-lg p-4 flex flex-col gap-3 relative overflow-hidden" v-for="item in CartStore.cart.cart_items">
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-100" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <div class="w-full h-full absolute top-0 bg-neutral-950/[.09] grid place-content-center right-0" v-if="ProductStore.loading_remove_product || ProductStore.loading_increase_decrease_product">
                      <loading-outlined class="text-primary drop-shadow-lg"/>
                  </div>
                </transition>
                <svg @click="RemoveProductFromCart(item.id)" class="cursor-pointer w-5 h-5 max-w-5 max-h-5 mr-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <div class="items-center flex justify-between flex-wrap gap-4 outline-none bg-transparent border border-gray-200 text-gray-900 rounded-lg transition px-2 py-1">
                      <span class="text-primary cursor-pointer" @click="ProductQuantity('-',item.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M4 12H20" class="stroke-primary" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </span>
                      <span class="font-semibold text-neutral-500">{{ item.quantity }}</span>
                      <span class="text-primary cursor-pointer" @click="ProductQuantity('+',item.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M4 12H20M12 4V20" class="stroke-primary" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </span>
                  </div>
                  <span class="text-gray-500">{{ $t("Quantity") }}</span>
                </div>
                <div class="flex justify-between flex-row-reverse items-center"  v-if="item.attribute">
                  <span class="text-gray-600">
                    {{item.attribute.color != null ? item.attribute.color.name_en + ' - ' : ""}}
                    {{item.attribute.size != null ? item.attribute.size.name_en : ""}}
                  </span>
                  <span class="text-gray-500">{{ $t("Colors") }} - {{ $t("Size") }}</span>
                </div>
                <div class="flex justify-between flex-row-reverse items-center">
                  <span class="text-gray-600">{{ item.price }} {{ $t("AED") }}</span>
                  <span class="text-gray-500">{{ $t("Price") }}</span>
                </div>
                <div class="flex justify-between flex-row-reverse items-center">
                  <span class="text-gray-600">{{ item.price * item.quantity }} {{ $t("AED") }}</span>
                  <span class="text-gray-500">{{ $t("SubTotal") }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-2 border rounded-lg hidden md:block">
            <table class="hidden md:table w-full">
              <thead class="">
                <tr>
                  <th class="pr-6">{{ $t("Products") }}</th>
                  <th>{{ $t("Price") }}</th>
                  <th>{{ $t("Quantity") }}</th>
                  <th>{{ $t("SubTotal") }}</th>
                </tr>
              </thead>
              <tbody class="relative">
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-100" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <div class="w-full h-full absolute top-0 bg-neutral-950/[.08] grid place-content-center right-0" v-if="ProductStore.loading_remove_product || ProductStore.loading_increase_decrease_product">
                      <loading-outlined class="text-primary drop-shadow-lg"/>
                  </div>
                </transition>
                <tr class="relative" v-for="item in CartStore.cart.cart_items">
                  <td class="w-3/6">
                    <div class="flex gap-4 items-center">
                      <svg @click="RemoveProductFromCart(item.id)" class="cursor-pointer w-5 h-5 max-w-5 max-h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Regular/XCircle">
                      <path id="Vector" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#929FA5" stroke-width="1.5" stroke-miterlimit="10"/>
                      <path id="Vector_2" d="M15 9L9 15" stroke="#929FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Vector_3" d="M15 15L9 9" stroke="#929FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      </svg>
                      <div class="flex gap-6 items-center">
                        <div class="w-[72px] hfull max-w-[72px] max-h-full">
                          <nuxt-link :to="localePath(`/product/${item.id}`)" class="hover:text-gray-700 transition-all ease-in">
                            <img 
                              :src="MainStore.route + item.image"
                              class="object-cover"
                            />
                          </nuxt-link>
                      </div>
                      <div>
                        <!-- <p class="w-full">{{ item.name }}</p> -->
                        <nuxt-link :to="localePath(`/product/${item.id}`)" class="hover:text-gray-700 transition-all ease-in"><p class="font-normal">{{ item.name.length >= 40 ? item.name.substr(0, 20) + '...' : item.name }}</p></nuxt-link>
                        <div class="flex gap-2" v-if="item.attribute">
                            <p class="mb-0">{{item.attribute.color != null ? item.attribute.color.name_en + ' - ' : ""}}</p>
                            <p class="mb-0">{{item.attribute.size != null ? item.attribute.size.name_en : ""}}</p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {{ item.price }} {{ $t("AED") }}
                  </td>
                  <td>
                    <div class="items-center flex justify-between flex-wrap gap-4 outline-none bg-transparent border border-gray-200 text-gray-900 rounded-lg transition w-[148px] px-5 py-3">
                      <span class="text-primary cursor-pointer" @click="ProductQuantity('-',item.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M4 12H20" class="stroke-primary" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </span>
                      <span class="font-semibold text-neutral-500">{{ item.quantity }}</span>
                      <span class="text-primary cursor-pointer" @click="ProductQuantity('+',item.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M4 12H20M12 4V20" class="stroke-primary" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </span>
                  </div>
                  </td>
                  <td>
                    {{ item.price * item.quantity }} {{ $t("AED") }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="p-6 border-t flex justify-between">
              <nuxt-link :to="localePath('/')" class="btn-outline px-8 flex gap-4">
                <span class="translate-y-[-3px]">{{ $t("Return to Store") }}</span> 
              </nuxt-link>
              <button @click="CartStore.CLEAR_CART()" class="btn-outline px-8 flex gap-4 w-48" :disabled="CartStore.clear_cart_loading">
                <loading-outlined v-if="CartStore.clear_cart_loading" />
                <span class="translate-y-[-3px]">{{ $t("Clear Cart") }}</span> 
              </button>
            </div>
          </div>
          <div>
          <div class="flex flex-col gap-8">
            <div class="px-6 py-5 bg-white rounded-lg border flex-col justify-center items-center flex md:order-1">
              <div class="text-start w-full mb-2">
                  <div class="text-zinc-900 text-sm">{{ $t("Cart Total") }}</div>
              </div>
              <CartTotal />
              <nuxt-link :to="localePath('/checkout')" class="btn w-full">
                <span class="translate-y-[-1px]">{{ $t("Payment") }}</span> 
              </nuxt-link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
  // i18n Package
  const localePath = useLocalePath()
  const { locale } = useI18n();

  const route = useRoute();

  // Stores
  const CartStore = useMyCartStore();
  const ProductStore = useProductStore();
  const MainStore = useMainStoreStore()
  CartStore.GET_CART_DATA(locale.value)

  // Main functions
  const ProductQuantity = (sign, id) => {
    ProductStore.Product_Increase_Decrease_From_Cart({ id: id, type: sign })
  }
  const RemoveProductFromCart = (id) =>{
    ProductStore.REMOVE_PRODUCT_FROM_CART(id)
  }

  // SEO
  useHead({
    title: locale.value === 'ar' ? `السلة - تسجيل دخول` : `Khymat - Cart`,
    meta: [
      { name: 'description', content: 'Your shopping cart at Khymat. Review and proceed to checkout.' },
      { name: 'keywords', content: 'cart, checkout, shopping, online shopping, Khymat' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: locale.value === 'ar' ? `السلة - تسجيل دخول` : `Khymat - Cart` },
      { property: 'og:description', content: 'Your shopping cart at Khymat. Review and proceed to checkout.' },
      { property: 'og:url', content: 'https://khaymatzaman.com/cart' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
      { name: 'twitter:title', content: locale.value === 'ar' ? `السلة - تسجيل دخول` : `Khymat - Cart` },
      { name: 'twitter:description', content: 'Your shopping cart at Khymat. Review and proceed to checkout.' },
      { property: 'twitter:site', content: '@khaymatzaman' },
    ],
  })

  onMounted(() => {
    if(!useCookie('token').value){
      navigateTo(localePath('/login'))
    }
  })
</script>

<style scoped>

</style>