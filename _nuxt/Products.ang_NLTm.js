import{w as h,x as r,B as o}from"./entry.MSgrMHrp.js";const l=h({id:"myProductsStore",state:()=>({data:null,loading_products:null,filterData:null,brands:[],tags:[],for_you_products:[],categories:[],price:[0,1e4]}),actions:{async GET_SUB_PRODUCTS(t,e=null,i){let s;e!==null?s=`subcategories/${e}/products`:s="products/getmore",this.loading_products=!0,await r.get(o+`/${s}?lang=en&page=${i}${t!="subcategory"?`&key=${t}`:""}`).then(a=>{a.data.status_code==200&&(console.log(a.data),this.loading_products=!1,this.data=a.data.products)}).catch(a=>{this.loading_products=!1})},async GET_FOR_YOU_PRODUCTS(){this.loading_products=!0,await r.get(o+"/products/allitems?lang=en&page=1").then(t=>{t.data.status_code==200&&(this.loading_products=!1,this.for_you_products=t.data.products)}).catch(t=>{this.loading_products=!1})},async GET_FILTERD_DATA(){await r.get(o+"/filtter/data").then(t=>{t.data.status_code==200&&(this.filterData=t.data)}).catch(t=>{})},async FILTER_PRODUCTS(t,e,i,s,a,d=null){console.log(s),console.log(a),console.log(i),await r.get(o+`/products/filtterAdvaced?lang=ar&min_price=${t}&max_price=${e}${a.length!=0?`&brand_ids[]=${a}`:""}${i.length!=0?`&category_ids[]=${i}`:""}${s.length!=0?`&tag_ids[]=${s}`:""}&${d!=null?`&sub_category_id=${d}`:""}`).then(c=>{c.data.status_code==200&&(this.data=c.data.data)}).catch(c=>{})},onCategoryChange(t,e,i){const s=this.categories.find(a=>a==t);s||this.categories.push(t),s&&this.categories.splice(this.categories.indexOf(s),1),this.FILTER_PRODUCTS(this.price[0],this.price[1],this.categories,this.tags,this.brands,i)},onBrandsChange(t,e,i){const s=this.brands.find(a=>a==t);s||this.brands.push(t),s&&this.brands.splice(this.brands.indexOf(s),1),this.FILTER_PRODUCTS(this.price[0],this.price[1],this.categories,this.tags,this.brands,i)},onTagChange(t,e,i){const s=this.tags.find(a=>a==t);s||(this.tags.push(t),console.log(e.classList),e.classList.add("selected")),s&&(this.tags.splice(this.tags.indexOf(s),1),e.classList.remove("selected")),this.FILTER_PRODUCTS(this.price[0],this.price[1],this.categories,this.tags,this.brands,i)},AfterSliderChange(t){this.FILTER_PRODUCTS(this.price[0],this.price[1],this.categories,this.tags,this.brands,t)}}});export{l as u};
