import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL, BOSTA_URL } from './base/api';

export const useMyAddressStore = defineStore({
  id: 'myAddressStore',
  state: () => ({ 
    cities: [],
    states: [],
    activeAddress: null,
    location_id: null,
    loading_city: null,
    loading_states: null,
    loading_store_address: null,
    loading_update_address: null,
    loading_destory_address: null,
    loading_get_addressess: null,
    addresses: [],
    latitudes:null,
    longitude:null
  }),
  actions: {
    async STORE_ADDRESS(address){
      this.loading_store_address = true
      await axios.post(BASE_URL + `/user-addresses/store`, address, {
        headers:{
            Authorization: 'Bearer ' + useCookie("token").value
        }
      })
      .then(response=>{
          if(response.data.status_code == 200){
              message.success(response.data.message)
              this.loading_store_address = false
              window.location.reload()
          }
      })
      .catch(error=>{
        this.loading_store_address = false
        message.error(error.response.data.message)
      })
    }, 
    async UPDATE_ADDRESS(address){
      this.loading_update_address = true
      await axios.put(BASE_URL + `/user-addresses/update`, address, {
        headers:{
            Authorization: 'Bearer ' + useCookie("token").value
        }
      })
      .then(response=>{
          if(response.data.status_code == 200){
              message.success(response.data.message)
              this.loading_update_address = false
              window.location.reload()
          }
      })
      .catch(error=>{
        this.loading_update_address = false
        message.error(error.response.data.message)
      })
    }, 
    async GET_ADDRESSESS(){
      this.loading_get_addressess = true
      await axios.get(BASE_URL + `/user-addresses`, {
        headers:{
            Authorization: 'Bearer ' + useCookie("token").value
        }
      })
      .then(response=>{
          if(response.data.status_code == 200){
              this.loading_get_addressess = false
              this.addresses = response.data.userAddresses
          }
      })
      .catch(error=>{
        this.loading_get_addressess = false
      })
    }, 
    async DESTORY_ADDRESS(address){
      this.loading_destory_address = true;
      axios.delete(BASE_URL + `/user-addresses/destroy/`+address.id,{
          headers:{
            Authorization: 'Bearer ' + useCookie("token").value
          }
      })
      .then(response=>{
        if(response.data.status_code == 200){
            message.success(response.data.message)
            this.loading_destory_address = false;
            let existingAddress = this.addresses.find(item=> item.id == address.id)
            this.addresses.splice(existingAddress, 1)
        }
      })
      .catch(error=>{
        message.error(error.response.data.message)
        this.loading_destory_address = false;
      })
    },
    async CLOSE_MODAL(){
      this.activeAddress = null;
    },
  },
})
