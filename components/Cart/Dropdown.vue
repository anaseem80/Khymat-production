<template>
<div class="flex items-center gap-3" v-if="CartStore.cart">
    <Menu v-if="useCookie('token').value" as="div" class="relative inline-block text-left">
      <div>
        <MenuButton 
          class="cursor-pointer relative w-[35px] h-[35px] p-2 text-center flex justify-center items-center"
          :dir="locale == 'ar' ? 'ltr' : 'rtl'"
        >
          <img
            src="~/assets/images/shopping-bag-02.svg"
            class="w-5 h-5 translate-x-[-.5px]"
            placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
          />
          <div class="text-[12px] text-primary rounded-full ml-1">
            {{ CartStore.cart.cart_items.length }}
          </div>
        </MenuButton>
      </div>

      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems 
        class="absolute bg-white shadow-lg w-[382px] rounded border mt-4 z-20" :dir="locale == 'ar' ? 'ltr' : 'rtl'"
        :class="{ 
          'left-0': locale == 'ar',
          'right-0': locale == 'en',
        }"
        >
          <div class="py-1">
          <div class="border-b py-4">
            <p class="px-6 text-xl font-medium">{{ $t("Shopping Cart") }} ({{ CartStore.cart.cart_items.length }})</p>
          </div>
          <div 
            class="relative"
            :class="{
              'border-b': CartStore.cart.cart_items.length > 0
            }"
          >
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <div class="w-full h-full absolute top-0 bg-neutral-950/[.08] grid place-content-center" v-if="ProductStore.loading_remove_product">
                  <loading-outlined class="text-2xl text-primary drop-shadow-lg"/>
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div>
                <div
                    v-if="CartStore.cart.cart_items.length == 0" 
                    class="col-12 text-center m-auto"
                  >
                    <img src="~/assets/images/gif/empty.gif" width="250" class="m-auto" alt="empty">
                    <h4 class="text-xl mb-4">{{ $t("!😓 Cart is empty") }}</h4>
                </div>
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div>
                <div class="items py-4 px-6 h-[250px] overflow-y-scroll" v-if="CartStore.cart.cart_items.length > 0" >
                  <div class="item grid grid-cols-7 items-center mb-4" v-for="item in CartStore.cart.cart_items">
                    <div>
                      <svg @click="RemoveProductFromCart(item.id)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500 transition ease-in">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <nuxt-link :to="localePath(`/product/${item.id}`)" class="grid grid-cols-3 col-span-6 gap-4" dir="rtl">
                      <div class="col-span-2 text-end">
                        <nuxt-link :to="localePath(`/product/${item.id}`)" class="hover:text-gray-700 transition-all ease-in"><p class="font-normal">{{ item.name.length >= 40 ? item.name.substr(0, 20) + '...' : item.name }}</p></nuxt-link>
                        <div class="flex gap-2 justify-end" v-if="item.attribute">
                            <p class="mb-0">{{item.attribute.color != null ? item.attribute.color.name_en : ""}}</p>
                            <p class="mb-0">{{item.attribute.size != null ? item.attribute.size.name_en : ""}}</p>
                        </div>
                        <p class="mb-1">
                          <span dir="rtl" class="text-gray-500">{{ item.quantity }} ×</span> <span class="text-primary font-medium">{{ item.price }} {{ $t("AED") }}</span>
                        </p>
                      </div>
                      <div class="col-span-1 border inline-block p-2 max-h-[80px] h-[80px]">
                        <img
                          :src="MainStore.route + item.image"
                          class="object-cover w-full h-full"
                        />
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <div class="py-4 px-6" v-if="CartStore.cart.cart_items.length > 0">
            <div class="flex justify-between" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
              <p>{{ $t("SubTotal") }}:</p>
              <p class="font-medium">{{ CartStore.SUB_TOTAL }} {{ $t("AED") }}</p>
            </div>
            <div class="mt-4 grid gap-3">
              <nuxt-link :to="localePath('/checkout')" class="btn">
                <span>{{ $t("Buy Now") }}</span> 
              </nuxt-link>
              <nuxt-link :to="localePath('/cart')" class="btn-outline">
                <span class="translate-y-[-3px]">{{ $t("View Cart") }}</span> 
              </nuxt-link>
            </div>
          </div>
          </div>
        </MenuItems>
      </transition>
    </Menu>
</div>
</template>

<script setup>
  // Imports
  import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

  // i18n Package
  const localePath = useLocalePath()
  const { locale } = useI18n();

  // Stores
  const CartStore = useMyCartStore();
  const MainStore = useMainStoreStore()
  const ProductStore = useProductStore()
  CartStore.GET_CART_DATA(locale.value)
  
  // Functions
  const RemoveProductFromCart = (id) =>{
    ProductStore.REMOVE_PRODUCT_FROM_CART(id)
  }

</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>