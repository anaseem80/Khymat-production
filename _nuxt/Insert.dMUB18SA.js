import{a as T,z as F,i as N}from"./entry.gwDySlz0.js";import{u as P}from"./Address.ey9w15aq.js";import{u as R}from"./Countries.tBM4hiaF.js";import{c as B,a as p}from"./index.esm.G2fJBv8R.js";import{a as O,E as q,F as x,Q as g,a4 as h,a7 as C,a3 as o,J as d,U as M,a5 as s,a2 as c,H as D,a6 as G,u as _,a8 as V,R as z}from"./swiper-vue.9cXPaQ7p.js";const U={key:0,class:"absolute left-2 lg:right-2"},j=o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"close-modal text-gray-600 hover:text-red-600 w-6 h-6 cursor-pointer"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})],-1),H=[j],J={class:"flex lg:flex-row flex-col lg:p-4 gap-8"},K={class:"lg:grid lg:grid-cols-2 gap-4"},Q={class:"form-group"},W={for:"name",class:"text-lg block"},X={class:"invalid-feedback"},Y={class:"form-group"},Z={for:"last_name",class:"text-lg block"},ee={class:"invalid-feedback"},oe={class:"form-group"},te={for:"email",class:"text-lg block"},ae={class:"invalid-feedback"},se={class:"form-group"},ne={for:"phone",class:"text-lg block"},le={class:"invalid-feedback"},ie={class:"grid xl:grid-cols-1 lg:col-span-2 gap-4"},re={class:"form-group"},de={for:"country",class:"text-lg block"},ce={value:"",disabled:""},me=["value"],ue={class:"invalid-feedback"},pe=o("div",{id:"map",class:"col-span-2",style:{height:"500px"}},null,-1),ge=["disabled"],_e={class:"translate-y-[-2px]"},ye={__name:"Insert",props:["modal"],setup(S){const{locale:L}=T(),v=S;let b=!1;const w=O(null);b||F(()=>import("https://maps.googleapis.com/maps/api/js?key=AIzaSyDjjZzMmPfqAB8xbfhXhr2yiEaJ8n5EiDg&callback=initMap"),__vite__mapDeps([]),import.meta.url).then(()=>{b=!0,E()}).catch(e=>{console.error("Error importing Google Maps API:",e)});var f,m;function E(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){const n=e.coords.latitude,t=e.coords.longitude;var r=new google.maps.LatLng(n,t),i=document.getElementById("map"),a={center:r,zoom:17,mapTypeId:google.maps.MapTypeId.TERRAIN};f=new google.maps.Map(i,a),m=new google.maps.Marker({position:r}),m.setMap(f),y(n,t)}),google.maps.event.addListenerOnce(f,"click",function(e){I(e.latLng)})}function I(e){m&&m.setMap(null),m=new google.maps.Marker({position:e,map:f});var n=e.lat(),t=e.lng();y(n,t)}function y(e,n){var t=new google.maps.Geocoder,r=new google.maps.LatLng(e,n);t.geocode({location:r},function(i,a){if(a===google.maps.GeocoderStatus.OK&&i[0]&&i[0].place_id){const u=i[0].place_id;w.value=u}})}const $=B().shape({name:p().required("الاسم الأول مطلوب"),last_name:p().required("الاسم الأخير مطلوب"),email:p().required("البريد الإلكتروني مطلوب").email("البريد الإلكتروني غير صالح"),phone:p().required("رقم الهاتف مطلوب"),country:p().required("الدولة مطلوبة")}),l=P(),k=R();k.GET_COUNTRIES(),q(()=>{const e=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(n):alert("Geolocation is not supported by this browser.")},n=t=>{l.latitudes=t.coords.latitude,l.longitude=t.coords.longitude};e()});const A=async e=>{e.latitudes=l.latitudes.toString(),e.longitude=l.longitude.toString(),e.location_id=w.value,l.STORE_ADDRESS(e)};return(e,n)=>{const t=x("Field"),r=N,i=x("Form");return g(),h("div",{class:c(["rounded-lg",{"bg-white p-3 w-full lg:w-8/12 m-auto relative":v.modal}])},[v.modal?(g(),h("span",U,H)):C("",!0),o("div",J,[d(i,{class:"w-full",onSubmit:A,"validation-schema":_($)},{default:M(({errors:a})=>[o("div",K,[o("div",Q,[o("label",W,s(e.$t("First name")),1),d(t,{type:"text",id:"name",name:"name",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":a.name}])},null,8,["class"]),o("div",X,s(a.name),1)]),o("div",Y,[o("label",Z,s(e.$t("Last Name")),1),d(t,{type:"text",id:"last_name",name:"last_name",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":a.last_name}])},null,8,["class"]),o("div",ee,s(a.last_name),1)]),o("div",oe,[o("label",te,s(e.$t("Email")),1),d(t,{type:"email",id:"email",name:"email",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":a.email}])},null,8,["class"]),o("div",ae,s(a.email),1)]),o("div",se,[o("label",ne,s(e.$t("Phone")),1),d(t,{type:"tel",id:"phone",name:"phone",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":a.phone}])},null,8,["class"]),o("div",le,s(a.phone),1)]),o("div",ie,[o("div",re,[o("label",de,s(e.$t("Country")),1),d(t,{as:"select",id:"country",name:"country",class:c(["rounded border p-3 outline-none w-full mt-4 focus:border-primary",{"is-invalid":a.country}])},{default:M(()=>[o("option",ce,s(e.$t("Choose Country")),1),(g(!0),h(D,null,G(_(k).countries,u=>(g(),h("option",{value:u.name},s(_(L)=="en"?u.name_en:u.name),9,me))),256))]),_:2},1032,["class"]),o("div",ue,s(a.country),1)])]),pe]),o("button",{disabled:_(l).loading_store_address,class:"btn mt-6 w-full"},[o("span",_e,[V(s(e.$t("Save Changes"))+" ",1),_(l).loading_store_address?(g(),z(r,{key:0,class:"text-white drop-shadow-lg mr-3"})):C("",!0)])],8,ge)]),_:1},8,["validation-schema"])])],2)}}};export{ye as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
