import{s as e,e as t,f as a,b as i,g as o,R as r}from"./vendor.5a693d40.js";import{f as d,c as s,P as l,O as n,g as c,B as p,W as g,D as v,i as m,m as $,Y as u,R as h,s as x,q as f,h as b,t as I,u as j}from"./index.e9eb1314.js";import{M as w}from"./Slider.591a0c61.js";import{M as k,a as D}from"./NewDvdReleaseDetail.69060719.js";import{M as y,a as E}from"./BestIdolDetail.83595403.js";import"./DvdPoster.abb040ea.js";import"./ic_rolling.5b20d59e.js";import"./IdolTag.75c7f0fc.js";import"./IdolDetail.77f3ec83.js";import"./Image.afcc4918.js";import"./IdolStyle.9bb3dde5.js";import"./render-color.e980cc55.js";import"./sizes-cup.fcc04310.js";import"./DvdDetail.1adf7472.js";const C=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  box-sizing: border-box;
  animation: ${d} 0.8s ease-in-out;
`,S=e.div`
  ${s}
  padding: 5px;
  border-radius: 6px;
  background: ${e=>e.active?`linear-gradient(to right, ${l}, ${n})`:"transparent"};
  position: absolute;
  top: 20px;
  left: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${c};
  color: ${e=>e.active?p:g};

  &:hover {
    background: linear-gradient(to right, ${l}, ${n});
    color: ${p};
  }
`,z=e.div`
  ${s}
  padding: 5px;
  border-radius: 6px;
  background: ${e=>e.active?`linear-gradient(to right, ${l}, ${n})`:"transparent"};
  position: absolute;
  top: 20px;
  right: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${c};
  color: ${e=>e.active?p:g};

  &:hover {
    background: linear-gradient(to right, ${l}, ${n});
    color: ${p};
  }
`,M=e.div`
  width: calc(${e=>"dvds"===e.type?"21vw":"14vw"} + 800px);
  height: calc(
    ${e=>"dvds"===e.type?"14vw":"19.25vw"} + 100px
  );
`,R=e.div`
  ${s}
  margin-top: 20px;
  width: calc(100vw - 40px);
`;function B(){const e=t(),d=a(),[s,c]=i.exports.useState(!0),[p,g]=i.exports.useState(0),[B,L]=i.exports.useState([]),O=i.exports.useMemo((()=>{const e=d.state;return o(e,"type","dvds")}),[d.state]),P=i.exports.useMemo((()=>B.length?"dvds"===O?B[p]&&"Uncensored"===B[p].type?`linear-gradient(to right, ${v}, ${m})`:`linear-gradient(to right, ${l}, ${n})`:1===$(B[p].idIdol)?`linear-gradient(to right, ${u}, ${h})`:2===$(B[p].idIdol)?`linear-gradient(to right, ${m}, ${l})`:x(B[p].idIdol)?`linear-gradient(to right,  ${f}, ${b})`:`linear-gradient(to right,  ${n}, ${l})`:null),[O,B,p]);i.exports.useEffect((()=>{s&&(L("dvds"===O?I():j()),c(!1))}),[s,O]);const q=i.exports.useCallback((e=>{g(e)}),[]),N=i.exports.useCallback((t=>{L("dvds"===t?I():j()),e.push(d.pathname,{type:t})}),[e,d.pathname]),T=i.exports.useCallback((()=>{L("dvds"===O?I():j())}),[O]);return r.createElement(C,null,r.createElement(M,{type:O},r.createElement(S,{active:"dvds"===O,onClick:()=>N("dvds")},"DVDS"),r.createElement(z,{active:"idols"===O,onClick:()=>N("idols")},"IDOLS"),r.createElement(w,{highlight:p,width:"dvds"===O?"21vw":"14vw",height:"dvds"===O?"calc(14vw + 40px)":"calc(19.25vw + 40px)",onSelect:q,endLoop:T,customColor:P},B.map(((e,t)=>"dvds"===O?r.createElement(k,{key:e.idDvd,data:e,active:t===p}):r.createElement(y,{key:e.idIdol,data:e,active:t===p,customColor:x(B[p].idIdol)&&$(B[p].idIdol)>2?`linear-gradient(to right,  ${f}, ${b})`:null}))))),r.createElement(R,null,B.map(((e,t)=>"dvds"===O?r.createElement(D,{key:e.idDvd,data:e,active:t===p}):r.createElement(E,{key:e.idIdol,data:e,active:t===p,customColor:x(B[p].idIdol)&&$(B[p].idIdol)>2?`linear-gradient(to right,  ${f}, ${b})`:null})))))}export{B as default};
