import{z as m}from"./entry.Tb-PheA_.js";import{u}from"./Address.optUwPHs.js";import{a as f,E as _,Q as v,a4 as h}from"./swiper-vue.3kpoCCrI.js";const I={id:"map",class:"col-span-2",style:{height:"500px"}},E={__name:"map",setup(M){let i=!1;f(null);const c=u();function g(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(o){const e=o.coords.latitude,t=o.coords.longitude;var n=new google.maps.LatLng(e,t),a=document.getElementById("map"),r={center:n,zoom:17,mapTypeId:google.maps.MapTypeId.TERRAIN};s=new google.maps.Map(a,r),l=new google.maps.Marker({position:n}),l.setMap(s),d(e,t)}):console.log("Geolocation is not supported by this browser."),google.maps.event.addListenerOnce(s,"click",function(o){placeMarker(o.latLng)})}i||m(()=>import("https://maps.googleapis.com/maps/api/js?key=AIzaSyDjjZzMmPfqAB8xbfhXhr2yiEaJ8n5EiDg&callback=initMap"),__vite__mapDeps([]),import.meta.url).then(()=>{i=!0,g()}).catch(o=>{console.error("Error importing Google Maps API:",o)});var s,l;function d(o,e){var t=new google.maps.Geocoder,n=new google.maps.LatLng(o,e);t.geocode({location:n},function(a,r){if(r===google.maps.GeocoderStatus.OK)if(a[0]&&a[0].place_id){const p=a[0].place_id;c.location_id=p}else console.log("Place ID not found for this location.");else console.log("Geocoder failed: ",r)})}return _(()=>{const o=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(e):alert("Geolocation is not supported by this browser.")},e=t=>{AddressStore.latitudes=t.coords.latitude,AddressStore.longitude=t.coords.longitude};o()}),(o,e)=>(v(),h("div",I))}};export{E as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
