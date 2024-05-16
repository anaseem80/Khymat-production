<template>
<div class="w-full bg-white rounded-lg border flex-col justify-center items-center inline-flex mt-8">
  <div class="px-6 py-5 border-b w-full">
    <div class="text-sm font-medium">{{ $t('Have a voucher?') }}</div>
  </div>
  <Form 
  v-if="!CartStore.couponApplied"
    class="px-6 py-5 justify-start items-end flex w-full" 
    @submit="onSubmitCoupon"
    :validation-schema="schema"
    v-slot="{ errors }"
  >
    <Field 
      type="text"
      class="h-11 w-full outline-none transition-all text-start px-4 py-6 bg-gray-50 rounded-sm justify-end items-center inline-flex"
      :placeholder="$t('Voucher code')"
      id="coupon"
      name="coupon"
      :class="{ 
        'is-invalid': errors.coupon,
      }"
    />
    <button :disabled="!CartStore.taxApplied" class="btn px-8">
      <span class="flex">{{ $t("Apply") }} <loading-outlined class="ms-3" v-if="CartStore.loading_coupon"/></span> 
    </button>
  </Form>
  <div v-else class="flex items-center justify-between w-full gap-4">
    <div class="px-6 py-5 w-full">
      <div class="text-sm font-medium">{{ CartStore.coupon.code }}</div>
    </div>
    <svg @click="CancelCoupon()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6 mr-4 cursor-pointer">
      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  </div>
</div>

</template>

<script setup>
  // Imports
  import * as Yup from "yup";

  // Stores
  const CartStore = useMyCartStore();
  const ProductsStore = useMyProductsStore();

  // Vars
  const schema = Yup.object().shape({
      coupon: Yup.string().required("coupon is required"),
  });

  // Functions
  const onSubmitCoupon = (data) =>{
    CartStore.APPLY_COUPON(data.coupon)
  }
  const CancelCoupon = () =>{
    CartStore.CANCEL_COUPON()
  }
</script>

<style>

</style>