<template>
<Menu v-if="useCookie('token').value" as="div" class="flex items-center gap-3 relative">
    <div class="relative">
    <MenuButton as="div" class="cursor-pointer dropdown font-medium">
        <div class="w-[42px] h-[42px] rounded-full overflow-hidden text-center flex justify-center items-center border bg-gray-100">
            <NuxtImg
                :src="mainStore.route + mainStore.settings['logo']"
                class="w-full h-full translate-x-[-.5px] transition-all"
                v-if="!mainStore.loading_settings"
                placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
            />
        </div>
    </MenuButton>
    <UserMenu />
    </div>
</Menu>
</template>

<script setup>
    // Imports
    import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

    // Stores
    const mainStore = useMainStoreStore();
</script>

<style lang="scss" scoped>

</style>