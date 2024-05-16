<template>
  <section class="px-6 lg:px-[133px] py-[85px] overflow-hidden" v-if="CategoriesWithSubStore.home_categories">
      <h1 class="text-slate-800 text-2xl font-bold text-center uppercase leading-loose tracking-tight">{{ $t("EXPLORE OUR PRODUCT") }}</h1>
      <div class="relative m-auto md:w-full overflow-x-scroll md:overflow-visible">
          <ul class="flex justify-center w-[700px] md:w-full gap-5 border-b border-gray-100 mt-6">
              <li 
                  v-for="(category, index) in CategoriesWithSubStore.home_categories"
                  class="text-sm font-bold leading-[21px] inline-block pb-3 cursor-pointer tab-item transition-all"
                  :data-id="category.id"
                  @click="activateTab(category.name_en, index)"
                  :class="{ 
                      'text-primary opacity-100': activeTab == category.name_en,
                      'text-zinc-600 opacity-25': activeTab != category.name_en,
                  }"
              >
                  {{ locale == 'en' ? category.name_en : category.name_ar }}
              </li>
          </ul>
          <div 
              v-if="activeTab !== null"
              class="border-b border-primary absolute -bottom-0 transition-all ease-in-out"
              :style="{ 
                  left: `${tabPosition}px`,
                  width: `${tabWidth}px`
              }"
          ></div>
      </div>
      <div 
        class="md:grid-cols-3 gap-10 mt-8 all-categories"
        :class="{
            [`category-${category.id}`]: true,
            'grid': index == 0,
            'hidden': index != 0,
        }"
        v-for="(category, index) in CategoriesWithSubStore.home_categories"
      >
      <!--  -->
          <NuxtLink :to="{ path: localePath(`/products/subcategory`), query: { id: price.category_id, price: price['price'] }}" class="hover:from-purple-700 hover:to-emerald-100 transition-all bg-gradient-to-b from-emerald-300 to-purple-700 rounded-lg text-center grid place-content-center p-10" v-for="price in category.category_prices">
              <p class="text-white md:text-lg font-semibold tracking-widest">{{ $t("Under") }}</p>
              <h1 class="text-white text-3xl lg:text-[60px] font-semibold leading-[150px]">{{ price['price'] }}</h1>
              <p><span class="text-white md:text-xl font-semibold tracking-widest">{{ $t("AED") }}</span></p>
          </NuxtLink>
      </div>
  </section>
</template>

<script lang="ts" setup>
    // Stores
    const CategoriesWithSubStore = useMyCategoriesWithSubStore()
    CategoriesWithSubStore.GET_HOME_CATEGORIES_WITH_PRICES()

    // Functions
    const activeTab = ref(null)
    const tabPosition = ref(0)
    const tabWidth = ref(0)

    // i18n
    const { locale } = useI18n();

    // Functions
    const activateTab = (tabName, index) => {
      const tabElements = document.querySelectorAll('.tab-item');
      const tabElement = tabElements[index];
      if (tabElement) {
        const tabRect = tabElement.getBoundingClientRect();
        const containerRect = tabElement.parentElement.getBoundingClientRect();
        const tabPositionX = tabRect.left - containerRect.left;
        let item = document.querySelector(".category-"+tabElement.getAttribute('data-id'))
        const tabElements = document.querySelectorAll('.all-categories').forEach(item =>{
            item.classList.add("hidden")
            item.classList.remove("remove")
        });
        item.classList.add("grid")
        item.classList.remove("hidden")
        tabPosition.value = tabPositionX;
        activeTab.value = tabName;
        tabWidth.value = tabRect.width;

      }
    }
    
    onMounted(() => {
        const tabElements = document.querySelectorAll('.tab-item')[0];
        const tabElement = tabElements;
        if (tabElement) {
            const tabRect = tabElement.getBoundingClientRect();
            const containerRect = tabElement.parentElement.getBoundingClientRect();
            const tabPositionX = tabRect.left - containerRect.left;
        
            tabPosition.value = tabPositionX;
            activeTab.value = CategoriesWithSubStore.home_categories[0].name_en;
            tabWidth.value = tabRect.width;
        }
    });
</script>

<style>

</style>