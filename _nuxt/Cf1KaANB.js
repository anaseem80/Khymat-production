import{i as g,u as x,a as f,S as h,h as k}from"./DTM008YB.js";import{Q as e,a4 as s,a3 as l,u as t,R as i,a7 as o,a5 as u,H as m,a6 as _,J as y,U as b,a8 as v,a2 as S}from"./Dos21iDt.js";const C={class:"pb-8 flex flex-col gap-4"},B={key:1,class:"text-zinc-900 text-base font-medium"},N={key:2,class:"flex flex-col gap-8"},w={class:"flex flex-col gap-4 mt-4 categories-items"},A={__name:"Filter",setup(V){const a=g();x();const{locale:r}=f();return(d,L)=>{const n=h,p=k;return e(),s("div",{class:S(["w-[312px] m-w-[312px] flex-col gap-4 absolute md:sticky md:top-5 hidden md:flex filter-khymat",{"left-6":t(r)=="ar","right-6":t(r)=="en"}])},[l("div",C,[t(a).categories==null?(e(),i(n,{key:0,class:"category-skelton",active:""})):o("",!0),t(a).categories!=null?(e(),s("h1",B,u(d.$t("All Categories")),1)):o("",!0),t(a).categories==null?(e(),s("ul",N,[(e(),s(m,null,_(12,c=>l("li",null,[y(n,{class:"category-skelton",active:"",block:""})])),64))])):o("",!0),l("div",w,[t(a).categories!=null?(e(!0),s(m,{key:0},_(t(a).categories.data,(c,z)=>(e(),i(p,{class:"flex gap-2 transition-all hover:bg-primary hover:text-white p-2"},{default:b(()=>[v(u(c.name),1)]),_:2},1024))),256)):o("",!0)])])],2)}}};export{A as default};