<template>
<div class="p-5 pl-0 pr-0 mt-4 md:mt-12" v-if="!ProductStore.loading">
    <div class="flex justify-between relative md:w-full">
        <!-- <div class="flex gap-2 text-primary hover:text-orange-600 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            مشاركة
        </div> -->
        <ul class="flex gap-6 items-center">
            <li id="common-question" @click="tabs($event)" class="list-item cursor-pointer text-xl border-b-2 border-black hover:text-primary transition">{{ $t("Customer Reviews") }}</li>
            <!-- <li id="return-policy" @click="tabs($event)" class="list-item cursor-pointer text-xl text-neutral-400 hover:text-primary transition">Shipping & Returns</li> -->
        </ul>
    </div>
</div>
<div class="tabs py-6" v-if="!ProductStore.loading">
    <div class="return-policy tab hidden">
        <h5 class="mb-6 font-bold">{{ $t("Shipping") }}</h5>
        {{ ProductStore.data.return_policy }}
    </div>
    <div 
        class="common-question tab"
    >
    
        <h5 class="mb-6 font-bold">{{ $t("Reviews") }}</h5>
        <ProductReviewsAll :reviews="ProductStore.data.product.reviews"></ProductReviewsAll>
        <ProductReviewsInsert :id="ProductStore.data.product.id"></ProductReviewsInsert>
    </div>
</div>
</template>

<script lang="ts" setup>
    // Stores
    const ProductStore = useProductStore()

    // Functions
    const tabs = (e) =>{
        document.querySelectorAll(".tab").forEach(tab=>{
            tab.classList.add("hidden")
        })
        document.querySelectorAll(".list-item").forEach(item2=>{
            item2.classList.remove("border-b-2")
            item2.classList.remove("border-black")
            item2.classList.add("text-neutral-400")
        })
        document.querySelector("."+e.target.id).classList.remove("hidden")
        document.querySelector("."+e.target.id).classList.add("visible")
        e.target.classList.add("border-b-2")
        e.target.classList.add("border-black")
        e.target.classList.remove("text-neutral-400")
    }
</script>

<style>

</style>