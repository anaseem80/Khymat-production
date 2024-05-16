<template>
  <MainBreadcrumb 
      :route="route.fullPath" 
      :name="'Shop'"
      title="Shop Product"
      description="Check all your categories to get what brand your needs"
  />
  <div class="px-6 lg:px-[133px] py-8" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
      <div class="flex md:hidden flex-row-reverse md:flex-row items-center justify-between mb-6 md:mb-0">
          <button @click="toggleFilter($event.target)" class="relative z-40 filter-button flex gap-2 md:hidden items-center text-primary border border-gray-400 px-4 py-2 rounded-xl hover:bg-primary hover:border-primary hover:text-white transition-all">
              {{ $t("Categories") }}
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8.5H12M2 4.5H14M6 12.5H10" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </button>
      </div>
      <div class="flex justify-between" v-if="ProductsStore.loading_products">
          <div class="text-slate-500 text-base font-normal leading-snug">
              <a-skeleton-button class="category-skelton" active/>
          </div>
          <a-skeleton-button class="category-skelton" active/>
      </div>
      <div class="hidden md:flex justify-between items-center md:pt-6" v-if="!ProductsStore.loading_products && ProductsStore.data">
          <div class="text-slate-500 text-base font-normal leading-snug">
              {{ $t("Show") }} 1-{{ProductsStore.data.data.length}} {{ $t("item from") }} {{ProductsStore.data.data.length}} {{ $t("total") }}
          </div>
          <MainSort />
      </div>
      <div class="filter-khymat-main hidden" @click="toggleShadow"></div>
      <div class="md:flex md:items-start gap-16 md:pt-8 md:relative">
          <MainFilter />
          <div class="w-full" v-if="ProductsStore.loading_products">
              <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-between w-full">
                  <div v-for="skelton in 8">
                      <ProductSkeltonLoader></ProductSkeltonLoader>
                  </div>
              </div>
          </div>
          <div class="w-full" v-if="!ProductsStore.loading_products && ProductsStore.data">
              <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-between w-full">
                  <div v-if="ProductsStore.data.data.length == 0" class="col-span-4 m-auto text-center mb-3 text-xl">
                   {{ $t("No Products here! 😓") }} <br><img src="~/assets/images/gif/no-products.gif" width="150" class="img-fluid m-auto">
                  </div>
                  <div v-for="product in ProductsStore.data.data">
                      <Product :product="product" :filter="true"></Product>
                  </div>
              </div>
              <div class="flex justify-center items-center mt-4" v-if="ProductsStore.data.data.length != 0">
                  <ul class="text-end" dir="ltr">
                      <a-pagination 
                          v-model:current="current" 
                          @change="onPageChange"
                          :total="ProductsStore.data.last_page + '0'" 
                      >
                      </a-pagination>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
    // i18n Package
    const { locale } = useI18n();

    // Routes
    const { id } = useRoute().params;
    const route = useRoute();

    // Stores
    const ProductsStore = useMyProductsStore();
    
    // Vars
    const flag = ref(false)

    // Functions
    const fetchDataPrices = () => {
        ProductsStore.GET_PRODUCTS_BY_PRICE(id, route.query.price, locale.value)
    };
    const fetchData = () => {
        ProductsStore.GET_SUB_PRODUCTS(name, id, 1, locale.value)
    };
    const onPageChange = (page) =>{
        ProductsStore.GET_SUB_PRODUCTS(name, id, page, locale.value)
    }
    const toggleFilter = e =>{
        document.querySelector(".filter-khymat-main").classList.toggle("hidden")
        document.querySelector(".filter-khymat").classList.toggle("hidden")
    }
    const toggleShadow = e =>{
        document.querySelector(".filter-khymat-main").classList.toggle("hidden")
        document.querySelector(".filter-khymat").classList.toggle("hidden")
    }

    onMounted(() =>{
        const echeader = document.querySelector('.header');
        echeader.classList.remove('menu_fixed_up');
        
        if(route.query.price){
            fetchDataPrices()
        }else{
            fetchData()
        }
    });
    watch(() => route.query, () => {
        const echeader = document.querySelector('.header');
        echeader.classList.remove('menu_fixed_up');
        if(route.query.price){
            fetchDataPrices()
        }else{
            fetchData()
        }
    });
    
    // SEO
    useHead({
        title: locale.value === 'ar' ? "خيمات زمان - المنتجات" : "Khymat - Products",
        meta: [
            { name: 'description', content: 'Shop for high-quality camping gear and outdoor equipment at Khymat. Find tents, sleeping bags, backpacks, and more.' }, // Replace with a more specific description relevant to your products
            { name: 'keywords', content: 'camping gear, outdoor equipment, tents, sleeping bags, backpacks, Khymat' }, // Adjust keywords based on your product offerings
            { name: 'robots', content: 'index, follow' },
            { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - المنتجات" : "Khymat - Products" },
            { property: 'og:description', content: 'Shop for high-quality camping gear and outdoor equipment at Khymat. Find tents, sleeping bags, backpacks, and more.' }, // Replace with the same description from 'name: 'description''
            { property: 'og:url', content: 'https://khaymatzaman.com/products/subcategory/1' }, // Replace with your actual products page URL
            { property: 'og:type', content: 'website' },
            { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
            { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - المنتجات" : "Khymat - Products" },
            { name: 'twitter:description', content: 'Shop for high-quality camping gear and outdoor equipment at Khymat. Find tents, sleeping bags, backpacks, and more.' }, // Replace with the same description from 'name: 'description''
            { name: 'twitter:card', content: 'summary_large_image' }, // Change to 'summary' if you don't have a product image for the card
        ],
    })
</script>

<style lang="scss">

</style>