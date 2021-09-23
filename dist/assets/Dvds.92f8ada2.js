var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,n=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&s(e,a,t[a]);return e},i=(e,r)=>t(e,a(r));"undefined"!=typeof require&&require;import{s as d,e as p,f as c,b as m,g as u,R as b}from"./vendor.5a693d40.js";import{_ as f}from"./index.150f0615.js";import{E as g}from"./index.4d105fd6.js";import{S as x}from"./short-idols.532b1a81.js";import{P as h,W as v,n as y,O as E,c as j,f as w,J as C,m as k,Y as $,R as O,i as z}from"./index.e9eb1314.js";import{M as P}from"./Input.f896e223.js";import{M as S}from"./Select.27efbc7b.js";import{M as I}from"./Pagination.12647ace.js";import{M}from"./DvdCard.809d3178.js";import{M as D}from"./DvdDetail.1adf7472.js";import"./DvdPoster.abb040ea.js";import"./ic_rolling.5b20d59e.js";import"./IdolTag.75c7f0fc.js";const H=d.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 80px;
  padding: 20px;
  border-bottom: solid 3px ${h};
  box-sizing: border-box;
`,q=d(S)`
  width: 300px;
  margin-left: 30px;
`,B=d.div`
  align-self: center;
  color: ${v};
  font-size: ${y};
`,F=d.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px - ${e=>e.filterHeight}px);
  overflow: auto;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${E}, ${h});
    border-radius: 10px;
  }
`,R=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14vw, 1fr));
  gap: 10px;
  padding: 30px 20px;
  box-sizing: border-box;
`,U=d.div`
  ${j}
  width: 15vw;
  animation: ${w} 1s linear;
`,_=d.div`
  ${j}
  margin-bottom: 5px;
`,J=d.div`
  width: 100%;
  height: 200px;
  color: ${v};
  ${j};
  font-style: italic;
`;function N(){const e=p(),t=c(),[a,r]=m.exports.useState(80),[o,l]=m.exports.useState(!1),[s,d]=m.exports.useState(null),v=m.exports.useMemo((()=>{const e=t.state;return C(u(e,"code",""),u(e,"type",null),u(e,"idols",null),u(e,"page",1),30)}),[t.state]),y=m.exports.useCallback((()=>{const e=document.getElementById("filter-dvds");r(e.clientHeight)}),[]);m.exports.useEffect((()=>{const e=document.getElementById("filter-dvds");return g(e,y),()=>{g.unbind(e)}}),[y]);const j=m.exports.useCallback((a=>{const r=i(n({},t.state),{code:a,page:1});e.push(t.pathname,r)}),[e,t]),w=m.exports.useCallback((a=>{const r=i(n({},t.state),{type:a,page:1});e.push(t.pathname,r)}),[e,t]),S=m.exports.useCallback((a=>{const r=i(n({},t.state),{idols:a,page:1});e.push(t.pathname,r)}),[e,t]),N=m.exports.useCallback((a=>{const r=i(n({},t.state),{page:a});e.push(t.pathname,r)}),[e,t]),T=m.exports.useCallback((()=>{l(!o)}),[o]),W=m.exports.useCallback((e=>{d(e||null),T()}),[T]);return b.createElement(m.exports.Fragment,null,b.createElement(H,{id:"filter-dvds"},b.createElement("div",{style:{display:"flex"}},b.createElement(P,{placeholder:"Search code...",value:u(t.state,"code",""),onChange:e=>j(e.target.value)}),b.createElement(q,{options:[{label:"Censored",value:"Censored"},{label:"Uncensored",value:"Uncensored"}],placeholder:"Select type...",isClearable:!0,value:u(t.state,"type",null),onChange:e=>w(e)}),b.createElement(q,{isMulti:!0,options:x.map((e=>({label:e.name,value:e.idIdol,colors:1===k(e.idIdol)?[$,O]:2===k(e.idIdol)?[z,h]:[h,E]}))),placeholder:"Select idols...",value:u(t.state,"idols",null),onChange:e=>S(e)})),b.createElement(B,null,"( ",v.size+" "+(v.size>1?"results":"result")," )")),b.createElement(F,{filterHeight:a},0===v.size?b.createElement(J,null,"Not Found"):b.createElement(R,null,v.data.map((e=>b.createElement(f,{key:e.idDvd,height:200,once:!0,overflow:!0},b.createElement(U,null,b.createElement(M,{data:e,click:()=>W(e)})))))),b.createElement(_,null,b.createElement(I,{count:v.size,page:u(t.state,"page",1),size:30,handleChangePage:N}))),b.createElement(D,{show:o,toggleModal:T,data:s}))}export{N as default};
