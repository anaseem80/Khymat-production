import{a as g,u as S,e as _,h as b}from"./entry.rn6gmTy6.js";import{j as y,Q as i,a4 as d,J as c,U as l,I as k,a6 as C,R as N,a3 as a,a5 as r,u as t,ad as L,ak as j,al as B,am as E,an as I,a2 as M,a8 as p,ao as V,ap as z}from"./swiper-vue.2KqUgGr4.js";const A=["dir"],D=a("div",{class:"absolute inset-0 h-full w-full bg-black/[.50]"},null,-1),P={class:"flex-col justify-start items-start md:gap-[35px] inline-flex relative z-2 slide-content"},F={class:"text-white text-xl md:text-base leading-normal mb-3 md:mb-0","data-aos":"fade-up"},R={class:"text-white text-sm md:text-[58px] md:leading-[80px]","data-aos":"fade-up"},T=a("div",{class:"text-neutral-50 text-sm md:text-xl font-normal md:eading-[30px] hidden md:block","data-aos":"fade-down"},[p("We know how large objects will act, "),a("br"),p("but things on a small scale.")],-1),U={class:"justify-start items-start gap-2.5 mt-4 inline-flex","data-aos":"fade-down"},q=a("div",{class:"swiper-scrollbar"},null,-1),Q=y({__name:"Banner",props:["banners"],setup(u){const{locale:n}=g(),m=S(),f=_(),h=e=>{const s=document.querySelector(".slide-content");s.classList.remove("active"),s.classList.add("fade-up"),setTimeout(()=>{s.classList.add("active")},500)};return(e,s)=>{const w=b,x=V,v=z;return i(),d("div",{class:M(["p-6 md:p-0 overflow-hidden",{ar:t(n)=="ar",en:t(n)=="en"}]),dir:t(n)=="ar"?"rtl":"ltr"},[c(v,{class:"banner rounded-3xl md:rounded-none overflow-hidden",ref:"swiper","slides-per-view":1,navigation:!0,scrollbar:!0,modules:["SwiperNavigation"in e?e.SwiperNavigation:t(j),"SwiperAutoplay"in e?e.SwiperAutoplay:t(B),"SwiperEffectCreative"in e?e.SwiperEffectCreative:t(E),"SwiperScrollbar"in e?e.SwiperScrollbar:t(I)],autoplay:{delay:4e3,disableOnInteraction:!1,reverseDirection:!0},breakpoints:{1200:{slidesPerView:1}},onSlideChange:h,loop:!0,effect:"creative","creative-effect":{prev:{shadow:!0,translate:["-5%",0,-1]},next:{translate:["100%",0,0]}}},{default:l(()=>[(i(!0),d(k,null,C(u.banners,o=>(i(),N(x,{class:"relative !h-[250px] md:!h-[598px] bg-cover bg-center grid place-content-center px-12 lg:px-40",key:o,style:L({backgroundImage:"url("+t(f).route+o.image+")"})},{default:l(()=>[D,a("div",P,[a("div",F,"SUMMER "+r(new Date().getFullYear()),1),a("div",R,r(o.name),1),T,a("div",U,[c(w,{to:t(m)("/categories"),class:"btn uppercase overflow-hidden px-6 md:px-10 md:py-[15px] bg-primary text-white transition hover:bg-fuchsia-700 rounded-[5px] flex-col justify-start items-center gap-2.5 inline-flex text-xs md:text-base"},{default:l(()=>[a("span",null,r(e.$t("Shop")),1)]),_:1},8,["to"])])])]),_:2},1032,["style"]))),128)),q]),_:1},8,["modules"])],10,A)}}});export{Q as _};
