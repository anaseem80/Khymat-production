import{a3 as l,a4 as d,a5 as t,g as r,C as a}from"./entry.F16qyMkm.js";const u=l({id:"myAddressStore",state:()=>({cities:[],states:[],activeAddress:null,location_id:null,loading_city:null,loading_states:null,loading_store_address:null,loading_update_address:null,loading_destory_address:null,loading_get_addressess:null,addresses:[],latitudes:null,longitude:null}),actions:{async STORE_ADDRESS(e){this.loading_store_address=!0,await d.post(t+"/user-addresses/store",e,{headers:{Authorization:"Bearer "+r("token").value}}).then(s=>{s.data.status_code==200&&(a.success(s.data.message),this.loading_store_address=!1,window.location.reload())}).catch(s=>{this.loading_store_address=!1,a.error(s.response.data.message)})},async UPDATE_ADDRESS(e){this.loading_update_address=!0,await d.put(t+"/user-addresses/update",e,{headers:{Authorization:"Bearer "+r("token").value}}).then(s=>{s.data.status_code==200&&(a.success(s.data.message),this.loading_update_address=!1,window.location.reload())}).catch(s=>{this.loading_update_address=!1,a.error(s.response.data.message)})},async GET_ADDRESSESS(){this.loading_get_addressess=!0,await d.get(t+"/user-addresses",{headers:{Authorization:"Bearer "+r("token").value}}).then(e=>{e.data.status_code==200&&(this.loading_get_addressess=!1,this.addresses=e.data.userAddresses)}).catch(e=>{this.loading_get_addressess=!1})},async DESTORY_ADDRESS(e){this.loading_destory_address=!0,d.delete(t+"/user-addresses/destroy/"+e.id,{headers:{Authorization:"Bearer "+r("token").value}}).then(s=>{if(s.data.status_code==200){a.success(s.data.message),this.loading_destory_address=!1;let i=this.addresses.find(o=>o.id==e.id);this.addresses.splice(i,1)}}).catch(s=>{a.error(s.response.data.message),this.loading_destory_address=!1})},async CLOSE_MODAL(){this.activeAddress=null}}});export{u};
