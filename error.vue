<template>
    <LayoutHeader />
    <section class="my-10 sticky-header-next-sec">
        <div class="mx-auto container">
            <div class="text-center flex flex-col gap-6">
                <img class="img-404 m-auto" src="~/assets/images/common/404-error-page.gif" alt="" />

                <h1 class="text-6xl font-bold text-center">404</h1>
                <p class="text-2xl font-semibold text-center">الصفحة المطلوبة غير موجودة!</p>
                <button class="btn w-40 m-auto" @click="handleClearError">
                    <span class="translate-y-[-2px]">الرجوع</span> 
                </button>
            </div>
        </div>
    </section>
    <LayoutFooter />

</template>

<script setup>
    const router = useRouter();
    const HomeStore = useHomeStore()
    
    const handleClearError = () => {
        clearError({redirect: "/"})
    }
</script>

<style scoped>

</style>