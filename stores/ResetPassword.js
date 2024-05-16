import { defineStore } from 'pinia'
import axios from 'axios'
export const useResetPasswordStore = defineStore({
  id: 'ResetPasswordStore',
  state: () => ({ 
    loading: false,
    error: false,
    data:null,
  }),
  actions: {
    RESET_PASSWORD(data){
      this.loading = true
      const mainStore = useMainStoreStore();
      axios.post(BASE_URL + "/reset-password", data, {
        headers:{
            Authorization: 'Bearer ' + mainStore.reset_token
        }
      })
      .then((response) => {
        this.loading = false
        if(response.data.status_code == 200){
          message.success(response.data.message)
          mainStore.swiper.slideTo(0);
        }
      })
      .catch((error) => {
        this.loading = false
        message.error(error.response.data.message)
      })
    }
  }
})
