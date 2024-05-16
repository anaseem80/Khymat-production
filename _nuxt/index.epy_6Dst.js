import{_ as K}from"./breadcrumb.vue.V1scWvFC.js";import{a3 as j,u as b,a4 as B,a5 as F,C as h,n as v,a as P,b as A,f as N,g as q,h as T,i as U}from"./entry.wmdGuB8t.js";import V from"./Google.VElZdC5B.js";import{_ as G}from"./emoji.WRDmRnjD.js";import{c as I,a as d,b as z}from"./index.esm.ZdNJwaTR.js";import{a as H,E as J,a4 as L,J as n,u as o,a3 as e,a8 as u,a5 as a,U as g,H as M,F as f,Q as y,a2 as m,R as O,a7 as D}from"./swiper-vue.9cXPaQ7p.js";import"./Login.w72EpQcw.js";const Q=j({id:"RegisterStore",state:()=>({loading:!1,error:!1,data:null}),actions:{async REGISTER(_){const l=b();this.loading=!0,B.post(F+"/register",_).then(i=>{i.data.token&&(this.loading=!1,h.success("تم التسجيل بنجاح"),v(l("/login")))}).catch(i=>{this.loading=!1,h.error(i.response.data.message)})}}}),W=["dir"],X={class:"md:w-3/4 m-auto"},Y={class:"flex font-semibold gap-3 text-2xl"},Z=e("img",{src:G,width:"20",height:"20"},null,-1),ee={class:"text-md mt-2 text-gray-400"},ae={class:"form-group mb-8"},te={for:"name",class:"text-lg text-primary block"},se={class:"invalid-feedback"},oe={class:"form-group mb-8"},ne={for:"email",class:"text-lg text-primary block"},le={class:"invalid-feedback"},ie={class:"form-group mb-8"},re={for:"password",class:"text-lg text-primary block"},ce={class:"invalid-feedback"},de={class:"form-group"},me={for:"repassword",class:"text-lg text-primary block"},pe={class:"invalid-feedback"},ue={class:"form-group flex justify-between mt-4"},_e={class:"form-group mt-8"},he=["disabled"],ge={class:"flex items-center gap-4 justify-center my-7"},fe=e("span",{class:"bg-gray-300 w-full h-[2px]"},null,-1),ye={class:"text-primary font-semibold shrink-0"},be=e("span",{class:"bg-gray-300 w-full h-[2px]"},null,-1),ve={class:"flex flex-col gap-6 mt-5"},Ke={__name:"index",setup(_){const{locale:l}=P(),i=b(),w=A(),r=H(!1),x=I().shape({name:d().required("الاسم مطلوب"),email:d().required("البريد مطلوب").email("البريد الالكتروني غير صالح"),password:d().min(8,"كلمة السر يجب ان تكون علي الاقل 8 احرف").required("كلمة السر مطلوبة"),repassword:d().oneOf([z("password"),null],"كلمة السر غير متطابقة").required()}),p=Q(),k=s=>{p.REGISTER(s)};return N({title:l.value==="ar"?"خيمات زمان - تسجيل حساب جديد":"Khymat - Register",meta:[{name:"description",content:"Create a new account on Khymat to access exclusive offers, manage your orders, and enjoy a faster checkout process."},{name:"keywords",content:"register, account, signup, Khymat"},{property:"og:title",content:l.value==="ar"?"خيمات زمان - تسجيل حساب جديد":"Khymat - Register"},{property:"og:description",content:"Create a new account on Khymat to access exclusive offers, manage your orders, and enjoy a faster checkout process."},{property:"og:url",content:"https://khaymatzaman.com/register"},{property:"og:type",content:"website"},{property:"og:locale",content:l.value==="ar"?"ar_AR":"en_US"},{name:"twitter:title",content:l.value==="ar"?"خيمات زمان - تسجيل حساب جديد":"Khymat - Register"},{name:"twitter:description",content:"Create a new account on Khymat to access exclusive offers, manage your orders, and enjoy a faster checkout process."},{name:"twitter:card",content:"summary"}]}),J(()=>{r.value=!0,q("token").value&&v(i("/"))}),(s,we)=>{const R=K,c=f("Field"),$=T,C=U,S=V,E=f("Form");return y(),L(M,null,[n(R,{route:o(w).fullPath,name:"Register",title:"Create an Account",description:"Register for faster checkout, track your order's status, and more"},null,8,["route"]),e("div",{class:"container mx-auto rounded my-12 px-6 lg:px-[133px] py-8",dir:o(l)=="ar"?"rtl":"ltr"},[e("div",X,[e("h5",Y,[u(a(s.$t("Welcome back"))+" ",1),Z]),e("p",ee,a(s.$t("Enter your data to enjoy shopping")),1),n(E,{class:"mt-8",onSubmit:k,"validation-schema":o(x)},{default:g(({errors:t})=>[e("div",ae,[e("label",te,a(s.$t("Name")),1),n(c,{type:"text",placeholder:"John",disabled:!o(r),id:"name",name:"name",class:m(["rounded bg-gray-100 p-3 outline-none w-full mt-4",{"is-invalid":t.name,"is-valid":!t.name}])},null,8,["disabled","class"]),e("div",se,a(t.name),1)]),e("div",oe,[e("label",ne,a(s.$t("Email")),1),n(c,{type:"email",placeholder:"example@example.com",id:"email",disabled:!o(r),name:"email",class:m(["rounded bg-gray-100 p-3 outline-none w-full mt-4",{"is-invalid":t.email,"is-valid":!t.email}])},null,8,["disabled","class"]),e("div",le,a(t.email),1)]),e("div",ie,[e("label",re,a(s.$t("Password")),1),n(c,{type:"password",id:"password",name:"password",disabled:!o(r),dir:"rtl",placeholder:"********",class:m(["rounded bg-gray-100 p-3 outline-none w-full mt-4 text-xl",{"is-invalid":t.password,"is-valid":!t.password}])},null,8,["disabled","class"]),e("div",ce,a(t.password),1)]),e("div",de,[e("label",me,a(s.$t("Confirm Password")),1),n(c,{type:"password",id:"repassword",disabled:!o(r),name:"repassword",dir:"rtl",placeholder:"********",class:m(["rounded bg-gray-100 p-3 outline-none w-full mt-4 text-xl",{"is-invalid":t.repassword,"is-valid":!t.repassword}])},null,8,["disabled","class"]),e("div",pe,a(t.repassword),1)]),e("div",ue,[n($,{to:o(i)("/login"),class:"text-primary hover:text-primary-800 transition"},{default:g(()=>[u(a(s.$t("Already have an account? Sign in")),1)]),_:1},8,["to"])]),e("div",_e,[e("button",{class:"btn w-full rounded-lg",disabled:o(p).loading||!o(r)},[e("span",null,[u(a(s.$t("Register"))+" ",1),o(p).loading?(y(),O(C,{key:0,class:"ms-1"})):D("",!0)])],8,he),e("div",ge,[fe,e("span",ye,a(s.$t("Or")),1),be]),e("div",ve,[n(S)])])]),_:1},8,["validation-schema"])])],8,W)],64)}}};export{Ke as default};