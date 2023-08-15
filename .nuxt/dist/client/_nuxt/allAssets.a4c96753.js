import{I as R,a as $,c as B,b as j,d as L,y as O,z as P,r as G,n as M,w as V,s as F,k as H,f as J,g as K}from"./entry.aa428618.js";import{j as q,z as Q}from"./index.da3dc2de.js";import{k as I,y as c,z as A,A as o,B as e,J as h,K as a,O as u,u as p,a as W,L as w,M as x,N as k}from"./swiper-vue.90c8b4a3.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";const X={style:{display:"flex","flex-direction":"column","justify-content":"space-between","align-items":"flex-start","max-width":"30%",height:"100%"}},Y={style:{"max-width":"30%",height:"100%"}},Z=I({__name:"mainAsset",props:{name:{},symbol:{},price:{},amount:{},img:{}},setup(_){const r=_;return(s,d)=>{const m=R,i=$,t=B,l=j;return c(),A(l,{class:"asset",style:{}},{default:o(()=>[e(l,{class:"subAsset",style:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center",height:"70%",width:"100%","border-radius":"12px","padding-left":"5%","padding-right":"5%","box-shadow":"none"}},{default:o(()=>[h("div",X,[e(m,{class:"title",style:{"font-size":"150%"}},{default:o(()=>[a(u(r.symbol),1)]),_:1}),e(i,{class:"title",style:{"font-size":"80%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},{default:o(()=>[a(u(r.name),1)]),_:1})]),h("div",Y,[e(t,{class:"arrow",color:"primary",icon:"ioniconsArrowUpCircleSharp"in s?s.ioniconsArrowUpCircleSharp:p(q),style:{"font-size":"250%",transform:"rotate(45deg)"}},null,8,["icon"])])]),_:1}),e(l,{class:"subAsset",style:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center",height:"30%",width:"100%","border-radius":"12px","padding-left":"5%","padding-right":"5%","box-shadow":"none"}},{default:o(()=>[e(m,{class:"title",style:{"font-size":"150%"}},{default:o(()=>[a("$"+u(r.amount),1)]),_:1}),e(i,{style:{"font-size":"100%",color:"red"}},{default:o(()=>[a("+6.5%")]),_:1})]),_:1})]),_:1})}}});const ee=S(Z,[["__scopeId","data-v-041131ca"]]),oe=I({__name:"allAssets",props:{isAllAssetmodalOpen:{type:Boolean}},setup(_){const r=_,s=W("fiat"),d=[{name:"Bitcoin",img:"/BTC.svg",symbol:"btc",price:.42,amount:367},{name:"Ethereum",img:"/ETH.svg",symbol:"eth",price:.42,amount:367},{name:"Ripple",img:"/ripple.svg",symbol:"xrp",price:.42,amount:367},{name:"Solana",img:"/solana.svg",symbol:"sol",price:138,amount:567},{name:"Tether",img:"/tether.svg",symbol:"usdt",price:1,amount:670},{name:"Tron",img:"/tron.svg",symbol:"TRON",price:.08,amount:8367},{name:"Solana",img:"/solana.svg",symbol:"sol",price:138,amount:567},{name:"Tether",img:"/tether.svg",symbol:"USDT",price:1,amount:670},{name:"Tron",img:"/tron.svg",symbol:"trx",price:.08,amount:8367},{name:"Solana",img:"/solana.svg",symbol:"sol",price:138,amount:567},{name:"Tether",img:"/tether.svg",symbol:"usdt",price:1,amount:670},{name:"Tron",img:"/tron.svg",symbol:"trx",price:.08,amount:8367}],m=[{name:"United States Dollar",img:"/ripple.svg",symbol:"USD",price:.42,amount:367},{name:"Euros",img:"/ripple.svg",symbol:"EUR",price:.42,amount:367},{name:"British Pounds",img:"/ripple.svg",symbol:"GBP",price:.42,amount:367},{name:"Nigerian Naira",img:"/ripple.svg",symbol:"NGN",price:.42,amount:367},{name:"United States Dollar",img:"/ripple.svg",symbol:"USD",price:.42,amount:367},{name:"British Pounds",img:"/ripple.svg",symbol:"GBP",price:.42,amount:367},{name:"Euros",img:"/ripple.svg",symbol:"EUR",price:.42,amount:367}];return(i,t)=>{const l=L,g=O,C=P,y=G,T=B,U=M,z=V,N=F,f=ee,b=H,E=J,D=K;return c(),A(D,{"is-open":r.isAllAssetmodalOpen},{default:o(()=>[e(N,null,{default:o(()=>[e(y,{style:{"--background":"secondary"}},{default:o(()=>[e(C,{value:p(s),style:{}},{default:o(()=>[e(g,{value:"fiat",onClick:t[0]||(t[0]=n=>s.value="fiat")},{default:o(()=>[e(l,{style:{color:"whitesmoke"}},{default:o(()=>[a("Fiat")]),_:1})]),_:1}),e(g,{value:"crypto",onClick:t[1]||(t[1]=n=>s.value="crypto")},{default:o(()=>[e(l,{style:{color:"whitesmoke"}},{default:o(()=>[a("Crypto")]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(y,{style:{"--background":"secondary"}},{default:o(()=>[e(z,{slot:"start"},{default:o(()=>[e(U,{onClick:t[2]||(t[2]=n=>i.$emit("closeModal"))},{default:o(()=>[e(T,{slot:"start",color:"primary",icon:"ioniconsReturnUpBack"in i?i.ioniconsReturnUpBack:p(Q),style:{"font-size":"200%"}},null,8,["icon"]),a("Back")]),_:1})]),_:1})]),_:1})]),_:1}),e(E,{class:"ion-padding content",style:{}},{default:o(()=>[p(s)=="crypto"?(c(),w(x,{key:0},k(d,(n,v)=>e(b,{key:v,style:{background:"none"}},{default:o(()=>[e(f,{name:n.name,symbol:n.symbol,price:n.price,amount:n.amount,img:n.img},null,8,["name","symbol","price","amount","img"])]),_:2},1024)),64)):(c(),w(x,{key:1},k(m,(n,v)=>e(b,{key:n.symbol,style:{background:"none"}},{default:o(()=>[e(f,{name:n.name,symbol:n.symbol,price:n.price,amount:n.amount,img:n.img},null,8,["name","symbol","price","amount","img"])]),_:2},1024)),64))]),_:1})]),_:1},8,["is-open"])}}});const ie=S(oe,[["__scopeId","data-v-d747941f"]]);export{ie as _};
