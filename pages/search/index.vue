<template>
    <MainBreadcrumb 
        :route="route.fullPath" 
        :name="'Search'"
        title="Search"
        description="Check all your categories to get what brand your needs"
    />
    <Form 
      class="text-center relative md:w-1/2 m-auto px-8 mb-8"
      :dir="locale == 'ar' ? 'rtl' : 'ltr'"
      @submit="onSearch"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <Field 
        type="text"
        class="w-full h-[66px] bg-stone-50 rounded outline-none border border-transparent focus:border-primary px-6"
        :placeholder="$t(`What are you looking for?`)"
        @onkeypress=""
        required
        id="keyword"
        name="keyword"
        :class="{ 
          'is-invalid': errors.keyword,
          'is-valid': !errors.keyword
        }"
      />
      <button 
        class="w-11 h-11 absolute top-3 bg-gray-800 rounded grid place-content-center cursor-pointer hover:bg-gray-700 transition-all"
        :class="{ 
          'right-4': locale == 'en',
          'left-4': locale == 'ar',
        }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
    </Form>
    <div 
    :dir="locale == 'ar' ? 'rtl' : 'ltr'"
    :class="{
      'px-6 lg:px-[133px] py-8': ProductsStore.loading_search_prdoucts != null
    }"
    >
      <div class="flex justify-center items-center md:pt-6" v-if="ProductsStore.loading_search_prdoucts != null">
          <div class="text-slate-500 text-base font-normal leading-snug">
           {{ $t("Show") }} 1-{{ProductsStore.search_products.data.length}} {{ $t("item from") }} {{ProductsStore.search_products.data.length}} {{ $t("total for") }} '{{ keyword }}'
          </div>
          <!-- <MainSort /> -->
      </div>
      <div class="w-full mt-8" v-if="ProductsStore.loading_search_prdoucts">
          <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-between w-full">
              <div v-for="skelton in 8">
                  <ProductSkeltonLoader></ProductSkeltonLoader>
              </div>
          </div>
      </div>
      <div class="w-full mt-8" v-if="ProductsStore.loading_search_prdoucts != null">
        <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-between w-full">
              <div v-for="product in ProductsStore.search_products.data">
                  <Product :product="product" :filter="true"></Product>
              </div>
          </div>
          <transition name="fade" mode="out-in">
      <div>
        <div
            v-if="ProductsStore.search_products.data.length == 0" 
            class="col-12 text-center m-auto"
          >
            <img src="~/assets/images/gif/empty.gif" width="250" class="m-auto" alt="empty">
            <h4 class="text-xl mb-4">{{ $t("No Products here! 😓") }}</h4>
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
    </div>
</template>

<script setup>
  // Imports
  import * as Yup from "yup";

  // i18n Package
  const { locale } = useI18n();
  const localePath = useLocalePath()
  
  // Route
  const route = useRoute();
  
  // Vars
  const keyword = ref("")
  const schema = Yup.object().shape({
      keyword: Yup.string().required("keyword is required"),
  });

  // Stores
  const ProductsStore = useMyProductsStore();

  // Functions
  const onSearch = (data) =>{
    ProductsStore.SEARCH_PRODUCTS(data.keyword, locale.value)
    keyword.value = data.keyword
  }

  // SEO
  useHead({
    title: locale.value == 'ar' ? "خيمات زمان - البحث" : "Khymat - Search",
    meta: [
      { name: 'description', content: 'Find a wide variety of camping gear and outdoor equipment by searching on Khymat. Discover tents, sleeping bags, backpacks, and more.' }, // Replace with a more specific description relevant to your search functionality
      { name: 'keywords', content: 'search, camping gear, outdoor equipment, Khymat' }, // Adjust keywords related to search functionality
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - البحث" : "Khymat - Search" },
      { property: 'og:description', content: 'Find a wide variety of camping gear and outdoor equipment by searching on Khymat. Discover tents, sleeping bags, backpacks, and more.' }, // Replace with the same description from 'name: 'description''
      { property: 'og:url', content: 'https://khaymatzaman.com/search' }, // Replace with your actual search page URL 
      { property: 'og:type', content: 'website' }, // Use 'website' for general pages
      { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
      { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - البحث" : "Khymat - Search" },
      { name: 'twitter:description', content: 'Find a wide variety of camping gear and outdoor equipment by searching on Khymat. Discover tents, sleeping bags, backpacks, and more.' }, // Replace with the same description from 'name: 'description''
      { name: 'twitter:card', content: 'summary' }, // Use 'summary' for general pages
    ],
  })
</script>

<style>

</style>