<template>
  <MainBreadcrumb 
    :route="route.fullPath" 
    name="Register"
    title="Create an Account"
    description="Register for faster checkout, track your order's status, and more"
  />
  <div class="container mx-auto rounded my-12 px-6 lg:px-[133px] py-8" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="md:w-3/4 m-auto">
      <h5 class="flex font-semibold gap-3 text-2xl">
      {{ $t("Welcome back") }}
      <img 
        src="~/assets/images/emoji.svg"
        width="20"
        height="20"
      />
    </h5>
    <p class="text-md mt-2 text-gray-400">{{ $t("Enter your data to enjoy shopping") }}</p>
      <Form
          class="mt-8"
          @submit="onSubmitUser"
          :validation-schema="schema"
          v-slot="{ errors }"
      >
      <div class="form-group mb-8">
        <label for="name" class="text-lg text-primary block">{{ $t("Name") }}</label>
        <Field 
          type="text" 
          placeholder="John"
          :disabled="!loading"
          id="name" 
          name="name" 
          class="rounded bg-gray-100 p-3 outline-none w-full mt-4"
          :class="{ 
            'is-invalid': errors.name,
            'is-valid': !errors.name
          }"
        />
        <div class="invalid-feedback">{{ errors.name }}</div>
      </div>
      <div class="form-group mb-8">
        <label for="email" class="text-lg text-primary block">{{ $t("Email") }}</label>
        <Field 
          type="email" 
          placeholder="example@example.com" 
          id="email" 
          :disabled="!loading"
          name="email" 
          class="rounded bg-gray-100 p-3 outline-none w-full mt-4"
          :class="{ 
            'is-invalid': errors.email,
            'is-valid': !errors.email
          }"
        />
        <div class="invalid-feedback">{{ errors.email }}</div>
      </div>
      <div class="form-group mb-8">
        <label for="password" class="text-lg text-primary block">{{ $t("Password") }}</label>
        <Field 
          type="password" 
          id="password" 
          name="password"
          :disabled="!loading"
          dir="rtl" 
          placeholder="********" 
          class="rounded bg-gray-100 p-3 outline-none w-full mt-4 text-xl"
          :class="{ 
            'is-invalid': errors.password,
            'is-valid': !errors.password
          }"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>
      <div class="form-group">
        <label for="repassword" class="text-lg text-primary block">{{ $t("Confirm Password") }}</label>
        <Field 
          type="password" 
          id="repassword" 
          :disabled="!loading"
          name="repassword"
          dir="rtl" 
          placeholder="********" 
          class="rounded bg-gray-100 p-3 outline-none w-full mt-4 text-xl"
          :class="{ 
            'is-invalid': errors.repassword,
            'is-valid': !errors.repassword
          }"
        />
        <div class="invalid-feedback">{{ errors.repassword }}</div>
      </div>
      <div class="form-group flex justify-between mt-4">
        <nuxt-link :to="localePath('/login')" class="text-primary hover:text-primary-800 transition">{{ $t("Already have an account? Sign in") }}</nuxt-link>
      </div>
      <div class="form-group mt-8">
        <button class="btn w-full rounded-lg" :disabled="store.loading || !loading">
          <span>{{ $t("Register") }} <loading-outlined class="ms-1" v-if="store.loading"/></span> 
          
        </button>
        <div class="flex items-center gap-4 justify-center my-7">
          <span class="bg-gray-300 w-full h-[2px]"></span>
          <span class="text-primary font-semibold shrink-0">{{ $t("Or") }}</span>
          <span class="bg-gray-300 w-full h-[2px]"></span>
        </div>
        <div class="flex flex-col gap-6 mt-5">
          <AuthGoogle></AuthGoogle>
        </div>
      </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
  // imports
  import * as Yup from "yup";
  
  // i18n Package
  const { locale } = useI18n();
  const localePath = useLocalePath()

  // Routes
  const route = useRoute();

  // Vars
  const loading = ref(false);
  const schema = Yup.object().shape({
      name: Yup.string().required("الاسم مطلوب"),
      email: Yup.string().required("البريد مطلوب").email("البريد الالكتروني غير صالح"),
      password: Yup.string()
          .min(8, "كلمة السر يجب ان تكون علي الاقل 8 احرف")
          .required("كلمة السر مطلوبة"),
      repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'كلمة السر غير متطابقة').required()
  });

  // Stores
  const store = useRegisterStore();

  // Functions
  const onSubmitUser = (data) => {
    store.REGISTER(data)
  }

  // SEO
  useHead({
    title: locale.value === 'ar' ? "خيمات زمان - تسجيل حساب جديد" : "Khymat - Register",
    meta: [
      { name: 'description', content: 'Create a new account on Khymat to access exclusive offers, manage your orders, and enjoy a faster checkout process.' }, // Replace with a more specific description highlighting registration benefits
      { name: 'keywords', content: 'register, account, signup, Khymat' }, // Adjust keywords related to registration
      { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - تسجيل حساب جديد" : "Khymat - Register" },
      { property: 'og:description', content: 'Create a new account on Khymat to access exclusive offers, manage your orders, and enjoy a faster checkout process.' }, // Replace with the same description from 'name: 'description''
      { property: 'og:url', content: 'https://khaymatzaman.com/register' }, // Replace with your actual registration page URL
      { property: 'og:type', content: 'website' }, // Use 'website' for general pages
      { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
      { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - تسجيل حساب جديد" : "Khymat - Register" },
      { name: 'twitter:description', content: 'Create a new account on Khymat to access exclusive offers, manage your orders, and enjoy a faster checkout process.' }, // Replace with the same description from 'name: 'description''
      { name: 'twitter:card', content: 'summary' }, // Use 'summary' for general pages
    ],
  })
  onMounted(() => {
    loading.value = true
  })
</script>

<style scoped lang="scss">


</style>