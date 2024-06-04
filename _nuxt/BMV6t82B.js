import{_ as T}from"./BerzQVEy.js";import{a as P,u as V,b as E,c as j,d as F,e as W,E as R,g as B,n as D,f as H,_ as K,h as O,L as q}from"./DTM008YB.js";import{E as N,a4 as n,J as c,u as r,a3 as t,a5 as o,U as m,O as y,H as g,a6 as x,Q as a,a7 as _,a2 as b,R as C,a8 as $}from"./Dos21iDt.js";const I=["dir"],U={key:0,class:"col-12 text-center m-auto"},z=t("img",{src:K,width:"250",class:"m-auto",alt:"empty"},null,-1),X={class:"text-xl mb-4"},Z={key:1,class:"border rounded-lg"},G={class:"text-xl font-bold px-6 my-6"},J={class:"hidden md:table w-full"},Q={class:""},Y={class:"pl-6"},tt={class:"relative"},et={key:0,class:"w-full h-full absolute top-0 bg-neutral-950/[.08] grid place-content-center right-0"},st={class:"relative"},ot={class:"w-3/6 pl-3"},at={class:"flex gap-4 items-center ml-2"},nt={class:"flex gap-6 items-center"},rt={class:"w-[72px] h-[72px] max-w-[72px] max-h-[72px]"},it=["src"],lt={class:"w-full"},ct={class:"flex items-center gap-3"},dt=["onClick","disabled"],ut={class:"flex gap-2 transition"},ht=t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{class:"stroke-white",d:"M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4",stroke:"#F57021","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),_t=["onClick"],pt=t("g",{id:"Regular/XCircle"},[t("path",{id:"Vector",d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#929FA5","stroke-width":"1.5","stroke-miterlimit":"10"}),t("path",{id:"Vector_2",d:"M15 9L9 15",stroke:"#929FA5","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{id:"Vector_3",d:"M15 15L9 9",stroke:"#929FA5","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),mt=[pt],gt={class:"block md:hidden"},wt={class:"items flex flex-col gap-4"},ft={class:"border rounded-lg p-4 flex flex-col gap-3 relative overflow-hidden"},kt={key:0,class:"w-full h-full absolute top-0 bg-neutral-950/[.09] grid place-content-center right-0"},vt=["onClick"],yt=t("g",{id:"Regular/XCircle"},[t("path",{id:"Vector",d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#929FA5","stroke-width":"1.5","stroke-miterlimit":"10"}),t("path",{id:"Vector_2",d:"M15 9L9 15",stroke:"#929FA5","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{id:"Vector_3",d:"M15 15L9 9",stroke:"#929FA5","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),xt=[yt],bt={class:"gap-3 flex justify-between flex-row-reverse mb-4"},Ct={class:"w-full"},$t={class:"w-[72px] h-[72px] max-w-[72px] max-h-[72px]"},At=["src"],Lt={class:"flex justify-between flex-row-reverse items-center"},Mt={class:"text-gray-500"},St={class:"flex justify-between flex-row-reverse items-center"},Tt={class:"text-gray-600"},Pt={class:"text-gray-500"},Vt=["onClick","disabled"],Et={class:"flex gap-2 transition"},jt=t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{class:"stroke-white",d:"M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4",stroke:"#F57021","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ht={__name:"index",setup(Ft){const{locale:i}=P(),w=V(),A=E(),L=j(),l=F(),f=W(),d=R();L.GET_CART_DATA(i.value);const k=e=>{l.ADD_PRODUCT_TO_CART(e,1,null,i.value)},v=e=>{d.DELETE_FROM_WISHLIST(e)},u=e=>l.loading_add_product&&l.loading_add_product.name==e?l.loading_add_product.status:!1;return N(()=>{B("token").value||D(w("/login"))}),H({title:i.value=="ar"?"خيمات زمان - المفضله":"Khymat - Wishlist",meta:[{name:"description",content:"View and manage your saved products on your Khymat wishlist. Easily add them to your cart for a faster checkout process."},{name:"keywords",content:"wishlist, saved items, Khymat"},{name:"robots",content:"index, follow"},{property:"og:title",content:i.value==="ar"?"خيمات زمان - المفضله":"Khymat - Wishlist"},{property:"og:description",content:"View and manage your saved products on your Khymat wishlist. Easily add them to your cart for a faster checkout process."},{property:"og:url",content:"https://khaymatzaman.com/wishlist"},{property:"og:type",content:"website"},{property:"og:locale",content:i.value==="ar"?"ar_AR":"en_US"},{name:"twitter:title",content:i.value==="ar"?"خيمات زمان - المفضله":"Khymat - Wishlist"},{name:"twitter:description",content:"View and manage your saved products on your Khymat wishlist. Easily add them to your cart for a faster checkout process."},{name:"twitter:card",content:"summary"}]}),(e,Wt)=>{const M=T,S=O,h=q;return a(),n(g,null,[c(M,{route:r(A).fullPath,name:"Wishlist",title:"Wishlist",description:"Check all your categories to get what brand your needs"},null,8,["route"]),t("div",{class:"p-6 lg:px-[133px] md:py-16",dir:r(i)=="ar"?"rtl":"ltr"},[r(d).wishlist.length==0?(a(),n("div",U,[z,t("h4",X,o(e.$t("Wishlist is empty! 😓")),1),c(S,{to:r(w)("/"),class:"shrink-0 btn rounded-none text-white px-6 m-auto inline-block"},{default:m(()=>[t("span",null,o(e.$t("Home")),1)]),_:1},8,["to"])])):(a(),n("div",Z,[t("h5",G,o(e.$t("Wishlist")),1),t("table",J,[t("thead",Q,[t("tr",null,[t("th",Y,o(e.$t("Products")),1),t("th",null,o(e.$t("Price")),1),t("th",null,o(e.$t("Stock")),1),t("th",null,o(e.$t("Actions")),1)])]),t("tbody",tt,[c(y,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-100","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:m(()=>[r(d).loading_remove_item?(a(),n("div",et,[c(h,{class:"text-primary drop-shadow-lg"})])):_("",!0)]),_:1}),(a(!0),n(g,null,x(r(d).wishlist,s=>(a(),n("tr",st,[t("td",ot,[t("div",at,[t("div",nt,[t("div",rt,[t("img",{src:r(f).route+s.image,class:"object-cover"},null,8,it)]),t("p",lt,o(s.name),1)])])]),t("td",null,o(s.price)+" "+o(e.$t("AED")),1),t("td",null,[t("p",{class:b(["text-green-600 text-sm font-bold uppercase leading-[48px] tracking-tight",{"text-green-600":s.quantity!==0,"text-red-600":s.quantity==0}])},o(s.quantity==0?e.$t("Out of stock"):e.$t("Available")),3)]),t("td",ct,[t("button",{onClick:p=>k(s.id),disabled:u(`Add_Product_To_Cart${s.id}`),class:"shrink-0 btn rounded-none text-white px-6 add-to-cart"},[t("p",null,[u(`Add_Product_To_Cart${s.id}`)?(a(),C(h,{key:0,class:"ml-3"})):_("",!0)]),t("span",ut,[ht,$(" "+o(e.$t("Add to cart")),1)])],8,dt),(a(),n("svg",{onClick:p=>v(s),class:"cursor-pointer w-5 h-5 max-w-5 max-h-5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},mt,8,_t))])]))),256))])])])),t("div",gt,[t("div",wt,[(a(!0),n(g,null,x(r(d).wishlist,s=>(a(),n("div",ft,[c(y,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-100","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:m(()=>[r(l).loading_remove_product||r(l).loading_increase_decrease_product?(a(),n("div",kt,[c(h,{class:"text-primary drop-shadow-lg"})])):_("",!0)]),_:1}),(a(),n("svg",{onClick:p=>v(s),class:"cursor-pointer w-5 h-5 max-w-5 max-h-5 mr-auto",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},xt,8,vt)),t("div",bt,[t("p",Ct,o(s.name),1),t("div",$t,[t("img",{src:r(f).route+s.image,class:"object-cover"},null,8,At)])]),t("div",Lt,[t("p",{class:b(["text-green-600 text-sm font-bold uppercase leading-[48px] tracking-tight",{"text-green-600":s.quantity!==0,"text-red-600":s.quantity==0}])},o(s.quantity==0?e.$t("Out of Stock"):e.$t("Available")),3),t("span",Mt,o(e.$t("Stock")),1)]),t("div",St,[t("span",Tt,o(s.price)+" "+o(e.$t("AED")),1),t("span",Pt,o(e.$t("Price")),1)]),t("button",{onClick:p=>k(s.id),disabled:u(`Add_Product_To_Cart${s.id}`),class:"shrink-0 btn text-white px-6 add-to-cart mt-3"},[t("p",null,[u(`Add_Product_To_Cart${s.id}`)?(a(),C(h,{key:0,class:"ml-3"})):_("",!0)]),t("span",Et,[jt,$(" "+o(e.$t("Add to cart")),1)])],8,Vt)]))),256))])])],8,I)],64)}}};export{Ht as default};
