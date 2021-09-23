import{s as e,b as t,R as n}from"./vendor.5a693d40.js";import{M as r}from"./DvdPoster.abb040ea.js";import{c as a,D as i,i as o,P as l,O as c,g as s,f as d,k as p,W as g,n as u,Y as m,R as $,p as h,m as x}from"./index.e9eb1314.js";import{M as v}from"./IdolTag.75c7f0fc.js";import{M as w}from"./IdolDetail.77f3ec83.js";const f=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 21vw;
  height: calc(14vw + 40px);
`,b=e.div`
  ${a}
  width: calc(21vw + 6px);
  height: calc(14vw + 6px);
  background: ${e=>e.active?e.uncensored?`linear-gradient(to right, ${i}, ${o})`:`linear-gradient(to right, ${l}, ${c})`:"transparent"};
`,k=e(r)`
  width: 21vw;
  height: 14vw;
`,E=e.div`
  margin-top: 10px;
  font-size: ${s};
  background: ${e=>e.uncensored?`linear-gradient(to right, ${i}, ${o})`:`linear-gradient(to right, ${l}, ${c})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;const y=t.exports.memo((function({data:e,active:t}){return n.createElement(f,null,n.createElement(b,{active:t,uncensored:"Uncensored"===e.type},n.createElement(k,{src:e.poster})),n.createElement(E,{uncensored:"Uncensored"===e.type},e.code))})),j=e.div`
  ${a}
  animation: ${d} 1s linear;
`,I=e.div`
  ${a}
  width: calc(30vw + 6px);
  height: calc(20vw + 6px);
  background: ${e=>e.uncensored?`linear-gradient(to right, ${i}, ${o})`:`linear-gradient(to right, ${l}, ${c})`};
`,U=e(r)`
  width: 30vw;
  height: 20vw;
`,M=e.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  width: 30vw;
  height: calc(20vw + 6px);
`,z=e.span`
  font-size: ${p};
  background: ${e=>e.uncensored?`linear-gradient(to right, ${i}, ${o})`:`linear-gradient(to right, ${l}, ${c})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,C=e.div`
  color: ${g};
  font-size: ${u};
`,D=e.div`
  display: flex;
  flex-wrap: wrap;
`,q=e(v)`
  cursor: pointer;
  margin-top: 10px;
  background: ${e=>e.queen?`linear-gradient(to right, ${m}, ${$})`:e.runnerUp?`linear-gradient(to right, ${o}, ${l})`:`linear-gradient(to right,  ${c}, ${l})`};
`;const P=t.exports.memo((function({data:e,active:r}){const[a,i]=t.exports.useState(!1),[o,l]=t.exports.useState(null),c=t.exports.useCallback((()=>{i(!a)}),[a]),s=t.exports.useCallback((e=>{if(e){const t=h(e.idIdol);l(t)}else l(null);c()}),[c]);return n.createElement(t.exports.Fragment,null,r&&n.createElement(j,null,n.createElement(I,{uncensored:"Uncensored"===e.type},n.createElement(U,{src:e.poster})),n.createElement(M,null,n.createElement("div",null,n.createElement(z,{uncensored:"Uncensored"===e.type},e.code)),n.createElement(C,null,e.title),n.createElement(D,null,e.idols.map((e=>n.createElement(q,{key:e.idIdol,queen:1===x(e.idIdol),runnerUp:2===x(e.idIdol),name:e.name,onClick:()=>s(e)})))))),a&&n.createElement(w,{show:a,toggleModal:c,data:o}))}));export{y as M,P as a};
