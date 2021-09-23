import{s as e,b as t,R as n}from"./vendor.5a693d40.js";import{r as o,a as r,b as l,d as s,e as a,f as i,O as d,P as c,c as u,X as m,Y as p,g as f,W as x}from"./index.e9eb1314.js";const g=o.concat(r,l),E=s.concat(a);const b=e.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  padding: 35px 320px;
  box-sizing: border-box;
  animation: ${i} 0.8s ease-in-out;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${d}, ${c});
    border-radius: 10px;
  }
`,h=e.div`
  ${u}
  font-size: ${m};
  font-weight: bold;
  color: ${p};
  margin-bottom: 50px;
`,y=e.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,$=e.div`
  font-size: ${f};
  color: ${x};
  margin-right: 10px;
`,v=e.div`
  font-size: ${f};
  color: ${d};
`;function I(){const e=t.exports.useMemo((()=>function(){let e=0,t=[];for(let n=1;n<g.length;n++)for(let o=0;o<n;o++)g[n].code===g[o].code&&""!==g[n].code&&(e++,t.push(g[n].code));return 0!==e?t:"* none *"}()),[]),o=t.exports.useMemo((()=>function(){let e=0,t=[];for(let n=1;n<g.length;n++)for(let o=0;o<n;o++)g[n].poster===g[o].poster&&""!==g[n].poster&&(e++,t.push(g[n].code));return 0!==e?t:"* none *"}()),[]),r=t.exports.useMemo((()=>function(){const e=g.filter((e=>""===e.poster&&""!==e.code)),t=e.map((e=>e.code));return e.length>0?t:"* none *"}()),[]),l=t.exports.useMemo((()=>function(){let e=0,t=[];for(let n=1;n<E.length;n++)for(let o=0;o<n;o++)E[n].name===E[o].name&&""!==E[n].name&&(e++,t.push(E[n].name));return 0!==e?t:"* none *"}()),[]),s=t.exports.useMemo((()=>function(){let e=0,t=[];for(let n=1;n<E.length;n++)for(let o=0;o<n;o++)E[n].idIdol&&E[n].idIdol===E[o].idIdol&&(e++,t.push(E[n].idIdol)),E[n].idStar&&E[n].idStar===E[o].idStar&&(e++,t.push(E[o].idStar));return 0!==e?t:"* none *"}()),[]);return n.createElement(b,null,n.createElement(h,null,"WARNING DATA"),n.createElement(y,null,n.createElement($,null,"● Dvds Already Exists: "),n.createElement(v,null,"string"==typeof e?e:e.join(", "))),n.createElement(y,null,n.createElement($,null,"● Poster Already Exists: "),n.createElement(v,null,"string"==typeof o?o:o.join(", "))),n.createElement(y,null,n.createElement($,null,"● Poster Error: "),n.createElement(v,null,"string"==typeof r?r:r.join(", "))),n.createElement(y,null,n.createElement($,null,"● Idols Already Exists: "),n.createElement(v,null,"string"==typeof l?l:l.join(", "))),n.createElement(y,null,n.createElement($,null,"● ID Idols Already Exists: "),n.createElement(v,null,"string"==typeof s?s:s.join(", "))))}export{I as default};
