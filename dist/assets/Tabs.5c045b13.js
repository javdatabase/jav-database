import{s as t,b as e,R as a}from"./vendor.5a693d40.js";import{c as o,k as i,P as r,O as n}from"./index.e9eb1314.js";const s=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,l=t.div`
  flex: 1;
  ${o}
  padding: 10px;
  font-size: ${i};
  background: ${t=>t.tabColor||`linear-gradient(to right, ${r}, ${n})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background 0.3s ease-in-out;
  cursor: pointer;
`,c=t.div`
  position: absolute;
  bottom: -4px;
  left: ${t=>`calc(100% * ${t.active} / ${t.size})`};
  width: calc(100% / ${t=>t.size});
  height: 5px;
  background: ${t=>t.barColor||`linear-gradient(${n}, ${r})`};
  transition: left 0.3s ease-in-out;
`;const d=e.exports.memo((function({data:t,active:e,onChange:o,tabColor:i,barColor:r}){const n=t.length;return a.createElement(s,null,a.createElement(c,{size:n,active:e,barColor:r}),t.map(((t,r)=>a.createElement(l,{key:`tab-${r}`,activated:r===e,tabColor:i,onClick:()=>o(r)},t))))}));export{d as M};
