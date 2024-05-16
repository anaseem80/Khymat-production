import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';

export const useMyProductsStore = defineStore({
  id: 'myProductsStore',
  state: () => ({ 
    data: null,
    loading_products: true,
    loading_search_prdoucts: null,
    for_you_products: [],
    categories: [],
    search_products: [],
  }),
  actions: {
    async GET_SUB_PRODUCTS(name, id = null, page, lang){
      let route;
      if(id !== null){
        route = `subcategories/${id}/products`
      }else{
        route = `products/allitems`
      }
      this.loading_products = true;
      await axios.get(BASE_URL + `/${route}?lang=${lang}&page=${page}${name != 'subcategory' ? `&key=${name}` : ''}`)
      .then(response=>{
        if(response.data.status_code == 200){
              this.loading_products = false;
              this.data = response.data.products
          }
      })
      .catch(error=>{
        this.loading_products = false;
      })
    },
    async GET_PRODUCTS_BY_PRICE(id, price, lang){
      this.loading_products = true;
      await axios.get(BASE_URL + `/products/price?lang=${lang}&categoryId=${id}&price=${price}`)
      .then(response=>{
        if(response.data.status_code == 200){
              this.loading_products = false;
              this.data = response.data.products
          }
      })
      .catch(error=>{
        this.loading_products = false;
      })
    },
    async SORT_PRODUCTS(sort_type, sub_category_id){
      this.loading_products = true;
      await axios.get(BASE_URL + `/sorted-products?sort_type=${sort_type}&sub_category_id=${sub_category_id}`)
      .then(response=>{
        if(response.data.status_code == 200){
              this.loading_products = false;
              this.data = response.data.products
          }
      })
      .catch(error=>{
        this.loading_products = false;
      })
    },
    async SEARCH_PRODUCTS(keyword, lang){
      this.loading_search_prdoucts = true;
      await axios.post(BASE_URL + `/search-product?lang=${lang}&keyword=${keyword}`)
      .then(response=>{
        if(response.data.status_code == 200){
              this.loading_search_prdoucts = false;
              this.search_products = response.data.products
          }
      })
      .catch(error=>{
        this.loading_search_prdoucts = false;
      })
    },
    async GET_FOR_YOU_PRODUCTS(){
      const { locale } = useI18n();
      this.loading_products = true;
      await axios.get(BASE_URL + `/products/allitems?lang=${locale.value}&page=1`)
      .then(response=>{
          if(response.data.status_code == 200){
              this.loading_products = false;
              this.for_you_products = response.data.products
          }
      })
      .catch(error=>{
        this.loading_products = false;
      })
    },
  }
})
