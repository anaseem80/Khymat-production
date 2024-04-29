import C from"./otpModal.vc26cbxB.js";import{_ as M}from"./breadcrumb.vue.abn8NRFY.js";import{u as B,b as N,e as V,h as j,_ as E}from"./entry.Tb-PheA_.js";import L from"./Google.lf36HJV1.js";import{u as O}from"./Login.oBCwyEWt.js";import{_ as P}from"./emoji.7UVnKKU0.js";import{c as R,a as f}from"./index.esm.gOXowI9j.js";import{a as q,E as A,a4 as D,J as a,u as e,a3 as t,a8 as l,a5 as o,U as d,H as G,F as h,Q as g,a2 as x,R as H,a7 as I}from"./swiper-vue.3kpoCCrI.js";import"./step4.Dg3x2SGA.js";import"./Verify.9Ihrnb9j.js";import"./step1.4BBZOWCj.js";import"./Header.vue.HFJsJxCx.js";import"./logo.WzgcXTjH.js";import"./step2.K1IHPKZG.js";import"./step3.nclu28IE.js";const T=["dir"],U={class:"lg:w-3/4 m-auto"},z={class:"flex font-semibold gap-3 text-2xl"},J=t("img",{src:P,width:"20",height:"20"},null,-1),Q={class:"text-md mt-2 text-gray-400"},W={class:"form-group mb-8"},K={for:"email",class:"text-lg text-primary block"},X={class:"invalid-feedback"},Y={class:"form-group"},Z={for:"password",class:"text-lg text-primary block"},tt={class:"invalid-feedback"},st={class:"form-group flex justify-between mt-4"},ot={class:"form-group mt-8"},et=["disabled"],at={class:"translate-y-[-2px]"},nt=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"arrow w-5 h-5 ml-2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})],-1),it={class:"flex items-center gap-4 justify-center my-7"},lt=t("span",{class:"bg-gray-300 w-full h-[2px]"},null,-1),rt={class:"text-primary font-semibold shrink-0"},dt=t("span",{class:"bg-gray-300 w-full h-[2px]"},null,-1),ct={class:"flex flex-col gap-6 mt-5"},Mt={__name:"index",setup(mt){const w=B(),{locale:c}=N(),i=q(!1),r=O(),m=V(),v=R().shape({email:f().required("البريد مطلوب").email("البريد الالكتروني غير صالح"),password:f().min(8,"كلمة السر يجب ان تكون علي الاقل 8 احرف").required("كلمة السر مطلوبة")}),b=s=>{r.LOGIN(s,c.value)},y=s=>{m.Verfiy_Modal(),m.swiper.slideTo(1)};return A(()=>{i.value=!0}),(s,p)=>{const k=C,$=M,_=h("Field"),u=E,F=L,S=h("Form");return g(),D(G,null,[a(k),a($,{route:e(w).fullPath,name:"Login",title:"Create an Account",description:"Register for faster checkout, track your order's status, and more"},null,8,["route"]),t("div",{class:"container mx-auto rounded my-12 px-6 lg:px-[133px] py-8",dir:e(c)=="ar"?"rtl":"ltr"},[t("div",U,[t("h5",z,[l(o(s.$t("Welcome back"))+" ",1),J]),t("p",Q,o(s.$t("Enter your data to enjoy shopping")),1),a(S,{class:"mt-8",onSubmit:b,"validation-schema":e(v)},{default:d(({errors:n})=>[t("div",W,[t("label",K,o(s.$t("Email")),1),a(_,{type:"email",placeholder:"example@example.com",id:"email",disabled:!e(i),name:"email",class:x(["rounded bg-gray-100 p-3 outline-none w-full mt-4",{"is-invalid":n.email,"is-valid":!n.email}])},null,8,["disabled","class"]),t("div",X,o(n.email),1)]),t("div",Y,[t("label",Z,o(s.$t("Password")),1),a(_,{type:"password",id:"password",name:"password",disabled:!e(i),placeholder:"********",class:x(["rounded bg-gray-100 p-3 outline-none w-full mt-4 text-xl",{"is-invalid":n.password,"is-valid":!n.password}])},null,8,["disabled","class"]),t("div",tt,o(n.password),1)]),t("div",st,[a(u,{to:"/register",class:"text-primary hover:text-orange-800 transition"},{default:d(()=>[l(o(s.$t("Don't have an account ?")),1)]),_:1}),a(u,{to:"#",class:"text-primary hover:text-orange-800 transition",onClick:p[0]||(p[0]=pt=>y())},{default:d(()=>[l(o(s.$t("Forget password ?")),1)]),_:1})]),t("div",ot,[t("button",{class:"btn w-full rounded-lg",disabled:e(r).loading||!e(i)},[t("span",at,[l(o(s.$t("Login"))+" ",1),e(r).loading?(g(),H(e(j),{key:0,class:"ms-1"})):I("",!0)]),nt],8,et),t("div",it,[lt,t("span",rt,o(s.$t("Or")),1),dt]),t("div",ct,[a(F)])])]),_:1},8,["validation-schema"])])],8,T)],64)}}};export{Mt as default};
