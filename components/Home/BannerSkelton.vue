<template>
  <div 
  >
    <Swiper
      class="banner rounded-3xl md:rounded-none overflow-hidden"
      ref="swiper"
      :slides-per-view="1"
      :navigation="true"
      :scrollbar="true"
      :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectCreative, SwiperScrollbar]"
      :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
          reverseDirection: true,
      }"
      :breakpoints="{
          1200: {
              slidesPerView: 1,
          },
      }"
      :loop="true"
      :effect="'creative'"
      :creative-effect="{
        prev: {
          shadow: true,
          translate: ['-5%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide class="relative !h-[250px] md:!h-[598px] bg-cover bg-center grid place-content-center">
        <a-skeleton-button active block class="banner-seklton"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
  
</script>

<style>
  .banner-seklton span{
    height: 100vh !important;
  }
</style>