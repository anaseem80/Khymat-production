<template>
  <hr>
  <section class="mt-6" v-if="!ProductStore.loading">
      <div :dir="locale == 'ar' ? 'ltr' : 'rtl'" class="flex-col sm:flex-row flex gap-5 sm:gap-0 sm:items-center justify-end text-end">
          <div class="flex gap-4 items-start justify-end">
              <div>
                  <h1 class="font-semibold text-2xl mb-3">{{ $t("Similar products") }}</h1>
                  <p class="text-gray-400 font-bold">{{ $t("Check all your categories to get what brand your needs") }}</p>
              </div>
          </div>
      </div>
      <div class="grid xl:grid-cols-4 md:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mt-8" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
          <div v-for="product in ProductStore.data.related_products" :key="product">
              <Product :product="product"></Product>
          </div>
      </div>
  </section>
</template>

<script lang="ts" setup>
    // Stores
    const ProductStore = useProductStore()

    // i18n Package
    const { locale } = useI18n();
</script>

<style>

</style>