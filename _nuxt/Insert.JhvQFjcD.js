import{u as E}from"./Address.SuvlKXEQ.js";import{a as y,A as N,C as x,J as _,O as m,P as e,N as a,M as f,a6 as c,a4 as r,u as i,T as k,a3 as h,Q as w,R as S,q as C,U as I,L as B}from"./swiper-vue.JvRXmqhe.js";import{c as F,a as u}from"./index.esm.ltjTF59R.js";import{f as M}from"./entry.3WBB32f8.js";const O={class:"grid lg:grid-cols-1 gap-8 mt-8"},R={class:"border rounded-lg"},D=e("p",{class:"border-b px-6 py-4 mb-4 font-bold"},"عنوان الشحن",-1),G={class:"flex lg:flex-row flex-col p-4 gap-8"},L={class:"grid lg:grid-cols-2 gap-4"},P={class:"form-group"},U=e("label",{for:"name",class:"text-lg block"},"الاسم الأول",-1),j={class:"invalid-feedback"},H={class:"form-group"},J=e("label",{for:"last_name",class:"text-lg block"},"الاسم الأخير",-1),Q={class:"invalid-feedback"},$={class:"form-group lg:col-span-2"},K=e("label",{for:"address_1",class:"text-lg block"},"العنوان",-1),W={class:"invalid-feedback"},X={class:"form-group"},Y=e("label",{for:"email",class:"text-lg block"},"البريد الإلكتروني",-1),Z={class:"invalid-feedback"},ee={class:"form-group"},te=e("label",{for:"phone",class:"text-lg block"},"رقم الهاتف",-1),se={class:"invalid-feedback"},oe={class:"grid lg:grid-cols-4 lg:col-span-2 gap-4"},ae={class:"form-group"},le=e("label",{for:"country",class:"text-lg block"},"الدولة",-1),ie=e("option",{value:"",disabled:""},"إختر الدولة",-1),ne=e("option",{value:"مصر",selected:""},"مصر",-1),de={class:"invalid-feedback"},re={class:"form-group relative"},ce={key:0,class:"w-full h-full absolute top-4 grid place-content-center right-0 text-xl"},ue=e("label",{for:"city",class:"text-lg block"},"المحافظة",-1),_e={value:"",selected:"",disabled:""},me=["value"],pe={class:"invalid-feedback"},fe={class:"form-group relative"},ge={key:0,class:"w-full h-full absolute top-4 grid place-content-center right-0 text-xl"},ve=e("label",{for:"state",class:"text-lg block"},"ولاية",-1),he=["selected"],be=["value","data-id","selected"],ye={class:"invalid-feedback"},xe={class:"form-group"},ke=e("label",{for:"zip",class:"text-lg block"},"الرمز البريدي",-1),we={class:"invalid-feedback"},Se=["disabled"],Ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"arrow w-5 h-5 ml-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})],-1),qe={class:"translate-y-[-2px]"},Ve={__name:"Insert",setup(ze){const q=F().shape({name:u().required("الاسم الأول مطلوب"),last_name:u().required("الاسم الأخير مطلوب"),email:u().required("البريد الإلكتروني مطلوب").email("البريد الإلكتروني غير صالح"),phone:u().required("رقم الهاتف مطلوب"),country:u().required("الدولة مطلوبة"),city:u().required("المدينة مطلوبة"),state:u().required("الولاية مطلوبة"),zip:u().required("الرمز البريدي مطلوب"),address_1:u().required("العنوان بالتفصيل مطلوب")}),o=E();let p=y(null),g=y(null);N(()=>{const l=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(n):alert("Geolocation is not supported by this browser.")},n=d=>{o.latitude=d.coords.latitude,o.longitude=d.coords.longitude};l()});const V=async l=>{l.latitude=o.latitude.toString(),l.longitude=o.longitude.toString(),l.zip=l.zip.toString(),o.STORE_ADDRESS(l)},z=l=>{p=null,o.GET_STATES(l)},T=l=>{l.value,g=l.options[l.selectedIndex].dataset.id};return(l,n)=>{const d=x("Field"),v=M,A=x("Form");return _(),m("div",O,[e("div",R,[D,e("div",G,[a(A,{class:"w-full",onSubmit:V,"validation-schema":i(q)},{default:f(({errors:t})=>[e("div",L,[e("div",P,[U,a(d,{type:"text",dir:"rtl",id:"name",name:"name",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":t.name}])},null,8,["class"]),e("div",j,r(t.name),1)]),e("div",H,[J,a(d,{type:"text",dir:"rtl",id:"last_name",name:"last_name",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":t.last_name}])},null,8,["class"]),e("div",Q,r(t.last_name),1)]),e("div",$,[K,a(d,{as:"textarea",dir:"rtl",id:"address_1",name:"address_1",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":t.address_1}])},null,8,["class"]),e("div",W,r(t.address_1),1)]),e("div",X,[Y,a(d,{type:"email",dir:"rtl",id:"email",name:"email",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":t.email}])},null,8,["class"]),e("div",Z,r(t.email),1)]),e("div",ee,[te,a(d,{type:"tel",dir:"rtl",id:"phone",name:"phone",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":t.phone}])},null,8,["class"]),e("div",se,r(t.phone),1)]),e("div",oe,[e("div",ae,[le,a(d,{as:"select",dir:"rtl",id:"country",name:"country",onChange:n[0]||(n[0]=s=>i(o).GET_CITIES()),class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":t.country}])},{default:f(()=>[ie,ne]),_:2},1032,["class"]),e("div",de,r(t.country),1)]),e("div",re,[a(k,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-100","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:f(()=>[i(o).loading_city?(_(),m("div",ce,[a(v,{class:"text-primary drop-shadow-lg"})])):h("",!0)]),_:1}),ue,a(d,{as:"select",dir:"rtl",id:"city",name:"city",onChange:n[1]||(n[1]=s=>z(s.target.value)),class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":t.city}])},{default:f(()=>[e("option",_e,r(i(o).cities.length==0?"إختر الدولة أولا":"إختر المحافظة"),1),(_(!0),m(w,null,S(i(o).cities,s=>(_(),m("option",{value:s._id,selected:""},r(s.nameAr),9,me))),256))]),_:2},1032,["class"]),e("div",pe,r(t.city),1)]),e("div",fe,[a(k,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-100","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:f(()=>[i(o).loading_states?(_(),m("div",ge,[a(v,{class:"text-primary drop-shadow-lg"})])):h("",!0)]),_:1}),ve,a(d,{as:"select",dir:"rtl",id:"state",name:"state",onChange:n[2]||(n[2]=s=>T(s.target)),modelValue:i(p),"onUpdate:modelValue":n[3]||(n[3]=s=>C(p)?p.value=s:p=s),class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":t.state}])},{default:f(()=>[e("option",{value:"",selected:i(o).states.length==0},r(i(o).states.length==0?"إختر المدينة أولا":"إختر الولاية"),9,he),(_(!0),m(w,null,S(i(o).states,(s,b)=>(_(),m("option",{value:s.districtOtherName,key:b,"data-id":s.districtId,selected:b===0&&!i(p)},r(s.districtOtherName),9,be))),128))]),_:2},1032,["modelValue","class"]),e("div",ye,r(t.state),1),a(d,{dir:"rtl",id:"district",name:"district",type:"hidden",modelValue:i(g),"onUpdate:modelValue":n[4]||(n[4]=s=>C(g)?g.value=s:g=s)},null,8,["modelValue"])]),e("div",xe,[ke,a(d,{type:"number",dir:"rtl",id:"zip",name:"zip",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":t.zip}])},null,8,["class"]),e("div",we,r(t.zip),1)])])]),e("button",{disabled:i(o).loading_store_address,class:"btn mt-6"},[Ce,e("span",qe,[I("حفظ التغييرات "),i(o).loading_store_address?(_(),B(v,{key:0,class:"text-white drop-shadow-lg mr-3"})):h("",!0)])],8,Se)]),_:1},8,["validation-schema"])])])])}}},Ie=Ve;export{Ie as default};
