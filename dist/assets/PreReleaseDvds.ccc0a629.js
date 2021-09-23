import{s as e,b as t,R as a}from"./vendor.5a693d40.js";import{_ as r}from"./index.150f0615.js";import{O as o,P as l,c as i,f as s,W as n,K as d,Q as m}from"./index.e9eb1314.js";import{M as p}from"./Pagination.12647ace.js";import{M as c}from"./DvdCard.809d3178.js";import{M as u}from"./DvdDetail.1adf7472.js";import"./DvdPoster.abb040ea.js";import"./ic_rolling.5b20d59e.js";import"./IdolTag.75c7f0fc.js";const x=e.div`
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
    background: linear-gradient(${o}, ${l});
    border-radius: 10px;
  }
`,b=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14vw, 1fr));
  gap: 10px;
  padding: 30px 20px;
  box-sizing: border-box;
`,g=e.div`
  ${i}
  width: 15vw;
  animation: ${s} 1s linear;
`,f=e.div`
  ${i}
  margin-bottom: 5px;
`,v=e.div`
  width: 100%;
  height: 200px;
  color: ${n};
  ${i};
  font-style: italic;
`;function h(){const[e,o]=t.exports.useState(1),[l,i]=t.exports.useState(!1),[s,n]=t.exports.useState(null),h=t.exports.useMemo((()=>d(e,30)),[e]),w=t.exports.useCallback((e=>{o(e)}),[]),E=t.exports.useCallback((()=>{i(!l)}),[l]),j=t.exports.useCallback((e=>{n(e||null),E()}),[E]);return a.createElement(t.exports.Fragment,null,a.createElement(x,null,0===m?a.createElement(v,null,"Not Found"):a.createElement(b,null,h.map((e=>a.createElement(r,{key:e.idDvd,height:200,once:!0,overflow:!0},a.createElement(g,null,a.createElement(c,{data:e,click:()=>j(e)})))))),a.createElement(f,null,a.createElement(p,{count:m,page:e,size:30,handleChangePage:w}))),a.createElement(u,{show:l,toggleModal:E,data:s}))}export{h as default};
