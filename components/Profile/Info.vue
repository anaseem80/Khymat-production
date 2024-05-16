<template>
  <div class="rounded-lg bg-white p-3 w-full md:w-8/12 m-auto relative">
    <span class="absolute left-2 md:left-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="close-modal text-gray-600 hover:text-red-600 w-6 h-6 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </span>
    <div v-if="!MyProfileStore.loading">
      <p class="border-b px-6 py-4 mb-4 font-bold"><a-skeleton-button active class="progress"/></p>
      <div class="flex md:flex-row flex-col p-4 gap-8">
        <div
            class="w-full"
        >
        <div class="grid md:grid-cols-1 gap-4">
          <div class="form-group mb-6" v-for="item in 3">
            <label for="name" class="text-lg block mb-4"><a-skeleton-button active class="progress"/></label>
            <a-skeleton-button active class="progress" block/>
          </div>
        </div>
        <button class="mt-6 bg-transparent">
          <span class="translate-y-[-4px]"><a-skeleton-button active class="progress" block/></span> 
        </button>
        </div>
      </div>
    </div>
    <div v-if="MyProfileStore.loading">
      <p class="border-b px-6 py-4 mb-4 font-bold">{{ $t("Profile Details") }}</p>
      <div class="flex md:flex-row flex-col p-4 gap-8">
        <Form
            class="w-full"
            @submit="onSubmitInfo"
            v-slot="{ errors }"
            :validation-schema="InfoSchema"
        >
        <div class="grid md:grid-cols-1 gap-4">
          <div class="form-group">
            <label for="name" class="text-lg block">{{ $t("Name") }}</label>
            <Field 
              type="text" 
              dir="rtl" 
              id="name" 
              name="name"
              v-model="MyProfileStore.user.name"
              class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
            />
          </div>
          <div class="form-group">
            <label for="email" class="text-lg block">{{ $t("Email") }}</label>
            <Field 
              type="email" 
              dir="rtl" 
              id="email" 
              v-model="MyProfileStore.user.email"
              :class="{ 
                'is-invalid': errors.email,
              }"
              name="email" 
              class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
            />
            <div class="invalid-feedback">{{ errors.email }}</div>
          </div>
        </div>
        <button :disabled="MyProfileStore.loading_edit" class="btn mt-6">
          
          <span class="translate-y-[-4px]">{{ $t("Save Changes") }} <loading-outlined class="ms-1" v-if="MyProfileStore.loading_edit"/></span> 
        </button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Imports
  import * as Yup from "yup";

  // Stores
  const MyProfileStore = useMyProfileStore();
  MyProfileStore.GET_USER();

  // Vars
  const InfoSchema = Yup.object().shape({
    name: Yup.string().nullable(true),
    email: Yup.string().required('البريد الإلكتروني مطلوب').email('البريد الإلكتروني غير صالح').nullable(true),
    phone: Yup.string().nullable(true)
  });

  // Functions
  const onSubmitInfo = (info) =>{
    if(!info.name)
      delete info.name
    if(!info.phone)
      delete info.phone
    MyProfileStore.EDIT_USER_INFO(info)
  }
</script>

<style>

</style>