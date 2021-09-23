var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,l=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))n.call(t,r)&&i(e,r,t[r]);return e};"undefined"!=typeof require&&require;import{s,L as p,f as d,q as c,b as u,g as m,R as g}from"./vendor.5a693d40.js";import{_ as b}from"./index.150f0615.js";import{p as x}from"./render-price.51e4f9fd.js";import{f,O as h,P as $,c as v,h as w,q as k,k as E,W as y,Y as j,R as M,i as C,B as q,g as z,X as O,D,I as P,F as U,s as I,x as S,H as B}from"./index.e9eb1314.js";import{M as F}from"./Tabs.5c045b13.js";import{M as H}from"./Image.afcc4918.js";import{a as T,M as Y}from"./IdolStyle.9bb3dde5.js";import{M as R}from"./IdolPicture.b018c6b1.js";import{M as W}from"./DvdPoster.abb040ea.js";import{M as _}from"./DvdDetail.1adf7472.js";import"./ic_rolling.5b20d59e.js";import"./render-color.e980cc55.js";import"./sizes-cup.fcc04310.js";import"./IdolTag.75c7f0fc.js";const L=s.div`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 30px;
  box-sizing: border-box;
  animation: ${f} 0.8s ease-in-out;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${h}, ${$});
    border-radius: 10px;
  }
`,X=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px;
`,A=s.div`
  display: flex;
  margin-bottom: 10px;
`,G=s.div`
  position: relative;
  ${v}
  width: 18vw;
  height: 25vw;
  border-radius: 18px;
  border: solid 5px transparent;
  overflow: hidden;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: solid 5px ${$};
  }
`,J=s(p)`
  position: absolute;
  top: -5px;
  left: -35px;
  ${v}
  width: 100px;
  height: 40px;
  background: linear-gradient(to right, ${w}, ${k});
  transform: rotate(135deg);
  text-align: center;
  text-decoration: none;
  font-size: ${E};
  color: ${y};
`,K=s(H)`
  width: 18vw;
  height: 25vw;
  object-fit: cover;
`,N=s.div`
  position: absolute;
  bottom: 0px;
  ${v}
  width: 18vw;
  height: 50px;
  border-radius: 0px 0px 12px 12px;
  background: ${e=>e.queen?`linear-gradient(to right, ${j}, ${M})`:e.runnerUp?`linear-gradient(to right, ${C}, ${$})`:`linear-gradient(to right, ${h}, ${$})`};
  color: ${q};
  font-size: ${E};
`,Q=s.div`
  margin-left: 10px;
  color: ${y};
  font-size: ${z};
  line-height: 35px;
`,V=s.div`
  font-size: ${O};
  background: ${e=>e.queen?`linear-gradient(to right, ${j}, ${M})`:e.runnerUp?`linear-gradient(to right, ${C}, ${$})`:`linear-gradient(to right, ${h}, ${$})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Z=s.div`
  ${v}
  width: 150px;
  margin-top: 10px;
  margin-bottom: 50px;
  border-radius: 18px;
  background: ${e=>e.queen?`linear-gradient(to right, ${j}, ${M})`:e.runnerUp?`linear-gradient(to right, ${C}, ${$})`:`linear-gradient(to right, ${h}, ${$})`};
  color: ${q};
  font-size: ${E};
`,ee=s.div`
  display: flex;
  flex-wrap: wrap;
`,te=s(X)`
  align-items: center;
`,re=s.div`
  max-height: calc(100vh - 204px);
  margin-top: 5px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${h}, ${$});
    border-radius: 10px;
  }
`,ae=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11vw, 1fr));
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
`,oe=s.div`
  ${v}
  flex-direction: column;
  margin: 5px;
  cursor: pointer;
  transform: translateY(0px);
  transition: transform 0.3s ease-in-out;
  animation: ${f} 0.8s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`,ne=s(W)`
  width: 12vw;
  height: 8vw;
  object-fit: cover;
`,ie=s.div`
  margin-top: 5px;
  font-size: ${z};
  background: ${e=>e.uncensored?`linear-gradient(to right, ${D}, ${C})`:`linear-gradient(to right, ${$}, ${h})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,le=s(ae)`
  grid-template-columns: repeat(auto-fill, minmax(17vw, 1fr));
  gap: 20px;
`,se=s.div`
  ${v}
  width: 18vw;
  padding: 0px;
  border-radius: 12px;
  border: solid 5px transparent;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.3s ease-in-out;
  animation: ${f} 0.8s ease-in-out;

  &:hover {
    border: solid 5px ${$};
  }
`,pe=s(H)`
  width: 18vw;
  object-fit: cover;
`,de=s.div`
  position: absolute;
  left: 50px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
`,ce=s.div`
  padding: 5px 10px;
  border-radius: 12px;
  background: ${y};
  color: ${q};
  font-size: ${z};
`,ue=s(ce)`
  background: linear-gradient(to right, ${w}, ${k});
  color: ${y};
  margin-top: 10px;
`,me=s(ue)`
  background: linear-gradient(to right, ${h}, ${$});
  color: ${y};
`;function ge(){const e=d(),{id:a}=c(),[o,n]=u.exports.useState(0),[i,s]=u.exports.useState(!1),[p,f]=u.exports.useState(null),[h,$]=u.exports.useState(!1),[v,w]=u.exports.useState(null),k=u.exports.useMemo((()=>P(a)),[a]),E=u.exports.useMemo((()=>[m(k,"avatar","")].concat(m(k,"album",[]).map((e=>e.picture)))),[k]),y=u.exports.useMemo((()=>{const e=m(k,"dvds",[]).filter((e=>"Uncensored"===e.type));return U(m(k,"rank",1e6),m(k,"points",0),m(k,"styles",[]),e.length,I(m(k,"idIdol","")))}),[k]),j=u.exports.useMemo((()=>S(y)),[y]),M=u.exports.useMemo((()=>B(a)),[a]),C=u.exports.useMemo((()=>M+y),[M,y]),q=u.exports.useMemo((()=>S(C)),[C]),z=u.exports.useMemo((()=>[`Pictures (${m(k,"album.length",0)})`,`Dvds (${m(k,"dvds.length",0)})`]),[k]),O=u.exports.useCallback((e=>{n(e)}),[]),D=u.exports.useCallback((()=>{$(!h)}),[h]),H=u.exports.useCallback((e=>{w(e||null),D()}),[D]),W=u.exports.useCallback((()=>{s(!i)}),[i]),ge=u.exports.useCallback((e=>{f(e)}),[]),be=u.exports.useCallback((e=>{f(e||null),W()}),[W]),xe=u.exports.useCallback((()=>{switch(o){case 0:return g.createElement(le,null,m(k,"album",[]).map((e=>g.createElement(b,{key:e.picture,height:450,once:!0,overflow:!0},g.createElement(se,null,g.createElement(pe,{src:e.picture,onClick:()=>be(e.picture),alt:""}))))));case 1:return g.createElement(ae,null,m(k,"dvds",[]).map((e=>g.createElement(b,{key:e.idDvd,height:200,once:!0,overflow:!0},g.createElement(oe,{onClick:()=>H(e)},g.createElement(ne,{src:e.poster}),g.createElement(ie,{uncensored:"Uncensored"===e.type},e.code))))));default:return null}}),[o,k,H,be]);return g.createElement(u.exports.Fragment,null,g.createElement(L,null,g.createElement(X,null,g.createElement(A,null,g.createElement(G,null,I(a)&&g.createElement(J,{to:{pathname:"/jav/idols",state:(fe=l({},e.state),he={best:!0,page:1},t(fe,r(he)))}},"☿"),g.createElement(K,{src:m(k,"avatar",""),onClick:()=>be(m(k,"avatar",""))}),g.createElement(N,{queen:1===m(k,"rank",""),runnerUp:2===m(k,"rank","")},"#",m(k,"rank",0))),g.createElement(Q,null,g.createElement(V,{queen:1===m(k,"rank",""),runnerUp:2===m(k,"rank","")},m(k,"name","")," ",m(k,"other","")?`(${m(k,"other")})`:""),g.createElement(Z,{queen:1===m(k,"rank",""),runnerUp:2===m(k,"rank","")},m(k,"points",0)," points"),"● Born: ",m(k,"born","")," (",m(k,"age","")," year olds)",g.createElement("br",null),"● Height: ",m(k,"height",""),g.createElement("br",null),"● Breast: ",m(k,"breast","")," ",g.createElement(T,{cup:m(k,"cup","")},"(",m(k,"cup",""),")"),g.createElement("br",null),"● Waist: ",m(k,"waist",""),g.createElement("br",null),"● Hips: ",m(k,"hips",""))),g.createElement(ee,null,m(k,"styles",[]).map((e=>g.createElement(Y,{key:e.tag,tag:e.tag,style:{marginTop:"10px"}}))))),g.createElement(te,null,g.createElement("div",{style:{width:"100%"}},g.createElement(F,{data:z,active:o,onChange:O}),g.createElement(re,null,xe()))),g.createElement(de,null,g.createElement(ce,null,"$",x(y)," (",x(j),")"),!!M&&g.createElement(u.exports.Fragment,null,g.createElement(ue,null,"$",x(M)),g.createElement(me,null,"$",x(C)," (",x(q),")")))),g.createElement(R,{show:i,toggleModal:W,listData:E,data:p,setData:ge}),g.createElement(_,{show:h,toggleModal:D,data:v}));var fe,he}export{ge as default};
