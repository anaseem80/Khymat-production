import { defineStore } from 'pinia'
import axios from 'axios'
export const useForgetPasswordStore = defineStore({
  id: 'ForgetPasswordStore',
  state: () => ({ 
    loading: false,
    error: false,
    data:null,
  }),
  actions: {
    FORGET_PASSWORD(data){
      this.loading = true
      const mainStore = useMainStoreStore();
      axios.post(BASE_URL + "/forgot-password", data)
      .then((response) => {
        this.loading = false
        if(response.data.status_code == 200){
          message.success(response.data.message)
          mainStore.reset_verify = "reset";
          mainStore.email = data.email
          mainStore.swiper.slideTo(2);
        }
      })
      .catch((error) => {
        this.Verify_loading = false
        message.error(error.response.data.message)
      })
    }
  }
})
