import{j as R,a as k,h as S}from"./entry.rn6gmTy6.js";import{j as B,a as b,E as L,u as o,Q as a,a4 as s,a3 as l,a5 as u,I as g,a6 as h,a2 as v,ad as P,a7 as E,R as $,U as A}from"./swiper-vue.2KqUgGr4.js";const T={key:0,class:"px-6 lg:px-[133px] py-[85px] overflow-hidden"},q={class:"text-slate-800 text-2xl font-bold text-center uppercase leading-loose tracking-tight"},I={class:"relative m-auto md:w-full overflow-x-scroll md:overflow-visible"},O={class:"flex justify-center w-[700px] md:w-full gap-5 border-b border-gray-100 mt-6"},U=["data-id","onClick"],W={class:"text-white md:text-lg font-semibold tracking-widest"},j={class:"text-white text-3xl lg:text-[60px] font-semibold leading-[150px]"},z={class:"text-white md:text-xl font-semibold tracking-widest"},X=B({__name:"Categories",setup(D){const c=b(null),d=R();d.GET_HOME_CATEGORIES_WITH_PRICES();const p=b(0),{locale:y}=k(),_=b(0),C=(n,i)=>{const e=document.querySelectorAll(".tab-item")[i];if(e){const t=e.getBoundingClientRect(),r=e.parentElement.getBoundingClientRect(),w=t.left-r.left;let f=document.querySelector(".category-"+e.getAttribute("data-id"));document.querySelectorAll(".all-categories").forEach(x=>{x.classList.add("hidden"),x.classList.remove("remove")}),f.classList.add("grid"),f.classList.remove("hidden"),p.value=w,c.value=n,_.value=t.width}};return L(()=>{const i=document.querySelectorAll(".tab-item")[0];if(i){const m=i.getBoundingClientRect(),e=i.parentElement.getBoundingClientRect(),t=m.left-e.left;p.value=t,c.value=d.home_categories[0].name_en,_.value=m.width}}),(n,i)=>{const m=S;return o(d).home_categories?(a(),s("section",T,[l("h1",q,u(n.$t("EXPLORE OUR PRODUCT")),1),l("div",I,[l("ul",O,[(a(!0),s(g,null,h(o(d).home_categories,(e,t)=>(a(),s("li",{class:v(["text-sm font-bold leading-[21px] inline-block pb-3 cursor-pointer tab-item transition-all",{"text-primary opacity-100":o(c)==e.name_en,"text-zinc-600 opacity-25":o(c)!=e.name_en}]),"data-id":e.id,onClick:r=>C(e.name_en,t)},u(o(y)=="en"?e.name_en:e.name_ar),11,U))),256))]),o(c)!==null?(a(),s("div",{key:0,class:"border-b border-primary absolute -bottom-0 transition-all ease-in-out",style:P({left:`${o(p)}px`,width:`${o(_)}px`})},null,4)):E("",!0)]),(a(!0),s(g,null,h(o(d).home_categories,(e,t)=>(a(),s("div",{class:v(["md:grid-cols-3 gap-10 mt-8 all-categories",{[`category-${e.id}`]:!0,grid:t==0,hidden:t!=0}])},[(a(!0),s(g,null,h(e.category_prices,r=>(a(),$(m,{to:{path:n.localePath("/products/subcategory"),query:{id:r.category_id,price:r.price}},class:"hover:from-purple-700 hover:to-emerald-100 transition-all bg-gradient-to-b from-emerald-300 to-purple-700 rounded-lg text-center grid place-content-center p-10"},{default:A(()=>[l("p",W,u(n.$t("Under")),1),l("h1",j,u(r.price),1),l("p",null,[l("span",z,u(n.$t("AED")),1)])]),_:2},1032,["to"]))),256))],2))),256))])):E("",!0)}}});export{X as _};
