import{c as x,L as v}from"./DTM008YB.js";import{u as y}from"./D-j0A5zC.js";import{c as w,a as C}from"./BhvQ0Dsa.js";import{F as r,Q as s,a4 as a,a3 as e,a5 as l,u as n,R as d,U as b,J as g,a2 as k,a8 as L,a7 as N}from"./Dos21iDt.js";const S={class:"w-full bg-white rounded-lg border flex-col justify-center items-center inline-flex mt-8"},$={class:"px-6 py-5 border-b w-full"},j={class:"text-sm font-medium"},A=["disabled"],B={class:"flex"},F={key:1,class:"flex items-center justify-between w-full gap-4"},O={class:"px-6 py-5 w-full"},P={class:"text-sm font-medium"},V=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"},null,-1),U=[V],D={__name:"Coupon",setup(q){const o=x();y();const u=w().shape({coupon:C().required("coupon is required")}),p=t=>{o.APPLY_COUPON(t.coupon)},m=()=>{o.CANCEL_COUPON()};return(t,c)=>{const _=r("Field"),f=v,h=r("Form");return s(),a("div",S,[e("div",$,[e("div",j,l(t.$t("Have a voucher?")),1)]),n(o).couponApplied?(s(),a("div",F,[e("div",O,[e("div",P,l(n(o).coupon.code),1)]),(s(),a("svg",{onClick:c[0]||(c[0]=i=>m()),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"red",class:"w-6 h-6 mr-4 cursor-pointer"},U))])):(s(),d(h,{key:0,class:"px-6 py-5 justify-start items-end flex w-full",onSubmit:p,"validation-schema":n(u)},{default:b(({errors:i})=>[g(_,{type:"text",class:k(["h-11 w-full outline-none transition-all text-start px-4 py-6 bg-gray-50 rounded-sm justify-end items-center inline-flex",{"is-invalid":i.coupon}]),placeholder:t.$t("Voucher code"),id:"coupon",name:"coupon"},null,8,["placeholder","class"]),e("button",{disabled:!n(o).taxApplied,class:"btn px-8"},[e("span",B,[L(l(t.$t("Apply"))+" ",1),n(o).loading_coupon?(s(),d(f,{key:0,class:"ms-3"})):N("",!0)])],8,A)]),_:1},8,["validation-schema"]))])}}};export{D as default};