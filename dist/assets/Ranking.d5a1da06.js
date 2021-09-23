var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))a.call(t,r)&&n(e,r,t[r]);return e};"undefined"!=typeof require&&require;import{s as l,L as d,b as p,f as c,R as x,g as m}from"./vendor.5a693d40.js";import{a as u}from"./js.cookie.b6205acc.js";import{_ as b}from"./index.150f0615.js";import{Y as g,R as h,i as f,P as v,O as w,c as $,B as E,W as k,X as y,h as j,q as z,k as O,n as S,G as q,s as I,f as M,z as P}from"./index.e9eb1314.js";import{d as D}from"./render-color.e980cc55.js";import{M as C}from"./Image.afcc4918.js";import{M as B,a as R}from"./IdolStyle.9bb3dde5.js";import{M as T}from"./DvdPoster.abb040ea.js";import{M as U}from"./DvdDetail.1adf7472.js";import"./sizes-cup.fcc04310.js";import"./ic_rolling.5b20d59e.js";import"./IdolTag.75c7f0fc.js";const Y=l.div`
  width: 100%;
  display: flex;
  border-radius: 18px;
  padding: 10px;
  margin: 20px 0px;
  box-sizing: border-box;
  background: ${e=>e.queen?`linear-gradient(to right, ${g}, ${h})`:e.runnerUp?`linear-gradient(to right, ${f}, ${v})`:`linear-gradient(to right,  ${w}, ${v})`};
`,H=l.div`
  ${$}
  align-self: center;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border: solid 3px ${E};
  border-radius: 50px;
  margin-right: 10px;
  box-sizing: border-box;
  background: ${k};
  color: ${E};
  font-size: ${y};
`,W=l.div`
  position: relative;
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  overflow: hidden;
`,_=l(d)`
  position: absolute;
  top: -5px;
  left: -35px;
  ${$}
  width: 100px;
  height: 40px;
  background: linear-gradient(to right, ${j}, ${z});
  transform: rotate(135deg);
  text-align: center;
  text-decoration: none;
  font-size: ${O};
  color: ${k};
`,F=l(C)`
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  object-fit: cover;
`,G=l.div`
  position: relative;
  width: 450px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`,L=l.div`
  color: ${E};
  font-size: ${y};
`,V=l.div`
  color: ${k};
`,X=l.div`
  display: flex;
  flex-wrap: wrap;
`,A=l(B)`
  border: solid 2px ${E};
  margin-top: 10px;
`,J=l.div`
  width: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 10px;
`,K=l.div`
  ${$}
  flex-direction: column;
  margin: 5px;
  cursor: pointer;
  transform: translateY(0px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`,N=l(T)`
  width: 7.5vw;
  max-width: 7.5vw;
  height: 5vw;
  max-height: 5vw;
`,Q=l.div`
  margin-top: 5px;
  font-size: ${S};
  color: ${e=>e.uncensored?q:E};
`,Z=l.div`
  ${$}
  width: 90px;
  min-width: 90px;
  height: auto;
  margin: -10px -10px -10px 0px;
  border-radius: 0px 18px 18px 0px;
  box-sizing: border-box;
  background: ${k};
  color: ${e=>e.color};
  font-size: ${y};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${E};
`,ee=l(d)`
  position: absolute;
  bottom: 0px;
  ${$}
  width: 10vw;
  height: 0px;
  overflow: hidden;
  border-radius: 0px 0px 18px 18px;
  box-sizing: border-box;
  background: ${e=>"true"===e.queen?`linear-gradient(to right, ${g}, ${h})`:"true"===e.runner?`linear-gradient(to right, ${f}, ${v})`:`linear-gradient(to right,  ${w}, ${v})`};
  text-decoration: none;
  color: ${E};
  font-size: ${S};
  transition: height 0.3s ease-in-out;

  ${Y}:hover & {
    height: 30px;
    border: solid 1px ${E};
  }
`;const te=p.exports.memo((function({data:e}){const o=c(),[i,a]=p.exports.useState(!1),[n,l]=p.exports.useState(null),d=p.exports.useMemo((()=>e.dvds.filter(((t,r)=>r>e.dvds.length-13)).reverse()),[e.dvds]),m=p.exports.useMemo((()=>D(e.points)),[e.points]),u=p.exports.useCallback((()=>{a(!i)}),[i]),b=p.exports.useCallback((e=>{l(e||null),u()}),[u]);return x.createElement(p.exports.Fragment,null,x.createElement(Y,{queen:1===e.rank,runnerUp:2===e.rank},x.createElement(H,null,e.rank),x.createElement("div",{style:{display:"flex",width:"100%"}},x.createElement(W,null,I(e.idIdol)&&x.createElement(_,{to:{pathname:"/jav/idols",state:(g=s({},o.state),h={best:!0,page:1},t(g,r(h)))}},"☿"),x.createElement(F,{src:e.avatar}),x.createElement(ee,{to:`/jav/idol/${e.idIdol}`,queen:(1===e.rank).toString(),runner:(2===e.rank).toString()},"View")),x.createElement(G,null,x.createElement(L,null,e.name," ",e.other?`(${e.other})`:""),x.createElement(V,null,"● Born: ",e.born," (",e.age," year olds)",x.createElement("br",null),"● Height: ",e.height,x.createElement("br",null),"● Breast: ",e.breast," ",x.createElement(R,{cup:e.cup},"(",e.cup,")"),x.createElement("br",null),"● Waist: ",e.waist,x.createElement("br",null),"● Hips: ",e.hips),x.createElement(X,null,e.styles.map((e=>x.createElement(A,{key:e.tag,tag:e.tag}))))),x.createElement(J,null,d.map((e=>x.createElement(K,{key:e.idDvd,onClick:()=>b(e)},x.createElement(N,{src:e.poster}),x.createElement(Q,{uncensored:"Uncensored"===e.type},e.code)))))),x.createElement(Z,{color:m},e.points,"p")),x.createElement(U,{show:i,toggleModal:u,data:n}));var g,h})),re=l.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: auto;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${w}, ${v});
    border-radius: 10px;
  }
`,oe=l.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  box-sizing: border-box;
`,ie=l.div`
  ${$}
  width: 100%;
  animation: ${M} 1s linear;
`;function ae(){const[e,t]=p.exports.useState(!1),[r,o]=p.exports.useState(0),i=p.exports.useRef();p.exports.useEffect((()=>{if(i&&i.current&&!e){const e=u.get("scroll");e&&i.current.scrollTo({top:e}),t(!0)}}),[e]),p.exports.useEffect((()=>()=>{u.set("scroll",r)}),[r]);const a=p.exports.useCallback((()=>{i&&i.current&&o(m(i.current,"scrollTop",0))}),[]);return x.createElement(re,{ref:i,onScroll:a},x.createElement(oe,null,P.map((e=>x.createElement(b,{key:e.idIdol,height:200,once:!0,overflow:!0},x.createElement(ie,null,x.createElement(te,{data:e})))))))}export{ae as default};
