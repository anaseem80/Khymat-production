import{y as r,d as a,z as l,B as f,x as i}from"./entry.7m-UfYi-.js";const c=r({id:"VerifyStore",state:()=>({Verify_loading:!1,error:!1,data:null}),actions:{VERIFY_ACCOUNT(t,n){const o=a();this.Verify_loading=!0,l.post(f+"/verify-email",{otp:t,email:o.email}).then(e=>{console.log(e),this.Verify_loading=!1;const s=a();e.data.status_code==200&&(i.success(e.data.message),s.reset_verify=="reset"?s.swiper.slideTo(2):s.swiper.slideTo(3))}).catch(e=>{console.log(e),this.Verify_loading=!1,i.error(e.response.data.message)})}}});export{c as u};