import{I as S,ai as T,S as M,f as h,r as B,W as b,o as f,c as v,D,M as t,m as A,K as $,d as i,L as s,w as x,F,A as P,N as I,a8 as L}from"./BBZtfDou.js";import{u as V,_ as E}from"./CtjogZOn.js";import{e as H}from"./CQmmrYkN.js";import"./CMPI1QAR.js";import"./B9NHqoDH.js";import"./BT8K0SiC.js";import"./CX7kGwBw.js";import"./DFGm3Ob3.js";import"./35h2wA7A.js";import"./CLUcixvw.js";import"./DkLopEmf.js";import"./Bd5TAZbL.js";const R=["datetime"],U=S({__name:"NuxtTime",props:{locale:{},datetime:{},localeMatcher:{},weekday:{},era:{},year:{},month:{},day:{},hour:{},minute:{},second:{},timeZoneName:{},formatMatcher:{},hour12:{type:Boolean,default:void 0},timeZone:{},calendar:{},dayPeriod:{},numberingSystem:{},dateStyle:{},timeStyle:{},hourCycle:{},relative:{type:Boolean}},setup(C){var u;const a=C,r=(u=T())==null?void 0:u.vnode.el,m=r==null?void 0:r.getAttribute("datetime"),d=r==null?void 0:r.getAttribute("data-locale"),_=M(),g=h(()=>{const e=a.datetime;return m&&_.isHydrating?new Date(m):a.datetime?new Date(e):new Date}),n=B(_.isHydrating&&window._nuxtTimeNow?new Date(window._nuxtTimeNow):new Date);if(a.relative){const o=setInterval(()=>{n.value=new Date},1e3);b(()=>clearInterval(o))}const l=h(()=>{const{locale:e,relative:o,...p}=a;return o?new Intl.RelativeTimeFormat(d??e,p):new Intl.DateTimeFormat(d??e,p)}),c=h(()=>{if(a.relative){const e=(g.value.getTime()-n.value.getTime())/1e3,o=[{unit:"second",value:e},{unit:"minute",value:e/60},{unit:"hour",value:e/3600},{unit:"day",value:e/86400},{unit:"month",value:e/2592e3},{unit:"year",value:e/31536e3}],{unit:p,value:N}=o.find(({value:k})=>Math.abs(k)<60)||o[o.length-1];return l.value.format(Math.round(N),p)}return l.value.format(g.value)}),y=h(()=>g.value.toISOString()),w={};return(e,o)=>(f(),v("time",A(w,{datetime:t(y)}),D(t(c)),17,R))}}),Z=["onClick"],te=S({__name:"Notifications",setup(C){const a=B(H(8));function r(l){return{rate:"thumbs-up",paymentSuccess:"credit-card",paymentFail:"times-circle",social:"telegram"}[l]}const{page:m,displayedItems:d}=V(a,6);function _(){a.value.length=0}function g(l){console.log(l),console.log([...a.value]),a.value=a.value.filter(({id:c})=>c!==l)}const n=$("NotificationsPage");return(l,c)=>{const y=U,w=E;return f(),v("div",{class:s(t(n)())},[i("div",null,[i("div",{class:s(t(n)("titleContainer"))},[c[1]||(c[1]=i("h6",null,"Уведомления",-1)),t(d).length?(f(),v("span",{key:0,class:"pi pi-trash",onClick:_})):x("",!0)],2),t(d).length?(f(),v("div",{key:0,class:s(t(n)("notificationsContainer"))},[(f(!0),v(F,null,P(t(d),({id:u,type:e,title:o,date:p,description:N})=>(f(),v("div",{key:u,class:s(t(n)("notification"))},[i("div",{class:s(t(n)("data"))},[i("span",{class:s(["pi",`pi-${r(e)}`])},null,2),i("span",null,D(o),1),I(y,{class:s(t(n)("time")),relative:"",datetime:new Date(p.epochMilliseconds)},null,8,["class","datetime"])],2),i("div",{class:s(t(n)("description"))},D(N),3),i("div",{class:s(t(n)("iconContainer"))},[i("span",{class:"pi pi-trash",onClick:k=>g(u)},null,8,Z)],2)],2))),128))],2)):x("",!0)]),I(w,{page:t(m),"onUpdate:page":c[0]||(c[0]=u=>L(m)?m.value=u:null),"amount-on-page":6,"items-amount":t(a).length},null,8,["page","items-amount"])],2)}}});export{te as default};
