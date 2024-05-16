<template>
  <div 
    class="step-2 shrink-0"
    :dir="locale == 'ar' ? 'rtl' : 'ltr'"
  >
    <StepsHeader />
    <p class="md:text-xl font-bold mb-4">{{ $t("Please check your DM") }}</p>
    <p class="text-gray-400">{{ $t("We have just sent you an email to") }} {{ mainStore.email }}</p>
    <div class="flex gap-4 my-5 flex-wrap justify-start" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
      <div v-for="(digit, index) in otpDigits" :key="index">
        <input
            type="text"
            ref="otpInput"
            class="max-w-[40px] h-[40px] md:max-w-[56px] font-bold md:h-[56px] bg-gray-100 rounded-lg md:text-xl text-center outline-none focus:border focus:border-primary"
            maxlength="1"
            min="0"
            v-model="otpDigits[index]"
            @input="OTP($event.target, index)"
            @paste="handlePaste($event)"
            @keydown="handleBackspace($event, index)"
        />
      </div>
    </div>

    <div class="flex items-center justify-between mt-8">
      <button class="btn w-full rounded-lg" @click="verify()" :disabled="verify_store.Verify_loading" dir="rtl">
        <span class="translate-y-[-2px]">{{ $t("Check") }}</span> 
        <loading-outlined class="ms-2" v-if="verify_store.Verify_loading"/>
      </button>
    </div>
  </div>
</template>

<script setup>
  // Vars
  const otpDigits = ref(Array(6).fill(''));

  // Stores
  const login_store = useLoginStore();
  const verify_store = useVerifyStore();
  const mainStore = useMainStoreStore();

  // i18n Package
  const { locale } = useI18n();
  
  // Functions
  const verify = () =>{
    const otp = otpDigits.value.join("")
    if(otp.length == 6){
      verify_store.VERIFY_ACCOUNT(otp, login_store.email)
    }else{
      message.error("حقول التحقق مطلوبة")
    }
  }
  const handlePaste = (event) => {
    const pasteData = event.clipboardData.getData('text');
    if (pasteData.length === otpDigits.value.length) {
      otpDigits.value = pasteData.split('');
      event.preventDefault();
    }
  };
  const handleBackspace = (event, index) => {
    if (event.key === 'Backspace' && index > 0 && otpDigits.value[index] === '') {
       event.target.parentNode.previousElementSibling.querySelector('input').focus();
    }
  };
  const OTP = (input, index) => {
    if(isNaN(input.value)){
      input.value = ''
    }else{
      if (index < otpDigits.value.length - 1 && otpDigits.value[index] !== '') {
        input.parentNode.nextElementSibling.querySelector('input').focus();
      }
    }
  };
</script>

<style>

</style>