import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';

export const useVerifyStore = defineStore({
  id: 'VerifyStore',
  state: () => ({ 
    Verify_loading: false,
    error: false,
    data:null,
  }),
  actions: {
    VERIFY_ACCOUNT(OTP, email){
      const mainStore = useMainStoreStore();
      this.Verify_loading = true
      if(mainStore.reset_verify == "reset"){
        axios.post(BASE_URL + "/verify-code", {
          otp:OTP,
          email: mainStore.email,
        })
        .then((response) => {
          this.Verify_loading = false
          
          if(response.data.status_code == 200){
            message.success(response.data.message)
            mainStore.swiper.slideTo(3);
            mainStore.RESET_TOKEN(response.data.token)
          }
        })
        .catch((error) => {
          this.Verify_loading = false
          message.error(error.response.data.message)
        })
      }else{
        axios.post(BASE_URL + "/verify-email", {
          otp:OTP,
          email: mainStore.email,
        })
        .then((response) => {
          this.Verify_loading = false
          
          if(response.data.status_code == 200){
            message.success(response.data.message)
            mainStore.swiper.slideTo(0);
          }
        })
        .catch((error) => {
          this.Verify_loading = false
          message.error(error.response.data.message)
        })
      }
      
    }
  }
})
