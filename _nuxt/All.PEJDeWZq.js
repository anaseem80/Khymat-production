import{u as ye}from"./Address.SuvlKXEQ.js";import{d as W,a as Y,c as R,N as m,Q as ee,s as A,B as te,A as xe,t as be,u as j,J as k,O as T,P as c,M as I,a3 as U,T as Pe,R as we,a4 as P}from"./swiper-vue.JvRXmqhe.js";import{g as oe,m as Se,h,r as $e,a8 as ne,F as le,ae,k as re,l as se,n as x,R as ie,o as ce,af as b,ag as X,J as Oe,E as Be,W as M,a6 as ke,ah as Te,s as Ae,ai as De,f as Ne}from"./entry.3WBB32f8.js";import{f as Ee,l as ze,P as je,t as ue,j as Ie,m as de,n as Re,K as Me}from"./index.FXDEJ8bq.js";import{e as L,B as pe,u as Le}from"./index.zmlQrd8c.js";import"./createContext.PqabK8SR.js";const We=e=>{const{componentCls:t,popoverBg:n,popoverColor:o,width:a,fontWeightStrong:v,popoverPadding:u,boxShadowSecondary:f,colorTextHeading:d,borderRadiusLG:g,zIndexPopup:y,marginXS:s,colorBgElevated:l}=e;return[{[t]:h(h({},$e(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:y,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":l,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:n,backgroundClip:"padding-box",borderRadius:g,boxShadow:f,padding:u},[`${t}-title`]:{minWidth:a,marginBottom:s,color:d,fontWeight:v},[`${t}-inner-content`]:{color:o}})},ze(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",[`${t}-content`]:{display:"inline-block"}}}]},Fe=e=>{const{componentCls:t}=e;return{[t]:je.map(n=>{const o=e[`${n}-6`];return{[`&${t}-${n}`]:{"--antd-arrow-background-color":o,[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{background:"transparent"}}}})}},He=e=>{const{componentCls:t,lineWidth:n,lineType:o,colorSplit:a,paddingSM:v,controlHeight:u,fontSize:f,lineHeight:d,padding:g}=e,y=u-Math.round(f*d),s=y/2,l=y/2-n,i=g;return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${s}px ${i}px ${l}px`,borderBottom:`${n}px ${o} ${a}`},[`${t}-inner-content`]:{padding:`${v}px ${i}px`}}}},Ve=oe("Popover",e=>{const{colorBgElevated:t,colorText:n,wireframe:o}=e,a=Se(e,{popoverBg:t,popoverColor:n,popoverPadding:12});return[We(a),Fe(a),o&&He(a),Ee(a,"zoom-big")]},e=>{let{zIndexPopupBase:t}=e;return{zIndexPopup:t+30,width:177}}),Qe=()=>h(h({},de()),{content:b(),title:b()}),qe=W({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:le(Qe(),h(h({},ue()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(e,t){let{expose:n,slots:o,attrs:a}=t;const v=Y();ae(e.visible===void 0),n({getPopupDomNode:()=>{var l,i;return(i=(l=v.value)===null||l===void 0?void 0:l.getPopupDomNode)===null||i===void 0?void 0:i.call(l)}});const{prefixCls:u,configProvider:f}=re("popover",e),[d,g]=Ve(u),y=R(()=>f.getPrefixCls()),s=()=>{var l,i;const{title:C=X((l=o.title)===null||l===void 0?void 0:l.call(o)),content:_=X((i=o.content)===null||i===void 0?void 0:i.call(o))}=e,w=!!(Array.isArray(C)?C.length:C),D=!!(Array.isArray(_)?_.length:C);return!w&&!D?null:m(ee,null,[w&&m("div",{class:`${u.value}-title`},[C]),m("div",{class:`${u.value}-inner-content`},[_])])};return()=>{const l=se(e.overlayClassName,g.value);return d(m(Ie,x(x(x({},ce(e,["title","content"])),a),{},{prefixCls:u.value,ref:v,overlayClassName:l,transitionName:ie(y.value,"zoom-big",e.transitionName),"data-popover-inject":!0}),{title:s,default:o.default}))}}}),Ge=ne(qe);var Je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};const Ue=Je;function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),o.forEach(function(a){Xe(e,a,n[a])})}return e}function Xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(t,n){var o=Z({},t,n.attrs);return m(Oe,Z({},o,{icon:Ue}),null)};F.displayName="QuestionCircleOutlined";F.inheritAttrs=!1;const Ze=F,Ke=()=>{const e=A(!1);return te(()=>{e.value=!0}),e},Ye={type:{type:String},actionFn:Function,close:Function,autofocus:Boolean,prefixCls:String,buttonProps:M(),emitEvent:Boolean,quitOnNullishReturnValue:Boolean};function K(e){return!!(e&&e.then)}const et=W({compatConfig:{MODE:3},name:"ActionButton",props:Ye,setup(e,t){let{slots:n}=t;const o=A(!1),a=A(),v=A(!1);let u;const f=Ke();xe(()=>{e.autofocus&&(u=setTimeout(()=>{var s,l;return(l=(s=Be(a.value))===null||s===void 0?void 0:s.focus)===null||l===void 0?void 0:l.call(s)}))}),te(()=>{clearTimeout(u)});const d=function(){for(var s,l=arguments.length,i=new Array(l),C=0;C<l;C++)i[C]=arguments[C];(s=e.close)===null||s===void 0||s.call(e,...i)},g=s=>{K(s)&&(v.value=!0,s.then(function(){f.value||(v.value=!1),d(...arguments),o.value=!1},l=>(f.value||(v.value=!1),o.value=!1,Promise.reject(l))))},y=s=>{const{actionFn:l}=e;if(o.value)return;if(o.value=!0,!l){d();return}let i;if(e.emitEvent){if(i=l(s),e.quitOnNullishReturnValue&&!K(i)){o.value=!1,d(s);return}}else if(l.length)i=l(e.close),o.value=!1;else if(i=l(),!i){d();return}g(i)};return()=>{const{type:s,prefixCls:l,buttonProps:i}=e;return m(pe,x(x(x({},L(s)),{},{onClick:y,loading:v.value,prefixCls:l},i),{},{ref:a}),n)}}}),tt=e=>{const{componentCls:t,iconCls:n,zIndexPopup:o,colorText:a,colorWarning:v,marginXS:u,fontSize:f,fontWeightStrong:d,lineHeight:g}=e;return{[t]:{zIndex:o,[`${t}-inner-content`]:{color:a},[`${t}-message`]:{position:"relative",marginBottom:u,color:a,fontSize:f,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${t}-message-icon ${n}`]:{color:v,fontSize:f,flex:"none",lineHeight:1,paddingTop:(Math.round(f*g)-f)/2},"&-title":{flex:"auto",marginInlineStart:u},"&-title-only":{fontWeight:d}},[`${t}-description`]:{position:"relative",marginInlineStart:f+u,marginBottom:u,color:a,fontSize:f},[`${t}-buttons`]:{textAlign:"end",button:{marginInlineStart:u}}}}},ot=oe("Popconfirm",e=>tt(e),e=>{const{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}});var nt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const lt=()=>h(h({},de()),{prefixCls:String,content:b(),title:b(),description:b(),okType:Ae("primary"),disabled:{type:Boolean,default:!1},okText:b(),cancelText:b(),icon:b(),okButtonProps:M(),cancelButtonProps:M(),showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function}),at=W({compatConfig:{MODE:3},name:"APopconfirm",inheritAttrs:!1,props:le(lt(),h(h({},ue()),{trigger:"click",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:Object,setup(e,t){let{slots:n,emit:o,expose:a,attrs:v}=t;const u=Y();ae(e.visible===void 0),a({getPopupDomNode:()=>{var r,p;return(p=(r=u.value)===null||r===void 0?void 0:r.getPopupDomNode)===null||p===void 0?void 0:p.call(r)}});const[f,d]=Le(!1,{value:be(e,"open")}),g=(r,p)=>{e.open===void 0&&d(r),o("update:open",r),o("openChange",r,p)},y=r=>{g(!1,r)},s=r=>{var p;return(p=e.onConfirm)===null||p===void 0?void 0:p.call(e,r)},l=r=>{var p;g(!1,r),(p=e.onCancel)===null||p===void 0||p.call(e,r)},i=r=>{r.keyCode===Me.ESC&&f&&g(!1,r)},C=r=>{const{disabled:p}=e;p||g(r)},{prefixCls:_,getPrefixCls:w}=re("popconfirm",e),D=R(()=>w()),fe=R(()=>w("btn")),[me]=ot(_),[H]=ke("Popconfirm",Te.Popconfirm),ve=()=>{var r,p,S,$,O;const{okButtonProps:B,cancelButtonProps:N,title:E=(r=n.title)===null||r===void 0?void 0:r.call(n),description:z=(p=n.description)===null||p===void 0?void 0:p.call(n),cancelText:ge=(S=n.cancel)===null||S===void 0?void 0:S.call(n),okText:he=($=n.okText)===null||$===void 0?void 0:$.call(n),okType:V,icon:Q=((O=n.icon)===null||O===void 0?void 0:O.call(n))||m(De,null,null),showCancel:_e=!0}=e,{cancelButton:q,okButton:G}=n,J=h({onClick:l,size:"small"},N),Ce=h(h(h({onClick:s},L(V)),{size:"small"}),B);return m("div",{class:`${_.value}-inner-content`},[m("div",{class:`${_.value}-message`},[Q&&m("span",{class:`${_.value}-message-icon`},[Q]),m("div",{class:[`${_.value}-message-title`,{[`${_.value}-message-title-only`]:!!z}]},[E])]),z&&m("div",{class:`${_.value}-description`},[z]),m("div",{class:`${_.value}-buttons`},[_e?q?q(J):m(pe,J,{default:()=>[ge||H.value.cancelText]}):null,G?G(Ce):m(et,{buttonProps:h(h({size:"small"},L(V)),B),actionFn:s,close:y,prefixCls:fe.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:()=>[he||H.value.okText]})])])};return()=>{var r;const{placement:p,overlayClassName:S,trigger:$="click"}=e,O=nt(e,["placement","overlayClassName","trigger"]),B=ce(O,["title","content","cancelText","okText","onUpdate:open","onConfirm","onCancel","prefixCls"]),N=se(_.value,S);return me(m(Ge,x(x(x({},B),v),{},{trigger:$,placement:p,onOpenChange:C,open:f.value,overlayClassName:N,transitionName:ie(D.value,"zoom-big",e.transitionName),ref:u,"data-popover-inject":!0}),{default:()=>[Re(((r=n.default)===null||r===void 0?void 0:r.call(n))||[],{onKeydown:E=>{i(E)}},!1)],content:ve}))}}}),rt=ne(at),st={key:0,class:"mt-8 border rounded-lg"},it=c("p",{class:"font-bold px-6 my-6"},"العناوين",-1),ct={class:"overflow-x-scroll lg:overflow-x-visible"},ut={class:"w-[800px] lg:w-full"},dt=c("thead",{class:""},[c("tr",null,[c("th",{class:"pr-6"},"#"),c("th",null,"الإسم"),c("th",null,"العنوان"),c("th",null,"الدولة"),c("th",null,"البريد الإلكتروني"),c("th",null,"رقم الهاتف"),c("th",null,"عملية")])],-1),pt={class:"relative"},ft={key:0,class:"w-full h-full absolute top-0 bg-neutral-950/[.08] grid place-content-center right-0 text-2xl"},mt={class:"relative"},vt={class:"flex gap-2"},gt=c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"outline-none w-4 h-4 cursor-pointer text-red-500"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})],-1),ht=c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 cursor-pointer"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})],-1),_t={__name:"All",setup(e){const t=ye();t.GET_ADDRESSESS();const n=o=>{t.DESTORY_ADDRESS(o)};return(o,a)=>{const v=Ne,u=Ze,f=rt;return j(t).addresses.length>0?(k(),T("div",st,[it,c("div",ct,[c("table",ut,[dt,c("tbody",pt,[m(Pe,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-100","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:I(()=>[j(t).loading_destory_address?(k(),T("div",ft,[m(v,{class:"text-primary drop-shadow-lg"})])):U("",!0)]),_:1}),(k(!0),T(ee,null,we(j(t).addresses,(d,g)=>(k(),T("tr",mt,[c("td",null,P(g+1),1),c("td",null,P(d.name),1),c("td",null,P(d.address_1),1),c("td",null,P(d.country),1),c("td",null,P(d.email),1),c("td",null,P(d.phone),1),c("td",vt,[m(f,{title:"هل انت متأكد؟",onConfirm:y=>n(d)},{icon:I(()=>[m(u,{style:{color:"red"}})]),default:I(()=>[gt]),_:2},1032,["onConfirm"]),ht])]))),256))])])])])):U("",!0)}}},St=_t;export{St as default};
