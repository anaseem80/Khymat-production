<template>
  <div 
    class="p-6 md:p-0 overflow-hidden"
    :dir="locale == 'ar' ? 'rtl' : 'ltr'"
    :class="{ 
      'ar': locale == 'ar',
      'en': locale == 'en',
    }"
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
      @slideChange="handleSlideChange"
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
      <SwiperSlide class="relative !h-[250px] md:!h-[598px] bg-cover bg-center grid place-content-center px-12 lg:px-40" v-for="banner in banners" :key="banner" :style="{ backgroundImage: 'url('+ MainStore.route + banner.image + ')' }">
        <div class="absolute inset-0 h-full w-full bg-black/[.50]"></div>
        <div class="flex-col justify-start items-start md:gap-[35px] inline-flex relative z-2 slide-content">
          <div class="text-white text-xl md:text-base leading-normal mb-3 md:mb-0" data-aos="fade-up">SUMMER {{ new Date().getFullYear() }}</div>
          <div class="text-white text-sm md:text-[58px] md:leading-[80px]" data-aos="fade-up">{{ banner.name }}</div>
          <div class="text-neutral-50 text-sm md:text-xl font-normal md:eading-[30px] hidden md:block" data-aos="fade-down">We know how large objects will act, <br/>but things on a small scale.</div>
          <div class="justify-start items-start gap-2.5 mt-4 inline-flex" data-aos="fade-down">
            <NuxtLink :to="localePath('/categories')" class="btn uppercase overflow-hidden px-6 md:px-10 md:py-[15px] bg-primary text-white transition hover:bg-fuchsia-700 rounded-[5px] flex-col justify-start items-center gap-2.5 inline-flex text-xs md:text-base">
              <span>{{ $t("Shop") }}</span>
            </NuxtLink>
          </div>
        </div>
      </SwiperSlide>
      <div class="swiper-scrollbar"></div>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
  // i18n Package
  const { locale } = useI18n();
  const localePath = useLocalePath()

  // Props
  const props = defineProps(['banners']);

  // Stores
  const MainStore = useMainStoreStore();

  // Functions
  const handleSlideChange = (item) => {
    const slideContent = document.querySelector('.slide-content');
    slideContent.classList.remove('active');
    slideContent.classList.add('fade-up');
    setTimeout(() => {
      slideContent.classList.add('active');

    }, 500);
  }
</script>

<style>
.fade-up {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-up.active {
  opacity: 1;
  transform: translateX(0);
}
.banner .swiper-button-prev, .banner .swiper-button-next {
    width: 40px;
    height: 40px;
    line-height: 40px;
    transition: all .3s;
    border-radius: 50%;
    margin: auto;
    text-align: center;
    color: #fff;
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}
.banner .swiper-button-prev::after,
 .banner .swiper-button-next::after{
    background: linear-gradient(180deg, #fff 0%, #fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
}
.ar .banner:hover .swiper-button-prev{
  right: 20px;
}
.ar .banner:hover .swiper-button-next{
  left: 20px;
}
.en .banner:hover .swiper-button-prev{
  left: 20px;
}
.en .banner:hover .swiper-button-next{
  right: 20px;
}
.en .banner .swiper-button-prev{
  left: -40px;
}
.en .banner .swiper-button-next{
  right: -40px;
}
.swiper-pagination-bullet-active{
    width: 25px !important;
    border-radius: 16px;
    background: linear-gradient(180deg, #fff 0%, #fff 100%) !important;
}
.swiper-pagination-bullet{
    background: rgb(160 160 160);
    transition: 0.3s ease-in-out;
    height: 10px;
    width: 10px;
}
</style>