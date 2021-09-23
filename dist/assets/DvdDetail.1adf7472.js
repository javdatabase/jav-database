import{s as e,L as t,b as a,R as n,g as o}from"./vendor.5a693d40.js";import{c as r,D as i,i as d,P as l,O as s,f as p,B as c,X as m,W as x,g,Y as u,R as $,M as h,v as f,G as b,m as v}from"./index.e9eb1314.js";import{M as w}from"./DvdPoster.abb040ea.js";import{M as E}from"./IdolTag.75c7f0fc.js";const y=e.div`
  position: fixed;
  z-index: 300;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${r}
  display: ${e=>e.show?"flex":"none"};
  padding: 10px;
  background: ${e=>e.uncensored?`linear-gradient(to right, ${i}, ${d})`:`linear-gradient(to right, ${l}, ${s})`};
  animation: ${p} 0.3s ease-in-out;
`,k=e(w)`
  width: 36vw;
  height: 24vw;
`,j=e.div`
  width: 36vw;
  height: calc(24vw + 6px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;
`,I=e.span`
  color: ${c};
  font-size: ${m};
`,M=e.div`
  color: ${x};
  font-size: ${g};
`,z=e.div`
  display: flex;
  flex-wrap: wrap;
`,D=e(E)`
  border: solid 2px ${c};
  margin-top: 10px;
  background: ${e=>e.queen?`linear-gradient(to right, ${u}, ${$})`:e.runnerUp?`linear-gradient(to right, ${d}, ${l})`:`linear-gradient(to right,  ${s}, ${l})`};
`,U=e(t)`
  position: absolute;
  right: 0px;
  top: 3px;
  z-index: 500;
  ${r};
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${u};
`,q=e.span`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${c};
`;const P=a.exports.memo((function({show:e,toggleModal:r,data:i}){return n.createElement(a.exports.Fragment,null,n.createElement(h,{show:e,hiddenModal:r}),n.createElement(y,{show:e,uncensored:"Uncensored"===o(i,"type","")},n.createElement(k,{src:o(i,"poster",null)}),n.createElement(j,null,n.createElement("div",{style:{position:"relative"}},n.createElement(I,null,o(i,"code","")),f(o(i,"code",null))&&n.createElement(U,{to:`/jav/leaked-video/${o(i,"code","")}`},n.createElement(q,null))),n.createElement(M,null,o(i,"title","")),n.createElement(z,null,o(i,"idols",[]).map((e=>"jai000"===e.idIdol?n.createElement(D,{key:e.idIdol,name:e.name,style:{background:b}}):n.createElement(t,{key:e.idIdol,to:`/jav/idol/${e.idIdol}`,style:{textDecoration:"none",color:c}},n.createElement(D,{key:e.idIdol,queen:1===v(e.idIdol),runnerUp:2===v(e.idIdol),name:e.name}))))))))}));export{P as M};
