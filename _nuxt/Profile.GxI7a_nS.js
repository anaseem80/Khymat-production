import{a3 as r,a4 as t,a5 as o,g as i,B as s}from"./entry.c00z_NC_.js";const n=r({id:"myProfileStore",state:()=>({loading:!1,loading_edit:!1,loading_password:!1,user:[]}),actions:{async GET_USER(){this.loading=!0,await t.get(o+"/userInformation",{headers:{Authorization:"Bearer "+i("token").value}}).then(e=>{e.data&&(this.user=e.data)}).catch(e=>{this.loading=!1,s.error(e.response.data.message)})},async EDIT_USER_INFO(e){this.loading_edit=!0,await t.post(o+"/updateUserInfo",e,{headers:{Authorization:"Bearer "+i("token").value}}).then(a=>{s.success(a.data.message),a.data.status_code==200&&(this.loading_edit=!1,window.location.reload())}).catch(a=>{this.loading_edit=!1,s.error(a.response.data.message)})},async UPDATE_USER_PASSWORD(e){this.loading_password=!0,await t.post(o+"/changePassword",e,{headers:{Authorization:"Bearer "+i("token").value}}).then(a=>{s.success(a.data.message),a.data.status_code==200&&(this.loading_password=!1)}).catch(a=>{this.loading_password=!1,s.error(a.response.data.message)})}}});export{n as u};