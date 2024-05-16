<template>
  <MainBreadcrumb 
    :route="route.fullPath" 
    :name="'Profile'"
    title="Profile"
    description="Register for faster checkout, track your order's status, and more"
  />
</template>

<script lang="ts" setup>
  const route = useRoute();
</script>

<style>

</style>