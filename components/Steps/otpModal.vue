<template>
<transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
  <div
    v-show="mainStore.verfiy_modal"
    @click="closeModal($event.target)"
    class="backdrop-blur-sm fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50 p-3"
  >
  <transition enter-active-class="transition ease-out duration-500" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <div v-show="mainStore.verfiy_modal"
    @click.away="close"
    class="bg-white rounded-lg p-8 shadow-md relative max-w-[500px] w-full">
      <Swiper
        ref="swiper"
        :slides-per-view="1"
        loop="false"
        :effect="'creative'"
        :allow-touch-move="false"
        @swiper="onSwiper"
      >
        <SwiperSlide>
          <StepsStep4 />
        </SwiperSlide>
        <SwiperSlide>
          <StepsStep1 />
        </SwiperSlide>
        <SwiperSlide>
          <StepsStep2 />
        </SwiperSlide>
        <SwiperSlide>
          <StepsStep3 />
        </SwiperSlide>
      </Swiper>
    </div>
  </transition>
  </div>
</transition>
</template>

<script setup>
  // Stores
  const mainStore = useMainStoreStore();

  // Functions
  const onSwiper = (swiper) => {
    mainStore.swiper = swiper;
  }
  const closeModal = (e) =>{
    if(e.classList.contains('backdrop-blur-sm')){
        mainStore.Verfiy_Modal('close')
    }
  }
</script>