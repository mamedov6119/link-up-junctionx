import{_ as M,g as n,h as g,r as k,u as _,o as i,c as r,F as C,i as F,d as s,t as $,n as x,e as u,p as z,j as b}from"./index-63a9702b.js";import{P as w}from"./ProfileDetails-c7a4001a.js";const h=l=>(z("data-v-943057e9"),l=l(),b(),l),I={key:0,class:"game-board"},S=["onClick"],P=h(()=>s("div",{class:"card-front"},null,-1)),D={class:"card-back"},E={key:1},N=h(()=>s("p",null,"Congrats! You have completed the game!",-1)),R={__name:"MemoryGame",setup(l){let d=["3GB","5GB","10GB","15GB","20GB","25GB","30GB","35GB","40GB","45GB","50GB","55GB","60GB","65GB","70GB","75GB","80GB","85GB","90GB","95GB","100GB","105GB"],t=n([]);d.sort(()=>Math.random()-.5);let p=0;d.slice(0,10).forEach(a=>{let c={id:p++,prize:a,isFlipped:!1,isMatched:!1};t.value.push(c),c.id=p++,t.value.push({...c})}),t.value[0].prize;let e=n([]),v=n(0),m=()=>{t.value.sort(()=>Math.random()-.5)},G=a=>{e.value.length<2&&!a.isFlipped&&(a.isFlipped=!0,e.value.push(a),e.value.length===2&&B())},B=()=>{e.value[0].prize===e.value[1].prize?(e.value[0].isMatched=!0,e.value[1].isMatched=!0,v.value++,e.value=[]):setTimeout(()=>{e.value[0].isFlipped=!1,e.value[1].isFlipped=!1,e.value=[]},1e3)},f=g(()=>v.value===t.value.length/2);return m(),(a,c)=>{const y=k("RewardsButton");return _(f)?(i(),r("div",E,[N,u(y,{amount:15})])):(i(),r("div",I,[(i(!0),r(C,null,F(_(t),o=>(i(),r("div",{key:o.id,class:"card",onClick:q=>_(G)(o)},[s("div",{class:x(["card-inner",{flipped:!o.isFlipped,matched:o.isMatched}])},[P,s("div",D,$(o.prize),1)],2)],8,S))),128))]))}}},V=M(R,[["__scopeId","data-v-943057e9"]]);const j=s("h2",null,"Game: Memory game",-1),L=s("hr",null,null,-1),O={class:"row"},T={class:"col-8"},Y={class:"col-4 border"},J={__name:"MemoryGame",setup(l){return(d,t)=>(i(),r("div",null,[j,L,s("div",O,[s("div",T,[u(V,{class:"border"})]),s("div",Y,[u(w)])])]))}};export{J as default};
