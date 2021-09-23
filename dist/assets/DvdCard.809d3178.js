import{s as e,b as t,R as r}from"./vendor.5a693d40.js";import{M as a}from"./DvdPoster.abb040ea.js";import{c as n,g as o,D as s,i,P as c,O as d}from"./index.e9eb1314.js";const l=e.div`
  ${n}
  flex-direction: column;
  cursor: pointer;
  width: 15vw;
  height: calc(10vw + 50px);
  transform: translateY(0px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-20px);
  }
`,m=e(a)`
  width: 15vw;
  height: 10vw;
`,p=e.div`
  margin-top: 10px;
  font-size: ${o};
  background: ${e=>e.uncensored?`linear-gradient(to right, ${s}, ${i})`:`linear-gradient(to right, ${c}, ${d})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;const f=t.exports.memo((function({data:e,click:t}){return r.createElement(l,{onClick:t},r.createElement(m,{src:e.poster}),r.createElement(p,{uncensored:"Uncensored"===e.type},e.code))}));export{f as M};
