import{_ as M}from"./F7AfMhTp.js";import{_ as I,E as U}from"./BVzTSKlX.js";import{d as O}from"./CrRC-2C8.js";import{_ as D}from"./CmQgm5tc.js";import"./BYCjtHwC.js";import{u as N}from"./BA0TpkY0.js";import{d as P,Y as m,W as u,g as R,a as V,h as p,o,i as F,w as r,b as c,n,f as s,r as f,e as w,c as k,F as Y,k as z,E as A}from"./Di6wo0dh.js";const W=["onClick"],Q=P({__name:"UsersStructure",props:m({itemsInRow:{},gap:{},users:{},isMasters:{type:Boolean},withExpel:{type:Boolean},ownerId:{default:""},listOnly:{type:Boolean}},{showList:{type:Boolean,default:!0},showListModifiers:{},selected:{default:null},selectedModifiers:{}}),emits:m(["expel","select"],["update:showList","update:selected"]),setup(l,{emit:v}){const B=v,{providedData:_,checkIsClanOwner:h}=N(),C=u(l,"showList"),i=u(l,"selected"),d=R(()=>i.value!==null),y=h(l.ownerId);function E(e){d.value&&(i.value=e)}const a=V("UsersStructure");return(e,X)=>{const b=M,$=I,L=O,S=D;return o(),p(S,{"preserve-subcontent":!1,class:n(s(a)({list:e.listOnly,operatable:e.withExpel,selectable:s(d)}))},F({_:2},[e.listOnly?void 0:{name:"subContent",fn:r(()=>[c("div",{class:n(s(a)("structureDataContainer"))},[c("div",{class:n(s(a)("textsContainer"))},[f(e.$slots,"texts")],2),c("div",{class:n(s(a)("buttonsBlock"))},[f(e.$slots,"buttons")],2)],2)]),key:"0"},C.value?{name:"content",fn:r(()=>[w(L,{gap:e.gap,"items-in-row":e.itemsInRow,class:n(s(a)("list"))},{default:r(()=>[(o(!0),k(Y,null,z(e.users,t=>(o(),k("div",{key:t.id,class:n(s(a)("participant",{selected:i.value===t.id})),onClick:g=>E(t.id)},[w(b,{avatar:t.avatar,name:t.name,"is-linker":e.isMasters,"is-clan-owner":t.id===e.ownerId},null,8,["avatar","name","is-linker","is-clan-owner"]),e.withExpel&&s(y)&&t.id!==s(_).id?(o(),p($,{key:0,type:s(U).EXPEL_PLAYER,class:n(s(a)("expelButton")),onClick:g=>B("expel",t.id)},null,8,["type","class","onClick"])):A("",!0)],10,W))),128))]),_:1},8,["gap","items-in-row","class"])]),key:"1"}:void 0]),1032,["class"])}}});export{Q as _};
