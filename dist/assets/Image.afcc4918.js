var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,a=(e,a)=>{for(var l in a||(a={}))t.call(a,l)&&s(e,l,a[l]);if(r)for(var l of r(a))o.call(a,l)&&s(e,l,a[l]);return e};"undefined"!=typeof require&&require;import{s as l,b as n,R as i}from"./vendor.5a693d40.js";import{R as c}from"./ic_rolling.5b20d59e.js";import{c as p,W as m}from"./index.e9eb1314.js";var f="/assets/img_sexy_shadow.1018a738.jpg";const u=l.div`
  ${p}
  border: solid 1px ${m};
  box-sizing: border-box;

  img {
    width: 50%;
  }
`;const b=n.exports.memo((function(e){var s=e,{src:l,lazy:p}=s,m=((e,s)=>{var a={};for(var l in e)t.call(e,l)&&s.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&r)for(var l of r(e))s.indexOf(l)<0&&o.call(e,l)&&(a[l]=e[l]);return a})(s,["src","lazy"]);const[b,d]=n.exports.useState(l||f),[x,y]=n.exports.useState(!0),[v,g]=n.exports.useState(!1);n.exports.useEffect((()=>{d(l||f)}),[l]);const j=n.exports.useCallback((()=>{y(!1)}),[]),O=n.exports.useCallback((()=>{v?d(f):(d(""),y(!0),g(!0),setTimeout((()=>{d(l||f)}),500))}),[v,l]);return i.createElement(n.exports.Fragment,null,x&&i.createElement(u,{className:m.className,style:m.style},i.createElement("img",{src:c,alt:"error",onClick:m.onClick})),i.createElement("img",a({src:b,alt:"error",onLoad:j,onError:O,style:a(x?{display:"none"}:{},m.style)},m)))}));export{b as M};
