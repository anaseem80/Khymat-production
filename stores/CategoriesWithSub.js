import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';

export const useMyCategoriesWithSubStore = defineStore({
  id: 'myCategoriesWithSubStore',
  state: () => ({ 
    categories:null,
    categories_page: null,
    home_categories: [],
  }),
  actions: {
    async GET_CATEGORIES(lang, page){
      axios.get(BASE_URL + `/categories?lang=${lang}&page=${page}`)
      .then(response=>{
          if(response.data.status_code == 200){
              this.categories = response.data.categories
          }
      })
      .catch(error=>{
      })
    },
    async GET_CATEGORIES_PAGE(lang, page){
      axios.get(BASE_URL + `/categories?lang=${lang}&page=${page}`)
      .then(response=>{
          if(response.data.status_code == 200){
              this.categories_page = response.data.categories
          }
      })
      .catch(error=>{
      })
    },
    async GET_HOME_CATEGORIES_WITH_PRICES(){
      const { locale } = useI18n();
      axios.get(BASE_URL + `/category/prices?lang=${locale.value}`)
      .then(response=>{
          if(response.data.status_code == 200){
              this.home_categories = response.data.data.categories_with_prices
          }
      })
      .catch(error=>{
      })
    },
  },
})
