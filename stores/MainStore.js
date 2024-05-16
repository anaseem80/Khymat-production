import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';
export const useMainStoreStore = defineStore({
  id: 'MainStoreStore',
  state: () => ({ 
    menuOpen: false,
    verfiy_modal: false,
    swiper: null,
    reset_verify: null,
    reset_token: null,
    email: null,
    settings: [],
    loading_settings: false,
    route: "https://khaymatzaman.com/admin-panel/public/"
  }),
  actions: {
    ToggleMenu(){
      this.menuOpen = !this.menuOpen
    },
    RESET_TOKEN(token){
      this.reset_token = token
    },
    Verfiy_Modal(type){
      if(type == "close"){
        this.swiper.slideTo(0);
      }
      this.verfiy_modal = !this.verfiy_modal
    },
    async GET_SITE_SETTINGS(data){
      this.loading_settings = true
      axios.get(BASE_URL + "/settings")
      .then((response) => {
          if (response.data.status_code == 200) {
            this.loading_settings = false;
            this.settings = response.data.setting
          }
      })
      .catch((error) => {
          this.loading_settings = false
          message.error(error.response.data.message)
      });
    },
  },
  getters: {
    HTML_DESCRIPTION(state) {
      return (description) => {
        const parser = new DOMParser();
        const decodedHTML = parser.parseFromString(description, 'text/html').body.textContent;
        return decodedHTML;
      };
    },
  }
})
