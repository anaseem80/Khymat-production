<template>
  <section>
    <ul class="hidden md:flex gap-x-8 gap-y-2 h-8 overflow-hidden justify-center md:flex-wrap category-items-nav" v-if="CategoriesWithSubStore.categories == null">
      <li v-for="item in 12"><a-skeleton-button class="category-skelton" active/></li>
    </ul>
    <ul class="hidden md:flex gap-x-8 gap-y-2 h-8 overflow-hidden justify-center md:flex-wrap category-items-nav" v-if="CategoriesWithSubStore.categories != null">
      <li 
        class="flex items-center gap-2 cursor-pointer category-item-nav relative category-bar-item" 
        v-for="(category, index) in CategoriesWithSubStore.categories.data"
      >
        <nuxt-link :to="localePath(`/products/subcategory/${category.id}`)"><span class="translate-y-[-2px]">{{category.name}}</span></nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
  // i18n Package
  const localePath = useLocalePath()
  const { locale } = useI18n();
  // Stores
  const CategoriesWithSubStore = useMyCategoriesWithSubStore()
  CategoriesWithSubStore.GET_CATEGORIES(locale.value, 1)

</script>

<style>
.category-skelton span{
  height: 20px !important;
}
</style>