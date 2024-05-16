<template>
<div class="step-4 shrink-0">
    <div class="flex flex-col justify-center items-center text-center gap-4 my-5 flex-wrap">
      <img 
        src="~/assets/images/gif/well-done.gif"
        width="250"
      />
      <!-- <h1 class="text-2xl text-primary font-semibold"
      >Congratulations <br>   
    </h1> -->
    {{ mainStore.reset_verify == "reset" ? $t("Your password has been changed successfully"): $t("Your email has been activated please login!") }}
   </div>

    <div class="flex items-center justify-between mt-8">
      <button class="btn w-full rounded-lg" @click="mainStore.Verfiy_Modal('close')">
        <span class="translate-y-[-2px]">{{ $t("Login") }}</span> 
      </button>
    </div>
  </div>
</template>

<script setup>
  // Stores
  const verify_store = useVerifyStore();
  const mainStore = useMainStoreStore();
</script>

<style>

</style>