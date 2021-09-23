import{s as e,b as o,R as t}from"./vendor.5a693d40.js";import{f as s,c as n,G as a,B as r,X as i,j as l,W as c,M as d}from"./index.e9eb1314.js";import{M as p}from"./Image.afcc4918.js";const u=e(p)`
  position: fixed;
  z-index: 300;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${e=>"true"===e.show?"block":"none"};
  height: 90vh;
  object-fit: cover;
  border-radius: 12px;
  animation: ${s} 0.3s ease-in-out;
`,h=e.div`
  position: fixed;
  z-index: 500;
  top: 50%;
  left: 28%;
  transform: translateY(-50%);
  ${n}
  display: ${e=>"true"===e.show?"flex":"none"};
  width: 40px;
  height: 40px;
  background: ${a};
  border-radius: 12px;
  color: ${r};
  font-size: ${i};
  animation: ${s} 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${l};
    color: ${c};
  }
`,x=e.div`
  position: fixed;
  z-index: 500;
  top: 50%;
  right: 28%;
  transform: translateY(-50%);
  ${n}
  display: ${e=>"true"===e.show?"flex":"none"};
  width: 40px;
  height: 40px;
  background: ${a};
  border-radius: 12px;
  color: ${r};
  font-size: ${i};
  animation: ${s} 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${l};
    color: ${c};
  }
`;const m=o.exports.memo((function({show:e,toggleModal:s,listData:n,data:a,setData:r}){const i=o.exports.useMemo((()=>n.indexOf(a)),[n,a]),l=o.exports.useCallback((()=>{r(i<=0?n[n.length-1]:n[i-1])}),[n,i,r]),c=o.exports.useCallback((()=>{i>=n.length-1?r(n[0]):r(n[i+1])}),[n,i,r]);return t.createElement(o.exports.Fragment,null,t.createElement(d,{show:e,hiddenModal:s}),t.createElement(h,{show:e.toString(),onClick:l},"<"),t.createElement(u,{show:e.toString(),src:a}),t.createElement(x,{show:e.toString(),onClick:c},">"))}));export{m as M};
