import{_ as g}from"./breadcrumb.vue.v1MeUMK9.js";import{a as y,b as k,f as v,k as x}from"./entry.CCc8V8PH.js";import{a as b,Q as o,a4 as n,J as d,u as s,a3 as t,I as m,a6 as F,a2 as q,a5 as p,a9 as A,aa as K}from"./swiper-vue.pW2UkmIU.js";import{u as Q}from"./SidePages.Qz32vf0o.js";const S=["dir"],B={class:"w-full"},C={key:0},j={key:1,class:"accordion flex flex-col gap-4"},I=["onClick"],M={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"min-w-6 min-h-6 max-w-6 max-h-6"},P=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"},null,-1),z=[P],D={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"min-w-6 min-h-6 max-w-6 max-h-6"},E=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"},null,-1),N=[E],R={class:"accordion-content mt-4"},T={__name:"index",setup(V){const{locale:e}=y(),_=k(),r=b(null),l=Q();l.GET_FAQ();const h=a=>{r.value===a?r.value=null:r.value=a},i=a=>r.value===a;return v({title:e.value==="ar"?"خيمات زمان - الأسئله الشائعه":"Khymat - FAQ",meta:[{name:"description",content:"Find answers to common questions about Khymat, our products, and ordering."},{name:"keywords",content:"faq, questions, answers, support, Khymat"},{property:"og:title",content:e.value==="ar"?"خيمات زمان - الأسئله الشائعه":"Khymat - FAQ"},{property:"og:description",content:"Find answers to common questions about Khymat, our products, and ordering."},{property:"og:url",content:"https://khaymatzaman.com/faq"},{property:"og:type",content:"website"},{property:"og:locale",content:e.value==="ar"?"ar_AR":"en_US"},{name:"twitter:title",content:e.value==="ar"?"خيمات زمان - الأسئله الشائعه":"Khymat - FAQ"},{name:"twitter:description",content:"Find answers to common questions about Khymat, our products, and ordering."},{name:"twitter:card",content:"summary_large_image"}]}),(a,$)=>{const w=g,f=x;return o(),n(m,null,[d(w,{route:s(_).fullPath,name:"FAQ",title:"FAQ",description:"Check all your categories to get what brand your needs"},null,8,["route"]),t("div",{class:"px-6 lg:px-[133px] py-16 flex flex-col md:flex-row gap-8",dir:s(e)=="ar"?"rtl":"ltr"},[t("div",B,[s(l).loading_faq?(o(),n("p",C,[d(f,{class:"progress mt-4",active:"",block:""})])):(o(),n("div",j,[(o(!0),n(m,null,F(s(l).faq,(u,c)=>(o(),n("div",{key:c,class:"accordion-item py-2 px-4 border rounded-md focus:outline-none w-full"},[t("button",{onClick:G=>h(c),class:"accordion-title flex justify-between items-center w-full"},[t("span",{class:q(["font-bold",{"text-right":s(e)=="ar","text-start":s(e)=="en"}])},p(u.question),3),i(c)?(o(),n("svg",M,z)):(o(),n("svg",D,N))],8,I),A(t("div",R,[t("p",null,p(u.answer),1)],512),[[K,i(c)]])]))),128))]))])],8,S)],64)}}};export{T as default};
