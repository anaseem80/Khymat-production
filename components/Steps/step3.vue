<template>
  <Form 
    class="step-3 shrink-0"
    :validation-schema="reset_password_schema"
    @submit="reset_password"
    v-slot="{ errors }"
    :dir="locale == 'ar' ? 'rtl' : 'ltr'"
  >
    <StepsHeader />
    <p class="md:text-xl font-bold mb-4">{{ $t("Create a new password") }}</p>
    <p class="text-gray-400">{{ $t("Please enter a new password. The new password must be different from the previous password.") }}</p>
    <div class="flex gap-4 my-5 flex-wrap justify-start">
      <Field
          type="password"
          name="new_password"
          id="new_password"
          :placeholder="$t(`Password`)"
          :class="{ 
            'is-invalid': errors.new_password,
            'is-valid': !errors.new_password
          }"
          class="w-full bg-gray-100 rounded-lg  p-3 outline-none focus:border border focus:border-primary"
      />
      <Field
          type="password"
          name="new_password_confirmation"
          id="new_password_confirmation"
          :placeholder="$t(`Confirm Password`)"
          :class="{ 
            'is-invalid': errors.new_password_confirmation,
            'is-valid': !errors.new_password_confirmation
          }"
          class="w-full bg-gray-100 rounded-lg  p-3 outline-none focus:border border focus:border-primary"
      />
    </div>

    <div class="flex items-center justify-between mt-8">
      <button class="btn w-full rounded-lg" :disabled="reset_store.loading" dir="rtl">
        <span class="translate-y-[-2px]">{{ $t("Continue") }}  <loading-outlined class="ms-2" v-if="reset_store.loading"/></span> 
      </button>
    </div>
  </Form>
</template>

<script setup>
  // Imports
  import * as Yup from "yup";

  // Stores
  const reset_store = useResetPasswordStore();
  const mainStore = useMainStoreStore();

  // i18n Package
  const { locale } = useI18n();

  // Vars
  const reset_password_schema = Yup.object().shape({
    new_password: Yup.string()
        .min(8, "كلمة السر يجب ان تكون علي الاقل 8 احرف")
        .required("كلمة السر مطلوبة"),
    new_password_confirmation: Yup.string()
      .oneOf([Yup.ref('new_password'), null], 'كلمة السر غير متطابقة').required()

  });

  // Functions
  const reset_password = (data) =>{
    reset_store.RESET_PASSWORD(data)
  }
</script>

<style>

</style>