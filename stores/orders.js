import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from './base/api';

export const useMyOrdersStore = defineStore({
  id: 'myOrdersStore',
  state: () => ({
    orders: [],
    filtered_orderd: [],
    order: [],
    loading_orders: false,
    loading_order: false,
  }),
  actions: {
    async GET_ORDERS(){
      this.loading_orders = true
      
      await axios.get(BASE_URL + `/orders`, {
        headers:{
          Authorization: 'Bearer ' + useCookie("token").value
        }
      })
      .then(response=>{
          if(response.data.status_code == 200){
              this.loading_orders = false
              this.orders = response.data.orders
              this.filtered_orderd = response.data.orders
          }
      })
      .catch(error=>{
        this.loading_orders = false
      })
    }, 
    async GET_ORDER_BY_ID(id){
      this.loading_order = true
      
      await axios.get(BASE_URL + `/orders/detalis/${id}`, {
        headers:{
          Authorization: 'Bearer ' + useCookie("token").value
        }
      })
      .then(response=>{
          if(response.data.status_code == 200){
              this.loading_order = false
              this.order = response.data.order
          }
      })
      .catch(error=>{
        this.loading_order = false
        if(error.response.data){
          navigateTo('/error')
        }
      })
    },
    async FILTER_ORDERS(status){
      if (this.orders !== null && status != 'all') {
        const filterd = this.orders.filter(order => order.status === status); 
        this.filtered_orderd = filterd
      } else {
        this.filtered_orderd = this.orders;
      }
    }, 
  },
})
