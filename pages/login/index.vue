<template>
  <StepsOtpModal/>
  <MainBreadcrumb 
    :route="route.fullPath" 
    name="Login"
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
        <div class="form-group">
          <label for="password" class="text-lg text-primary block">{{ $t("Password") }}</label>
          <Field 
            type="password" 
            id="password" 
            name="password"
            :disabled="!loading"
            placeholder="********" 
            class="rounded bg-gray-100 p-3 outline-none w-full mt-4 text-xl"
            :class="{ 
              'is-invalid': errors.password,
              'is-valid': !errors.password
            }"
          />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>
        <div class="form-group flex justify-between mt-4">
          <nuxt-link :to="localePath('/register')" class="text-primary hover:text-orange-800 transition">{{ $t("Don't have an account ?") }}</nuxt-link>
          <nuxt-link to="#" class="text-primary hover:text-orange-800 transition" @click="ForgetPassword()">{{ $t("Forget password ?") }}</nuxt-link>
        </div>
        <div class="form-group mt-8">
          <button class="btn w-full rounded-lg" :disabled="store.loading || !loading">
            <span class="translate-y-[-2px]">{{ $t("Login") }} <loading-outlined class="ms-1" v-if="store.loading"/></span> 
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

  // Imports
  import * as Yup from "yup";

  // i18n Package
  const localePath = useLocalePath()
  const { locale } = useI18n();

  
  // Stores
  const store = useLoginStore();
  const mainStore = useMainStoreStore();

  // Vars
  const schema = Yup.object().shape({
      email: Yup.string().required("البريد مطلوب").email("البريد الالكتروني غير صالح"),
      password: Yup.string()
        .min(8, "كلمة السر يجب ان تكون علي الاقل 8 احرف")
        .required("كلمة السر مطلوبة"),
  });
  const route = useRoute();
  const loading = ref(false);

  // Functions
  const onSubmitUser = (data) => {
    store.LOGIN(data, locale.value)
  }
  const ForgetPassword = (data) => {
    mainStore.Verfiy_Modal()
    mainStore.swiper.slideTo(1);
  }

  // SEO
  useHead({
    title: locale.value === 'ar' ? `خيمات زمان - تسجيل دخول` : `Khymat - Login`,
    meta: [
      { name: 'description', content: 'Sign in to your Khymat account to access your orders, saved items, and more.' },
      { name: 'keywords', content: 'login, account, sign in, user authentication, Khymat' },
      { property: 'og:title', content: locale.value === 'ar' ? `خيمات زمان - تسجيل دخول` : `Khymat - Login` },
      { property: 'og:description', content: 'Sign in to your Khymat account to access your orders, saved items, and more.' },
      { property: 'og:url', content: 'https://khaymatzaman.com/login' }, // Replace with your login page URL
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
      { name: 'twitter:title', content: locale.value === 'ar' ? `خيمات زمان - تسجيل دخول` : `Khymat - Login` },
      { name: 'twitter:description', content: 'Sign in to your Khymat account to access your orders, saved items, and more.' },
      { name: 'twitter:card', content: 'summary' }, // Change to 'summary_large_image' if you have a login image
    ],
  })
  onMounted(() => {
    loading.value = true
  })
</script>

<style scoped lang="scss">


</style>