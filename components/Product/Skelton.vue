<template>
<transition name="fade" mode="out-in">
    <div v-if="ProductStore.loading">
        <div key="loading">
        <h1 class="hidden md:block md:text-3xl">
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <div>
                    <div class="md:w-[300px] w-20"><a-skeleton-button active class="progress" block/></div>
                </div>
            </transition>
        </h1>

        <div class="flex flex-wrap justify-between items-center md:mt-8">
            <div class="flex items-center gap-4">
                <span class="text-gray-400">
                    <a-skeleton-button active class="progress" block/>
                </span>
                <div>
                    <a-skeleton-button active class="progress" block/>
                </div>
            </div>
        </div>
        <div class="flex gap-4 items-center my-8">
            <span class="font-bold md:text-xl"> 
                <a-skeleton-button active class="progress" block/>
            </span>
            <span class="font-bold md:text-xl"> 
                <a-skeleton-button active class="progress" block/>
            </span>
        </div>
        <div class="flex justify-between gap-4 items-center my-8">
            <span class="font-bold md:text-xl"> 
                <a-skeleton-button active class="progress" block/>
            </span>
            <div>
                <div class="md:w-[250px] w-20"><a-skeleton-button active class="progress" block/></div>
            </div>
        </div>
        <div class="flex justify-between gap-4 items-start my-8">
            <div>
                <span class="font-bold md:text-xl"> 
                    <a-skeleton-button active class="progress" block/>
                </span>
                <div>
                    <a-skeleton-button active class="progress"/>
                </div>
                <div class="flex flex-wrap gap-4 md:gap-8 my-4">
                    <div class="flex gap-4 items-center">
                        <a-skeleton-button active class="progress"/>
                        <div>
                            <p class="text-sm leading-normal">
                                <a-skeleton-button active class="progress"/>
                            </p>
                            <p class="text-neutral-400 text-xs mt-2">
                                <a-skeleton-button active class="progress"/>
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center">
                    <a-skeleton-button active class="progress"/>
                    <div>
                        <p class="text-sm leading-normal">
                            <a-skeleton-button active class="progress"/>
                        </p>
                        <p class="text-neutral-400 text-xs mt-2">
                            <a-skeleton-button active class="progress"/>
                        </p>
                    </div>
                </div>
                </div>
            </div>
            <div class="flex items-center">
                <div>
                    <a-skeleton-button active class="progress" block/>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-4">
            <a-skeleton-button active class="col-span-1" block/>
            <a-skeleton-button active class="col-span-2" block/>
            <a-skeleton-button active class="col-span-1" block/>
        </div>
        </div>
    </div>
</transition>
</template>

<script lang="ts" setup>
    // Stores
    const ProductStore = useProductStore()
</script>

<style>

</style>