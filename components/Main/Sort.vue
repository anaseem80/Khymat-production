<template>
  <div class="flex gap-4 items-center">
      <p>{{ $t("Sort By") }}</p>
      <MazSelect
        @selected-option="onSortChange"
        v-model="selectedValue"
        :options="sortOptions"
        option-value-key="id"
        option-label-key="valueOption"
        option-input-value-key="valueOption"
      />
  </div>
</template>

<script setup>
  // Imports
  import MazSelect from 'maz-ui/components/MazSelect'

  // i18n Package
  const { t } = useI18n();

  // Routes
  const { id } = useRoute().params;

  // Vars
  const route = useRoute();
  const ProductsStore = useMyProductsStore();
  const selectedValue = ref(1)
  const sortOptions = [
    { valueOption: t('Highest in demand'), id: 1 },
    { valueOption: t('Price, low to high'), id: 2 },
    { valueOption: t('Price, high to low'), id: 3 },
    { valueOption: t('Newest'), id: 4 },
    { valueOption: t('Discount'), id: 5 }
  ]

  // Functions
  const onSortChange = () =>{
    ProductsStore.SORT_PRODUCTS(selectedValue.value, id)
  }
</script>

<style>

</style>