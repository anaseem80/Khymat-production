import{_ as v}from"./Header.vue.JdMIGAPZ.js";import{a as x,J as l,O as c,N as w,P as s,a4 as b,u as n,Q as k,R as S,ah as N,ar as V,L as D,a3 as B}from"./swiper-vue.JvRXmqhe.js";import{u as C}from"./Login.DFJF6WTb.js";import{u as j}from"./Verify.JaCS6jFU.js";import{d as E,D as I,f as M}from"./entry.3WBB32f8.js";const P={class:"step-2 shrink-0"},L=s("p",{class:"lg:text-xl font-bold mb-4"},"يرجي التحقق من بريدك الالكتروني لتأكيد التسجيل !",-1),O={class:"text-gray-400"},T={class:"flex gap-4 my-5 flex-wrap justify-start"},U=["onUpdate:modelValue","onInput","onKeydown"],q={class:"flex items-center justify-between mt-8"},A=["disabled"],F=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"arrow w-5 h-5 ml-2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})],-1),H=s("span",{class:"translate-y-[-2px]"},"تحقق",-1),z={__name:"step2",setup(K){const o=x(Array(6).fill("")),u=C(),i=j(),p=E(),d=()=>{const e=o.value.join("");e.length==6?i.VERIFY_ACCOUNT(e,u.email):I.error("حقول التحقق مطلوبة")},m=e=>{const t=e.clipboardData.getData("text");t.length===o.value.length&&(o.value=t.split(""),e.preventDefault())},_=(e,t)=>{e.key==="Backspace"&&t>0&&o.value[t]===""&&e.target.parentNode.previousElementSibling.querySelector("input").focus()},f=(e,t)=>{isNaN(e.value)?e.value="":t<o.value.length-1&&o.value[t]!==""&&e.parentNode.nextElementSibling.querySelector("input").focus()};return(e,t)=>{const g=v,h=M;return l(),c("div",P,[w(g),L,s("p",O,"لقد أرسلنا للتو رمز التحقق إلى "+b(n(p).email),1),s("div",T,[(l(!0),c(k,null,S(n(o),(y,r)=>(l(),c("div",{key:r},[N(s("input",{type:"text",ref_for:!0,ref:"otpInput",class:"max-w-[40px] h-[40px] lg:max-w-[56px] font-bold lg:h-[56px] bg-gray-100 rounded-lg lg:text-xl text-center outline-none focus:border focus:border-primary",maxlength:"1",min:"0","onUpdate:modelValue":a=>n(o)[r]=a,onInput:a=>f(a.target,r),onPaste:t[0]||(t[0]=a=>m(a)),onKeydown:a=>_(a,r)},null,40,U),[[V,n(o)[r]]])]))),128))]),s("div",q,[s("button",{class:"btn w-full rounded-lg",onClick:t[1]||(t[1]=y=>d()),disabled:n(i).Verify_loading},[F,H,n(i).Verify_loading?(l(),D(h,{key:0,class:"ms-2"})):B("",!0)],8,A)])])}}};export{z as default};
