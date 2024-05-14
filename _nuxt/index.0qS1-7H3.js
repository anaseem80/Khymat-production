import{_ as S}from"./breadcrumb.vue.nnFYOF8U.js";import{B as C,C as B,D as F,E as h,n as j,b as A,a as N,u as P,g as T,h as q,i as I}from"./entry.rn6gmTy6.js";import V from"./Google.i5rmppMq.js";import{_ as G}from"./emoji.rth_ySPu.js";import{c as U,a as r,b as D}from"./index.esm.9PfLl-D5.js";import{a as J,E as L,F as f,Q as g,a4 as M,J as l,u as o,a3 as s,a8 as p,a5 as e,U as b,I as O,a2 as c,R as z,a7 as H}from"./swiper-vue.2KqUgGr4.js";import"./Login.1wBXoORX.js";const K=C({id:"RegisterStore",state:()=>({loading:!1,error:!1,data:null}),actions:{async REGISTER(u){this.loading=!0,B.post(F+"/register",u,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(i=>{i.data.token&&(this.loading=!1,h.success("تم التسجيل بنجاح"),j("/login"))}).catch(i=>{this.loading=!1,h.error(i.response.data.message)})}}}),Q=["dir"],W={class:"md:w-3/4 m-auto"},X={class:"flex font-semibold gap-3 text-2xl"},Y=s("img",{src:G,width:"20",height:"20"},null,-1),Z={class:"text-md mt-2 text-gray-400"},ss={class:"form-group mb-8"},es={for:"name",class:"text-lg text-primary block"},as={class:"invalid-feedback"},ts={class:"form-group mb-8"},os={for:"email",class:"text-lg text-primary block"},ls={class:"invalid-feedback"},ns={class:"form-group mb-8"},is={for:"password",class:"text-lg text-primary block"},ds={class:"invalid-feedback"},rs={class:"form-group"},cs={for:"repassword",class:"text-lg text-primary block"},ms={class:"invalid-feedback"},ps={class:"form-group flex justify-between mt-4"},us={class:"form-group mt-8"},_s=["disabled"],hs={class:"flex items-center gap-4 justify-center my-7"},fs=s("span",{class:"bg-gray-300 w-full h-[2px]"},null,-1),gs={class:"text-primary font-semibold shrink-0"},bs=s("span",{class:"bg-gray-300 w-full h-[2px]"},null,-1),vs={class:"flex flex-col gap-6 mt-5"},Cs={__name:"index",setup(u){const i=A(),{locale:_}=N(),v=P(),n=J(!1),m=K(),x=U().shape({name:r().required("الاسم مطلوب"),email:r().required("البريد مطلوب").email("البريد الالكتروني غير صالح"),password:r().min(8,"كلمة السر يجب ان تكون علي الاقل 8 احرف").required("كلمة السر مطلوبة"),repassword:r().oneOf([D("password"),null],"كلمة السر غير متطابقة").required()}),y=t=>{m.REGISTER(t)};return L(()=>{n.value=!0}),T({title:_.value=="ar"?"خيمات زمان - تسجيل حساب جديد":"Khymat - Register"}),(t,xs)=>{const w=S,d=f("Field"),k=q,$=I,R=V,E=f("Form");return g(),M(O,null,[l(w,{route:o(i).fullPath,name:"Register",title:"Create an Account",description:"Register for faster checkout, track your order's status, and more"},null,8,["route"]),s("div",{class:"container mx-auto rounded my-12 px-6 lg:px-[133px] py-8",dir:o(_)=="ar"?"rtl":"ltr"},[s("div",W,[s("h5",X,[p(e(t.$t("Welcome back"))+" ",1),Y]),s("p",Z,e(t.$t("Enter your data to enjoy shopping")),1),l(E,{class:"mt-8",onSubmit:y,"validation-schema":o(x)},{default:b(({errors:a})=>[s("div",ss,[s("label",es,e(t.$t("Name")),1),l(d,{type:"text",placeholder:"John",disabled:!o(n),id:"name",name:"name",class:c(["rounded bg-gray-100 p-3 outline-none w-full mt-4",{"is-invalid":a.name,"is-valid":!a.name}])},null,8,["disabled","class"]),s("div",as,e(a.name),1)]),s("div",ts,[s("label",os,e(t.$t("Email")),1),l(d,{type:"email",placeholder:"example@example.com",id:"email",disabled:!o(n),name:"email",class:c(["rounded bg-gray-100 p-3 outline-none w-full mt-4",{"is-invalid":a.email,"is-valid":!a.email}])},null,8,["disabled","class"]),s("div",ls,e(a.email),1)]),s("div",ns,[s("label",is,e(t.$t("Password")),1),l(d,{type:"password",id:"password",name:"password",disabled:!o(n),dir:"rtl",placeholder:"********",class:c(["rounded bg-gray-100 p-3 outline-none w-full mt-4 text-xl",{"is-invalid":a.password,"is-valid":!a.password}])},null,8,["disabled","class"]),s("div",ds,e(a.password),1)]),s("div",rs,[s("label",cs,e(t.$t("Confirm Password")),1),l(d,{type:"password",id:"repassword",disabled:!o(n),name:"repassword",dir:"rtl",placeholder:"********",class:c(["rounded bg-gray-100 p-3 outline-none w-full mt-4 text-xl",{"is-invalid":a.repassword,"is-valid":!a.repassword}])},null,8,["disabled","class"]),s("div",ms,e(a.repassword),1)]),s("div",ps,[l(k,{to:o(v)("/login"),class:"text-primary hover:text-primary-800 transition"},{default:b(()=>[p(e(t.$t("Already have an account? Sign in")),1)]),_:1},8,["to"])]),s("div",us,[s("button",{class:"btn w-full rounded-lg",disabled:o(m).loading||!o(n)},[s("span",null,[p(e(t.$t("Register"))+" ",1),o(m).loading?(g(),z($,{key:0,class:"ms-1"})):H("",!0)])],8,_s),s("div",hs,[fs,s("span",gs,e(t.$t("Or")),1),bs]),s("div",vs,[l(R)])])]),_:1},8,["validation-schema"])])],8,Q)],64)}}};export{Cs as default};
