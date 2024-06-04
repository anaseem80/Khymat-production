import{a3 as C,a4 as g,a5 as h,g as S,A as f,n as p,c as k,e as $}from"./DTM008YB.js";var y={exports:{}};(function(r,i){(function(){var a={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},s={install:function(t,e){e&&this.config(e.expires,e.path,e.domain,e.secure,e.sameSite),t.prototype&&(t.prototype.$cookies=this),t.config&&t.config.globalProperties&&(t.config.globalProperties.$cookies=this,t.provide("$cookies",this)),t.$cookies=this},config:function(t,e,o,l,d){a.expires=t||"1d",a.path=e?"; path="+e:"; path=/",a.domain=o?"; domain="+o:"",a.secure=l?"; Secure":"",a.sameSite=d?"; SameSite="+d:"; SameSite=Lax"},get:function(t){var e=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(e&&(e.substring(0,1)==="{"&&e.substring(e.length-1,e.length)==="}"||e.substring(0,1)==="["&&e.substring(e.length-1,e.length)==="]"))try{e=JSON.parse(e)}catch{return e}return e},set:function(t,e,o,l,d,u,m){if(t){if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(t))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: '+t)}else throw new Error("Cookie name is not found in the first argument.");e&&typeof e=="object"&&(e=JSON.stringify(e));var n="";if(o=o??a.expires,o&&o!=0)switch(o.constructor){case Number:o===1/0||o===-1?n="; expires=Fri, 31 Dec 9999 23:59:59 GMT":n="; max-age="+o;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(o)){var c=o.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(o.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":n="; max-age="+ +c*2592e3;break;case"d":n="; max-age="+ +c*86400;break;case"h":n="; max-age="+ +c*3600;break;case"min":n="; max-age="+ +c*60;break;case"s":n="; max-age="+c;break;case"y":n="; max-age="+ +c*31104e3;break}}else n="; expires="+o;break;case Date:n="; expires="+o.toUTCString();break}return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+n+(d?"; domain="+d:a.domain)+(l?"; path="+l:a.path)+(u==null?a.secure:u?"; Secure":"")+(m==null?a.sameSite:m?"; SameSite="+m:""),this},remove:function(t,e,o){return!t||!this.isKey(t)?!1:(document.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:a.domain)+(e?"; path="+e:a.path)+"; SameSite=Lax",!0)},isKey:function(t){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var t=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),e=0;e<t.length;e++)t[e]=decodeURIComponent(t[e]);return t}};r.exports=s,typeof window<"u"&&(window.$cookies=s)})()})(y);const w=C({id:"LoginStore",state:()=>({loading:!1,social_loading:!1,error:!1,data:null}),actions:{async LOGIN(r,i){this.loading=!0,g.post(h+"/login",r).then(a=>{if(a.data.token){this.loading=!1;const s=S("token");s.value=a.data.token,f.success(i=="ar"?"تم التسجيل بنجاح":"Logged in successfully"),p(`/${i}`),k().GET_CART_DATA(i),setTimeout(()=>{window.location.reload()},500)}}).catch(a=>{if(this.loading=!1,a.response.data.message==="Email not verified."||a.response.data.message==="البريد الإلكتروني لم يتم التحقق منه."){f.error("لم يتم تفعيل الإيميل");const s=$();s.Verfiy_Modal(),s.reset_verify="verify",s.swiper.slideTo(2),s.email=r.email}else f.error(a.response.data.message)})},async SOCIAL_LOGIN(r,i){this.social_loading=!0,g.post(h+"/social/register",r).then(a=>{if(a.data.token){this.social_loading=!1;const s=S("token");s.value=a.data.token,f.success("تم التسجيل بنجاح"),p(`/${i}`),k().GET_CART_DATA(i)}}).catch(a=>{f.error(a.response.data.message),this.social_loading=!1})}}});export{w as u};
