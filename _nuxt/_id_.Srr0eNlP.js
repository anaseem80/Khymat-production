import{_ as L}from"./breadcrumb.vue.v1MeUMK9.js";import{_ as M}from"./Sort.yBg518ZY.js";import j from"./Filter.kr4WFKq0.js";import B from"./ProductSkeltonLoader.XJXsoMHl.js";import K from"./Product.bvmIgddr.js";import{a as T,b as f,f as D,k as E}from"./entry.CCc8V8PH.js";import{u as F}from"./Products.wjZn9zzw.js";import{_ as R}from"./no-products.LUWYPPGs.js";import{a as N,E as G,b as H,Q as n,a4 as r,J as s,u as o,a3 as t,a8 as y,a5 as l,a7 as c,I as u,a6 as k}from"./swiper-vue.pW2UkmIU.js";import{_ as I}from"./index.qFa7Yt7e.js";import"./Checkbox.dRbzoFIA.js";import"./FormItemContext.bxDxJ_E-.js";import"./createContext.SQVk3hQb.js";import"./firstNotUndefined.rg7L12hd.js";import"./index.5GRSb8jC.js";import"./WishListIcon.n4xiecKh.js";import"./omit.0aVhu-9q.js";import"./compact-item.kD5PF8fa.js";const O=["dir"],U={class:"flex md:hidden flex-row-reverse md:flex-row items-center justify-between mb-6 md:mb-0"},V=t("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M4 8.5H12M2 4.5H14M6 12.5H10",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Y={key:0,class:"flex justify-between"},A={class:"text-slate-500 text-base font-normal leading-snug"},z={key:1,class:"hidden md:flex justify-between items-center md:pt-6"},J={class:"text-slate-500 text-base font-normal leading-snug"},Q={class:"md:flex md:items-start gap-16 md:pt-8 md:relative"},W={key:0,class:"w-full"},X={class:"grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-between w-full"},Z={key:1,class:"w-full"},tt={class:"grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-between w-full"},et={key:0,class:"col-span-4 m-auto text-center mb-3 text-xl"},ot=t("br",null,null,-1),at=t("img",{src:R,width:"150",class:"img-fluid m-auto"},null,-1),nt={key:0,class:"flex justify-center items-center mt-4"},rt={class:"text-end",dir:"ltr"},qt={__name:"[id]",setup(st){const{locale:i}=T(),{id:p}=f().params,_=f(),e=F();N(!1);const g=()=>{e.GET_PRODUCTS_BY_CATEGORY_ID(p,1,i.value)},v=a=>{e.GET_PRODUCTS_BY_CATEGORY_ID(p,a,i.value)},b=a=>{document.querySelector(".filter-khymat-main").classList.toggle("hidden"),document.querySelector(".filter-khymat").classList.toggle("hidden")},w=a=>{document.querySelector(".filter-khymat-main").classList.toggle("hidden"),document.querySelector(".filter-khymat").classList.toggle("hidden")};return G(()=>{document.querySelector(".header").classList.remove("menu_fixed_up"),g()}),H(()=>_.query,()=>{document.querySelector(".header").classList.remove("menu_fixed_up"),g()}),D({title:i.value==="ar"?"خيمات زمان - المنتجات":"Khymat - Products",meta:[{name:"description",content:"Shop for high-quality camping gear and outdoor equipment at Khymat. Find tents, sleeping bags, backpacks, and more."},{name:"keywords",content:"camping gear, outdoor equipment, tents, sleeping bags, backpacks, Khymat"},{name:"robots",content:"index, follow"},{property:"og:title",content:i.value==="ar"?"خيمات زمان - المنتجات":"Khymat - Products"},{property:"og:description",content:"Shop for high-quality camping gear and outdoor equipment at Khymat. Find tents, sleeping bags, backpacks, and more."},{property:"og:url",content:"https://khaymatzaman.com/products/subcategory/1"},{property:"og:type",content:"website"},{property:"og:locale",content:i.value==="ar"?"ar_AR":"en_US"},{name:"twitter:title",content:i.value==="ar"?"خيمات زمان - المنتجات":"Khymat - Products"},{name:"twitter:description",content:"Shop for high-quality camping gear and outdoor equipment at Khymat. Find tents, sleeping bags, backpacks, and more."},{name:"twitter:card",content:"summary_large_image"}]}),(a,m)=>{const x=L,h=E,S=M,q=j,P=B,C=K,$=I;return n(),r(u,null,[s(x,{route:o(_).fullPath,name:"Shop",title:"Shop Product",description:"Check all your categories to get what brand your needs"},null,8,["route"]),t("div",{class:"px-6 lg:px-[133px] py-8",dir:o(i)=="ar"?"rtl":"ltr"},[t("div",U,[t("button",{onClick:m[0]||(m[0]=d=>b(d.target)),class:"relative z-40 filter-button flex gap-2 md:hidden items-center text-primary border border-gray-400 px-4 py-2 rounded-xl hover:bg-primary hover:border-primary hover:text-white transition-all"},[y(l(a.$t("Categories"))+" ",1),V])]),o(e).loading_products?(n(),r("div",Y,[t("div",A,[s(h,{class:"category-skelton",active:""})]),s(h,{class:"category-skelton",active:""})])):c("",!0),!o(e).loading_products&&o(e).data?(n(),r("div",z,[t("div",J,l(a.$t("Show"))+" 1-"+l(o(e).data.data.length)+" "+l(a.$t("item from"))+" "+l(o(e).data.data.length)+" "+l(a.$t("total")),1),s(S)])):c("",!0),t("div",{class:"filter-khymat-main hidden",onClick:w}),t("div",Q,[s(q),o(e).loading_products?(n(),r("div",W,[t("div",X,[(n(),r(u,null,k(8,d=>t("div",null,[s(P)])),64))])])):c("",!0),!o(e).loading_products&&o(e).data?(n(),r("div",Z,[t("div",tt,[o(e).data.data.length==0?(n(),r("div",et,[y(l(a.$t("No Products here! 😓"))+" ",1),ot,at])):c("",!0),(n(!0),r(u,null,k(o(e).data.data,d=>(n(),r("div",null,[s(C,{product:d,filter:!0},null,8,["product"])]))),256))]),o(e).data.data.length!=0?(n(),r("div",nt,[t("ul",rt,[s($,{current:a.current,"onUpdate:current":m[1]||(m[1]=d=>a.current=d),onChange:v,total:o(e).data.last_page+"0"},null,8,["current","total"])])])):c("",!0)])):c("",!0)])],8,O)],64)}}};export{qt as default};
