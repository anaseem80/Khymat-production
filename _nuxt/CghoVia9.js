import{a3 as o,e as l,a4 as t,a5 as r,A as s}from"./Dx3tmLG_.js";const n=o({id:"VerifyStore",state:()=>({Verify_loading:!1,error:!1,data:null}),actions:{VERIFY_ACCOUNT(i,f){const a=l();this.Verify_loading=!0,a.reset_verify=="reset"?t.post(r+"/verify-code",{otp:i,email:a.email}).then(e=>{this.Verify_loading=!1,e.data.status_code==200&&(s.success(e.data.message),a.swiper.slideTo(3),a.RESET_TOKEN(e.data.token))}).catch(e=>{this.Verify_loading=!1,s.error(e.response.data.message)}):t.post(r+"/verify-email",{otp:i,email:a.email}).then(e=>{this.Verify_loading=!1,e.data.status_code==200&&(s.success(e.data.message),a.swiper.slideTo(0))}).catch(e=>{this.Verify_loading=!1,s.error(e.response.data.message)})}}});export{n as u};