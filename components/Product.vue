<template>
<div 
    class="rounded-md transition h-full relative"
>
    <NuxtLink @click="ProductStore.GET_PRODUCT_BY_ID(product.id)" :to="localePath(`/product/${product.id}`)" class="relative border transition w-full h-[469px] rounded-md overflow-hidden flex justify-center items-center">
        <NuxtImg
            :src="MainStore.route + product.image"
            class="w-full h-full object-cover hover:scale-105 transition ease-in-out"
            :placeholder="MainStore.route + MainStore.settings['logo']"
        />
        <div class="w-[73px] h-[29px] px-2 py-1 bg-white rounded justify-start items-center gap-2.5 inline-flex absolute top-4 left-4">
            <div class="text-zinc-900 text-sm font-medium font-['Plus Jakarta Sans'] capitalize leading-[21px]">{{ $t("New") }}</div>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame" clip-path="url(#clip0_2001_3175)">
                <path id="Vector" d="M8.50006 15.3333C7.49816 15.3332 6.5194 15.0322 5.69067 14.4691C4.86194 13.9061 4.22146 13.1071 3.85229 12.1757C3.48312 11.2443 3.40228 10.2235 3.62025 9.24555C3.83822 8.26765 4.34495 7.37779 5.07473 6.69133C5.9694 5.84933 8.16673 4.33333 7.8334 1C11.8334 3.66667 13.8334 6.33333 9.8334 10.3333C10.5001 10.3333 11.5001 10.3333 13.1667 8.68667C13.3467 9.202 13.5001 9.756 13.5001 10.3333C13.5001 11.6594 12.9733 12.9312 12.0356 13.8689C11.0979 14.8065 9.82615 15.3333 8.50006 15.3333Z" fill="#FB941B"/>
                </g>
                <defs>
                <clipPath id="clip0_2001_3175">
                <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </NuxtLink>
    <div 
        class="btn text-black overflow-hidden hover:text-white w-8 h-8 p-[7px] bg-white rounded-full add-to-wishlist border border-zinc-900 border-opacity-10 inline-flex absolute top-4 right-4 cursor-pointer"
        @click="AddToWishList(product)"
    >
        <MainWishListIcon :product="product"></MainWishListIcon>
    </div>
    <button 
        class="btn overflow-hidden w-8 h-8 p-[7px] bg-white rounded-full add-to-wishlist border border-zinc-900 border-opacity-10 inline-flex absolute top-16 right-4 cursor-pointer"
        @click="onAddToCart(product.id)" 
        :disabled="isLoading(`Add_Product_To_Cart${product.id}`)"
    >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <div class="mt-4">
        <!-- <div class="text-zinc-900 text-opacity-70 text-sm font-medium leading-[21px] mb-1">Spring Collection</div> -->
        <nuxt-link to="#" class="text-sm md:text-md font-semibold">{{ product.name }}</nuxt-link>
        <div class="flex justify-between mt-1 items-center">
            <div class="flex gap-2 items-center">
                <span class="text-md md:text-md font-semibold">{{ product.price == product.final_price ? product.final_price : product.final_price }} {{ $t("AED") }}</span>
                <del class="text-neutral-400" v-if="product.price !== product.final_price">{{ $t("AED") }} {{ product.price }}</del>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
    const props = defineProps(["product", "filter"])

    // i18n Package
    const localePath = useLocalePath()
    const { locale } = useI18n();

    // Vars
    const product = props.product

    // Stores
    const MainStore = useMainStoreStore()
    const ProductStore = useProductStore()
    const WishListStore = useMyWishlistStore()

    // Functions
    const onAddToCart = (id) =>{
        ProductStore.ADD_PRODUCT_TO_CART(id, 1, null, locale.value)
    }
    const isLoading = (action) =>{
        if(ProductStore.loading_add_product && ProductStore.loading_add_product.name == action){
            return ProductStore.loading_add_product.status
        }
        return false
    }
    const AddToWishList = (product) =>{
        const existedItem = WishListStore.wishlist.find(item =>{
            return item.id == product.id
        })

        if(existedItem){
            WishListStore.DELETE_FROM_WISHLIST(product)
        }else{
            WishListStore.INSERT_TO_WISHLIST(product)
        }
    }
</script>

<style>

</style>