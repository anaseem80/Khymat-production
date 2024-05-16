<template>
  <MainBreadcrumb 
    :route="route.fullPath" 
    :name="'Check out'"
    title="Check out"
    description="Check all your categories to get what brand your needs"
  />
  <div class="px-6 lg:px-[133px] py-16" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <div v-if="CartStore.cart">
    <transition name="fade" mode="out-in">
      <div>
        <div
            v-if="CartStore.cart.cart_items.length == 0" 
            class="col-12 text-center m-auto"
          >
            <img src="~/assets/images/gif/empty.gif" width="250" class="m-auto" alt="empty">
            <h4 class="text-xl mb-4">{{ $t("!😓 Cart is empty") }}</h4>
            <NuxtLink 
              :to="localePath('/')"
              class="shrink-0 btn rounded-none text-white px-6 m-auto inline-block"
            >
                <span>{{ $t("Return to Store") }}</span>
            </NuxtLink>
        </div>
      </div>
    </transition>
    </div>
    <transition name="fade" mode="out-in">
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
    <div v-if="CartStore.cart && CartStore.cart.cart_items.length !== 0" class="flex flex-col xl:flex-row gap-8">
      <div class="w-full">
        <button class="btn h-8 px-3 py-1.5 rounded-lg justify-center items-center gap-3 flex" @click="hasClikedOutside = !hasClikedOutside">
          <span>{{ $t("Add Address") }}</span>
        </button>
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-100" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <div class="backdrop-blur-sm grid fixed inset-0 z-50 bg-gray-500 bg-opacity-50 p-3 overflow-y-scroll" v-if="hasClikedOutside" @click="clickedOutside($event.target)">
            <AddressesInsert :modal="true" />
          </div>
        </transition>
        <AddressesInsert v-if="addressStore.addresses.length == 0"></AddressesInsert>
        <div class="rounded-lg mt-6" v-else>
          <p class="border-b px-6 py-4 mb-4 font-bold">{{ $t("Addresses") }}</p>
            <a-radio-group 
              v-model:value="user_address_id" 
              class="py-3 px-6 flex flex-col gap-6"
              @change="OnAddressChange(user_address_id)"
            >
              <div
                class="flex-col justify-between items-center gap-2 flex relative border-b pb-8" 
                v-for="(address, index) in addressStore.addresses"
              >
                <div class="flex justify-between w-full">
                    <div class="text-black text-lg font-medium leading-normal flex-col-reverse md:flex-row flex gap-2">
                      {{ address.address_1 }}
                      <div class="w-6 h-6 bg-primary text-white text-center rounded">{{ index+1 }}</div>
                    </div>
                    <a-radio 
                    :value="address.id" 
                    class="inline-block"
                    ></a-radio>
                </div>
              <div class="w-full text-right text-neutral-400 text-base font-medium leading-normal">
                {{ address.name }} ,
                {{ address.country }} ,
                {{ address.email }} ,
                {{ address.phone }} ,
                {{ address.state }} ,
                {{ address.city }}
              </div>
              </div>
            </a-radio-group>
        </div>
        <div class="text-zinc-900 text-xl font-medium leading-normal mt-6">{{ $t("Payment with") }}</div>
        <div class="rounded-lg mt-6" v-if="CartStore.cart">
            <MazRadioButtons 
              v-slot="{ option, selected }"
              v-model="payment_method"
              :options="paymentMethods"
              class="flex md:!flex-row !flex-col"
              selector
              equal-size
              block
              @click="OnPaymentChange"
            >
              <div
                class="flex-col justify-center items-start gap-2 flex relative p-4" 
              >
                <div class="flex gap-3 flex-wrap">
                  <h1 class="text-center text-lg font-bold leading-tight">
                    {{ option.label }}
                  </h1>
                  <div class="flex gap-3" v-if="option.value == 'stripe'">
                    <img 
                      src="~/assets/images/payments/Visa.svg"
                    />
                    <img 
                      src="~/assets/images/payments/Mastercard.svg"
                    />
                  </div>
                  <div class="flex gap-3" v-if="option.value == 'cash_on_delivery' && CartStore.cart.cart_prices['user_cash_on_delivery'] == 1">
                    
                  </div>
                  <div class="flex gap-3" v-if="option.value == 'paypal'">
                    <img 
                      src="~/assets/images/payments/paypal.png"
                      width="25"
                      height="20"
                    />
                  </div>
                </div>
                <p 
                class="text-gray-400 text-sm font-normal font-['Montserrat'] leading-tight"
                :class="{ 'text-white': selected }"
                >{{ option.description }}
                </p>
              </div>
            </MazRadioButtons>
            <div class="border rounded-lg mt-6">
              <p class="border-b px-6 py-4 font-bold">{{ $t("Additional Information") }}</p>
                <div class="p-4">
                  <textarea v-model="description" :placeholder="$t(`You can add information for the shipping company`)" class="w-full p-4 pt-3 pb-[92px] bg-white rounded-sm border border-gray-200 justify-end items-center inline-flex outline-none focus:border-primary transition-all"></textarea>
                </div>
            </div>
            <button :disabled="!CartStore.taxApplied" class="btn w-full mt-12" @click="CreateOrder()">
              <span>{{ $t("Payment") }} <loading-outlined class="ms-3" v-if="CartStore.loading_order"/></span> 
            </button>
        </div>
      </div>
      <div class="md:min-w-[406px] w-full md:max-w-[406px] relative" v-if="CartStore.cart">
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-100" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <div class="w-full h-full absolute top-0 grid place-content-center text-xl right-0" v-if="CartStore.loading_tax">
              <loading-outlined class="text-primary drop-shadow-lg"/>
          </div>
        </transition>
        <h3 class="font-bold">{{ $t("Order Summary") }}</h3>
        <div class="item flex items-center my-4 relative" v-for="item in CartStore.cart.cart_items">
          <nuxt-link to="#" class="flex gap-6">
            <div class="shrink-0 w-16 h-16 max-w-16 max-h-16">
              <img
                :src="MainStore.route + item.image"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="text-start">
              <nuxt-link to="#" class="hover:text-gray-700 transition-all ease-in"><p class="font-normal">{{ item.name.length >= 40 ? item.name.substr(0, 20) + '...' : item.name }}</p></nuxt-link>
              <p class="mt-1 flex gap-4 text-sm">
                <span class="text-green-500 font-medium">{{ item.price }} {{ $t("AED") }}</span>
                <span dir="ltr" class="text-gray-500">{{ item.quantity }} x</span> 
              </p>
            </div>
          </nuxt-link>
          <div 
            class="w-6 absolute cursor-pointer"  
            @click="RemoveProductFromCart(item.id)"
            :class="{ 
              'left-0': locale == 'ar',
              'right-0': locale == 'en',
            }"
          >
            <div class="w-6 h-6 left-0 top-0 absolute rounded-lg grid place-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </div>
            <div class="w-6 h-6 left-0 top-0 absolute opacity-10 bg-red-600 hover:bg-red-300 transition-all rounded"></div>
          </div>
        </div>
        <CartTotal />
        <CartCoupon />
      </div>
    </div>
  </div>

</template>

<script setup>
  // i18n Package
  const { t } = useI18n();
  const { locale } = useI18n();
  const localePath = useLocalePath()
  const route = useRoute();

  // Stores
  const addressStore = useMyAddressStore();
  const CartStore = useMyCartStore();
  const ProductStore = useProductStore();
  const MainStore = useMainStoreStore()
  addressStore.GET_ADDRESSESS()
  // Stores

  // Variables
  const user_address_id = ref(null)
  const branch_id = ref(null)
  const isBranchFlag = ref(false)
  const hasClikedOutside = ref(false)
  const payment_method = ref('cash_on_delivery')
  const description = ref(null)
  const paymentMethods = [
    {
      label: t('Cash'),
      value: 'cash_on_delivery',
      image: false,
      description:
      t('Pay in your home'),
    },
    {
      label: t('Paypal'),
      value: 'paypal',
      image: true,
      description:t('Pay with paypal now.'),
    },
    {
      label: t('Visa / Master Card'),
      value: 'stripe',
      image: true,
      description:t('You can use all credit card service. We can accept Visa and Master Card.'),
    },
  ]
  // Variables

  // Functions
  const RemoveProductFromCart = (id) =>{
    ProductStore.REMOVE_PRODUCT_FROM_CART(id)
  }
  const clickedOutside = (target) => {
    if (target.classList.contains('close-modal') || target.classList.contains('backdrop-blur-sm')) {
      hasClikedOutside.value = !hasClikedOutside.value
    }
  }
  const OnAddressChange = (address_id) =>{
    CartStore.APPLY_TAX(address_id)
  }
  const OnPaymentChange = () =>{
  }
  const CreateOrder = () =>{
    if(!CartStore.taxApplied){
      message.error("Please select the address first")
    }else if(CartStore.cart.cart_prices.user_cash_on_delivery === 0){
      message.error("Please select another payment method")
    }else{
      CartStore.ORDER_CREATE(
        user_address_id.value,
        payment_method.value,
        description.value,
        locale.value
      )
    }
  }
  // Functions

  

  // SEO
  useHead({
    title: locale.value === 'ar' ? `خيمات زمان - الدفع` : `Khymat - Checkout`,
    meta: [
      { name: 'description', content: 'Complete your purchase at Khymat. Securely enter your payment details and finalize your order.' },
      { name: 'keywords', content: 'checkout, payment, order, online shopping, Khymat' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: locale.value === 'ar' ? `خيمات زمان - الدفع` : `Khymat - Checkout` },
      { property: 'og:description', content: 'Complete your purchase at Khymat. Securely enter your payment details and finalize your order.' },
      { property: 'og:url', content: 'https://khaymatzaman.com/checkout' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
      { name: 'twitter:title', content: locale.value === 'ar' ? `خيمات زمان - الدفع` : `Khymat - Checkout` },
      { name: 'twitter:description', content: 'Complete your purchase at Khymat. Securely enter your payment details and finalize your order.' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  })

  onMounted(() => {
    // Check if user logged in or not
    if(!useCookie('token').value){
      navigateTo(localePath('/login'))
    }
  })
</script>

<style>
    
</style>