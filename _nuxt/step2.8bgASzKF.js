import{_ as b}from"./Header.vue.iJk-rpvi.js";import{a as k,Q as l,a4 as u,J as S,a3 as r,a5 as i,u as s,H as V,a6 as w,ae as D,ah as N,R as B,a7 as C}from"./swiper-vue.9cXPaQ7p.js";import{u as I}from"./Login.xGIBEHgW.js";import{u as $}from"./Verify.whgRU4n5.js";import{e as j,a as E,C as P,i as M}from"./entry.Cax_P2cP.js";import"./logo.ShHxJQRg.js";const T=["dir"],U={class:"md:text-xl font-bold mb-4"},q={class:"text-gray-400"},A=["dir"],F=["onUpdate:modelValue","onInput","onKeydown"],H={class:"flex items-center justify-between mt-8"},K=["disabled"],L={class:"translate-y-[-2px]"},G={__name:"step2",setup(O){const o=k(Array(6).fill("")),p=I(),c=$(),m=j(),{locale:d}=E(),f=()=>{const e=o.value.join("");e.length==6?c.VERIFY_ACCOUNT(e,p.email):P.error("حقول التحقق مطلوبة")},_=e=>{const t=e.clipboardData.getData("text");t.length===o.value.length&&(o.value=t.split(""),e.preventDefault())},g=(e,t)=>{e.key==="Backspace"&&t>0&&o.value[t]===""&&e.target.parentNode.previousElementSibling.querySelector("input").focus()},y=(e,t)=>{isNaN(e.value)?e.value="":t<o.value.length-1&&o.value[t]!==""&&e.parentNode.nextElementSibling.querySelector("input").focus()};return(e,t)=>{const h=b,v=M;return l(),u("div",{class:"step-2 shrink-0",dir:s(d)=="ar"?"rtl":"ltr"},[S(h),r("p",U,i(e.$t("Please check your DM")),1),r("p",q,i(e.$t("We have just sent you an email to"))+" "+i(s(m).email),1),r("div",{class:"flex gap-4 my-5 flex-wrap justify-start",dir:s(d)=="ar"?"rtl":"ltr"},[(l(!0),u(V,null,w(s(o),(x,n)=>(l(),u("div",{key:n},[D(r("input",{type:"text",ref_for:!0,ref:"otpInput",class:"max-w-[40px] h-[40px] md:max-w-[56px] font-bold md:h-[56px] bg-gray-100 rounded-lg md:text-xl text-center outline-none focus:border focus:border-primary",maxlength:"1",min:"0","onUpdate:modelValue":a=>s(o)[n]=a,onInput:a=>y(a.target,n),onPaste:t[0]||(t[0]=a=>_(a)),onKeydown:a=>g(a,n)},null,40,F),[[N,s(o)[n]]])]))),128))],8,A),r("div",H,[r("button",{class:"btn w-full rounded-lg",onClick:t[1]||(t[1]=x=>f()),disabled:s(c).Verify_loading,dir:"rtl"},[r("span",L,i(e.$t("Check")),1),s(c).Verify_loading?(l(),B(v,{key:0,class:"ms-2"})):C("",!0)],8,K)])],8,T)}}};export{G as default};