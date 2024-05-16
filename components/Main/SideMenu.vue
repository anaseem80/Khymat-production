<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mainStore.$state.menuOpen">
      <Dialog as="div" class="relative z-40 md:hidden" @close="mainStore.ToggleMenu()">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25"></div>
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex" dir="rtl">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl justify-between">
              <div>
                <div class="flex justify-between items-center px-4 py-4 border-b border-gray-100">
                  <p class="text-lg text-primary">{{ $t("Menu") }}</p>
                  <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="mainStore.ToggleMenu()">
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <TabGroup as="div" class="mt-2">
                  <TabPanels as="template">
                    <TabPanel class="space-y-10 px-4 pb-8 pt-4">
                      <ul class="flex flex-col gap-3">
                        <li>
                          <nuxt-link :to="localePath(`/terms`)" class="block w-full border-b border-gray-100 pb-3 text-lg">{{ $t("Terms and Condition") }}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath(`/privacy`)" class="block w-full border-b border-gray-100 pb-3 text-lg">{{ $t("Privacy Policy") }}</nuxt-link>
                        </li>
                      </ul>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
              </div>


              <div class="text-center">
                <!-- <p>Copyrights to Al-Ahram 2024</p> -->
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
  // Imports
  import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue'
  import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'

  // Stores
  const mainStore = useMainStoreStore();
  const localePath = useLocalePath()
</script>

<style>

</style>