import { defineStore } from 'pinia'
import { mande } from 'mande'
import axios from 'axios'
import { BASE_URL } from './base/api';


export const useRegisterStore = defineStore({
  id: 'RegisterStore',
  state: () => ({
    loading: false,
    error: false,
    data:null,
  }),
  actions: {
    async REGISTER(data){
      const localePath = useLocalePath()
      this.loading = true
      axios.post(BASE_URL + "/register", data)
      .then((response) => {
          if (response.data.token) {
              this.loading = false
              message.success("تم التسجيل بنجاح");
              navigateTo(localePath('/login'))
          }
      })
      .catch((error) => {
          this.loading = false
          message.error(error.response.data.message);
      });
    }
  }
})
