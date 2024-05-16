<template>
    <HeartOutlined v-if="!isProductInWishlist(product)"/>
    <HeartFilled class="text-primary" v-if="isProductInWishlist(product)"/>
</template>

<script setup>
    const props = defineProps(['product'])
    
    // Stores
    const WishListStore = useMyWishlistStore()
    const isProductInWishlist = (product) => {
        const productId = product.id;
        return WishListStore.wishlist.find(item => item.id === productId);
    }
</script>

<style>

</style>