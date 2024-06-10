import{a as l,u as P,w as D,b as R,C as w,k as m,j as z,J as b}from"./swiper-vue.pW2UkmIU.js";import{l as A,t as j,s as O,J as T,v as S,P as y,ad as I,w as x,o as u}from"./entry.CCc8V8PH.js";import{c as B}from"./createContext.SQVk3hQb.js";import{e as L,g as _,h as F,j as N,k as J,l as M,m as V,n as H}from"./firstNotUndefined.rg7L12hd.js";function st(t,e){const{defaultValue:n,value:o=l()}=e||{};let a=typeof t=="function"?t():t;o.value!==void 0&&(a=P(o)),n!==void 0&&(a=typeof n=="function"?n():n);const c=l(a),i=l(a);D(()=>{let r=o.value!==void 0?o.value:c.value;e.postState&&(r=e.postState(r)),i.value=r});function s(r){const d=i.value;c.value=r,w(i.value)!==r&&e.onChange&&e.onChange(r,d)}return R(o,()=>{c.value=o.value}),[i,s]}function ct(t){const e=typeof t=="function"?t():t,n=l(e);function o(a){n.value=a}return[n,o]}const K=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},W=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${e}-space-item`]:{"&:empty":{display:"none"}}}}},q=A("Space",t=>[W(t),K(t)]);var G="[object Map]",Q="[object Set]",U=Object.prototype,X=U.hasOwnProperty;function E(t){if(t==null)return!0;if(L(t)&&(_(t)||typeof t=="string"||typeof t.splice=="function"||F(t)||N(t)||J(t)))return!t.length;var e=M(t);if(e==G||e==Q)return!t.size;if(V(t))return!H(t).length;for(var n in t)if(X.call(t,n))return!1;return!0}const Y=()=>({compactSize:String,compactDirection:y.oneOf(I("horizontal","vertical")).def("horizontal"),isFirstItem:x(),isLastItem:x()}),h=B(null),lt=(t,e)=>{const n=h.useInject(),o=m(()=>{if(!n||E(n))return"";const{compactDirection:a,isFirstItem:c,isLastItem:i}=n,s=a==="vertical"?"-vertical-":"-";return j({[`${t.value}-compact${s}item`]:!0,[`${t.value}-compact${s}first-item`]:c,[`${t.value}-compact${s}last-item`]:i,[`${t.value}-compact${s}item-rtl`]:e.value==="rtl"})});return{compactSize:m(()=>n==null?void 0:n.compactSize),compactDirection:m(()=>n==null?void 0:n.compactDirection),compactItemClassnames:o}},Z=()=>({prefixCls:String,size:{type:String},direction:y.oneOf(I("horizontal","vertical")).def("horizontal"),align:y.oneOf(I("start","end","center","baseline")),block:{type:Boolean,default:void 0}}),tt=z({name:"CompactItem",props:Y(),setup(t,e){let{slots:n}=e;return h.useProvide(t),()=>{var o;return(o=n.default)===null||o===void 0?void 0:o.call(n)}}});z({name:"ASpaceCompact",inheritAttrs:!1,props:Z(),setup(t,e){let{attrs:n,slots:o}=e;const{prefixCls:a,direction:c}=O("space-compact",t),i=h.useInject(),[s,r]=q(a),d=m(()=>j(a.value,r.value,{[`${a.value}-rtl`]:c.value==="rtl",[`${a.value}-block`]:t.block,[`${a.value}-vertical`]:t.direction==="vertical"}));return()=>{var p;const f=T(((p=o.default)===null||p===void 0?void 0:p.call(o))||[]);return f.length===0?null:s(b("div",S(S({},n),{},{class:[d.value,n.class]}),[f.map((v,g)=>{var $;const k=v&&v.key||`${a.value}-item-${g}`,C=!i||E(i);return b(tt,{key:k,compactSize:($=t.size)!==null&&$!==void 0?$:"middle",compactDirection:t.direction,isFirstItem:g===0&&(C||(i==null?void 0:i.isFirstItem)),isLastItem:g===f.length-1&&(C||(i==null?void 0:i.isLastItem))},{default:()=>[v]})})]))}}});function et(t,e,n){const{focusElCls:o,focus:a,borderElCls:c}=n,i=c?"> *":"",s=["hover",a?"focus":null,"active"].filter(Boolean).map(r=>`&:${r} ${i}`).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:-t.lineWidth},"&-item":u(u({[s]:{zIndex:2}},o?{[`&${o}`]:{zIndex:2}}:{}),{[`&[disabled] ${i}`]:{zIndex:0}})}}function nt(t,e,n){const{borderElCls:o}=n,a=o?`> ${o}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${a}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${a}, &${t}-sm ${a}, &${t}-lg ${a}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${a}, &${t}-sm ${a}, &${t}-lg ${a}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function mt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:n}=t,o=`${n}-compact`;return{[o]:u(u({},et(t,o,e)),nt(n,o,e))}}export{ct as a,lt as b,mt as g,st as u};
