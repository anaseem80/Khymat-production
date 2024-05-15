import{u as L,a as I,e as M,d as P,G as $,at as y,h as _}from"./entry.F16qyMkm.js";import D from"./WishListIcon.iZTxYtKn.js";import{Q as p,a4 as h,J as d,U as f,u as t,a3 as e,a5 as n,a8 as B,a7 as E}from"./swiper-vue.2KqUgGr4.js";const N={class:"rounded-md transition h-full relative"},A={class:"w-[73px] h-[29px] px-2 py-1 bg-white rounded justify-start items-center gap-2.5 inline-flex absolute top-4 left-4"},W={class:"text-zinc-900 text-sm font-medium font-['Plus Jakarta Sans'] capitalize leading-[21px]"},j=e("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{id:"Frame","clip-path":"url(#clip0_2001_3175)"},[e("path",{id:"Vector",d:"M8.50006 15.3333C7.49816 15.3332 6.5194 15.0322 5.69067 14.4691C4.86194 13.9061 4.22146 13.1071 3.85229 12.1757C3.48312 11.2443 3.40228 10.2235 3.62025 9.24555C3.83822 8.26765 4.34495 7.37779 5.07473 6.69133C5.9694 5.84933 8.16673 4.33333 7.8334 1C11.8334 3.66667 13.8334 6.33333 9.8334 10.3333C10.5001 10.3333 11.5001 10.3333 13.1667 8.68667C13.3467 9.202 13.5001 9.756 13.5001 10.3333C13.5001 11.6594 12.9733 12.9312 12.0356 13.8689C11.0979 14.8065 9.82615 15.3333 8.50006 15.3333Z",fill:"#FB941B"})]),e("defs",null,[e("clipPath",{id:"clip0_2001_3175"},[e("rect",{width:"16",height:"16",fill:"white",transform:"translate(0.5)"})])])],-1),O=["disabled"],R=e("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4",stroke:"#000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),V=[R],z={class:"mt-4"},H={class:"flex justify-between mt-1 items-center"},F={class:"flex gap-2 items-center"},U={class:"text-md md:text-md font-semibold"},G={key:0,class:"text-neutral-400"},Z={__name:"Product",props:["product","filter"],setup(m){const x=m,w=L(),{locale:g}=I(),o=x.product,l=M(),r=P(),a=$(),v=s=>{r.ADD_PRODUCT_TO_CART(s,1,null,g.value)},b=s=>r.loading_add_product&&r.loading_add_product.name==s?r.loading_add_product.status:!1,C=s=>{a.wishlist.find(c=>c.id==s.id)?a.DELETE_FROM_WISHLIST(s):a.INSERT_TO_WISHLIST(s)};return(s,i)=>{const c=y,k=_,S=D,T=_;return p(),h("div",N,[d(k,{onClick:i[0]||(i[0]=u=>t(r).GET_PRODUCT_BY_ID(t(o).id)),to:t(w)(`/product/${t(o).id}`),class:"relative border transition w-full h-[469px] rounded-md overflow-hidden flex justify-center items-center"},{default:f(()=>[d(c,{src:t(l).route+t(o).image,class:"w-full h-full object-cover hover:scale-105 transition ease-in-out",placeholder:t(l).route+t(l).settings.logo},null,8,["src","placeholder"]),e("div",A,[e("div",W,n(s.$t("New")),1),j])]),_:1},8,["to"]),e("div",{class:"btn text-black overflow-hidden hover:text-white w-8 h-8 p-[7px] bg-white rounded-full add-to-wishlist border border-zinc-900 border-opacity-10 inline-flex absolute top-4 right-4 cursor-pointer",onClick:i[1]||(i[1]=u=>C(t(o)))},[d(S,{product:t(o)},null,8,["product"])]),e("button",{class:"btn overflow-hidden w-8 h-8 p-[7px] bg-white rounded-full add-to-wishlist border border-zinc-900 border-opacity-10 inline-flex absolute top-16 right-4 cursor-pointer",onClick:i[2]||(i[2]=u=>v(t(o).id)),disabled:b(`Add_Product_To_Cart${t(o).id}`)},V,8,O),e("div",z,[d(T,{to:"#",class:"text-sm md:text-md font-semibold"},{default:f(()=>[B(n(t(o).name),1)]),_:1}),e("div",H,[e("div",F,[e("span",U,n(t(o).price==t(o).final_price?t(o).final_price:t(o).final_price)+" "+n(s.$t("AED")),1),t(o).price!==t(o).final_price?(p(),h("del",G,n(s.$t("AED"))+" "+n(t(o).price),1)):E("",!0)])])])])}}};export{Z as default};
