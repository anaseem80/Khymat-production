import{d as g,a as v,J as t,L as l,M as a,u as s,O as n,P as o,a4 as b,N as d,ak as y,aq as T,ar as h,Q as _,R as f,a3 as k,T as x,an as B,ao as C}from"./swiper-vue.vkXjvdEW.js";import{_ as N}from"./Video.vue.w1i8lP23.js";import{u as P,c as V,d as j}from"./entry.7m-UfYi-.js";const A={key:0},M={key:"loaded"},Z={class:"lg:hidden text-2xl mb-6"},z={class:"grid gap-6 grid-cols-1 lg:grid-cols-4 relative"},L={class:"lg:col-span-3 rounded-lg overflow-hidden w-full"},O={class:"h-[250px] lg:h-[650px] w-full"},R=["src"],$={class:"h-[130px] lg:h-[650px] lg:overflow-hidden"},q={class:"h-full w-full cursor-pointer rounded m-auto transition"},D=["src"],E={class:"flex flex-wrap gap-6 mt-8 justify-between"},H=g({__name:"Slider",setup(F){P().params;const u=v(null),r=V(),c=j(),w=e=>{u.value=e};return(e,G)=>{const p=B,m=C,S=N;return t(),l(x,{name:"fade",mode:"out-in"},{default:a(()=>[s(r).loading?k("",!0):(t(),n("div",A,[o("div",M,[o("h1",Z,b(s(r).data.product.name),1),o("div",z,[o("div",L,[d(m,{"slides-per-view":1,zoom:!0,modules:["SwiperAutoplay"in e?e.SwiperAutoplay:s(y),"SwiperZoom"in e?e.SwiperZoom:s(T),"SwiperThumbs"in e?e.SwiperThumbs:s(h)],autoplay:{delay:3e3,disableOnInteraction:!1},thumbs:{swiper:s(u)},loop:!0,effect:"creative"},{default:a(()=>[(t(!0),n(_,null,f(s(r).data.product.images,i=>(t(),l(p,null,{default:a(()=>[o("div",O,[o("img",{src:s(c).route+i.image,class:"w-full h-full object-cover"},null,8,R)])]),_:2},1024))),256))]),_:1},8,["modules","thumbs"])]),o("div",$,[d(m,{onClick:w,direction:e.$viewport.isGreaterThan("tablet")?"vertical":"horizontal","slides-per-view":3,modules:["SwiperThumbs"in e?e.SwiperThumbs:s(h)],"space-between":30,class:"thumnbs",effect:"creative"},{default:a(()=>[(t(!0),n(_,null,f(s(r).data.product.images,i=>(t(),l(p,{class:"text-center !w-[100px] !h-[130px] transition"},{default:a(()=>[o("div",q,[o("img",{src:s(c).route+i.image,class:"m-auto w-full h-full object-cover rounded-lg"},null,8,D)])]),_:2},1024))),256))]),_:1},8,["direction","modules"])])]),o("div",E,[d(S)])])]))]),_:1})}}});export{H as _};
