var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,a=(e,a)=>{for(var l in a||(a={}))t.call(a,l)&&s(e,l,a[l]);if(r)for(var l of r(a))o.call(a,l)&&s(e,l,a[l]);return e};"undefined"!=typeof require&&require;import{s as l,b as n,R as c}from"./vendor.5a693d40.js";import{R as i}from"./ic_rolling.5b20d59e.js";import{c as p,W as m}from"./index.e9eb1314.js";var f="/assets/bg_sexy_shadow.6e20cc65.jpg";const u=l.div`
  ${p}
  border: solid 1px ${m};
  box-sizing: border-box;

  img {
    width: 50%;
  }
`;const b=n.exports.memo((function(e){var s=e,{src:l}=s,p=((e,s)=>{var a={};for(var l in e)t.call(e,l)&&s.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&r)for(var l of r(e))s.indexOf(l)<0&&o.call(e,l)&&(a[l]=e[l]);return a})(s,["src"]);const[m,b]=n.exports.useState(l||f),[d,x]=n.exports.useState(!0),[y,v]=n.exports.useState(!1);n.exports.useEffect((()=>{b(l||f)}),[l]);const g=n.exports.useCallback((()=>{x(!1)}),[]),j=n.exports.useCallback((()=>{y?b(f):(b(""),x(!0),v(!0),setTimeout((()=>{b(l||f)}),500))}),[y,l]);return c.createElement(n.exports.Fragment,null,d&&c.createElement(u,{className:p.className,style:p.style},c.createElement("img",{src:i,alt:"error",onClick:p.onClick})),c.createElement("img",a({src:m,alt:"error",onLoad:g,onError:j,style:a(d?{display:"none"}:{},p.style)},p)))}));export{b as M};
