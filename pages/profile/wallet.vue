<template>
  <ProfileBreadcrumb />
  <div class="px-6 lg:px-[133px] py-16 flex flex-col md:flex-row gap-8" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <ProfileTabs />
    <div class="w-full">
      <h4 class="text-zinc-900 text-xl font-semibold leading-[30px] mb-3">{{ $t("My Wallet") }}</h4>
      <p>
        0 {{ $t("AED") }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
    // i18n Package
    const { locale } = useI18n();
    const localePath = useLocalePath()

    useHead({
      title: locale.value == 'ar' ? "خيمات زمان - المحفظه" : "Khymat - Wallet",
      meta: [
        { name: 'description', content: 'Manage your payment methods, transaction history, and view your wallet balance on Khymat.' }, // Replace with a more specific description relevant to your wallet page functionalities
        { name: 'keywords', content: 'wallet, payment, transaction, balance, Khymat' }, // Adjust keywords related to wallet functionalities
        { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - المحفظه" : "Khymat - Wallet" },
        { property: 'og:description', content: 'Manage your payment methods, transaction history, and view your wallet balance on Khymat.' }, // Replace with the same description from 'name: 'description''
        { property: 'og:url', content: 'https://khaymatzaman.com/wallet' }, // Replace with your actual wallet page URL
        { property: 'og:type', content: 'website' }, // Use 'website' for general pages
        { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
        { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - المحفظه" : "Khymat - Wallet" },
        { name: 'twitter:description', content: 'Manage your payment methods, transaction history, and view your wallet balance on Khymat.' }, // Replace with the same description from 'name: 'description''
        { name: 'twitter:card', content: 'summary' }, // Use 'summary' for general pages
      ],
    })

    onMounted(() => {
      if(!useCookie('token').value){
        navigateTo(localePath('/login'))
      }
    })
</script>

<style>

</style>