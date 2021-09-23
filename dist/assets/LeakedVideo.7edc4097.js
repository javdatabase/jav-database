import{s as e,q as t,b as r,R as a,g as n,L as o}from"./vendor.5a693d40.js";import{f as i,O as l,P as d,X as s,D as c,i as m,W as p,g,B as x,Y as u,R as b,Z as $,G as f,m as h}from"./index.e9eb1314.js";import{M as k}from"./IdolTag.75c7f0fc.js";import{R as v}from"./ic_rolling.5b20d59e.js";const w=e.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  overflow: auto;
  box-sizing: border-box;
  animation: ${i} 0.8s ease-in-out;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${l}, ${d});
    border-radius: 10px;
  }
`,y=e.div`
  max-width: 930px;
  margin-bottom: 30px;
`,E=e.div`
  font-size: ${s};
  background: ${e=>e.uncensored?`linear-gradient(to right, ${c}, ${m})`:`linear-gradient(to right, ${d}, ${l})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
`,I=e.div`
  color: ${p};
  font-size: ${g};
  margin-bottom: 5px;
`,j=e.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`,q=e(k)`
  border: solid 2px ${x};
  margin-top: 10px;
  background: ${e=>e.queen?`linear-gradient(to right, ${u}, ${b})`:e.runnerUp?`linear-gradient(to right, ${m}, ${d})`:`linear-gradient(to right,  ${l}, ${d})`};
`,z=e.div`
  width: 943px;
  height: 530px;
  border: solid 1px ${p};
  background: url(${v}) center center no-repeat;
`;function M(){const{code:e}=t(),i=r.exports.useMemo((()=>$(e)),[e]);return a.createElement(w,null,a.createElement(y,null,a.createElement(E,{uncensored:"Uncensored"===n(i,"type","")},n(i,"code","")),a.createElement(I,null,n(i,"title","")," "),a.createElement(j,null,n(i,"idols",[]).map((e=>"jai000"===e.idIdol?a.createElement(q,{key:e.idIdol,name:e.name,style:{background:f}}):a.createElement(o,{key:e.idIdol,to:`/jav/idol/${e.idIdol}`,style:{textDecoration:"none",color:x}},a.createElement(q,{key:e.idIdol,queen:1===h(e.idIdol),runnerUp:2===h(e.idIdol),name:e.name}))))),n(i,"content",[]).map(((e,t)=>a.createElement(z,{key:e,dangerouslySetInnerHTML:{__html:e},style:{marginTop:t>0?"50px":"30px"}})))))}export{M as default};
