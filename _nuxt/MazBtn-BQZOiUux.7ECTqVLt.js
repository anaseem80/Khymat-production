import{A as g}from"./entry.CCc8V8PH.js";import{V as P}from"./Sort.yBg518ZY.js";import{j as V,az as A,au as R,Y as x,k as a,Q as n,R as l,U as M,a4 as d,a2 as s,a7 as t,ag as r,u,L as c,G as h}from"./swiper-vue.pW2UkmIU.js";import"./Products.wjZn9zzw.js";const U=V({__name:"MazBtn",props:{variant:{default:"button"},size:{default:"md"},color:{default:"primary"},type:{default:"button"},rounded:{type:Boolean},noRounded:{type:Boolean},outline:{type:Boolean},pastel:{type:Boolean},block:{type:Boolean},noUnderline:{type:Boolean},noLeading:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},fab:{type:Boolean},icon:{default:void 0},leftIcon:{default:void 0},rightIcon:{default:void 0},noPadding:{type:Boolean},noElevation:{type:Boolean},contentClass:{default:void 0}},setup(_){const k=h(()=>g(()=>import("./MazSpinner-BmqyUsTZ.Zc347CmH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url)),f=h(()=>g(()=>import("./MazIcon-Cxrv3_OK.4fmd8YCA.js"),__vite__mapDeps([9,3,4]),import.meta.url)),{href:B,to:I}=A(),v=R(),o=_;x(()=>{o.icon&&!o.fab&&console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props')});const p=a(()=>B?"a":I?"router-link":"button"),z=a(()=>o.pastel?`--${o.color}-pastel`:o.outline?`--${o.color}-outline`:`--${o.color}`),m=a(()=>(o.loading||o.disabled)&&p.value==="button"),$=a(()=>m.value?"--cursor-default":"--cursor-pointer"),C=a(()=>`--is-${o.variant}`),i=a(()=>o.loading&&o.variant==="button"),y=a(()=>!!v["left-icon"]||o.leftIcon),b=a(()=>!!v["right-icon"]||o.rightIcon),E=a(()=>y.value||b.value),T=a(()=>o.fab&&(o.icon||!!v.icon)),L=a(()=>p.value==="button"?o.type:void 0);return(e,D)=>(n(),l(c(p.value),{disabled:m.value,class:s(["m-btn",[`--${e.size}`,z.value,$.value,C.value,{"--block":e.block,"--no-underline":e.noUnderline,"--no-leading":e.noLeading,"--fab":e.fab,"--loading":e.loading,"--disabled":m.value,"--icon":E.value,"--rounded":e.rounded,"--no-rounded":e.noRounded,"--no-padding":e.noPadding,"--no-elevation":e.noElevation}]]),type:L.value},{default:M(()=>[y.value?(n(),d("div",{key:0,class:s(["m-btn__icon-left maz-flex maz-flex-center",{"maz-invisible":i.value}])},[t(`
        @slot left-icon - The icon to display on the left of the button
      `),r(e.$slots,"left-icon",{},()=>[typeof e.leftIcon=="string"?(n(),l(u(f),{key:0,name:e.leftIcon},null,8,["name"])):e.leftIcon?(n(),l(c(e.leftIcon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),T.value?(n(),d("div",{key:1,class:s(["m-btn__icon",{"maz-invisible":i.value}])},[t(`
        @slot icon - The icon to display on the fab button
      `),r(e.$slots,"icon",{},()=>[typeof e.icon=="string"?(n(),l(u(f),{key:0,name:e.icon},null,8,["name"])):e.icon?(n(),l(c(e.icon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),e.$slots.default?(n(),d("span",{key:2,class:s([{"maz-invisible":i.value},e.contentClass])},[t(`
        @slot default - The content of the button
      `),r(e.$slots,"default",{},void 0,!0)],2)):t("v-if",!0),b.value?(n(),d("div",{key:3,class:s(["m-btn__icon-right",{"maz-invisible":i.value}])},[t(`
        @slot right-icon - The icon to display on the right of the button
      `),r(e.$slots,"right-icon",{},()=>[typeof e.rightIcon=="string"?(n(),l(u(f),{key:0,name:e.rightIcon},null,8,["name"])):e.rightIcon?(n(),l(c(e.rightIcon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),i.value?(n(),l(u(k),{key:4,class:"m-btn-loader",size:"2em",color:e.color},null,8,["color"])):t("v-if",!0)]),_:3},8,["disabled","class","type"]))}}),G=P(U,[["__scopeId","data-v-be73a6f1"]]);export{G as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./MazSpinner-BmqyUsTZ.Zc347CmH.js","./Sort.yBg518ZY.js","./entry.CCc8V8PH.js","./swiper-vue.pW2UkmIU.js","./swiper-vue.fELadPwW.css","./entry.iapPbevD.css","./Products.wjZn9zzw.js","./Sort.9WRKq8k6.css","./MazSpinner-mCJd14Kq.G7IVoZYa.css","./MazIcon-Cxrv3_OK.4fmd8YCA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
