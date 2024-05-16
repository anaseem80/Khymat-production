<template>
  <MainBreadcrumb 
    :route="route.fullPath" 
    :name="'FAQ'"
    title="FAQ"
    description="Check all your categories to get what brand your needs"
  />
  <div class="px-6 lg:px-[133px] py-16 flex flex-col md:flex-row gap-8" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="w-full">
      <p v-if="MySidePagesStore.loading_faq">
        <a-skeleton-button class="progress mt-4" active block/>
      </p>
      <div class="accordion flex flex-col gap-4" v-else>
        <div
          v-for="(item, index) in MySidePagesStore.faq"
          :key="index"
          class="accordion-item py-2 px-4 border rounded-md focus:outline-none w-full"
        >
          <button
            @click="toggleAccordion(index)"
            class="accordion-title flex justify-between items-center w-full"
          >
            <span 
            class="font-bold"
            :class="{
              'text-right': locale == 'ar',
              'text-start': locale == 'en',
            }"
            >{{ item.question }}</span>
            <svg v-if="isOpen(index)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="min-w-6 min-h-6 max-w-6 max-h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="min-w-6 min-h-6 max-w-6 max-h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

          </button>
          <div
            v-show="isOpen(index)"
            class="accordion-content mt-4"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // i18n Package
  const { locale } = useI18n();

  const route = useRoute();

  // Variables
  const openIndex = ref(null)

  // Store
  const MySidePagesStore = useMySidePagesStore()
  MySidePagesStore.GET_FAQ()

  // Functions
  const toggleAccordion = (index) => {
    if (openIndex.value === index) {
      openIndex.value = null;
    } else {
      openIndex.value = index;
    }
  }
  const isOpen = (index) => {
    return openIndex.value === index;
  }

  // SEO
  useHead({
    title: locale.value === 'ar' ? "خيمات زمان - الأسئله الشائعه" : "Khymat - FAQ",
    meta: [
      { name: 'description', content: 'Find answers to common questions about Khymat, our products, and ordering.' },
      { name: 'keywords', content: 'faq, questions, answers, support, Khymat' },
      { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - الأسئله الشائعه" : "Khymat - FAQ" },
      { property: 'og:description', content: 'Find answers to common questions about Khymat, our products, and ordering.' },
      { property: 'og:url', content: 'https://khaymatzaman.com/faq' }, // Replace with your FAQ page URL
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
      { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - الأسئله الشائعه" : "Khymat - FAQ" },
      { name: 'twitter:description', content: 'Find answers to common questions about Khymat, our products, and ordering.' },
      { name: 'twitter:card', content: 'summary_large_image' }, // Change to 'summary' if you don't have an FAQ image
    ],
  })
</script>

<style>

</style>