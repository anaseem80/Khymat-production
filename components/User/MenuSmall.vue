<template>
  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <div class="fixed h-full w-full top-0 bg-white z-20 px-4 user-menu translate-x-full transition-all" dir="rtl">
      <div class="text-center m-auto mt-8">
          <div class="w-[100px] h-[100px] rounded-full text-center m-auto">
              <img
                  src="~/assets/images/logo/logo.png"
                  class="w-full h-full rounded-full transition-all"
                  placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
              />
          </div>
      </div>
      <div class="dropdown-user mt-16 dropdown-user-small" @click="onProfileClick"><UserItems></UserItems></div>
  </div>
  </transition>
</template>

<script setup>
  // Functions
  const onProfileClick = () =>{
    document.querySelector('.user-menu').classList.toggle('translate-x-full')
  }
</script>

<style>

</style>