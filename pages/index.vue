<template>
    <div>
        <div v-if="HomeStore.loading">
            <!-- Banner Skelton -->
            <HomeBannerSkelton />
        </div>
        <div v-else>
            <!-- Actual Banner -->
            <HomeBanner v-if="HomeStore.banners.length > 0" :banners="HomeStore.banners" />
            <!-- Sections Banner -->
            <div :dir="locale == 'ar' ? 'rtl' : 'ltr'">
                <div class="px-6 lg:px-[133px] py-8 lg:py-[85px] flex flex-col gap-32">
                    <section v-if="CategoriesWithSubStore.categories.data">
                        <HomeSectionTitle 
                            title="All Categories"
                            description="Shop with us for the latest featured products"
                            route="/categories"
                        />
                        <div class="grid md:grid-cols-8 gap-6 md:gap-6 mt-8 text-center flex-wrap overflow-hidden category">
                            <div 
                                class="relative overflow-hidden md:col-span-4"
                                v-if="CategoriesWithSubStore.categories.data[0]"
                            >
                                <div class="category-pic-container relative">
                                    <NuxtLink :to="localePath(`/products/subcategory/${CategoriesWithSubStore.categories.data[0].id}`)" class="category-pic shadow-lg transition overflow-hidden sm:h-[500px] flex justify-center items-center">
                                        <img 
                                            :src="MainStore.route + CategoriesWithSubStore.categories.data[0].image"
                                            class="w-full h-full hover:scale-125 hover:rotate-6 object-cover transition-all"
                                            placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
                                        />
                                    </NuxtLink>
                                    <NuxtLink :to="localePath(`/products/subcategory/${CategoriesWithSubStore.categories.data[0].id}`)" class="h-12 py-3 bg-primary justify-center items-center inline-flex min-w-[170px] absolute px-4 bottom-4 md:-bottom-12 left-4 category-title transition-all">
                                        <div class="text-center text-white text-base font-bold">{{ CategoriesWithSubStore.categories.data[0].name }}</div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div 
                                class="relative overflow-hidden md:col-span-2"
                                v-if="CategoriesWithSubStore.categories.data[1]"
                            >
                                <div class="category-pic-container relative">
                                    <NuxtLink :to="localePath(`/products/subcategory/${CategoriesWithSubStore.categories.data[1].id}`)" class="category-pic shadow-lg transition overflow-hidden sm:h-[500px] flex justify-center items-center">
                                        <img 
                                            :src="MainStore.route + CategoriesWithSubStore.categories.data[1].image"
                                            class="w-full h-full hover:scale-125 hover:rotate-6 object-cover transition-all"
                                            placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
                                        />
                                    </NuxtLink>
                                    <NuxtLink :to="localePath(`/products/subcategory/${CategoriesWithSubStore.categories.data[0].id}`)" class="h-12 py-3 bg-primary justify-center items-center inline-flex min-w-[170px] absolute px-4 bottom-4 md:-bottom-12 left-4 category-title transition-all">
                                        <div class="text-center text-white text-base font-bold">{{ CategoriesWithSubStore.categories.data[1].name }}</div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="flex flex-col gap-6 md:gap-0 justify-between md:col-span-2">
                                <div 
                                    class="relative overflow-hidden"
                                    v-if="CategoriesWithSubStore.categories.data[2]"
                                >
                                    <div class="category-pic-container relative">
                                        <NuxtLink :to="localePath(`/products/subcategory/${CategoriesWithSubStore.categories.data[2].id}`)" class="category-pic shadow-lg transition overflow-hidden h-[242px] flex justify-center items-center">
                                            <img 
                                                :src="MainStore.route + CategoriesWithSubStore.categories.data[2].image"
                                                class="w-full h-full hover:scale-125 hover:rotate-6 object-cover transition-all"
                                                placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
                                            />
                                        </NuxtLink>
                                        <NuxtLink :to="localePath(`/products/subcategory/${CategoriesWithSubStore.categories.data[0].id}`)" class="h-12 py-3 bg-primary justify-center items-center inline-flex min-w-[170px] absolute px-4 bottom-4 md:-bottom-12 left-4 category-title transition-all">
                                            <div class="text-center text-white text-base font-bold">{{ CategoriesWithSubStore.categories.data[2].name }}</div>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div 
                                    class="relative overflow-hidden"
                                    v-if="CategoriesWithSubStore.categories.data[3]"
                                >
                                    <div class="category-pic-container relative">
                                        <NuxtLink :to="localePath(`/products/subcategory/${CategoriesWithSubStore.categories.data[3].id}`)" class="category-pic shadow-lg transition overflow-hidden h-[242px] flex justify-center items-center">
                                            <img 
                                                :src="MainStore.route + CategoriesWithSubStore.categories.data[3].image"
                                                class="w-full h-full hover:scale-125 hover:rotate-6 object-cover transition-all"
                                                placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
                                            />
                                        </NuxtLink>
                                        <NuxtLink :to="localePath(`/products/subcategory/${CategoriesWithSubStore.categories.data[0].id}`)" class="h-12 py-3 bg-primary justify-center items-center inline-flex min-w-[170px] absolute px-4 bottom-4 md:-bottom-12 left-4 category-title transition-all">
                                            <div class="text-center text-white text-base font-bold">{{ CategoriesWithSubStore.categories.data[3].name }}</div>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section v-if="ProductsStore.for_you_products.data">
                        <HomeSectionTitle 
                            title="FOR YOU"
                            description="Shop with us for the latest featured products"
                            route="/products/allitems"
                        />
                        <div class="grid md:grid-cols-4 md:grid-cols-3 gap-6 mt-8">
                            <div v-for="product in ProductsStore.for_you_products.data" :key="product">
                                <Product :product="product"></Product>
                            </div>
                        </div>
                    </section>
                </div>
                <section class="bg-green-700 grid md:grid-cols-2 overflow-hidden pt-8 items-center px-8 md:px-16 gap-10 justify-center">
                    <div class="flex justify-center gap-6 h-[265px] overflow-hidden order-2 md:order-1">
                        <img 
                            src="~/assets/images/app/1.png"
                            class="hidden md:block w-[190.51px] h-[653.52px] rounded-xl transition-all hover:translate-y-8 translate-y-10"
                        >
                        <img 
                            src="~/assets/images/app/2.png"
                            class="w-[190.51px] h-[653.52px] rounded-xl transition-all hover:translate-y-1"
                        >
                        <img 
                            src="~/assets/images/app/3.png"
                            class="hidden md:block w-[190.51px] h-[653.52px] rounded-xl transition-all hover:translate-y-8 translate-y-10"
                        >
                    </div>
                    <div class="text-center order-1 md:order-2">
                        <h1 class="text-white text-2xl md:text-[40px] font-medium md:leading-[56px] tracking-tight">{{ $t("You can download our app") }}</h1>
                        <div class="flex justify-center gap-3 mt-8">
                            <a href="#" class="rounded-lg hover:-translate-y-1 transition">
                                <img 
                                    src="~/assets/images/social/apple.png"
                                    class="w-[182px] h-[56px] object-cover"
                                    placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
                                />
                            </a>
                            <a href="#" class="rounded-lg hover:-translate-y-1 transition">
                                <img 
                                    src="~/assets/images/social/Google.png"
                                    class="w-[182px] h-[56px] object-cover"
                                    placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
                                />
                            </a>
                        </div>
                    </div>
                </section>
                <!-- Category Prices -->
                <HomeCategories />
            </div> 
        </div>
    </div>
</template>

<script setup>
    // i18n Package
    const localePath = useLocalePath()
    const { locale } = useI18n();

    // Stores
    const HomeStore = useHomeStore()
    const MainStore = useMainStoreStore()
    const ProductsStore = useMyProductsStore() 
    const CategoriesWithSubStore = useMyCategoriesWithSubStore()

    // Invoke functions
    HomeStore.GET_BANNERS()
    ProductsStore.GET_FOR_YOU_PRODUCTS()

    // SEO
    useHead({
    title: locale.value === 'ar' ? "خيمات زمان - الصفحة الرئيسية" : "Khymat - Home Page",
    meta: [
        { name: 'description', content: 'Welcome to Khymat, your destination for all things related to camping gear and outdoor adventures.' },
        { name: 'keywords', content: 'camping gear, outdoor adventures, hiking, backpacking, tents, sleeping bags, backpacks, Khymat' },
        { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - الصفحة الرئيسية" : "Khymat - Home Page" },
        { property: 'og:description', content: 'Welcome to Khymat, your destination for all things related to camping gear and outdoor adventures.' },
        { property: 'og:url', content: 'https://khaymatzaman.com/' },  { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
        { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - الصفحة الرئيسية" : "Khymat - Home Page" },
        { name: 'twitter:description', content: 'Welcome to Khymat, your destination for all things related to camping gear and outdoor adventures.' },
        { property: 'twitter:site', content: '@khaymatzaman' },  
    ],
    })
    
</script>

<style>
.sticky-header-next-sec{
    @apply !rounded-none
}
</style>