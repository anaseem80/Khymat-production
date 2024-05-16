<template>
<transition v-if="!ProductStore.loading" enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <div
        v-show="video"
        @click="closeModal($event.target)"
        class="backdrop-blur-sm fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50 p-3" :dir="locale == 'ar' ? 'rtl' : 'ltr'"
    >
    <transition enter-active-class="transition ease-out duration-500" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-show="video"
        @click.away="close"
        class="bg-white rounded-lg p-8 shadow-md relative w-[768px] h-full overflow-y-scroll">
            <span 
                class="absolute"
                :class="{ 
                    'left-8': locale == 'ar',
                    'right-8': locale == 'en',
                }"
            >
                <svg @click="video = !video" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-400 hover:text-red-600 w-6 h-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </span>
            <h4 class="text-primary text-xl">{{ $t('Measurement guide') }} {{ $t('Description') }}</h4>
            <p class="text-black text-base font-medium mt-2 mb-8">{{ ProductStore.data.product['description_measurement_guide'] }}</p>
            <img 
                :src="MainStore.route + ProductStore.data.product.measurement_guide"
                class="w-full h-full object-cover"
                v-fullscreen-img
            />
        </div>
    </transition>
    </div>
</transition>
<div class="flex cursor-pointer items-center gap-3 mb-3" v-if="ProductStore.data.product.measurement_guide != null" @click="video = !video">
    <span class="shrink-0">{{ $t('Measurement guide') }}</span>
    <img 
        src="~/assets/images/common/play-square.svg"
        width="25"
    />
</div>
</template>

<script lang="ts" setup>
    // Imports
    import { vFullscreenImg } from 'maz-ui'

    // Vars
    const video = ref(false)

    // i18n Package
    const { locale } = useI18n();

    // Stores
    const ProductStore = useProductStore()
    const MainStore = useMainStoreStore()

    // Functions
    const closeModal = (e) =>{
        if(e.classList.contains('backdrop-blur-sm')){
            video.value = !video.value
        }
    }
</script>

<style>

</style>