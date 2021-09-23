import{s as e,L as t,b as r,R as i,g as o}from"./vendor.5a693d40.js";import{a}from"./js.cookie.b6205acc.js";import{_ as n}from"./index.150f0615.js";import{Y as l,i as s,c as d,B as c,W as p,X as x,j as u,P as m,R as b,k as h,n as f,a6 as g,G as w,f as v,a7 as $}from"./index.e9eb1314.js";import{p as E}from"./render-price.51e4f9fd.js";import{M as k}from"./Image.afcc4918.js";import{M as j}from"./StarCup.d99bc3b6.js";import{M as y}from"./StarPicture.a11131a3.js";import"./ic_rolling.5b20d59e.js";import"./render-color.e980cc55.js";import"./sizes-cup.fcc04310.js";const z=e.div`
  width: 100%;
  display: flex;
  border-radius: 18px;
  padding: 10px;
  margin: 20px 0px;
  box-sizing: border-box;
  background: linear-gradient(to right, ${l}, ${s});
`,S=e.div`
  ${d}
  align-self: center;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border: solid 3px ${c};
  border-radius: 50px;
  margin-right: 10px;
  box-sizing: border-box;
  background: ${p};
  color: ${c};
  font-size: ${x};
`,C=e.div`
  position: relative;
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  overflow: hidden;
`,M=e(k)`
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  object-fit: cover;
`,B=e.div`
  position: relative;
  width: 450px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`,R=e.div`
  color: ${u};
  font-size: ${x};
`,D=e.div`
  color: ${c};
`,F=e.div`
  width: calc(25vw + 50px);
  min-width: calc(25vw + 50px);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 10px;
`,H=e.div`
  ${d}
  padding: 0px;
  border-radius: 12px;
  border: solid 5px transparent;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: solid 5px ${u};
  }
`,P=e(k)`
  width: 5vw;
  min-width: 5vw;
  height: 7.5vw;
  object-fit: cover;
`,T=e.div`
  flex: 1;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,W=e.div`
  border: solid 6px ${p};
  padding: 10px 20px;
  border-radius: 12px;
  background: linear-gradient(to right, ${m}, ${b});
  color: ${p};
  font-size: ${h};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${c};
`,_=e(t)`
  position: absolute;
  bottom: 0px;
  ${d}
  width: 10vw;
  height: 0px;
  overflow: hidden;
  border-radius: 0px 0px 18px 18px;
  box-sizing: border-box;
  background: linear-gradient(to right, ${l}, ${s});
  text-decoration: none;
  color: ${c};
  font-size: ${f};
  transition: height 0.3s ease-in-out;

  ${z}:hover & {
    height: 30px;
    border: solid 1px ${c};
  }
`;const G=r.exports.memo((function({data:e}){const[t,o]=r.exports.useState(!1),[a,n]=r.exports.useState(null),l=r.exports.useMemo((()=>g(e.earnings)),[e.earnings]),s=r.exports.useCallback((()=>{o(!t)}),[t]),d=r.exports.useCallback((e=>{n(e)}),[]),c=r.exports.useCallback((e=>{n(e||null),s()}),[s]);return i.createElement(r.exports.Fragment,null,i.createElement(z,null,i.createElement(S,null,e.position),i.createElement("div",{style:{display:"flex",width:"100%"}},i.createElement(C,null,i.createElement(M,{src:e.avatar}),i.createElement(_,{to:`/upv/star/${e.idStar}`},"View")),i.createElement(B,null,i.createElement(R,null,e.name," ",e.other?`(${e.other})`:""),i.createElement(D,null,"● Born: ",e.born," (",e.age," year olds)",i.createElement("br",null),"● Height: ",e.height,i.createElement("br",null),"● Breast: ",e.breast," ",i.createElement(j,{cup:e.cup},"(",e.cup,")"),i.createElement("br",null),"● Waist: ",e.waist,i.createElement("br",null),"● Hips: ",e.hips),i.createElement("div",{style:{height:46}})),i.createElement(F,null,e.album.filter(((e,t)=>t<10)).map((e=>i.createElement(H,{key:e.picture},i.createElement(P,{src:e.picture,onClick:()=>c(e.picture),alt:""}))))),i.createElement(T,null,i.createElement(W,null,"$",E(e.earnings)," (",E(l),")")))),i.createElement(y,{show:t,toggleModal:s,listData:e.album.filter(((e,t)=>t<10)).map((e=>e.picture)),data:a,setData:d}))})),I=e.div`
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
    background: linear-gradient(${w}, ${u});
    border-radius: 10px;
  }
`,L=e.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  box-sizing: border-box;
`,V=e.div`
  ${d}
  width: 100%;
  animation: ${v} 1s linear;
`;function X(){const[e,t]=r.exports.useState(!1),[l,s]=r.exports.useState(0),d=r.exports.useRef();r.exports.useEffect((()=>{if(d&&d.current&&!e){const e=a.get("scroll");e&&d.current.scrollTo({top:e}),t(!0)}}),[e]),r.exports.useEffect((()=>()=>{a.set("scroll",l)}),[l]);const c=r.exports.useCallback((()=>{d&&d.current&&s(o(d.current,"scrollTop",0))}),[]);return i.createElement(r.exports.Fragment,null,i.createElement(I,{ref:d,onScroll:c},i.createElement(L,null,$.map((e=>i.createElement(n,{key:e.idStar,height:200,once:!0,overflow:!0},i.createElement(V,null,i.createElement(G,{data:e}))))))))}export{X as default};
