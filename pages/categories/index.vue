<template>
  <MainBreadcrumb 
      :route="route.fullPath" 
      :name="'Shop'"
      title="Shop Product"
      description="Check all your categories to get what brand your needs"
  />
  <div class="px-6 lg:px-[133px] py-8 md:py-[85px]">
      <div v-if="CategoriesWithSubStore.categories_page">
        <div :dir="locale == 'ar' ? 'rtl' : 'ltr'" class="grid lg:grid-cols-8 md:grid-cols-4 gap-6 md:gap-6 mt-8 text-center flex-wrap overflow-hidden category">
            <div 
                class="relative overflow-hidden md:col-span-2"
                v-for="category in CategoriesWithSubStore.categories_page.data"
            >
                <div class="category-pic-container relative">
                    <NuxtLink :to="localePath(`/products/subcategory/${category.id}`)" class="category-pic shadow-lg transition overflow-hidden sm:h-[500px] flex justify-center items-center">
                        <img 
                            :src="MainStore.route + category.image"
                            class="w-full h-full hover:scale-125 hover:rotate-6 object-cover transition-all"
                            placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
                        />
                    </NuxtLink>
                    <NuxtLink :to="localePath(`/products/subcategory/${category.id}`)" class="h-12 py-3 bg-primary justify-center items-center inline-flex min-w-[170px] absolute px-4 bottom-4 md:-bottom-12 left-4 category-title transition-all">
                        <div class="text-center text-white text-base font-bold">{{ category.name }}</div>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="flex items-center my-8 justify-center">
            <span>{{ $t("Show") }} 1 - {{CategoriesWithSubStore.categories_page.data.length}}</span>
            <ul class="text-end" dir="ltr">
                <a-pagination 
                    v-model:current="current" 
                    @change="onPageChange"
                    :total="CategoriesWithSubStore.categories_page.last_page + '0'" 
                >
                </a-pagination>
            </ul>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-4 gap-6" v-else>
          <div class="transition overflow-hidden h-[500px]" v-for="items in 8">
            <a-skeleton-button class="skelton-img" active block/>
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
    // i18n Package
    const { locale } = useI18n();
    const localePath = useLocalePath()

    const route = useRoute();
    
    // Stores
    const MainStore = useMainStoreStore()
    const CategoriesWithSubStore = useMyCategoriesWithSubStore()
    CategoriesWithSubStore.GET_CATEGORIES_PAGE(locale.value, 1)

    // Paginantion function
    const onPageChange = (page) =>{
        CategoriesWithSubStore.GET_CATEGORIES_PAGE(locale.value, page)
    }

    // SEO
    useHead({
        title: locale.value === 'ar' ? `خيمات زمان - الفئات` : `Khymat - Categories`,
        meta: [
            { name: 'description', content: 'Explore our wide range of products by category at Khymat.' },
            { name: 'keywords', content: 'categories, products, shopping, online shopping, Khymat' },
            { name: 'robots', content: 'index, follow' },
            { property: 'og:title', content: locale.value === 'ar' ? `خيمات زمان - الفئات` : `Khymat - Categories` },
            { property: 'og:description', content: 'Explore our wide range of products by category at Khymat.' },
            { property: 'og:url', content: 'https://khaymatzaman.com/categories' }, // Replace with your categories page URL
            { property: 'og:type', content: 'website' },
            { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
            { name: 'twitter:title', content: locale.value === 'ar' ? `خيمات زمان - الفئات` : `Khymat - Categories` },
            { name: 'twitter:description', content: 'Explore our wide range of products by category at Khymat.' },
            { property: 'twitter:site', content: '@your_twitter_handle' },
        ],
    })
</script>

<style>

</style>