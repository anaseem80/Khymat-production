<template>
    <Menu as="div" class="flex items-center relative">
        <div>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems 
              class="absolute bg-white shadow-lg w-[150px] rounded border mt-4 outline-none dropdown-user z-20" 
              :dir="locale == 'ar' ? 'rtl' : 'ltr'"
              :class="{ 
                'right-0': locale == 'ar',
                'left-0': locale == 'en',
              }"
            >
                <ul>
                    <li class="flex items-center gap-2 p-2 hover:bg-primary hover:text-white transition-all cursor-pointer hover:-translate-x-1" @click="setLang()">
                        <img
                          v-if="locale == 'ar'"
                          src="~/assets/images/flags/USA.svg"
                          class="w-5 h-5 max-w-5 max-h-5"
                        />
                        <img
                          v-else
                          src="~/assets/images/flags/UAE.png"
                          class="w-5 h-3 max-w-5 max-h-5"
                        />
                        <span>{{locale == 'en' ? "العربية" : "English"}}</span>
                    </li>
                </ul>
            </MenuItems>
          </transition>
        </div>
        <MenuButton class="border-0 md:border-r-2 pr-1 md:pr-5 flex items-end gap-2">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path class="text-white" stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
            <img
              v-if="locale == 'ar'"
              src="~/assets/images/flags/UAE.png"
              class="w-5 h-3 max-w-5 max-h-5"
            />
            <img
              v-else
              src="~/assets/images/flags/USA.svg"
              class="w-5 h-5 max-w-5 max-h-5"
            />
        </MenuButton>
    </Menu>

</template>

<script setup>
  // Imports
  import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

  // i18n Package
  const { locale, setLocale } = useI18n();

  const setLang = () =>{
    setLocale(locale.value == 'ar' ? "en" : "ar");
    setTimeout(() => {
      window.location.reload()
    }, 500);
  }
</script>

<style>

</style>