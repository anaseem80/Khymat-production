import p from"./CMSutQV6.js";import b from"./CpE7rn4E.js";import{d as v}from"./Dx3tmLG_.js";import{j as f,Q as i,a4 as d,u as r,a3 as s,a5 as a,a7 as c,a8 as h,J as l,H as y}from"./Dos21iDt.js";const g={key:0,class:"p-5 pl-0 pr-0 mt-4 md:mt-12"},w={class:"flex justify-between relative md:w-full"},L={class:"flex gap-6 items-center"},k={key:1,class:"tabs py-6"},S={class:"return-policy tab hidden"},x={class:"mb-6 font-bold"},q={class:"common-question tab"},$={class:"mb-6 font-bold"},A=f({__name:"Tabs",setup(C){const o=v(),n=e=>{document.querySelectorAll(".tab").forEach(t=>{t.classList.add("hidden")}),document.querySelectorAll(".list-item").forEach(t=>{t.classList.remove("border-b-2"),t.classList.remove("border-black"),t.classList.add("text-neutral-400")}),document.querySelector("."+e.target.id).classList.remove("hidden"),document.querySelector("."+e.target.id).classList.add("visible"),e.target.classList.add("border-b-2"),e.target.classList.add("border-black"),e.target.classList.remove("text-neutral-400")};return(e,t)=>{const m=p,u=b;return i(),d(y,null,[r(o).loading?c("",!0):(i(),d("div",g,[s("div",w,[s("ul",L,[s("li",{id:"common-question",onClick:t[0]||(t[0]=_=>n(_)),class:"list-item cursor-pointer text-xl border-b-2 border-black hover:text-primary transition"},a(e.$t("Customer Reviews")),1)])])])),r(o).loading?c("",!0):(i(),d("div",k,[s("div",S,[s("h5",x,a(e.$t("Shipping")),1),h(" "+a(r(o).data.return_policy),1)]),s("div",q,[s("h5",$,a(e.$t("Reviews")),1),l(m,{reviews:r(o).data.product.reviews},null,8,["reviews"]),l(u,{id:r(o).data.product.id},null,8,["id"])])]))],64)}}});export{A as _};