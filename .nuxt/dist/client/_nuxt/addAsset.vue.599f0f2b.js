import{l as L,I as C,x as V,c as x,j,d as G,y as H,z as M,r as F,n as q,w as J,s as K,q as X,C as Q,b as W,k as Y,f as Z,g as oo}from"./entry.aa428618.js";import{H as no,z as eo}from"./index.da3dc2de.js";import{k as T,y as _,z as U,A as n,B as o,J as a,O as I,u as c,U as to,V as so,a as ao,K as r,L as k,M as S,N as B}from"./swiper-vue.90c8b4a3.js";import{_ as io}from"./_plugin-vue_export-helper.c27b6911.js";const lo=i=>(to("data-v-a5f4c585"),i=i(),so(),i),mo=["src"],ro={style:{display:"flex","flex-direction":"row","justify-content":"start","align-items":"center"}},co={style:{"font-size":"small","margin-right":"5px"}},po=lo(()=>a("span",{style:{"font-size":"x-small",color:"red"}},"-0.89%",-1)),_o={style:{display:"flex","flex-direction":"column","justify-content":"start","align-items":"flex-end"}},uo=T({__name:"tempAsset",props:{name:{},symbol:{},price:{},amount:{},img:{}},setup(i){return(s,l)=>{const d=L,u=C,m=V,t=x,p=j;return _(),U(p,{button:"",detail:!1,style:{"--border-radius":"13px","margin-bottom":"2%","padding-top":"3%"}},{default:n(()=>[o(d,{slot:"start"},{default:n(()=>[a("img",{alt:"asset img",src:s.$props.img},null,8,mo)]),_:1}),o(m,{style:{"--ion-grid-column-padding-xs":"none"}},{default:n(()=>[o(u,{style:{"margin-bottom":"9px","font-size":"100%"}},{default:n(()=>[a("strong",null,I(s.$props.symbol),1)]),_:1}),a("div",ro,[a("span",co,"$"+I(s.$props.price),1),po])]),_:1}),a("div",_o,[o(t,{color:"primary",icon:"ioniconsAddCircle"in s?s.ioniconsAddCircle:c(no),style:{"font-size":"200%"}},null,8,["icon"])])]),_:1})}}});const go=io(uo,[["__scopeId","data-v-a5f4c585"]]),yo=["src"],Io=T({__name:"addAsset",props:{ismodalOpen:{type:Boolean}},setup(i){const s=i,l=ao("fiat"),d=[{name:"Ripple",img:"/ripple.svg",symbol:"XRP",price:.42,amount:367},{name:"Solana",img:"/solana.svg",symbol:"Solana",price:138,amount:567},{name:"Tether",img:"/tether.svg",symbol:"USDT",price:1,amount:670},{name:"Tron",img:"/tron.svg",symbol:"TRON",price:.08,amount:8367},{name:"Solana",img:"/solana.svg",symbol:"Solana",price:138,amount:567},{name:"Tether",img:"/tether.svg",symbol:"USDT",price:1,amount:670},{name:"Tron",img:"/tron.svg",symbol:"TRON",price:.08,amount:8367},{name:"Solana",img:"/solana.svg",symbol:"Solana",price:138,amount:567},{name:"Tether",img:"/tether.svg",symbol:"USDT",price:1,amount:670},{name:"Tron",img:"/tron.svg",symbol:"TRON",price:.08,amount:8367}],u=[{name:"United States Dollar",img:"/ripple.svg",symbol:"USD",price:.42,amount:367},{name:"Euros",img:"/ripple.svg",symbol:"EUR",price:.42,amount:367},{name:"British Pounds",img:"/ripple.svg",symbol:"GBP",price:.42,amount:367},{name:"Nigerian Naira",img:"/ripple.svg",symbol:"NGN",price:.42,amount:367},{name:"United States Dollar",img:"/ripple.svg",symbol:"USD",price:.42,amount:367},{name:"British Pounds",img:"/ripple.svg",symbol:"GBP",price:.42,amount:367},{name:"Euros",img:"/ripple.svg",symbol:"EUR",price:.42,amount:367}];return(m,t)=>{const p=G,g=H,w=M,y=F,N=x,A=q,$=J,z=K,R=C,D=X,O=Q,f=W,b=go,v=Y,E=Z,P=oo;return _(),U(P,{"is-open":s.ismodalOpen},{default:n(()=>[o(z,null,{default:n(()=>[o(y,{style:{"--background":"secondary"}},{default:n(()=>[o(w,{color:"primary",value:c(l)},{default:n(()=>[o(g,{value:"fiat",onClick:t[0]||(t[0]=e=>l.value="fiat")},{default:n(()=>[o(p,null,{default:n(()=>[r("Fiat")]),_:1})]),_:1}),o(g,{value:"crypto",onClick:t[1]||(t[1]=e=>l.value="crypto")},{default:n(()=>[o(p,null,{default:n(()=>[r("Crypto")]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),o(y,{style:{"--background":"secondary"}},{default:n(()=>[o($,{slot:"start"},{default:n(()=>[o(A,{onClick:t[2]||(t[2]=e=>m.$emit("closeModal"))},{default:n(()=>[o(N,{slot:"start",color:"primary",icon:"ioniconsReturnUpBack"in m?m.ioniconsReturnUpBack:c(eo),style:{"font-size":"200%"}},null,8,["icon"]),r("Back")]),_:1})]),_:1})]),_:1})]),_:1}),o(E,{class:"ion-padding"},{default:n(()=>[o(f,{style:{"box-shadow":"none"}},{default:n(()=>[a("img",{alt:"coin",src:c(l)=="crypto"?"/coin_top.svg":"/compass_top.svg",style:{width:"40%"}},null,8,yo),o(D,null,{default:n(()=>[o(R,{style:{"font-size":"200%"}},{default:n(()=>[r("Add asset wallet")]),_:1})]),_:1}),o(O,null,{default:n(()=>[r(" Become truly borderless,ablilty to bank with multiple currencies. ")]),_:1})]),_:1}),o(f,{style:{"max-height":"50%","min-height":"50%","overflow-y":"scroll","scroll-behavior":"smooth","padding-bottom":"3%","box-shadow":"none",background:"none"}},{default:n(()=>[c(l)=="crypto"?(_(),k(S,{key:0},B(d,(e,h)=>o(v,{key:h},{default:n(()=>[o(b,{name:e.name,symbol:e.symbol,price:e.price,amount:e.amount,img:e.img},null,8,["name","symbol","price","amount","img"])]),_:2},1024)),64)):(_(),k(S,{key:1},B(u,(e,h)=>o(v,{key:e.symbol},{default:n(()=>[o(b,{name:e.name,symbol:e.symbol,price:e.price,amount:e.amount,img:e.img},null,8,["name","symbol","price","amount","img"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["is-open"])}}});export{Io as _};
