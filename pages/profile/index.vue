<template>
  <ProfileBreadcrumb />
  <div class="px-6 lg:px-[133px] py-16 flex flex-col md:flex-row gap-8" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <ProfileTabs />
    <div class="w-full">
      <!-- <div class="bg-white rounded-xl" dir="rtl">
        <button class="text-red-500 text-base font-semibold flex gap-2 hover:bg-primary hover:text-white p-3 transition-all rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
          {{ $t("Delete account") }}
        </button>
      </div> -->
      <div v-if="!MyProfileStore.loading">
        <div class="flex md:flex-row flex-col gap-8">
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
      <div class="grid md:grid-cols-2 gap-8" v-else>
        <div class="flex-col justify-start items-start gap-4 inline-flex mt-6">
          <div class="justify-between items-center gap-2 flex w-full">
            <div class="grow shrink basis-0 text-zinc-900 text-xl font-semibold leading-[30px]">{{ $t("Profile Details") }}</div>
            <button class="btn h-8 px-3 py-1.5 rounded-lg justify-center items-center gap-3 flex" @click="hasClikedOutsideProf = !hasClikedOutsideProf">
              <span>{{ $t("Edit") }}</span>
            </button>
          </div>
          <div class="h-[.5px] bg-gray-100 w-full"></div>
          <div class="flex-col justify-start items-start gap-6 flex">
            <div class="flex-col justify-start items-start gap-1 flex">
              <div class="text-gray-400 font-medium leading-normal">{{ $t("Name") }}</div>
              <div class="text-zinc-900 font-medium leading-normal">{{ MyProfileStore.user.name }}</div>
            </div>
            <div class="flex-col justify-start items-start gap-1 flex">
              <div class="text-gray-400 font-medium leading-normal">{{ $t("Email Address") }}</div>
              <div class="text-gray-900 font-medium leading-normal">{{ MyProfileStore.user.email }}</div>
            </div>
            <div class="flex-col justify-start items-start gap-1 flex" v-if="MyProfileStore.user.phone">
              <div class="text-gray-400 font-medium leading-normal">{{ $t("Phone Number") }}</div>
              <div class="text-zinc-900 font-medium leading-normal">{{ MyProfileStore.user.phone }}</div>
            </div>
          </div>
        </div>
        <div class="flex-col justify-start items-start gap-4 inline-flex mt-6">
          <div class="justify-between items-center gap-2 flex w-full">
            <div class="grow shrink basis-0 text-zinc-900 text-xl font-semibold leading-[30px]">{{ $t("Addresses") }}</div>
            <button class="btn h-8 px-3 py-1.5 rounded-lg justify-center items-center gap-3 flex" @click="hasClikedOutside = !hasClikedOutside">
              <span>{{ $t("Add Address") }}</span>
            </button>
          </div>
          <div class="h-[.5px] bg-gray-100 w-full"></div>
          <AddressesAll />
        </div>
      </div>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-100" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div class="backdrop-blur-sm grid fixed inset-0 z-50 bg-gray-500 bg-opacity-50 p-3 overflow-y-scroll" v-if="hasClikedOutside" @click="clickedOutside($event.target)">
        <AddressesInsert :modal="true" />
      </div>
    </transition>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-100" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div class="backdrop-blur-sm grid fixed inset-0 z-50 bg-gray-500 bg-opacity-50 p-3 overflow-y-scroll" v-if="hasClikedOutsideProf" @click="clickedOutsideProfile($event.target)">
        <ProfileInfo />
      </div>
    </transition>
    <!-- <ProfileInfo />
    
    <AddressesAll />
    <ProfilePassword /> -->
  </div>
</template>

<script setup>
    // i18n Package
    const { locale } = useI18n();
    const localePath = useLocalePath();

    // Stores
    const MyProfileStore = useMyProfileStore();
    MyProfileStore.GET_USER();

    // Vars
    const hasClikedOutside = ref(false)
    const hasClikedOutsideProf = ref(false)
    
    // Functions
    const clickedOutside = (target) => {
      if (target.classList.contains('close-modal') || target.classList.contains('backdrop-blur-sm')) {
        hasClikedOutside.value = !hasClikedOutside.value
      }
    }
    const clickedOutsideProfile = (target) => {
      if (target.classList.contains('close-modal') || target.classList.contains('backdrop-blur-sm')) {
        hasClikedOutsideProf.value = !hasClikedOutsideProf.value
      }
    }

    onMounted(() => {
      if(!useCookie('token').value){
        navigateTo(localePath('/login'))
      }
    })
    useHead({
      title: locale.value === 'ar' ? "خيمات زمان - الملف الشخصي" : "Khymat - Profile",
      meta: [
        { name: 'description', content: 'View or edit your profile information on Khymat.' }, // Replace with a more specific description relevant to your profile page
        { name: 'keywords', content: 'profile, user, account, Khymat' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: locale.value === 'ar' ? "خيمات زمان - الملف الشخصي" : "Khymat - Profile" },
        { property: 'og:description', content: 'View or edit your profile information on Khymat.' }, // Replace with the same description from 'name: 'description''
        { property: 'og:url', content: 'https://khaymatzaman.com/profile' }, // Replace with your actual profile page URL
        { property: 'og:type', content: 'profile' }, // Use 'profile' for profile pages
        { property: 'og:locale', content: locale.value === 'ar' ? 'ar_AR' : 'en_US' },
        { name: 'twitter:title', content: locale.value === 'ar' ? "خيمات زمان - الملف الشخصي" : "Khymat - Profile" },
        { name: 'twitter:description', content: 'View or edit your profile information on Khymat.' }, // Replace with the same description from 'name: 'description''
        { name: 'twitter:card', content: 'summary' }, // Use 'summary' for profile pages
      ],
    })
</script>

<style>

</style>