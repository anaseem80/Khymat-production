import{_ as x}from"./Header.vue.cBY4mu6U.js";import{y as S,z as v,B as y,x as l,d as u,f as C}from"./entry.3a9HN_x3.js";import{c as k,a as c,b as P}from"./index.esm.lgDJkJ4s.js";import{C as _,J as p,L as w,M as R,N as a,P as e,a6 as m,u as t,U as B,a3 as E}from"./swiper-vue.vkXjvdEW.js";const N=S({id:"ResetPasswordStore",state:()=>({loading:!1,error:!1,data:null}),actions:{RESET_PASSWORD(n){this.loading=!0,v.post(y+"/reset-password",n).then(s=>{this.loading=!1,s.data.status_code==200&&(l.success(s.data.message),u().swiper.slideTo(3))}).catch(s=>{console.log(s),this.loading=!1,l.error(s.response.data.message)})}}}),T=e("p",{class:"lg:text-xl font-bold mb-4"},"Create a new password",-1),F=e("p",{class:"text-gray-400"},"Please enter a new password. The new password must be different from the previous password.",-1),M={class:"flex gap-4 my-5 flex-wrap justify-start"},V={class:"flex items-center justify-between mt-8"},$=["disabled"],j=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"arrow w-5 h-5 ml-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})],-1),A={class:"translate-y-[-2px]"},L={__name:"step3",setup(n){const s=N();u();const r=k().shape({new_password:c().min(8,"كلمة السر يجب ان تكون علي الاقل 8 احرف").required("كلمة السر مطلوبة"),new_password_confirmation:c().oneOf([P("new_password"),null],"كلمة السر غير متطابقة").required()}),f=d=>{s.RESET_PASSWORD(d)};return(d,O)=>{const h=x,i=_("Field"),g=C,b=_("Form");return p(),w(b,{class:"step-3 shrink-0","validation-schema":t(r),onSubmit:f,dir:"ltr"},{default:R(({errors:o})=>[a(h),T,F,e("div",M,[a(i,{type:"password",name:"new_password",id:"new_password",placeholder:"Password",class:m([{"is-invalid":o.new_password,"is-valid":!o.new_password},"w-full bg-gray-100 rounded-lg p-3 outline-none focus:border border focus:border-primary"])},null,8,["class"]),a(i,{type:"password",name:"new_password_confirmation",id:"new_password_confirmation",placeholder:"Confirm password",class:m([{"is-invalid":o.new_password_confirmation,"is-valid":!o.new_password_confirmation},"w-full bg-gray-100 rounded-lg p-3 outline-none focus:border border focus:border-primary"])},null,8,["class"])]),e("div",V,[e("button",{class:"btn w-full rounded-lg",disabled:t(s).loading,dir:"rtl"},[j,e("span",A,[B("Continue "),t(s).loading?(p(),w(g,{key:0,class:"ms-2"})):E("",!0)])],8,$)])]),_:1},8,["validation-schema"])}}};export{L as default};