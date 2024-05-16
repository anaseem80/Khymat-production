<template>
  <div class="mt-8">
    <div class="border rounded-lg">
      <p class="border-b px-6 py-4 mb-4 font-bold">تغيير كلمة المرور</p>
      <div class="flex md:flex-row flex-col p-4 gap-8">
        <Form
            class="w-full"
            v-slot="{ errors }"
            @submit="onSubmitPassword"
            :validation-schema="PasswordSchema"
        >
        <div class="grid md:grid-cols-1 gap-4">
          <div class="form-group">
            <!-- <a-skeleton-input active style="width: 200px" /> -->
            <label for="old_password" class="text-lg block">كلمة المرور الحالية</label>
            <div class="relative">
              <Field 
                :type="!show[0] ? 'password' : 'text'" 
                dir="rtl" 
                id="old_password" 
                name="old_password" 
                class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
                :class="{ 
                  'is-invalid': errors.new_password,
                }"  
              />
              <svg v-if="!show[0]" @click="show[0] = !show[0]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-7 left-5 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <svg v-if="show[0]" @click="show[0] = !show[0]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-7 left-5 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>

            <div class="invalid-feedback">{{ errors.old_password }}</div>
          </div>
          <div class="form-group">
            <label for="new_password" class="text-lg block">كلمة المرور الجديدة</label>
            <div class="relative">
              <Field 
                :type="!show[1] ? 'password' : 'text'" 
                dir="rtl" 
                id="new_password" 
                name="new_password" 
                class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
                :class="{ 
                  'is-invalid': errors.new_password,
                }"
              />
              <svg v-if="!show[1]" @click="show[1] = !show[1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-7 left-5 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <svg v-if="show[1]" @click="show[1] = !show[1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-7 left-5 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>
            <div class="invalid-feedback">{{ errors.new_password }}</div>
          </div>
          <div class="form-group">
            <label for="new_password_confirmation" class="text-lg block">تأكيد كلمة المرور</label>
            <div class="relative">
              <Field 
                :type="!show[2] ? 'password' : 'text'" 
                dir="rtl" 
                id="new_password_confirmation" 
                name="new_password_confirmation" 
                class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
                :class="{ 
                  'is-invalid': errors.new_password_confirmation,
                }"
              />
              <svg v-if="!show[2]" @click="show[2] = !show[2]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-7 left-5 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <svg v-if="show[2]" @click="show[2] = !show[2]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-7 left-5 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>
            <div class="invalid-feedback">{{ errors.new_password_confirmation }}</div>
          </div>
        </div>
        <button :disabled="MyProfileStore.loading_password" class="btn mt-6">
          
          <span class="translate-y-[-4px]">حفظ التغييرات <loading-outlined class="ms-1" v-if="MyProfileStore.loading_password"/></span> 
        </button>
      </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Imports
  import * as Yup from "yup";

  // Vars
  const show = ref([false, false, false])

  // Stores
  const MyProfileStore = useMyProfileStore();
  const PasswordSchema = Yup.object().shape({
      old_password: Yup.string()
          .required("كلمة السر مطلوبة"),
      new_password: Yup.string()
          .min(8, "كلمة السر يجب أن تكون علي الأقل 8 كلمات")
          .required("كلمة السر مطلوبة"),
      new_password_confirmation: Yup.string().oneOf([Yup.ref('new_password'), null], 'كلمة السر غير متطابقة').required("كلمة السر مطلوبة"),
  });

  // Functions
  const onSubmitPassword = (passwords) =>{
    MyProfileStore.UPDATE_USER_PASSWORD(passwords)
  }
</script>

<style>

</style>