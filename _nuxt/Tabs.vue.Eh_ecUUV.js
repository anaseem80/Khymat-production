import{u as c,au as h,h as y,f as s}from"./entry.rn6gmTy6.js";import{j as v,Q as o,a4 as f,a3 as w,u as t,R as n,U as u,a7 as a,a5 as i,a8 as p}from"./swiper-vue.2KqUgGr4.js";const x={class:"w-full md:w-[240px] md:min-w-[240px] bg-white rounded-[10px] justify-start items-start gap-2.5 md:inline-flex tabs"},C={class:"flex-col justify-center items-start gap-2 flex"},$=v({__name:"Tabs",setup(b){const r=c(),d=h(),k=()=>{d.LOGOUT()};return(e,m)=>{const l=y;return o(),f("div",x,[w("div",C,[("useCookie"in e?e.useCookie:t(s))("token").value?(o(),n(l,{key:0,to:t(r)("/profile"),class:"text-zinc-600 text-base hover:bg-primary w-full pl-2 pr-6 py-1 hover:text-white transition-all font-medium"},{default:u(()=>[p(i(e.$t("Profile")),1)]),_:1},8,["to"])):a("",!0),("useCookie"in e?e.useCookie:t(s))("token").value?(o(),n(l,{key:1,to:t(r)("/profile/orders"),class:"text-zinc-600 text-base hover:bg-primary w-full pl-2 pr-6 py-1 hover:text-white transition-all font-medium"},{default:u(()=>[p(i(e.$t("Order List")),1)]),_:1},8,["to"])):a("",!0),("useCookie"in e?e.useCookie:t(s))("token").value?(o(),n(l,{key:2,to:t(r)("/profile/wallet"),class:"text-zinc-600 text-base hover:bg-primary w-full pl-2 pr-6 py-1 hover:text-white transition-all font-medium"},{default:u(()=>[p(i(e.$t("My Wallet")),1)]),_:1},8,["to"])):a("",!0),("useCookie"in e?e.useCookie:t(s))("token").value?(o(),f("button",{key:3,onClick:m[0]||(m[0]=g=>k()),class:"text-red-500 text-base hover:bg-primary w-full pl-2 text-start pr-6 py-1 hover:text-white transition-all font-medium"},i(e.$t("Logout")),1)):a("",!0)])])}}});export{$ as _};
