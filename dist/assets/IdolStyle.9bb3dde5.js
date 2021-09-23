var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,l=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&c(e,t,r[t]);if(o)for(var t of o(r))n.call(r,t)&&c(e,t,r[t]);return e},s=(e,o)=>r(e,t(o)),i=("undefined"!=typeof require&&require,(e,r)=>{var t={};for(var c in e)a.call(e,c)&&r.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&o)for(var c of o(e))r.indexOf(c)<0&&n.call(e,c)&&(t[c]=e[c]);return t});import{s as p,b as f,f as d,R as m,L as u}from"./vendor.5a693d40.js";import{s as b,m as x}from"./render-color.e980cc55.js";import{B as v,g}from"./index.e9eb1314.js";const y=p.span`
  color: ${e=>e.color};
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: ${v};
`;const j=f.exports.memo((function(e){var r=e,{children:t,cup:o}=r,a=i(r,["children","cup"]);const n=d(),c=b(o);return m.createElement(u,{style:{textDecoration:"none",color:v},to:{pathname:"/jav/idols",state:s(l({},n.state),{cup:[{label:o,value:o,color:c}],page:1})}},m.createElement(y,l({color:c},a),t))})),O=p.div`
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 6px;
  background: ${e=>e.color};
  text-align: center;
  font-size: ${g};
`;const h=f.exports.memo((function(e){var r=e,{tag:t}=r,o=i(r,["tag"]);const a=d(),n=x(t);return m.createElement(u,{style:{textDecoration:"none",color:v},to:{pathname:"/jav/idols",state:s(l({},a.state),{styles:[{label:t,value:t,color:n}],page:1})}},m.createElement(O,l({color:n},o),t))}));export{h as M,j as a};
