import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';
export const useMyCountriesStore = defineStore({
  id: 'myCountriesStore',
  state: () => ({ 
    countries: [],
    loading_countries: false,
  }),
  actions: {
    async GET_COUNTRIES(){
      this.loading_countries = true
      
      await axios.get(BASE_URL + `/countries`)
      .then(response=>{
          if(response.data.status_code == 200){
              this.loading_countries = false
              this.countries = response.data.countries
          }
      })
      .catch(error=>{
        this.loading_countries = false
      })
    }, 
  }
})
