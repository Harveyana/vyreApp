import{u as y,a2 as x,q as w,I as g,a as h,d as b,b as v,i as C}from"./entry.3eb78313.js";import{k as I,y as z,z as k,A as t,B as s,C as o,D as a,H as i,u as d}from"./swiper-vue.c91c2164.js";const A={style:{"max-width":"100%",height:"100%",display:"flex","flex-direction":"row","justify-content":"center","align-items":"center","z-index":"99"}},B=["src"],j={style:{display:"flex","flex-direction":"column","justify-content":"space-between","align-items":"flex-start","max-width":"40%",height:"100%",position:"relative",right:"24%"}},D={style:{"font-size":"60%"}},F={style:{"max-width":"100%",height:"100%",display:"flex","flex-direction":"row","justify-content":"center","align-items":"center"}},N=I({__name:"asset",props:{name:{},symbol:{},price:{},amount:{},img:{}},setup(_){const e=_,p=y();return(l,n)=>{const f=w,r=g,m=h,u=b,c=v;return z(),k(c,{class:"asset",style:{},onClick:n[1]||(n[1]=V=>d(p).push(`/assetpage/${e.name}`))},{default:t(()=>[s(c,{class:"subAsset",style:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center",width:"100%","border-radius":"12px","padding-left":"5%","padding-right":"5%","box-shadow":"none",margin:"0px",background:"none"}},{default:t(()=>[o("div",A,[s(f,{slot:"start",style:{scale:"0.8",border:"3px solid #1B1D30"}},{default:t(()=>[o("img",{alt:"asset img",src:e.img},null,8,B)]),_:1})]),o("div",j,[s(r,{class:"title",style:{"font-size":"100%"}},{default:t(()=>[a(i(e.symbol),1)]),_:1}),s(m,{class:"title",style:{"font-size":"50%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},{default:t(()=>[a(i(e.name),1)]),_:1}),s(r,{class:"title",style:{"font-size":"80%"}},{default:t(()=>[a(i(e.amount)+" ",1),o("span",D,i(e.symbol),1)]),_:1})]),o("div",F,[s(u,{icon:"ioniconsArrowForwardCircle"in l?l.ioniconsArrowForwardCircle:d(x),style:{"font-size":"250%",color:"#1d3160"},onClick:n[0]||(n[0]=()=>{})},null,8,["icon"])])]),_:1})]),_:1})}}});const T=C(N,[["__scopeId","data-v-5fc44548"]]);export{T as _};
