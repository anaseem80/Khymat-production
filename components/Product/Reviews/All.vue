<template>
   <p v-if="reviews.length == 0" class="mb-3 border-b pb-5">{{ $t("No reviews yet") }}</p>
   <div class="flex flex-col gap-4 mb-8 mt-8 border-b pb-8" v-else>
      <div 
        class="flex gap-8 pb-6" 
        v-for="(review, index) in reviews"
        :class="{
          'border-b': index != reviews.length - 1
        }"
      >
        <div class="w-[70px] h-[70px] rounded-full overflow-hidden text-center flex justify-center items-center">
            <NuxtImg
                :src="mainStore.route + mainStore.settings['logo']"
                class="w-full h-full translate-x-[-.5px] transition-all"
                v-if="!mainStore.loading_settings"
                placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
            />
        </div>
        <div class="">
          <p>{{ review.user.name }}</p>
          <NuxtRating :read-only="true" activeColor="#964f82" :ratingValue="review.rating" />
          <p>
            {{review.review}}
          </p>
        </div>
      </div>
   </div>
</template>

<script setup>
  const props = defineProps(["reviews"])

  // Stores
  const mainStore = useMainStoreStore();
</script>

<style>

</style>