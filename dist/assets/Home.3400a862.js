var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;"undefined"!=typeof require&&require;import{s as l,L as s,e as p,f as c,b as d,g as m,R as u}from"./vendor.5a693d40.js";import{f as g,c as b,j as x,G as f,g as $,B as h,W as v,k as y,O as E,n as k,D as j,i as w,$ as O,a0 as z}from"./index.e9eb1314.js";import{M as P}from"./Pagination.12647ace.js";import{M as S}from"./StarTag.3a84caf8.js";import{R as D}from"./ic_rolling.5b20d59e.js";const M=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  box-sizing: border-box;
  animation: ${g} 0.8s ease-in-out;
`,_=l.div`
  ${b}
  padding: 5px;
  border-radius: 6px;
  background: linear-gradient(to right, ${x}, ${f});
  position: absolute;
  top: 20px;
  left: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${$};
  color: ${h};

  &:hover {
    background: linear-gradient(to right, ${x}, ${f});
    color: ${h};
  }
`,C=l(s)`
  ${b}
  padding: 5px;
  border-radius: 6px;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${$};
  text-decoration: none;
  color: ${v};

  &:hover {
    background: linear-gradient(to right, ${x}, ${f});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,L=l.div`
  max-width: 930px;
  margin-bottom: 30px;
`,q=l.div`
  color: ${v};
  font-size: ${y};
  margin-bottom: 5px;
`,B=l.span`
  color: ${E};
`,I=l.div`
  font-size: ${k};
  color: ${v};
`,R=l.a`
  font-size: ${k};
  color: ${j};
  text-decoration: underline;

  &:hover {
    color: ${w};
  }
`,T=l.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`,W=l(S)`
  cursor: pointer;
  margin-top: 10px;
`,A=l.div`
  width: 943px;
  height: 530px;
  border: solid 1px ${v};
  background: url(${D}) center center no-repeat;
`,G=l.div`
  ${b}
  margin-bottom: 5px;
`;function H(){const e=p(),l=c(),g=d.exports.useMemo((()=>m(l.state,"page",1)-1),[l.state]),b=d.exports.useCallback((s=>{const p=(c=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))n.call(t,r)&&i(e,r,t[r]);return e})({},l.state),t(c,r({page:s})));var c;e.push(l.pathname,p)}),[e,l]);return u.createElement(M,null,u.createElement(_,null,"NEW ADDED"),u.createElement(C,{to:"/upv/lucky-box"},"LUCKY BOX"),u.createElement(L,null,u.createElement(q,null,m(O[g],"title","")," ",u.createElement(B,null,"[",m(O[g],"type",""),"]")),u.createElement(I,null,"in"," ",u.createElement(R,{href:m(O[g],"link",""),target:"_blank",rel:"noreferrer noopener"},m(O[g],"source",""))),u.createElement(T,null,m(O[g],"stars",[]).map((e=>"ups000"===e.idStar?u.createElement(W,{key:e.idStar,name:e.name,style:{cursor:"auto",background:f}}):u.createElement(s,{key:e.idStar,to:`/upv/star/${e.idStar}`,style:{textDecoration:"none",color:h}},u.createElement(W,{name:e.name}))))),u.createElement(A,{dangerouslySetInnerHTML:{__html:m(O[g],"content","")}})),u.createElement(G,null,u.createElement(P,{count:z,page:m(l.state,"page",1),size:1,handleChangePage:b})))}export{H as default};
