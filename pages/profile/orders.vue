<template>
  <ProfileBreadcrumb />
  <div class="px-6 lg:px-[133px] py-16 flex flex-col md:flex-row gap-8" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <ProfileTabs />
    <div class="w-full">
      <h4 class="text-zinc-900 text-xl font-semibold leading-[30px] mb-3">{{ t("Order List") }}</h4>
      <div class="relative overflow-x-scroll md:overflow-visible">
          <ul class="flex justify-start gap-5 border-b border-gray-100 mt-6 w-[700px] md:w-full">
              <li 
                  v-for="(tab, index) in tabs"
                  class="text-sm font-bold leading-[21px] inline-block pb-3 cursor-pointer tab-item transition-all"
                  @click="activateTab(tab.title, index)"
                  :class="{ 
                      'text-primary opacity-100': activeTab == tab.title,
                      'text-zinc-600 opacity-25': activeTab != tab.title,
                  }"
              >
                  {{ tab.title }}
              </li>
          </ul>
          <div 
              v-if="activeTab !== null"
              class="border-b border-primary absolute -bottom-0 transition-all ease-in-out"
              :style="{ 
                  left: `${tabPosition}px`,
                  width: `${tabWidth}px`
              }"
          ></div>
      </div>
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-100" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <div class="mt-8 flex flex-col gap-8" v-if="!MyOrdersStore.loading_orders">
            <div v-for="order in MyOrdersStore.filtered_orderd">
                <div class="flex justify-between mb-8">
                    <div>
                        <span class="text-zinc-600 text-xl font-semibold leading-[30px]">
                            {{ t("Order ID") }} :
                        </span>
                        <span class="text-zinc-900 text-xl font-semibold leading-[30px]"> #{{order['id']}}</span>
                    </div>
                    <div>
                        <div class="h-8 px-4 py-1.5 bg-neutral-100 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                            <div class="text-zinc-900 text-sm font-medium font-['Plus Jakarta Sans'] leading-tight">{{ $t(order['status']) }}</div>
                        </div>
                    </div>
                </div>
                <div class="w-full justify-between items-center inline-flex flex-wrap gap-6">
                    <div class="flex-col justify-start items-start gap-2 inline-flex">
                        <div class="justify-start items-start gap-3 flex flex-col md:flex-row">
                            <div class="flex gap-4">
                                <div v-for="(image, index) in order['images_product']">
                                    <img class="h-[150px] rounded-lg" :src="MainStore.route + order['images_product'][index]" />
                                </div>
                            </div>
                        <div class="flex-col justify-between items-start inline-flex">
                            <div class="h-[50px] flex-col justify-start items-start gap-[5px] flex">
                            <div class=" text-zinc-900 text-base font-semibold leading-normal">
                                <div v-for="(name, index) in order['names_product']">
                                    <p>
                                        {{ name }}
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div class="self-stretch justify-start items-center gap-[55px] inline-flex">
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="justify-start items-center gap-9 flex">
                        <div class="px-4 py-2 rounded-[10px] border border-gray-200 justify-start items-center gap-1 flex">
                        <div class="text-center text-zinc-900 text-base font-semibold leading-snug">{{ order.product_count }}</div>
                        <div class="w-5 h-5 justify-center items-center flex">
                            x
                        </div>
                        <div class="text-zinc-900 text-base font-semibold leading-normal">{{ order.total.toFixed(2) }}</div>
                        </div>
                        <div class="text-zinc-900 text-base font-semibold leading-normal">{{ order.total.toFixed(2) }} {{ $t("AED") }}</div>
                    </div>
                </div>
            </div>
            <transition name="fade" mode="out-in">
                <div>
                    <div
                        v-if="MyOrdersStore.filtered_orderd.length == 0" 
                        class="col-12 text-center m-auto"
                    >
                        <h4 class="text-xl mb-4">{{ $t("No orders here") }}</h4>
                    </div>
                </div>
            </transition>
          </div>
          <p v-else>
            <a-skeleton-button class="progress mt-4" active block/>
        </p>
      </transition>
    </div>
  </div>
</template>

<script setup>
    // i18n Package
    const { locale } = useI18n();
    const localePath = useLocalePath()
    const { t } = useI18n();

    // Stores
    const MyOrdersStore = useMyOrdersStore();
    const MainStore = useMainStoreStore()
    MyOrdersStore.GET_ORDERS();
    
    // Vars
    const tabs = [
        {
            title: t('All'),
            key:'all'
        },
        {
            title: t('Waiting Payment'),
            key:'pending'
        },
        {
            title: t('Processing Payment'),
            key:'processing'
        },
        {
            title: t('in delivery'),
            key:'delivering'
        },
        {
            title: t('Complete Order'),
            key:'completed'
        },
        {
            title: t('Cancel'),
            key:'cancelled'
        },
        {
            title: t('Refund'),
            key:'refunded'
        },
    ]
    const activeTab = ref(0)
    const tabPosition = ref(0)
    const tabWidth = ref(0)

    // Functions
    const activateTab = (tabName, index) => {
      const tabElements = document.querySelectorAll('.tab-item');
      const tabElement = tabElements[index];
      if (tabElement) {
        const tabRect = tabElement.getBoundingClientRect();
        const containerRect = tabElement.parentElement.getBoundingClientRect();
        const tabPositionX = tabRect.left - containerRect.left;
    
        tabPosition.value = tabPositionX;
        activeTab.value = tabName;
        tabWidth.value = tabRect.width;
        MyOrdersStore.FILTER_ORDERS(tabs[index].key)
      }
    }

    // SEO
    useHead({
        title: locale.value == 'ar' ? "خيمات زمان - الطلبات" : "Khymat - Orders",
        meta: [
        { name: 'description', content: 'Track your orders, view order history, and manage your account details on Khymat.' }, // Replace with a more specific description relevant to your orders page functionality
        { name: 'keywords', content: 'orders, order tracking, account, Khymat' }, // Adjust keywords related to orders and account management
        { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - الطلبات" : "Khymat - Orders" },
        { property: 'og:description', content: 'Track your orders, view order history, and manage your account details on Khymat.' }, // Replace with the same description from 'name: 'description''
        { property: 'og:url', content: 'https://khaymatzaman.com/orders' }, // Replace with your actual orders page URL
        { property: 'og:type', content: 'website' }, // Use 'website' for general pages
        { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
        { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - الطلبات" : "Khymat - Orders" },
        { name: 'twitter:description', content: 'Track your orders, view order history, and manage your account details on Khymat.' }, // Replace with the same description from 'name: 'description''
        { name: 'twitter:card', content: 'summary' }, // Use 'summary' for general pages
        ],
    })
    onMounted(() => {
        if(!useCookie('token').value){
            navigateTo(localePath('/login'))
        }
        const tabElements = document.querySelectorAll('.tab-item')[0];
        const tabElement = tabElements;
        if (tabElement) {
            const tabRect = tabElement.getBoundingClientRect();
            const containerRect = tabElement.parentElement.getBoundingClientRect();
            const tabPositionX = tabRect.left - containerRect.left;
        
            tabPosition.value = tabPositionX;
            activeTab.value = tabs[0].title;
            tabWidth.value = tabRect.width;

        }
    })
</script>

<style>

</style>