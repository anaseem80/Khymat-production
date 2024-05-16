import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';

export const useMyReviewStore = defineStore({
  id: 'myReviewStore',
  state: () => ({ 
    reviews: [],
    loading: false,
  }),
  actions: {
    async GET_REVIEWS(id){
      this.loading = true;
      axios.get(BASE_URL + `/product/${id}?lang=ar`)
      .then(response=>{
          if(response.data.status_code == 200){
              this.loading = false;
              this.data = response.data.data
          }
      })
      .catch(error=>{
        this.loading = false;
        message.error(error.response.data.message)
      })
    },
    async INSERT_REVIEW(rating, review, id){
      this.loading = true
      axios.post(BASE_URL + `/create-review?rating=${rating}&review=${review}&product_id=${id}`, null,{
          headers:{
              Authorization: 'Bearer ' + useCookie("token").value
          }
      })
      .then((response) => {
          if(response.data.status_code === 200){
              this.loading = false
              message.success(response.data.message + " 🥳")
              window.location.reload()
          }
      })
      .catch((error) => {
          if(error){
            message.error(error.response.data.message)
          }
          this.loading = false
      })
  },
  }
})
