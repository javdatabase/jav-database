import{s as e,b as o,R as t}from"./vendor.5a693d40.js";import{P as r,O as i,W as n,g as a}from"./index.e9eb1314.js";const c=e.label`
  position: relative;
  display: block;
  height: 40px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
`,s=e.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`,p=e.span`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 6px;
  height: 40px;
  width: 40px;
  background: ${e=>e.checked?e.customColor?e.customColor:`linear-gradient(to right, ${r}, ${i})`:n};

  &:after {
    content: "";
    position: absolute;
    display: ${e=>e.checked?"block":"none"};
    left: 12.5px;
    top: 5px;
    width: 10px;
    height: 20px;
    border: solid ${n};
    border-width: 0px 5px 5px 0px;
    transform: rotate(45deg);
  }
`,l=e.p`
  margin: 9px 0px 9px 50px;
  font-size: ${a};
  background: ${e=>e.checked?e.customColor?e.customColor:`linear-gradient(to right, ${r}, ${i})`:n};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;const d=o.exports.memo((function({label:e,value:o,onChange:r,customColor:i}){return t.createElement(c,{htmlFor:e},t.createElement(s,{id:e,type:"checkbox",checked:o,onChange:r}),t.createElement(p,{customColor:i,checked:o}),t.createElement(l,{customColor:i,checked:o},e))}));export{d as M};
