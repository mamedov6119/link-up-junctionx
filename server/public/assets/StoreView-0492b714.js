import{P as h}from"./ProfileDetails-c7a4001a.js";import{_ as g,g as _,o,c,e as P,F as f,i as v,d as t,t as r,p as k,j as b}from"./index-63a9702b.js";const l=n=>(k("data-v-400f30bf"),n=n(),b(),n),S=l(()=>t("h2",null,"Internet Package Store",-1)),y=l(()=>t("hr",null,null,-1)),T=l(()=>t("hr",null,null,-1)),w=["onClick"],I={__name:"StoreView",setup(n){const u=_((()=>[{name:"Basic Plan",description:"Suitable for light usage",price:50,lastPurchaseTime:0},{name:"Standard Plan",description:"Ideal for regular usage",price:100,lastPurchaseTime:0},{name:"Premium Plan",description:"Unlimited high-speed internet",price:200,lastPurchaseTime:0}])()),m=d=>{const e=u.value[d],a=new Date().getTime(),s=1*60*1e3;if(a-e.lastPurchaseTime>=s)e.price<=i.value?(i.value-=e.price,e.lastPurchaseTime=a,alert(`Congratulations! You've purchased the ${e.name} package. Your new balance: ${i.value} points.`)):alert("You don't have enough points to buy this package.");else{const p=Math.ceil((s-(a-e.lastPurchaseTime))/1e3);alert(`Please wait ${p} seconds before buying the ${e.name} package again.`)}},i=_(300);return(d,e)=>(o(),c("div",null,[S,y,P(h,{class:"text-center"}),T,(o(!0),c(f,null,v(u.value,(a,s)=>(o(),c("div",{class:"card card-body mt-3",key:s},[t("h3",null,r(a.name),1),t("p",null,r(a.description),1),t("p",null,"Price: "+r(a.price)+" Points",1),t("button",{onClick:p=>m(s)},"Buy Package",8,w)]))),128))]))}},x=g(I,[["__scopeId","data-v-400f30bf"]]);export{x as default};
