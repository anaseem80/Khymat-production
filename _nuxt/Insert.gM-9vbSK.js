import{a as T,B,i as D}from"./entry.F16qyMkm.js";import{u as F}from"./Address.teuCz1a8.js";import{u as N}from"./Countries.CrxpONAq.js";import{c as P,a as m}from"./index.esm.SjiakBZx.js";import{a as R,E as q,F as x,Q as _,a4 as h,a7 as C,a3 as o,J as d,U as M,a5 as t,a2 as r,I as O,a6 as G,u as g,a8 as V,R as z}from"./swiper-vue.2KqUgGr4.js";const U={key:0,class:"absolute left-2 md:right-2"},j=o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"close-modal text-gray-600 hover:text-red-600 w-6 h-6 cursor-pointer"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})],-1),J=[j],K={class:"flex md:flex-row flex-col md:p-4 gap-8"},Q={class:"md:grid md:grid-cols-2 gap-4"},H={class:"form-group"},W={for:"name",class:"text-lg block"},X={class:"invalid-feedback"},Y={class:"form-group"},Z={for:"last_name",class:"text-lg block"},ee={class:"invalid-feedback"},oe={class:"form-group"},ae={for:"email",class:"text-lg block"},se={class:"invalid-feedback"},te={class:"form-group"},ne={for:"phone",class:"text-lg block"},le={class:"invalid-feedback"},ie={class:"grid xl:grid-cols-1 md:col-span-2 gap-4"},de={class:"form-group"},re={for:"country",class:"text-lg block"},ce={value:"",disabled:""},me=["value"],ue={class:"invalid-feedback"},pe={class:"grid xl:grid-cols-1 md:col-span-2 gap-4"},_e={for:"address_2",class:"text-lg block"},ge={class:"invalid-feedback"},fe=o("div",{id:"map",class:"col-span-2",style:{height:"500px"}},null,-1),he=["disabled"],ve={class:"translate-y-[-2px]"},Ce={__name:"Insert",props:["modal"],setup(S){const{locale:I}=T(),v=S,b=R(null);let w=!1;var f,u;w||B(()=>import("https://maps.googleapis.com/maps/api/js?key=AIzaSyDjjZzMmPfqAB8xbfhXhr2yiEaJ8n5EiDg&callback=initMap"),__vite__mapDeps([]),import.meta.url).then(()=>{w=!0,L()}).catch(e=>{console.error("Error importing Google Maps API:",e)});function L(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){const n=e.coords.latitude,a=e.coords.longitude;var c=new google.maps.LatLng(n,a),i=document.getElementById("map"),s={center:c,zoom:17,mapTypeId:google.maps.MapTypeId.TERRAIN};f=new google.maps.Map(i,s),u=new google.maps.Marker({position:c}),u.setMap(f),y(n,a)}),google.maps.event.addListenerOnce(f,"click",function(e){E(e.latLng)})}function E(e){u&&u.setMap(null),u=new google.maps.Marker({position:e,map:f});var n=e.lat(),a=e.lng();y(n,a)}function y(e,n){var a=new google.maps.Geocoder,c=new google.maps.LatLng(e,n);a.geocode({location:c},function(i,s){if(s===google.maps.GeocoderStatus.OK&&i[0]&&i[0].place_id){const p=i[0].place_id;b.value=p}})}const $=P().shape({name:m().required("الاسم الأول مطلوب"),last_name:m().required("الاسم الأخير مطلوب"),email:m().required("البريد الإلكتروني مطلوب").email("البريد الإلكتروني غير صالح"),phone:m().required("رقم الهاتف مطلوب"),country:m().required("الدولة مطلوبة"),address_2:m().required("العنوان بالتفصيل مطلوب")}),l=F(),k=N();k.GET_COUNTRIES(),q(()=>{const e=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(n):alert("Geolocation is not supported by this browser.")},n=a=>{l.latitudes=a.coords.latitude,l.longitude=a.coords.longitude};e()});const A=async e=>{e.latitudes=l.latitudes.toString(),e.longitude=l.longitude.toString(),e.location_id=b.value,l.STORE_ADDRESS(e)};return(e,n)=>{const a=x("Field"),c=D,i=x("Form");return _(),h("div",{class:r(["rounded-lg",{"bg-white p-3 w-full md:w-8/12 m-auto relative":v.modal}])},[v.modal?(_(),h("span",U,J)):C("",!0),o("div",K,[d(i,{class:"w-full",onSubmit:A,"validation-schema":g($)},{default:M(({errors:s})=>[o("div",Q,[o("div",H,[o("label",W,t(e.$t("First name")),1),d(a,{type:"text",id:"name",name:"name",class:r(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":s.name}])},null,8,["class"]),o("div",X,t(s.name),1)]),o("div",Y,[o("label",Z,t(e.$t("Last Name")),1),d(a,{type:"text",id:"last_name",name:"last_name",class:r(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":s.last_name}])},null,8,["class"]),o("div",ee,t(s.last_name),1)]),o("div",oe,[o("label",ae,t(e.$t("Email")),1),d(a,{type:"email",id:"email",name:"email",class:r(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":s.email}])},null,8,["class"]),o("div",se,t(s.email),1)]),o("div",te,[o("label",ne,t(e.$t("Phone")),1),d(a,{type:"tel",id:"phone",name:"phone",class:r(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":s.phone}])},null,8,["class"]),o("div",le,t(s.phone),1)]),o("div",ie,[o("div",de,[o("label",re,t(e.$t("Country")),1),d(a,{as:"select",id:"country",name:"country",class:r(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":s.country}])},{default:M(()=>[o("option",ce,t(e.$t("Choose Country")),1),(_(!0),h(O,null,G(g(k).countries,p=>(_(),h("option",{value:p.name},t(g(I)=="en"?p.name_en:p.name),9,me))),256))]),_:2},1032,["class"]),o("div",ue,t(s.country),1)])]),o("div",pe,[o("label",_e,t(e.$t("Detailed address")),1),d(a,{as:"textarea",id:"address_2",name:"address_2",class:r(["w-full p-4 pb-[92px] rounded border outline-none focus:border-primary",{"is-invalid":s.address_2}]),placeholder:e.$t("Detailed address")},null,8,["placeholder","class"]),o("div",ge,t(s.address_2),1)]),fe]),o("button",{disabled:g(l).loading_store_address,class:"btn mt-6 w-full"},[o("span",ve,[V(t(e.$t("Save Changes"))+" ",1),g(l).loading_store_address?(_(),z(c,{key:0,class:"text-white drop-shadow-lg mr-3"})):C("",!0)])],8,he)]),_:1},8,["validation-schema"])])],2)}}};export{Ce as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
