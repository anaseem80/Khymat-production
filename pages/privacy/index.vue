<template>
  <MainBreadcrumb 
    :route="route.fullPath" 
    :name="'Privacy Policy'"
    title="Privacy Policy"
    description="Check all your categories to get what brand your needs"
  />
  <div class="px-6 lg:px-[133px] py-16 flex flex-col md:flex-row gap-8" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="w-full">
      <h4 class="text-zinc-900 text-xl font-semibold leading-[30px] mb-3">{{ $t("Privacy Policy") }}</h4>
      <p v-if="MySidePagesStore.privacy['privacy']">
        {{ MySidePagesStore.privacy['privacy'] }}
      </p>
      <p v-else>
        <a-skeleton-button class="progress mt-4" active block/>
      </p>
    </div>
  </div>
</template>

<script setup>
  // i18n Package
  const { locale } = useI18n();

  const route = useRoute();

  // Stores
  const MySidePagesStore = useMySidePagesStore()
  MySidePagesStore.GET_PRIVACY()
  
  // SEO
  useHead({
    title: locale.value === 'ar' ? "خيمات زمان - سياسة الخصوصيه" : "Khymat - Privacy Policy",
    meta: [
      { name: 'description', content: 'Review our privacy policy to understand how we collect, use, and protect your personal information.' },
      { name: 'keywords', content: 'privacy, policy, data, information, Khymat' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - سياسة الخصوصيه" : "Khymat - Privacy Policy" },
      { property: 'og:description', content: 'Review our privacy policy to understand how we collect, use, and protect your personal information.' },
      { property: 'og:url', content: 'https://khaymatzaman.com/privacy-policy' }, // Replace with your privacy policy page URL
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
      { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - سياسة الخصوصيه" : "Khymat - Privacy Policy" },
      { name: 'twitter:description', content: 'Review our privacy policy to understand how we collect, use, and protect your personal information.' },
      { name: 'twitter:card', content: 'summary_large_image' }, // Change to 'summary' if you don't have a privacy policy image
    ],
  })
</script>

<style>

</style>