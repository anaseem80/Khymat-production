<template>
  <div 
    class="w-[312px] m-w-[312px] flex-col gap-4 absolute md:sticky md:top-5 hidden md:flex filter-khymat"
    :class="{ 
      'left-6': locale == 'ar',
      'right-6': locale == 'en',
    }"
  >
    <div class="pb-8 flex flex-col gap-4">
      <a-skeleton-button class="category-skelton" active v-if="CategoriesWithSubStore.categories == null"/>
      <h1 class="text-zinc-900 text-base font-medium" v-if="CategoriesWithSubStore.categories != null">{{ $t("All Categories") }}</h1>
      <ul class="flex flex-col gap-8" v-if="CategoriesWithSubStore.categories == null">
        <li v-for="item in 12"><a-skeleton-button class="category-skelton" active block/></li>
      </ul>
      <div class="flex flex-col gap-4 mt-4 categories-items">
        <NuxtLink :to="localePath(`/products/subcategory/${category.id}`)" class="flex gap-2 transition-all hover:bg-primary hover:text-white p-2" v-for="(category, index) in CategoriesWithSubStore.categories.data" v-if="CategoriesWithSubStore.categories != null">
          {{ category.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Stores
  const CategoriesWithSubStore = useMyCategoriesWithSubStore();
  
  // i18n Package
  const localePath = useLocalePath()
  const { locale } = useI18n();
</script>

<style>
    .filter-khymat .router-link-exact-active{
      @apply bg-primary text-white
    }
</style>