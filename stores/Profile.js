import { defineStore } from 'pinia'
import axios from 'axios'
export const useMyProfileStore = defineStore({
  id: 'myProfileStore',
  state: () => ({ 
    loading: false,
    loading_edit: false,
    loading_password: false,
    user: [],
  }),
  actions: {
    async GET_USER(){
      this.loading = true
      await axios.get(BASE_URL + `/userInformation`, {
        headers:{
            Authorization: 'Bearer ' + useCookie("token").value
        }
      })
      .then(response=>{
          if(response.data){
            this.user = response.data
          }
      })
      .catch(error=>{
        this.loading = false
        message.error(error.response.data.message)
      })
    }, 
    async EDIT_USER_INFO(info){
      this.loading_edit = true
      await axios.post(BASE_URL + `/updateUserInfo`, info, {
        headers:{
            Authorization: 'Bearer ' + useCookie("token").value
        }
      })
      .then(response=>{
          message.success(response.data.message)
          if(response.data.status_code == 200){
              this.loading_edit = false
              window.location.reload()
          }
      })
      .catch(error=>{
        this.loading_edit = false
        message.error(error.response.data.message)
      })
    }, 
    async UPDATE_USER_PASSWORD(password){
      this.loading_password = true
      await axios.post(BASE_URL + `/changePassword`, password, {
        headers:{
            Authorization: 'Bearer ' + useCookie("token").value
        }
      })
      .then(response=>{
          message.success(response.data.message)
          if(response.data.status_code == 200){
              this.loading_password = false
          }
      })
      .catch(error=>{
        this.loading_password = false
        message.error(error.response.data.message)
      })
    }, 
  }
})
