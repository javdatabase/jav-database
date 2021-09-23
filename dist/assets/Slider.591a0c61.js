var e=Object.defineProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,i,r)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,o=("undefined"!=typeof require&&require,(e,l)=>{var o={};for(var a in e)i.call(e,a)&&l.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&t)for(var a of t(e))l.indexOf(a)<0&&r.call(e,a)&&(o[a]=e[a]);return o});import{s as a,b as n,R as c,g as s}from"./vendor.5a693d40.js";import{c as m,P as d,O as h,W as p}from"./index.e9eb1314.js";const f=a.div`
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: 0;
  right: 0;
  display: none;

  &.highlight-item {
    display: block;
    z-index: 5;
  }

  &.opacity-item {
    opacity: 0.6;
  }

  &.opacity-next-item {
    opacity: 0.45;
  }

  &.opacity-next-next-time {
    opacity: 0.3;
  }

  &.opacity-last-item {
    opacity: 0.15;
  }

  &.hidden-item {
    opacity: 0;
    pointer-events: none;
  }

  &.left-item {
    display: block;
    z-index: 4;
    left: -40%;
    transform: scale(0.75);
  }

  &.right-item {
    display: block;
    z-index: 4;
    left: 35%;
    transform: scale(0.75);
  }

  &.left-left-item {
    display: block;
    z-index: 3;
    left: -70%;
    transform: scale(0.55);
  }

  &.right-right-item {
    display: block;
    z-index: 3;
    left: 70%;
    transform: scale(0.55);
  }

  &.left-left-left-item {
    display: block;
    z-index: 2;
    left: -100%;
    transform: scale(0.35);
  }

  &.right-right-right-item {
    display: block;
    z-index: 2;
    left: 100%;
    transform: scale(0.35);
  }

  &.left-last-item {
    display: block;
    z-index: 1;
    left: -120%;
    transform: scale(0.15);
  }

  &.right-last-item {
    display: block;
    z-index: 1;
    left: 120%;
    transform: scale(0.15);
  }
`;const g=n.exports.memo((function(e){var a=e,{current:s,size:m,index:d}=a,h=o(a,["current","size","index"]);const p=n.exports.useCallback((()=>d-s==0?"highlight-item":d-s==-1&&s>0||d===m-1&&0===s?"left-item opacity-item":d-s==1&&s<m-1||0===d&&s===m-1?"right-item opacity-item":d-s==-2&&s>1||d===m-1&&1===s||d===m-2&&0===s?"left-left-item opacity-next-item":d-s==2&&s<m-2||0===d&&s===m-2||1===d&&s===m-1?"right-right-item opacity-next-item":d-s==-3&&s>2||d===m-1&&2===s||d===m-2&&1===s||d===m-3&&0===s?"left-left-left-item opacity-next-next-time":d-s==3&&s<m-3||0===d&&s===m-3||1===d&&s===m-2||2===d&&s===m-1?"right-right-right-item opacity-next-next-time":d-s==-4&&s>3||d===m-1&&3===s||d===m-2&&2===s||d===m-3&&1===s||d===m-4&&0===s?"left-last-item opacity-last-item":d-s==4&&s<m-4||0===d&&s===m-4||1===d&&s===m-3||2===d&&s===m-2||3===d&&s===m-1?"right-last-item opacity-last-item":d-s<-2&&m>9?"left-last-item hidden-item":d-s>2&&m>9?"right-last-item hidden-item":""),[s,m,d]);return c.createElement(f,((e,o)=>{for(var a in o||(o={}))i.call(o,a)&&l(e,a,o[a]);if(t)for(var a of t(o))r.call(o,a)&&l(e,a,o[a]);return e})({className:p()},h),h.children)})),x=a.div`
  width: 100%;
  height: 100%;
  ${m}
  flex-direction: column;
  position: relative;
`,y=a.div`
  width: 100%;
  height: 100%;
  ${m}
  position: relative;
`,u=a.div`
  ${m}
  flex-direction: row;
  margin-top: 20px;
`,b=a.div`
  width: ${e=>e.active?"12px":"8px"};
  height: ${e=>e.active?"12px":"8px"};
  background: ${e=>e.active?e.customColor?e.customColor:`linear-gradient(to right, ${d}, ${h})`:p};
  border-radius: 100%;
  margin: 0px 3px;
  cursor: pointer;
`;const v=n.exports.memo((function(e){var t=e,{highlight:i,width:r,height:l,onSelect:a,customColor:m,endLoop:d}=t,h=o(t,["highlight","width","height","onSelect","customColor","endLoop"]);const[p,f]=n.exports.useState(i),v=n.exports.useMemo((()=>s(h.children,"length",null)?h.children.map(((e,t)=>t)):[]),[h.children]),k=n.exports.useCallback((e=>{f(e),a&&a(e)}),[a]),w=n.exports.useCallback((()=>{p<s(h.children,"length",1)-1?k(p+1):(k(0),d&&d())}),[p,k,d,h.children]);return n.exports.useEffect((()=>{const e=setInterval(w,6e3);return()=>clearInterval(e)}),[w]),c.createElement(x,null,c.createElement(y,{style:{width:r,height:l}},h.children.map(((e,t)=>c.createElement(g,{key:"item-"+t.toString(),current:p,size:s(h.children,"length",1),index:t,style:{width:r,height:l},onClick:()=>k(t)},c.createElement("div",{className:"item-water-wheel"},e))))),c.createElement(u,null,v.map((e=>c.createElement(b,{key:"dot-"+e.toString(),active:e===p,onClick:()=>k(e),customColor:m})))))}));export{v as M};
