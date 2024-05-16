<template>
  <MainBreadcrumb 
    :route="route.fullPath" 
    :name="'Terms and Condition'"
    title="Terms and Condition"
    description="Check all your categories to get what brand your needs"
  />
  <div class="px-6 lg:px-[133px] py-16 flex flex-col md:flex-row gap-8" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="w-full">
      <h4 class="text-zinc-900 text-xl font-semibold leading-[30px] mb-3">{{ $t("Terms and Condition") }}</h4>
      <p v-if="MySidePagesStore.terms['terms']">
        {{ MySidePagesStore.terms['terms'] }}
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

  // Route
  const route = useRoute();

  // Stores
  const MySidePagesStore = useMySidePagesStore()
  MySidePagesStore.GET_TERMS()

  // SEO
  useHead({
      title: locale.value == 'ar' ? "خيمات زمان - الشروط والأحكام" : "Khymat - Terms and conditions",
      meta: [
        { name: 'description', content: 'Read the terms and conditions governing your use of the Khymat platform. This includes information about user accounts, purchases, and more.' }, // Replace with a more specific description summarizing your terms and conditions
        { name: 'keywords', content: 'terms, conditions, Khymat, user agreement' }, // Adjust keywords related to legal documents
        { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - الشروط والأحكام" : "Khymat - Terms and conditions" },
        { property: 'og:description', content: 'Read the terms and conditions governing your use of the Khymat platform. This includes information about user accounts, purchases, and more.' }, // Replace with the same description from 'name: 'description''
        { property: 'og:url', content: 'https://khaymatzaman.com/terms' }, // Replace with your actual terms and conditions page URL
        { property: 'og:type', content: 'website' }, // Use 'website' for general pages
        { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
        { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - الشروط والأحكام" : "Khymat - Terms and conditions" },
        { name: 'twitter:description', content: 'Read the terms and conditions governing your use of the Khymat platform. This includes information about user accounts, purchases, and more.' }, // Replace with the same description from 'name: 'description''
        { name: 'twitter:card', content: 'summary' }, // Use 'summary' for general pages
      ],
  })
</script>

<style>

</style>