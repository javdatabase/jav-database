import{s as e,b as t,f as a,R as n}from"./vendor.5a693d40.js";import{P as r,O as i,j as o,G as l,c as s,W as c,n as p,E as g}from"./index.e9eb1314.js";const m=e.div`
  display: flex;
  align-items: center;
  width: 350px;
  overflow: hidden;
  position: relative;
`,d=e.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 0px 2.5px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${e=>"true"===e.main?`linear-gradient(to right, ${r}, ${i})`:`linear-gradient(to right, ${o}, ${l})`};
    border-radius: 10px;
  }
`,h=e.div`
  ${s}
  width: 25px;
  min-width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px 2.5px;
  cursor: ${e=>e.active?"default":"pointer"};
  background: ${e=>e.active?"true"===e.main?`linear-gradient(to right, ${r}, ${i})`:`linear-gradient(to right, ${o}, ${l})`:"transparent"};
  color: ${c};
  font-size: ${p};
  font-weight: 500;

  ${e=>e.active?"":`&:hover {\n    background: \n       ${"true"===e.main?`linear-gradient(to right, ${r}, ${i})`:`linear-gradient(to right, ${o}, ${l})`};\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }`}
`,x=e(h)`
  margin-top: -2.5px;
`;const u=t.exports.memo((function({count:e,page:r,size:i,handleChangePage:o}){const l=a(),s=t.exports.useRef(),c=t.exports.useMemo((()=>Array(Math.ceil(e/i)).fill(0).map(((e,t)=>t+1))),[e,i]);t.exports.useEffect((()=>{const e=35*(r-1);s.current.scrollTo(e<0?0:e,0)}),[r]);const p=t.exports.useCallback((e=>{e<1||e>c.length?o(r):o(e)}),[c,r,o]);return n.createElement(m,null,n.createElement(x,{main:String(!g(l.pathname)),onClick:()=>p(1)},"<<"),n.createElement(x,{main:String(!g(l.pathname)),onClick:()=>p(r-1)},"<"),n.createElement(d,{ref:s,main:String(!g(l.pathname))},c.map((e=>n.createElement(h,{key:`page-${e}`,main:String(!g(l.pathname)),active:e===r,onClick:()=>p(e)},e)))),n.createElement(x,{main:String(!g(l.pathname)),onClick:()=>p(r+1)},">"),n.createElement(x,{main:String(!g(l.pathname)),onClick:()=>p(c.length)},">>"))}));export{u as M};
