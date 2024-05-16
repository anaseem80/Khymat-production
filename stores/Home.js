import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';

export const useHomeStore = defineStore({
  id: 'HomeStore',
  state: () => ({ 
    loading: false,
    error: false,
    banners: [],
  }),
  actions: {
    async GET_BANNERS(){
      this.loading = true;
      axios.get(BASE_URL + "/banners")
      .then(response=>{
          if(response.data.status_code == 200){
              this.loading = false;
              this.banners = response.data.banners
          }
      })
      .catch(error=>{
        this.loading = false;
        message.error(error.response.data.message)
      })
    },
  }
})

