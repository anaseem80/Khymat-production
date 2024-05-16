<template>
 <Form 
    class="step-1 shrink-0"
    :dir="locale == 'ar' ? 'rtl' : 'ltr'"
    :validation-schema="schema"
    @submit="set_user_email"
    v-slot="{ errors }"
  >
    <StepsHeader />
    <p class="md:text-xl font-bold mb-4">{{ $t("Change your password") }}</p>
    <p class="text-gray-400">{{ $t("Please enter your email") }}</p>
    <div class="flex gap-4 my-5 flex-wrap justify-start">
      <Field
        type="email"
        id="email" 
        name="email" 
        :class="{ 
          'is-invalid': errors.email,
          'is-valid': !errors.email
        }"
        v-model="typed_email"
        :placeholder="$t('Email')"
        class="w-full bg-gray-100 rounded-lg  p-3 outline-none focus:border border focus:border-primary"
      />
    </div>
    <p class="text-gray-400 cursor-pointer" @click="mainStore.Verfiy_Modal('close')">{{ $t("Return to login") }}</p>
    <div class="flex items-center justify-between mt-8">
      <button class="btn w-full rounded-lg" :disabled="forget_store.loading" dir="rtl">
        <span class="translate-y-[-2px]">{{ $t("Continue") }} <loading-outlined class="ms-2" v-if="forget_store.loading"/></span> 
      </button>
    </div>
  </Form>
</template>

<script setup>
  // Imports
  import * as Yup from "yup";

  // Stores
  const mainStore = useMainStoreStore();
  const forget_store = useForgetPasswordStore();

  // i18n Package
  const { locale } = useI18n();

  // Vars
  const schema = Yup.object().shape({
    email: Yup.string().required("البريد مطلوب").email("البريد الالكتروني غير صالح"),
  });

  // Functions
  const set_user_email = (data) =>{
    forget_store.FORGET_PASSWORD(data)
  }
</script>

<style>

</style>