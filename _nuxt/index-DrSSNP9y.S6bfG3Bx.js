import{A as D}from"./entry.CCc8V8PH.js";import{a,k as g,J as w,a0 as k,j as de,b as me,E as ve,o as pe,Q as S,a4 as R,a9 as fe,aa as he,u as z,ap as b,a7 as W,a3 as j,a2 as ge,as as ye,G as F}from"./swiper-vue.pW2UkmIU.js";var be=Object.defineProperty,we=(o,e,t)=>e in o?be(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,h=(o,e,t)=>(we(o,typeof e!="symbol"?e+"":e,t),t);function Le(o,e){let t=e==null?void 0:e.element;function i(){t&&k(null,t)}const c=w(o,{...e==null?void 0:e.props,...e!=null&&e.addDestroyInProps?{destroy:i}:{}},e==null?void 0:e.children);return e!=null&&e.app?(c.appContext=e.app._context,t?k(c,t):typeof document<"u"&&(t=document.createElement("div"),k(c,t))):(t=t??document.body,k(c,t)),{vNode:c,destroy:i,el:t}}const Ee=["onKeypress"],xe={class:"m-fullscreen-img-scroller"},_e=["src","alt"],Ie=de({__name:"MazFullscreenImg",props:{src:{},clickedElementBounds:{default:void 0},offset:{default:void 0},animation:{default:()=>({duration:300,easing:"ease-in-out"})},openInstanceClass:{default:"m-fullscreen-img-instance"},clickedElement:{},destroy:{type:Function,default:void 0},alt:{default:void 0},zoom:{type:Boolean,default:!0}},emits:["close","previous","next","before-close"],setup(o,{emit:e}){const t=e,i=F(()=>D(()=>import("./MazSpinner-mCJd14Kq.-4Emv_t-.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),c=F(()=>D(()=>import("./x-mark-BP8zWe_C.dyCOcghd.js"),__vite__mapDeps([6,1,2]),import.meta.url)),L=F(()=>D(()=>import("./chevron-left-CcZaP3Rc.2YGXM5XV.js"),__vite__mapDeps([7,1,2]),import.meta.url)),u=o,O=a(!1),E=a(!1),x=a(!1),C=a(!1),v=a(!1),p=a(u.clickedElement),H=g(()=>u.clickedElement.getBoundingClientRect()),Z=g(()=>H.value.height<H.value.width),M=a(u.src),K=a(u.alt),T=a(),f=a(),ee=g(()=>v.value?"--is-zoomed maz-cursor-zoom-out":"maz-cursor-zoom-in");function te(){O.value=!0,E.value=!1,x.value=!0}me(()=>x.value,n=>{n&&le()});function _(){t("before-close"),ae()}function V(n){n.key==="Escape"&&(n.preventDefault(),_()),(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),P(n.key==="ArrowRight"?"next":"previous"))}function ne(){document.documentElement.classList.add("--m-fullscreen-open")}function se(){document.documentElement.classList.remove("--m-fullscreen-open")}function Y(){return[...document.querySelectorAll(".m-fullscreen-img-instance")]}function oe(n,s){return s<0?n.length-1:s>=n.length?0:s}async function ie(n,s){n.classList.remove(u.openInstanceClass),s.classList.add(u.openInstanceClass);const r=s.getAttribute("data-src"),l=s.getAttribute("data-alt");K.value=l,r&&(M.value=r),O.value=!1,O.value||(E.value=!0)}function P(n){const s=document.querySelector(`.m-fullscreen-img-instance.${u.openInstanceClass}`);if(s){const r=Y(),l=r.indexOf(s),m=n==="next"?l+1:l-1,d=r[oe(r,m)];p.value=d,d&&ie(s,d),t(n),v.value?q(f.value):I()}}function q(n){Z.value?(n.style.width=`${window.innerWidth}px`,n.style.removeProperty("height")):(n.style.height=`${window.innerHeight}px`,n.style.removeProperty("width")),n.style.removeProperty("top"),n.style.removeProperty("left")}async function re(){const n=f.value;v.value?(v.value=!v.value,I()):(v.value=!v.value,q(n))}function G(n){var s;return(s=f.value)==null?void 0:s.animate(n,{duration:u.animation.duration,easing:u.animation.easing})}function J(n=u.offset??0){const s=p.value instanceof HTMLImageElement?p.value.naturalWidth:p.value.clientWidth,r=p.value instanceof HTMLImageElement?p.value.naturalHeight:p.value.clientHeight,l=window.innerWidth,m=window.innerHeight,d=Math.min((l-2*n)/s,(m-2*n)/r),$=(l-s*d)/2,B=(m-r*d)/2;return{originalWidth:s,originalHeight:r,scale:d,centerX:$,centerY:B}}function N({trigger:n}){const{originalWidth:s,originalHeight:r,scale:l,centerX:m,centerY:d}=J(),{top:$,left:B,width:ue,height:ce}=H.value,Q=[{top:`${$}px`,left:`${B}px`,width:`${ue}px`,height:`${ce}px`,opacity:0},{top:`${d}px`,left:`${m}px`,width:`${s*l}px`,height:`${r*l}px`,opacity:1}];return{frames:n==="open"?Q:Q.reverse()}}function I(){const{centerX:n,centerY:s,originalHeight:r,originalWidth:l,scale:m}=J(),d={top:`${s}px`,left:`${n}px`,width:`${l*m}px`,height:`${r*m}px`};if(!f.value)throw console.error("[maz-ui](vFullscreenImg) ImgElement is not defined");Object.assign(f.value.style,d)}function le(){const{frames:n}=N({trigger:"open"}),s=G(n);if(!s)throw console.error("[maz-ui](vFullscreenImg) open animation is not defined");s.onfinish=()=>{I()}}function ae(){const{frames:n}=N({trigger:"close"}),s=G(n);if(!s)throw console.error("[maz-ui](vFullscreenImg) close animation is not defined");s.onfinish=()=>{var r,l;t("close"),(r=T.value)==null||r.remove(),(l=u.destroy)==null||l.call(u)}}function X(){v.value||I()}return ve(()=>{E.value=!0,document.addEventListener("keydown",V),window.addEventListener("resize",X),ne(),C.value=Y().length>1}),pe(()=>{document.removeEventListener("keydown",V),window.removeEventListener("resize",X),se()}),(n,s)=>(S(),R("div",{ref_key:"FullscreenImgElement",ref:T,role:"button",class:"m-fullscreen-img",tabindex:"0",onClick:b(_,["stop"]),onKeypress:ye(b(_,["prevent"]),["esc"])},[fe(w(z(i),{class:"m-fullscreen-img-loader maz-h-16"},null,512),[[he,E.value]]),x.value&&C.value?(S(),R("button",{key:0,type:"button",class:"m-fullscreen-btn --next",onClick:s[0]||(s[0]=b(r=>P("next"),["stop"]))},[w(z(L),{class:"maz-rotate-180 maz-text-3xl"})])):W("v-if",!0),x.value&&C.value?(S(),R("button",{key:1,type:"button",class:"m-fullscreen-btn --previous",onClick:s[1]||(s[1]=b(r=>P("previous"),["stop"]))},[w(z(L),{class:"maz-text-3xl"})])):W("v-if",!0),j("button",{type:"button",class:"m-fullscreen-btn --close",onClick:_},[w(z(c),{class:"maz-text-3xl"})]),j("div",xe,[W(" eslint-disable-next-line vuejs-accessibility/no-static-element-interactions, vuejs-accessibility/click-events-have-key-events "),j("img",{ref_key:"ImgElement",ref:f,src:M.value,alt:K.value??void 0,tabindex:"0",class:ge([ee.value]),onLoad:te,onClick:s[2]||(s[2]=b(r=>n.zoom?re():void 0,["stop"]))},null,42,_e)])],40,Ee))}}),ke=(o,e)=>{const t=o.__vccOpts||o;for(const[i,c]of e)t[i]=c;return t},ze=ke(Ie,[["__scopeId","data-v-4836a523"]]),U="m-fullscreen-is-open";class Ae{constructor(){h(this,"options"),h(this,"defaultOptions",{scaleOnHover:!1,blurOnHover:!1,disabled:!1,zoom:!0,offset:80,animation:{duration:300,easing:"ease-in-out"}}),h(this,"mouseEnterListener"),h(this,"mouseLeaveListener"),h(this,"renderPreviewListener")}buildOptions(e,t){const i=typeof t.value=="object"?t.value:{src:t.value,alt:void 0},c=(i==null?void 0:i.src)??this.getImgSrc(e),L=(i==null?void 0:i.alt)??this.getImgAlt(e);return{...this.defaultOptions,...i,src:c,alt:L}}get allInstances(){return[...document.querySelectorAll(".m-fullscreen-img-instance")]}getImgSrc(e){var t;const i=((t=this.options)==null?void 0:t.src)||e.getAttribute("src")||e.getAttribute("data-src");if(!i)throw new Error('[maz-ui](fullscreen-img) src of image must be provided by `v-fullscreen=""`, `v-fullscreen="{ src: "" }"`, `src=""` or `data-src=""` atributes');return i}getImgAlt(e){var t;return((t=this.options)==null?void 0:t.alt)||e.getAttribute("alt")||e.getAttribute("data-alt")}create(e,t){if(this.options=this.buildOptions(e,t),this.options.disabled)return;e.style.cursor="move",(this.options.scaleOnHover||this.options.blurOnHover)&&(e.style.transition="all 200ms ease-in-out"),e.classList.add("m-fullscreen-img-instance"),e.setAttribute("data-src",this.getImgSrc(e));const i=this.getImgAlt(e);i&&e.setAttribute("data-alt",i),this.mouseEnterListener=()=>this.mouseEnter(e),this.mouseLeaveListener=()=>this.mouseLeave(e),this.renderPreviewListener=()=>this.renderPreview(e),e.addEventListener("mouseenter",this.mouseEnterListener),e.addEventListener("mouseleave",this.mouseLeaveListener),e.addEventListener("click",this.renderPreviewListener)}update(e,t){this.options=this.buildOptions(e,t)}remove(e){e.removeEventListener("mouseenter",this.mouseEnterListener),e.removeEventListener("mouseleave",this.mouseLeaveListener),e.removeEventListener("click",this.renderPreviewListener),e.classList.remove("m-fullscreen-img-instance"),e.style.cursor=""}renderPreview(e){return e.classList.add(U),Le(ze,{props:{...this.options,openInstanceClass:U,clickedElement:e,clickedElementBounds:e.getBoundingClientRect()},addDestroyInProps:!0})}mouseLeave(e){this.options.scaleOnHover&&(e.style.transform=""),this.options.blurOnHover&&(e.style.filter=""),e.style.zIndex=""}mouseEnter(e){e.style.zIndex="1",this.options.scaleOnHover&&(e.style.transform="scale(1.04)"),this.options.blurOnHover&&(e.style.filter="blur(3px)")}}let A;const Re={mounted(o,e){return A=new Ae,A.create(o,e)},updated(o,e){return A.update(o,e)},unmounted(o){return A.remove(o)}},y="",Oe=o=>o.filter((e,t,i)=>t===i.indexOf(e)),Ce=o=>(e=y)=>typeof e=="function"?o.findIndex((...t)=>e(...t))>-1:o.includes(e),He=o=>o.length>0,Pe=o=>(e=y)=>Oe([...o,e]),$e=o=>(e=y)=>o.filter(t=>t!==e);class Be{constructor(){h(this,"_loaders",a([]))}get loaders(){return g(()=>this._loaders.value)}stop(e=y){this._loaders.value=$e(this._loaders.value)(e)}start(e=y){return this._loaders.value=Pe(this._loaders.value)(e),()=>this.stop(e)}get anyLoading(){return g(()=>He(this._loaders.value))}isLoading(e=y){return g(()=>Ce(this._loaders.value)(e)).value}}new Be;a("system");a("system");export{ke as K,Re as Y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./MazSpinner-mCJd14Kq.-4Emv_t-.js","./swiper-vue.pW2UkmIU.js","./swiper-vue.fELadPwW.css","./entry.CCc8V8PH.js","./entry.iapPbevD.css","./MazSpinner-mCJd14Kq.G7IVoZYa.css","./x-mark-BP8zWe_C.dyCOcghd.js","./chevron-left-CcZaP3Rc.2YGXM5XV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
