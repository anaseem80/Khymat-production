import{a as L,b as T,e as y,d as I,E as M,_ as u}from"./entry.Tb-PheA_.js";import P from"./WishListIcon.9ooGqtL2.js";import{Q as _,a4 as p,J as a,U as h,a3 as e,u as t,a8 as D,a5 as r,a7 as E}from"./swiper-vue.3kpoCCrI.js";const B={class:"rounded-md transition h-full relative"},$=["src"],N=e("div",{class:"w-[73px] h-[29px] px-2 py-1 bg-white rounded justify-start items-center gap-2.5 inline-flex absolute top-4 left-4"},[e("div",{class:"text-zinc-900 text-sm font-medium font-['Plus Jakarta Sans'] capitalize leading-[21px]"},"New"),e("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{id:"Frame","clip-path":"url(#clip0_2001_3175)"},[e("path",{id:"Vector",d:"M8.50006 15.3333C7.49816 15.3332 6.5194 15.0322 5.69067 14.4691C4.86194 13.9061 4.22146 13.1071 3.85229 12.1757C3.48312 11.2443 3.40228 10.2235 3.62025 9.24555C3.83822 8.26765 4.34495 7.37779 5.07473 6.69133C5.9694 5.84933 8.16673 4.33333 7.8334 1C11.8334 3.66667 13.8334 6.33333 9.8334 10.3333C10.5001 10.3333 11.5001 10.3333 13.1667 8.68667C13.3467 9.202 13.5001 9.756 13.5001 10.3333C13.5001 11.6594 12.9733 12.9312 12.0356 13.8689C11.0979 14.8065 9.82615 15.3333 8.50006 15.3333Z",fill:"#FB941B"})]),e("defs",null,[e("clipPath",{id:"clip0_2001_3175"},[e("rect",{width:"16",height:"16",fill:"white",transform:"translate(0.5)"})])])])],-1),A=["disabled"],W=e("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4",stroke:"#000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),j=[W],O={class:"mt-4"},R={class:"flex justify-between mt-1 items-center"},V={class:"flex flex-col items-center"},z={class:"text-md lg:text-md font-semibold"},H={key:0},G={__name:"Product",props:["product","filter"],setup(f){const m=f,x=L(),{locale:w}=T(),o=m.product,g=y(),n=I(),l=M(),b=s=>{n.ADD_PRODUCT_TO_CART(s,1,null,w.value)},v=s=>n.loading_add_product&&n.loading_add_product.name==s?n.loading_add_product.status:!1,C=s=>{l.wishlist.find(d=>d.id==s.id)?l.DELETE_FROM_WISHLIST(s):l.INSERT_TO_WISHLIST(s)};return(s,i)=>{const d=u,k=P,S=u;return _(),p("div",B,[a(d,{onClick:i[0]||(i[0]=c=>t(n).GET_PRODUCT_BY_ID(t(o).id)),to:t(x)(`/product/${t(o).id}`),class:"relative border transition w-full h-[469px] rounded-md overflow-hidden flex justify-center items-center"},{default:h(()=>[e("img",{src:t(g).route+t(o).image,class:"w-full h-full object-cover hover:scale-105 transition ease-in-out",placeholder:"https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"},null,8,$),N]),_:1},8,["to"]),e("div",{class:"btn text-black overflow-hidden hover:text-white w-8 h-8 p-[7px] bg-white rounded-full add-to-wishlist border border-zinc-900 border-opacity-10 inline-flex absolute top-4 right-4 cursor-pointer",onClick:i[1]||(i[1]=c=>C(t(o)))},[a(k,{product:t(o)},null,8,["product"])]),e("button",{class:"btn overflow-hidden w-8 h-8 p-[7px] bg-white rounded-full add-to-wishlist border border-zinc-900 border-opacity-10 inline-flex absolute top-16 right-4 cursor-pointer",onClick:i[2]||(i[2]=c=>b(t(o).id)),disabled:v(`Add_Product_To_Cart${t(o).id}`)},j,8,A),e("div",O,[a(S,{to:"#",class:"text-sm lg:text-md font-semibold"},{default:h(()=>[D(r(t(o).name),1)]),_:1}),e("div",R,[e("div",V,[e("span",z,r(t(o).price==t(o).final_price?t(o).final_price:t(o).final_price)+" "+r(s.$t("AED")),1),t(o).price!==t(o).final_price?(_(),p("del",H,r(s.$t("AED"))+" "+r(t(o).price),1)):E("",!0)])])])])}}};export{G as default};
