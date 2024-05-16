<template>
  <transition name="fade" mode="out-in">
      <div class="md:col-span-2 lg:col-span-1" v-if="!ProductStore.loading">
          <div key="loaded">
              <h1 class="md:hidden text-2xl mb-6">
                  {{ ProductStore.data.product.name }}
              </h1>
              <div class="grid gap-6 grid-cols-1 lg:grid-cols-4 relative">
                  <div class="md:col-span-3 rounded-lg overflow-hidden w-full">
                      <Swiper
                      :slides-per-view="1"
                      :zoom="true"
                      :modules="[SwiperAutoplay, SwiperZoom, SwiperThumbs]"
                      :autoplay="{ delay: 3000, disableOnInteraction: false }"
                      :thumbs="{ swiper: thumbsSwiper }"
                      :loop="true"
                      :effect="'creative'"
                      >
                      <SwiperSlide v-for="image in ProductStore.data.product.images">
                            <div class="h-[650px] md:h-[650px] w-full">
                                <img 
                                    :src="MainStore.route + image.image"
                                    class="w-full h-full object-cover"
                                    v-fullscreen-img
                                />
                            </div>
                      </SwiperSlide>
                      </Swiper>
                  </div>
                  <div class="h-[130px] lg:h-[650px] md:overflow-hidden">
                      <Swiper
                      @click="setThumbsSwiper"
                      :direction="$viewport.isGreaterThan('tablet') ? 'vertical' : 'horizontal'"
                      :slides-per-view="3"
                      :modules="[SwiperThumbs]"
                      :space-between="30"
                      :effect="'creative'"
                      >
                      <SwiperSlide class="text-center !h-[130px] transition" v-for="image in ProductStore.data.product.images">
                          <div class="h-full w-full cursor-pointer rounded m-auto transition">
                              <img :src="MainStore.route + image.image" class="m-auto w-full h-full object-cover rounded-lg" />
                          </div>
                      </SwiperSlide>
                      </Swiper>
                  </div>
              </div>

              <div class="flex flex-wrap gap-6 mt-8 justify-between">
                  <ProductVideo></ProductVideo>
              </div>
          </div>
      </div>
  </transition>
</template>

<script lang="ts" setup>
    // Imports
    import { vFullscreenImg } from 'maz-ui'

    // Vars
    const { id } = useRoute().params
    const thumbsSwiper = ref(null);

    // Stores
    const ProductStore = useProductStore()
    const MainStore = useMainStoreStore()

    // Functions
    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
    };
</script>

<style>

</style>