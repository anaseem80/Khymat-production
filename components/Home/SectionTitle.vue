<template>
<div class="flex-col sm:flex-row flex gap-5 sm:gap-0 sm:items-end justify-between">
    <div class="shrink-0 flex gap-4 items-start">
        <div>
            <h1 class="font-semibold md:text-2xl mb-3 flex gap-3 uppercase">{{ $t(props.title) }}</h1>
            <p class="text-neutral-500 tracking-tight text-xs md:text-sm font-bold">{{ $t(props.description) }}</p>
        </div>
    </div>
    <nuxt-link :to="localePath(props.route)" class="shrink-0 flex flex-col-reverse text-primary items-end gap-2 text-xs md:text-2xl font-semibold hover:*:translate-x-1 hover:text-primary transition">
        {{ $t("Explore All") }}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Right">
                <path id="Vector" d="M18.0915 11L23.0582 6.88388C23.6473 6.39573 23.6473 5.60427 23.0582 5.11612L18.0915 1M22.6164 6L1.5 6" stroke="#964F82" stroke-width="2" stroke-linecap="round"/>
            </g>
        </svg>
    </nuxt-link>
</div>
</template>

<script lang="ts" setup>
  // Props
  const props = defineProps(['title', 'description', 'route'])

  // i18n Package
  const localePath = useLocalePath()
</script>

<style>

</style>