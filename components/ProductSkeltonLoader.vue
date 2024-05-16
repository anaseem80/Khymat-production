<template>
<div 
    class="rounded-md transition h-full relative"
>
    <div class="relative border transition w-full h-[469px] rounded-md overflow-hidden flex justify-center items-center">
        <a-skeleton-button class="skelton-img" active block/>
        <div class="w-[73px] h-[29px] px-2 py-1 rounded justify-start items-center gap-2.5 inline-flex absolute top-4 left-4">
            <div class="text-zinc-900 text-sm font-medium capitalize leading-[21px]"><a-skeleton-button active block/></div>
        </div>
    </div>
    <div class="mt-4">
        <transition name="fade" mode="out-in">
            <div class="w-1/2"><a-skeleton-button active block/></div>
        </transition>
        <transition name="fade" mode="out-in">
            <a-skeleton-button class="progress mt-4" active block/>
        </transition>
        <div class="flex justify-between mt-1 items-center">
            <div class="flex flex-col items-center">
                <transition name="fade" mode="out-in">
                    <a-skeleton-button class="progress mt-4" active/>
                </transition>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
</script>

<style>

</style>