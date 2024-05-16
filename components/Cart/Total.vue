<template>
<div class="my-6 w-full"
:dir="locale == 'ar' ? 'rtl' : 'ltr'"
>
  <div class="pb-1 flex-col justify-start items-end gap-3 flex w-full">
    <div class="justify-between items-center flex w-full">
        <div class="text-neutral-400 text-sm">{{ $t("SubTotal") }}</div>
        <div class="text-sm font-bold">{{ CartStore.SUB_TOTAL }} {{ $t("AED") }}</div>
    </div>
    <div class="justify-between items-center flex w-full">
        <div class="text-neutral-400 text-sm">{{ $t("Shipping") }}</div>
        <div class="text-sm font-bold">{{ CartStore.SHIPPING_FEE }} {{ $t("AED") }}</div>
    </div>
    <div class="justify-between items-center flex w-full">
        <div class="text-neutral-400 text-sm">{{ $t("Tax") }}</div>
        <div class="text-sm font-bold">{{ CartStore.COUNTRY_TAX }} {{ $t("AED") }}</div>
    </div>
    <div class="justify-between items-center flex w-full">
        <div class="text-neutral-400 text-sm">{{ $t("Discount") }}</div>
        <div class="text-sm font-bold">{{ CartStore.TOTAL_DISCOUNT }} {{ $t("AED") }}</div>
    </div>
  </div>
  <div class="w-full h-6 justify-between items-center flex mt-4">
    <div class="text-right text-black text-base font-bold leading-normal">{{ $t("Cart Total") }}</div>
    <div class="text-right text-primary text-xl font-bold leading-normal">{{ CartStore.TOTAL_AMOUNT }} {{ $t("AED") }}</div>
  </div>
</div>
</template>

<script setup>
  // Stores
  const CartStore = useMyCartStore();

  // i18n Package
  const { locale } = useI18n();
</script>

<style>

</style>