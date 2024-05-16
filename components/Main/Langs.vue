<template>
    <Menu as="div" class="flex items-center relative">
        <div class="relative">
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute bg-white shadow-lg w-[150px] rounded left-0 border mt-4 outline-none dropdown-user z-20" dir="rtl">
                <ul>
                    <li class="">
                        <nuxt-link to="/">
                            <img 
                              src="~/assets/images/USA.svg"
                              class="w-5 h-5"
                            />
                            English
                        </nuxt-link>
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
            <p class="text-white font-medium hovering-option">عربي</p>
          </div>
            <img
              src="~/assets/images/eg.svg"
              class="w-5 h-5 max-w-5 max-h-5"
            />
        </MenuButton>
    </Menu>

</template>

<script lang="ts" setup>

  // Imports
  import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

</script>

<style>

</style>