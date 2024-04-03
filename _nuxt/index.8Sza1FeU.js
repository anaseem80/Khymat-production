import{v as S,w as X,B,D as g,aa as C,_ as R,f as E}from"./entry.3WBB32f8.js";import N from"./Google.J0QjeLeo.js";import{_ as b,a as j,b as q,c as T,d as V}from"./Time.ItNQodOe.js";import{c as A,a as l,b as F}from"./index.esm.ltjTF59R.js";import{a as M,A as $,O as G,P as s,N as a,M as m,u as o,U as c,a7 as U,C as f,J as u,a6 as d,a4 as n,L as D,a3 as I}from"./swiper-vue.JvRXmqhe.js";import"./Login.DFJF6WTb.js";const J=S({id:"RegisterStore",state:()=>({loading:!1,error:!1,data:null}),actions:{async REGISTER(p){this.loading=!0,X.post(B+"/register",p,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(t=>{t.data.token&&(this.loading=!1,g.success("تم التسجيل بنجاح"),C("/login"))}).catch(t=>{this.loading=!1,g.error(t.response.data.message)})}}}),L={class:"container mx-auto border rounded my-12 px-4 lg:px-8 pb-20 pt-12 grid grid-cols-1 lg:grid-cols-5 gap-y-16 lg:gap-28",dir:"rtl"},O={class:"lg:col-span-3"},z=s("h5",{class:"flex font-semibold gap-3 text-2xl"},[c(" اهلا بعودتك "),s("img",{src:b,width:"20",height:"20"})],-1),H=s("p",{class:"text-xl mt-6 text-gray-400"},"ادخل بياناتك للتمكن بالتمتع بالتسوق",-1),P={class:"form-group mb-8"},K=s("label",{for:"name",class:"text-lg text-primary block"},"اسم المستخدم",-1),Q={class:"invalid-feedback"},W={class:"form-group mb-8"},Y=s("label",{for:"email",class:"text-lg text-primary block"},"البريد الالكتروني",-1),Z={class:"invalid-feedback"},ss={class:"form-group mb-8"},es=s("label",{for:"email",class:"text-lg text-primary block"},"رقم الهاتف",-1),ts={class:"invalid-feedback"},as={class:"form-group"},os=s("label",{for:"password",class:"text-lg text-primary block"},"كلمة المرور",-1),is={class:"invalid-feedback"},ls={class:"form-group"},ds=s("label",{for:"repassword",class:"text-lg text-primary block"}," تأكيد كلمة المرور",-1),ns={class:"invalid-feedback"},cs={class:"form-group flex justify-between mt-4"},rs={class:"flex items-center"},ms=s("label",{for:"checked-checkbox",class:"ms-2 text-sm font-medium text-gray-900 light:text-gray-300"},"اوافق علي الشروط والأحكام",-1),ps={class:"form-group mt-8"},_s=["disabled"],hs=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"arrow w-5 h-5 ml-2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})],-1),gs={class:"translate-y-[-4px]"},fs=s("div",{class:"flex items-center gap-4 justify-center my-7"},[s("span",{class:"bg-gray-300 w-full h-[2px]"}),s("span",{class:"text-primary font-semibold shrink-0"},"التسجيل بواسطة"),s("span",{class:"bg-gray-300 w-full h-[2px]"})],-1),us={class:"flex flex-col gap-6 mt-5"},bs={class:"col-span-2"},xs=s("h5",{class:"flex font-semibold gap-3 text-xl"},[c(" مميزات التسجيل في موقعنا "),s("img",{src:b,width:"20",height:"20"})],-1),vs=s("span",{class:"translate-y-[-3px]"},"سجل حسابك الجديد الأن",-1),ws=U('<div class="flex flex-col gap-8 mt-8"><div class="flex gap-4 items-start border-b pb-6"><img src="'+j+'" width="48" height="48"><div><h1 class="font-semibold">شحن سريع موثوق بة </h1><p class="text-gray-400 mt-3"> هذا النص هو مثال لنص يمكن أن يستبدل في </p></div></div><div class="flex gap-4 items-start border-b pb-6"><img src="'+q+'" width="48" height="48"><div><h1 class="font-semibold">تسوق سريع وسهل</h1><p class="text-gray-400 mt-3"> هذا النص هو مثال لنص يمكن أن يستبدل في </p></div></div><div class="flex gap-4 items-start border-b pb-6"><img src="'+T+'" width="48" height="48"><div><h1 class="font-semibold">دعم فني متاح 24 ساعة</h1><p class="text-gray-400 mt-3"> هذا النص هو مثال لنص يمكن أن يستبدل في </p></div></div><div class="flex gap-4 items-start pb-6"><img src="'+V+'" width="48" height="48"><div><h1 class="font-semibold">استرجاع سريع ومجاني</h1><p class="text-gray-400 mt-3"> هذا النص هو مثال لنص يمكن أن يستبدل في </p></div></div></div>',1),Es={__name:"index",setup(p){const t=M(!1),r=J(),x=A().shape({name:l().required("الاسم مطلوب"),phone:l().required("رقم الهاتف مطلوب"),email:l().required("البريد مطلوب").email("البريد الالكتروني غير صالح"),password:l().min(8,"كلمة السر يجب ان تكون علي الاقل 8 احرف").required("كلمة السر مطلوبة"),repassword:l().oneOf([F("password"),null],"كلمة السر غير متطابقة").required()}),v=_=>{r.REGISTER(_)};return $(()=>{t.value=!0}),(_,ys)=>{const i=f("Field"),h=R,w=E,y=N,k=f("Form");return u(),G("div",L,[s("div",O,[z,H,a(k,{class:"mt-8",onSubmit:v,"validation-schema":o(x)},{default:m(({errors:e})=>[s("div",P,[K,a(i,{type:"text",placeholder:"John",disabled:!o(t),dir:"ltr",id:"name",name:"name",class:d(["rounded bg-gray-100 p-3 outline-none w-full mt-4",{"is-invalid":e.name,"is-valid":!e.name}])},null,8,["disabled","class"]),s("div",Q,n(e.name),1)]),s("div",W,[Y,a(i,{type:"email",placeholder:"example@example.com",dir:"ltr",id:"email",disabled:!o(t),name:"email",class:d(["rounded bg-gray-100 p-3 outline-none w-full mt-4",{"is-invalid":e.email,"is-valid":!e.email}])},null,8,["disabled","class"]),s("div",Z,n(e.email),1)]),s("div",ss,[es,a(i,{type:"tel",placeholder:"+XXXXXXXX",dir:"ltr",disabled:!o(t),id:"phone",name:"phone",class:d(["rounded bg-gray-100 p-3 outline-none w-full mt-4",{"is-invalid":e.phone,"is-valid":!e.phone}])},null,8,["disabled","class"]),s("div",ts,n(e.phone),1)]),s("div",as,[os,a(i,{type:"password",id:"password",name:"password",disabled:!o(t),dir:"rtl",placeholder:"********",class:d(["rounded bg-gray-100 p-3 outline-none w-full mt-4 text-xl",{"is-invalid":e.password,"is-valid":!e.password}])},null,8,["disabled","class"]),s("div",is,n(e.password),1)]),s("div",ls,[ds,a(i,{type:"password",id:"repassword",disabled:!o(t),name:"repassword",dir:"rtl",placeholder:"********",class:d(["rounded bg-gray-100 p-3 outline-none w-full mt-4 text-xl",{"is-invalid":e.repassword,"is-valid":!e.repassword}])},null,8,["disabled","class"]),s("div",ns,n(e.repassword),1)]),s("div",cs,[s("div",rs,[a(i,{type:"checkbox",id:"confirm_conditions",name:"confirm_conditions",dir:"rtl",class:"w-4 h-4 accent-primary bg-white"}),ms]),a(h,{to:"#",class:"text-primary hover:text-orange-800 transition"},{default:m(()=>[c("لديك حساب بالفعل؟ تسجييل الدخول")]),_:1})]),s("div",ps,[s("button",{class:"btn w-full rounded-lg",disabled:o(r).loading||!o(t)},[hs,s("span",gs,[c("تسجيل حساب جديد "),o(r).loading?(u(),D(w,{key:0,class:"ms-1"})):I("",!0)])],8,_s),fs,s("div",us,[a(y)])])]),_:1},8,["validation-schema"])]),s("div",bs,[xs,a(h,{to:"#",class:"btn-outline mt-6 mb-16"},{default:m(()=>[vs]),_:1}),ws])])}}};export{Es as default};
