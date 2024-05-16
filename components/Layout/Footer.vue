<template>
    <div :dir="locale == 'ar' ? 'rtl' : 'ltr'">
        <div class="bg-zinc-100 px-6 lg:px-[133px] py-8 grid grid-cols-1 md:grid-cols-1 justify-center md:justify-center items-center">
            <div class="col-span-1 text-center mb-8 md:mb-0 md:text-start">
                <h1 class="text-black text-center text-2xl font-bold leading-loose tracking-tight">{{ $t("Consulting Agency For Your Business") }}</h1>
                <p class="text-center text-neutral-800 text-sm font-normal leading-tight tracking-tight">
                    {{ $t("Shop with us for the latest featured products") }}
                </p>
            </div>
            <!-- <div class="grid md:place-content-end">
                <NuxtLink to="#" class="btn px-10">
                    <span>{{ $t("Contact us") }}</span>
                </NuxtLink>
            </div> -->
        </div>
        <footer class="px-6 lg:px-[133px] py-8">
            <div class="grid md:gap-8 md:grid-cols-3 xl:grid-cols-5 md:grid-cols-3 items-start">
                <div class="grid place-content-center place-items-center h-full">
                    <nuxt-link :to="localePath('/')">
                        <a-skeleton-button class="category-skelton" active v-if="mainStore.loading_settings"/>
                        <img 
                            v-else
                            :src="mainStore.route + mainStore.settings.logo"
                            class="w-[90px] h-[97px]"
                            placeholder="https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
                        />
                    </nuxt-link>
                </div>
                <div class="mt-8">
                    <h4 class="text-primary mb-4 md:mb-8 font-semibold text-lg md:text-xl">{{ $t("Account") }}</h4>
                    <ul class="grid gap-4">
                        <li>
                            <nuxt-link :to="localePath(`/login`)" class="text-neutral-900 text-base inline-block transition hovering-option after:bg-primary">{{ $t("Login") }}</nuxt-link>   
                        </li>
                        <li>
                            <nuxt-link :to="localePath(`/cart`)" class="text-neutral-900 text-base inline-block transition hovering-option after:bg-primary">{{ $t("Shopping Cart") }}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="localePath(`/wishlist`)" class="text-neutral-900 text-base inline-block transition hovering-option after:bg-primary">{{ $t("Wishlist") }}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="localePath(`/categories`)" class="text-neutral-900 text-base inline-block transition hovering-option after:bg-primary">{{ $t("Shop") }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="mt-8">
                    <h4 class="text-primary mb-4 md:mb-8 font-semibold text-lg md:text-xl">{{ $t("Quick Links") }}</h4>
                    <ul class="grid gap-4">
                        <li>
                            <nuxt-link :to="localePath(`/privacy`)" class="text-neutral-900 text-base inline-block transition hovering-option after:bg-primary">{{ $t("Privacy Policy") }}</nuxt-link>   
                        </li>
                        <li>
                            <nuxt-link :to="localePath(`/terms`)" class="text-neutral-900 text-base inline-block transition hovering-option after:bg-primary">{{ $t("Terms Of Use") }}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="localePath(`/faq`)" class="text-neutral-900 text-base inline-block transition hovering-option after:bg-primary">{{ $t("FAQ") }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="mt-8">
                    <h4 class="text-primary mb-4 md:mb-8 font-semibold text-lg md:text-xl">{{ $t("Get In Touch") }}</h4>
                    <ul class="grid gap-4" v-if="mainStore.loading_settings">
                        <li v-for="skel in 3"><a-skeleton-button class="category-skelton" active/></li>
                    </ul>
                    <div class="flex flex-col flex-wrap gap-4" v-else>
                        <a :href="`tel:${mainStore.settings.company_phone}`" class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <span class="hovering-option after:bg-primary">{{mainStore.settings.company_phone}}</span>
                        </a>
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 shrink-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            {{mainStore.settings.company_address}}
                        </div>
                        <a :href="`mailto:${mainStore.settings.email}`" class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span class="hovering-option after:bg-primary">{{mainStore.settings.email}}</span>
                        </a>
                    </div>
                </div>
                <div class="mt-8">
                    <h4 class="text-primary mb-4 md:mb-8 font-semibold text-lg md:text-xl">{{ $t("Download App") }}</h4>
                    <div class="flex gap-4">
                        <img 
                            src="~/assets/images/common/qr.jfif "
                            class="w-[76px] h-[76px]"
                        />
                        <div class="flex flex-col gap-4">
                            <a href="#" class="rounded-lg hover:-translate-y-1 transition shrink-0">
                                <img 
                                    src="~/assets/images/social/apple.png"
                                    class="w-[104px] h-[30px]"
                                />
                            </a>
                            <a href="#" class="rounded-lg hover:-translate-y-1 transition shrink-0">
                                <img 
                                    src="~/assets/images/social/Google.png"
                                    class="w-[104px] h-[30px]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="bg-zinc-100 mt-8 flex flex-wrap text-center md:text-start gap-8 md:gap-0 justify-evenly md:justify-between items-center px-6 lg:px-[133px] py-8  mb-20 md:mb-0">
            <div class="text-zinc-700 text-base font-bold">
                {{ $t("Made With Love By Khaymat Zaman All Right Reserved") }}
            </div>
            <div class="flex gap-4 flex-wrap">
                <a target="_blank" :href="mainStore.settings.github" class="hovering-option">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="black"/>
                    </svg>
                </a>
                <a target="_blank" :href="mainStore.settings.facebook" class="hovering-option">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="icn settings icn-xs">
                            <path id="Vector" d="M8 0.000244141C5.829 0.000244141 5.556 0.0102441 4.703 0.0482441C3.85 0.0882441 3.269 0.222244 2.76 0.420244C2.22609 0.621063 1.74249 0.93607 1.343 1.34324C0.936076 1.74294 0.621107 2.22648 0.42 2.76024C0.222 3.26824 0.087 3.85024 0.048 4.70024C0.01 5.55524 0 5.82724 0 8.00124C0 10.1732 0.01 10.4452 0.048 11.2982C0.088 12.1502 0.222 12.7312 0.42 13.2402C0.625 13.7662 0.898 14.2122 1.343 14.6572C1.787 15.1022 2.233 15.3762 2.759 15.5802C3.269 15.7782 3.849 15.9132 4.701 15.9522C5.555 15.9902 5.827 16.0002 8 16.0002C10.173 16.0002 10.444 15.9902 11.298 15.9522C12.149 15.9122 12.732 15.7782 13.241 15.5802C13.7746 15.3793 14.2578 15.0643 14.657 14.6572C15.102 14.2122 15.375 13.7662 15.58 13.2402C15.777 12.7312 15.912 12.1502 15.952 11.2982C15.99 10.4452 16 10.1732 16 8.00024C16 5.82724 15.99 5.55524 15.952 4.70124C15.912 3.85024 15.777 3.26824 15.58 2.76024C15.3789 2.22647 15.0639 1.74292 14.657 1.34324C14.2576 0.93592 13.774 0.62089 13.24 0.420244C12.73 0.222244 12.148 0.0872441 11.297 0.0482441C10.443 0.0102441 10.172 0.000244141 7.998 0.000244141H8.001H8ZM7.283 1.44224H8.001C10.137 1.44224 10.39 1.44924 11.233 1.48824C12.013 1.52324 12.437 1.65424 12.719 1.76324C13.092 1.90824 13.359 2.08224 13.639 2.36224C13.919 2.64224 14.092 2.90824 14.237 3.28224C14.347 3.56324 14.477 3.98724 14.512 4.76724C14.551 5.61024 14.559 5.86324 14.559 7.99824C14.559 10.1332 14.551 10.3872 14.512 11.2302C14.477 12.0102 14.346 12.4332 14.237 12.7152C14.1087 13.0626 13.904 13.3767 13.638 13.6342C13.358 13.9142 13.092 14.0872 12.718 14.2322C12.438 14.3422 12.014 14.4722 11.233 14.5082C10.39 14.5462 10.137 14.5552 8.001 14.5552C5.865 14.5552 5.611 14.5462 4.768 14.5082C3.988 14.4722 3.565 14.3422 3.283 14.2322C2.9355 14.1042 2.62113 13.8998 2.363 13.6342C2.09675 13.3763 1.89172 13.0619 1.763 12.7142C1.654 12.4332 1.523 12.0092 1.488 11.2292C1.45 10.3862 1.442 10.1332 1.442 7.99624C1.442 5.86024 1.45 5.60824 1.488 4.76524C1.524 3.98524 1.654 3.56124 1.764 3.27924C1.909 2.90624 2.083 2.63924 2.363 2.35924C2.643 2.07924 2.909 1.90624 3.283 1.76124C3.565 1.65124 3.988 1.52124 4.768 1.48524C5.506 1.45124 5.792 1.44124 7.283 1.44024V1.44224ZM12.271 2.77024C12.1449 2.77024 12.0201 2.79508 11.9036 2.84332C11.7872 2.89156 11.6813 2.96228 11.5922 3.05142C11.503 3.14057 11.4323 3.2464 11.3841 3.36287C11.3358 3.47934 11.311 3.60418 11.311 3.73024C11.311 3.85631 11.3358 3.98115 11.3841 4.09762C11.4323 4.21409 11.503 4.31992 11.5922 4.40907C11.6813 4.49821 11.7872 4.56892 11.9036 4.61717C12.0201 4.66541 12.1449 4.69024 12.271 4.69024C12.5256 4.69024 12.7698 4.5891 12.9498 4.40907C13.1299 4.22903 13.231 3.98485 13.231 3.73024C13.231 3.47564 13.1299 3.23146 12.9498 3.05142C12.7698 2.87139 12.5256 2.77024 12.271 2.77024ZM8.001 3.89224C7.45607 3.88374 6.91489 3.98373 6.40898 4.18639C5.90306 4.38904 5.44251 4.69032 5.05415 5.07267C4.66579 5.45502 4.35736 5.91081 4.14684 6.4135C3.93632 6.9162 3.8279 7.45575 3.8279 8.00074C3.8279 8.54574 3.93632 9.08529 4.14684 9.58798C4.35736 10.0907 4.66579 10.5465 5.05415 10.9288C5.44251 11.3112 5.90306 11.6124 6.40898 11.8151C6.91489 12.0178 7.45607 12.1177 8.001 12.1092C9.07954 12.0924 10.1082 11.6522 10.865 10.8835C11.6217 10.1148 12.0459 9.07942 12.0459 8.00074C12.0459 6.92207 11.6217 5.88666 10.865 5.11799C10.1082 4.34933 9.07954 3.90907 8.001 3.89224ZM8.001 5.33324C8.70833 5.33324 9.38669 5.61423 9.88685 6.11439C10.387 6.61455 10.668 7.29291 10.668 8.00024C10.668 8.70758 10.387 9.38594 9.88685 9.8861C9.38669 10.3863 8.70833 10.6672 8.001 10.6672C7.29367 10.6672 6.61531 10.3863 6.11515 9.8861C5.61499 9.38594 5.334 8.70758 5.334 8.00024C5.334 7.29291 5.61499 6.61455 6.11515 6.11439C6.61531 5.61423 7.29367 5.33324 8.001 5.33324Z" fill="black"/>
                        </g>
                    </svg>
                </a>
                <a target="_blank" :href="mainStore.settings.twitter" class="hovering-option">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.2918 17.1251C13.8371 17.1251 17.9652 10.8724 17.9652 5.45167C17.9652 5.27589 17.9613 5.0962 17.9535 4.92042C18.7566 4.33967 19.4496 3.62033 20 2.7962C19.2521 3.12896 18.458 3.34627 17.6449 3.44074C18.5011 2.92755 19.1421 2.12135 19.4492 1.17159C18.6438 1.64892 17.763 1.98563 16.8445 2.1673C16.2257 1.50976 15.4075 1.07439 14.5164 0.928498C13.6253 0.78261 12.711 0.934331 11.9148 1.3602C11.1186 1.78607 10.4848 2.46238 10.1115 3.28455C9.73825 4.10672 9.64619 5.02897 9.84961 5.9087C8.21874 5.82686 6.62328 5.40321 5.16665 4.6652C3.71002 3.9272 2.42474 2.89132 1.39414 1.62472C0.870333 2.52782 0.710047 3.59649 0.945859 4.61353C1.18167 5.63057 1.79589 6.51966 2.66367 7.10011C2.01219 7.07943 1.37498 6.90402 0.804688 6.58839V6.63917C0.804104 7.58691 1.13175 8.50561 1.73192 9.2391C2.3321 9.97258 3.16777 10.4756 4.09687 10.6626C3.49338 10.8277 2.85999 10.8518 2.2457 10.7329C2.50788 11.548 3.01798 12.2609 3.70481 12.7721C4.39164 13.2833 5.22093 13.5673 6.07695 13.5845C4.62369 14.726 2.82848 15.3452 0.980469 15.3423C0.652739 15.3418 0.325333 15.3217 0 15.2821C1.87738 16.4866 4.06128 17.1263 6.2918 17.1251Z" fill="black"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    // i18n Package
    const { locale } = useI18n();

    // i18n Package
    const localePath = useLocalePath()
    const mainStore = useMainStoreStore();
</script>

<style>

</style>