<template>
 <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <MenuItems 
        class="absolute bg-white shadow-lg w-[264px] rounded border mt-4 outline-none dropdown-user z-20" 
        dir="rtl"
        :class="{ 
          'left-0': locale == 'ar',
          'right-0': locale == 'en',
        }"
    >
        <UserItems></UserItems>
    </MenuItems>
</transition>
</template>

<script setup>
    // Imports
    import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

    // i18n Package
    const { locale } = useI18n();
</script>

<style>

</style>