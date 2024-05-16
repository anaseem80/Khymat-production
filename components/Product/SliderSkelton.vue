<template>
<transition name="fade" mode="out-in">
      <div v-if="ProductStore.loading">
          <div class="rounded p-1 md:p-5 w-100">
              <div class="flex justify-between mb-6">
                  <a-skeleton-button active/>
                  <a-skeleton-button active/>
              </div>
              <Swiper
              :slides-per-view="1"
              :zoom="true"
              :modules="[SwiperAutoplay, SwiperZoom, SwiperThumbs]"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              :thumbs="{ swiper: thumbsSwiper }"
              :loop="true"
              :effect="'creative'"
              >
              <SwiperSlide v-for="image in 1">
                  <div class="h-[250px] md:h-[450px]">
                      <a-skeleton-button class="skelton-img" active block/>
                  </div>
              </SwiperSlide>
              </Swiper>
      
              <Swiper
              @click="setThumbsSwiper"
              :freeMode="true"
              :slides-per-view="3"
              :watchSlidesProgress="true"
              :modules="[SwiperThumbs]"
              :space-between="30"
              class="mt-16 thumnbs"
              :effect="'creative'"
              >
              <SwiperSlide class="text-center !w-16 transition" v-for="image in 4">
                  <div class="h-[60px] w-[85px] border inline-block p-2 cursor-pointer rounded m-auto transition">
                      <a-skeleton-button class="skelton-img" active block/>
                  </div>
              </SwiperSlide>
              </Swiper>

              <div class="flex flex-wrap gap-6 mt-8 justify-between">
                  <div class="flex cursor-pointer items-center gap-3">
                      <span class="shrink-0"><a-skeleton-button class="progress" active/></span>
                      <div class="w-2"><a-skeleton-button class="progress" active block/></div>
                  </div>
                  <div class="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
                      <div class="border py-2 px-6 rounded-3xl hover:shadow-md transition cursor-pointer" v-for="item in 4">
                          <a-skeleton-button class="progress" active block/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </transition>
</template>

<script lang="ts" setup>
    // Stores
    const ProductStore = useProductStore()
</script>

<style>

</style>