var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))a.call(t,r)&&n(e,r,t[r]);return e};"undefined"!=typeof require&&require;import{s as l,L as d,b as p,f as c,R as x,g as u,e as b}from"./vendor.5a693d40.js";import{a as m}from"./js.cookie.b6205acc.js";import{_ as g}from"./index.150f0615.js";import{W as f,G as h,c as w,B as $,X as v,h as k,q as E,k as y,P as j,i as z,D as O,R as C,Y as M,O as S,n as I,x as P,s as B,f as D,A as q,y as R}from"./index.e9eb1314.js";import{M as F}from"./Checkbox.e295eec8.js";import{p as H}from"./render-price.51e4f9fd.js";import{M as T}from"./Image.afcc4918.js";import{M as W,a as _}from"./IdolStyle.9bb3dde5.js";import{M as A}from"./IdolPicture.b018c6b1.js";import"./ic_rolling.5b20d59e.js";import"./render-color.e980cc55.js";import"./sizes-cup.fcc04310.js";const G=l.div`
  width: 100%;
  display: flex;
  border-radius: 18px;
  padding: 10px;
  margin: 20px 0px;
  box-sizing: border-box;
  background: linear-gradient(to right, ${f}, ${h});
`,L=l.div`
  ${w}
  align-self: center;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border: solid 3px ${$};
  border-radius: 50px;
  margin-right: 10px;
  box-sizing: border-box;
  background: ${f};
  color: ${$};
  font-size: ${v};
`,V=l.div`
  position: relative;
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  overflow: hidden;
`,X=l(d)`
  position: absolute;
  top: -5px;
  left: -35px;
  ${w}
  width: 100px;
  height: 40px;
  background: linear-gradient(to right, ${k}, ${E});
  transform: rotate(135deg);
  text-align: center;
  text-decoration: none;
  font-size: ${y};
  color: ${f};
`,Y=l(T)`
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  object-fit: cover;
`,J=l.div`
  position: relative;
  width: 450px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`,K=l.div`
  color: ${j};
  font-size: ${v};
`,N=l.div`
  color: ${$};
`,Q=l.div`
  display: flex;
  flex-wrap: wrap;
`,U=l(W)`
  border: solid 2px ${$};
  margin-top: 10px;
`,Z=l.div`
  width: calc(25vw + 50px);
  min-width: calc(25vw + 50px);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 10px;
`,ee=l.div`
  ${w}
  padding: 0px;
  border-radius: 12px;
  border: solid 5px transparent;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: solid 5px ${j};
  }
`,te=l(T)`
  width: 5vw;
  min-width: 5vw;
  height: 7.5vw;
  object-fit: cover;
`,re=l.div`
  flex: 1;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,oe=l.div`
  border: solid 6px ${f};
  padding: 10px 20px;
  border-radius: 12px;
  background: linear-gradient(to right, ${z}, ${O});
  color: ${f};
  font-size: ${y};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${$};
`,ie=l.div`
  color: transparent;
  font-size: ${y};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${$};
`,ae=l(oe)`
  border: solid 6px ${e=>"true"===e.bonus?C:f};
  background: linear-gradient(to right, ${k}, ${E});
  color: ${f};
  margin-top: 10px;
  font-size: ${y};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${$};
`,ne=l(ae)`
  border: solid 6px ${e=>"false"===e.bonus?C:f};
  background: linear-gradient(to right, ${M}, ${S});
  color: ${f};
  font-size: ${y};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${$};
`,se=l(d)`
  position: absolute;
  bottom: 0px;
  ${w}
  width: 10vw;
  height: 0px;
  overflow: hidden;
  border-radius: 0px 0px 18px 18px;
  box-sizing: border-box;
  background: linear-gradient(to right, ${f}, ${h});
  text-decoration: none;
  color: ${$};
  font-size: ${I};
  transition: height 0.3s ease-in-out;

  ${G}:hover & {
    height: 30px;
    border: solid 1px ${$};
  }
`;const le=p.exports.memo((function({data:e}){const o=c(),[i,a]=p.exports.useState(!1),[n,l]=p.exports.useState(null),d=p.exports.useMemo((()=>P(e.earnings)),[e.earnings]),b=p.exports.useMemo((()=>e.bonus+e.earnings),[e.bonus,e.earnings]),m=p.exports.useMemo((()=>P(b)),[b]),g=p.exports.useCallback((()=>{a(!i)}),[i]),f=p.exports.useCallback((e=>{l(e)}),[]),h=p.exports.useCallback((e=>{l(e||null),g()}),[g]);return x.createElement(p.exports.Fragment,null,x.createElement(G,null,x.createElement(L,null,e.position),x.createElement("div",{style:{display:"flex",width:"100%"}},x.createElement(V,null,B(e.idIdol)&&x.createElement(X,{to:{pathname:"/jav/idols",state:(w=s({},o.state),$={best:!0,page:1},t(w,r($)))}},"☿"),x.createElement(Y,{src:e.avatar}),x.createElement(se,{to:`/jav/idol/${e.idIdol}`},"View")),x.createElement(J,null,x.createElement(K,null,e.name," ",e.other?`(${e.other})`:""),x.createElement(N,null,"● Born: ",e.born," (",e.age," year olds)",x.createElement("br",null),"● Height: ",e.height,x.createElement("br",null),"● Breast: ",e.breast," ",x.createElement(_,{cup:e.cup},"(",e.cup,")"),x.createElement("br",null),"● Waist: ",e.waist,x.createElement("br",null),"● Hips: ",e.hips),x.createElement(Q,null,e.styles.map((e=>x.createElement(U,{key:e.tag,tag:e.tag}))))),x.createElement(Z,null,e.album.filter(((e,t)=>t<10)).map((e=>x.createElement(ee,{key:e.picture},x.createElement(te,{src:e.picture,onClick:()=>h(e.picture),alt:""}))))),x.createElement(re,null,x.createElement(oe,null,"$",H(e.earnings)," (",H(d),")"),!!e.bonus&&x.createElement(ie,null,"+",x.createElement(ae,{bonus:u(o.state,"bonus",!1).toString()},"$",H(e.bonus)),"=",x.createElement(ne,{bonus:u(o.state,"bonus",!1).toString()},"$",H(b)," (",H(m),")"))))),x.createElement(A,{show:i,toggleModal:g,listData:e.album.filter(((e,t)=>t<10)).map((e=>e.picture)),data:n,setData:f}));var w,$})),de=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: solid 3px ${j};
  box-sizing: border-box;
`,pe=l.div`
  display: flex;
  margin-left: 30px;
`,ce=l.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 183px);
  overflow: auto;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${S}, ${j});
    border-radius: 10px;
  }
`,xe=l.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  box-sizing: border-box;
`,ue=l.div`
  ${w}
  width: 100%;
  animation: ${D} 1s linear;
`;function be(){const e=b(),t=c(),[r,o]=p.exports.useState(!1),[i,a]=p.exports.useState(0),n=p.exports.useRef(),s=p.exports.useMemo((()=>u(t.state,"bonus",!1)?q:R),[t]);p.exports.useEffect((()=>{if(n&&n.current&&!r){const e=m.get("scroll");e&&n.current.scrollTo({top:e}),o(!0)}}),[r]),p.exports.useEffect((()=>()=>{m.set("scroll",i)}),[i]);const l=p.exports.useCallback((()=>{n&&n.current&&a(u(n.current,"scrollTop",0))}),[]),d=p.exports.useCallback((()=>{e.push(t.pathname,{bonus:!u(t.state,"bonus",!1)})}),[e,t]);return x.createElement(p.exports.Fragment,null,x.createElement(de,null,x.createElement(pe,null,x.createElement(F,{label:"Bonus",value:u(t.state,"bonus",!1),onChange:d,customColor:`linear-gradient(to right, ${k}, ${E})`}))),x.createElement(ce,{ref:n,onScroll:l},x.createElement(xe,null,s.map((e=>x.createElement(g,{key:e.idIdol,height:200,once:!0,overflow:!0},x.createElement(ue,null,x.createElement(le,{data:e}))))))))}export{be as default};
