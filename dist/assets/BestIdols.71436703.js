import{s as e,b as t,R as a}from"./vendor.5a693d40.js";import{f as i,c as o,w as r,m as s,Y as l,R as d,i as c,P as n,O as m}from"./index.e9eb1314.js";import{M as p}from"./Slider.591a0c61.js";import{M as g,a as h}from"./BestIdolDetail.83595403.js";import"./Image.afcc4918.js";import"./ic_rolling.5b20d59e.js";import"./render-color.e980cc55.js";import"./sizes-cup.fcc04310.js";import"./IdolStyle.9bb3dde5.js";import"./DvdPoster.abb040ea.js";import"./DvdDetail.1adf7472.js";import"./IdolTag.75c7f0fc.js";const x=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  box-sizing: border-box;
  animation: ${i} 0.8s ease-in-out;
`,f=e.div`
  width: calc(14vw + 800px);
  height: calc(19.25vw + 100px);
`,v=e.div`
  ${o}
  width: calc(100vw - 40px);
  margin-top: 20px;
`;function u(){const[e,i]=t.exports.useState(0),o=t.exports.useMemo((()=>r||[]),[]),u=t.exports.useCallback((e=>{i(e)}),[]);return a.createElement(x,null,a.createElement(f,null,a.createElement(p,{highlight:e,width:"14vw",height:"calc(19.25vw + 40px)",onSelect:u,customColor:1===s(o[e].idIdol)?`linear-gradient(to right, ${l}, ${d})`:2===s(o[e].idIdol)?`linear-gradient(to right, ${c}, ${n})`:`linear-gradient(to right,  ${m}, ${n})`},o.map(((t,i)=>a.createElement(g,{key:t.idIdol,data:t,active:i===e}))))),a.createElement(v,null,o.map(((t,i)=>a.createElement(h,{key:t.idIdol,data:t,active:i===e})))))}export{u as default};
