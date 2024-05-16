import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';
export const useLogoutStore = defineStore({
  id: 'LogoutStore',
  state: () => ({
    loading: false,
    error: false,
   }),
  actions: {
    LOGOUT(){
      const localePath = useLocalePath()
      axios.post(BASE_URL + "/logout", null,{
        headers:{
            Authorization: 'Bearer ' + useCookie("token").value
        }
      })
    .then((response) => {
        if(response.data.status_code == 200){
          message.success("تم تسجيل الخروج بنجاح");
          const token = useCookie("token");
          token.value = null
          navigateTo(localePath('/login'))
          setTimeout(() => {
            window.location.reload()
          }, 1000);
        }
      })
      .catch((error) => {
        if(error.response.data.message == "غير مصرح"){
          message.success("تم تسجيل الخروج بنجاح");
          const token = useCookie("token");
          token.value = null
          navigateTo(localePath('/login'))
        }else{
          message.error(error.response.data.message);
        }
      })
    }
  }
})
