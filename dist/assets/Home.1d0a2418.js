import{s as e,L as t,b as a,R as i}from"./vendor.5a693d40.js";import{f as r,c as o,P as n,O as s,g as l,B as c,W as d,N as p,D as m,i as g}from"./index.e9eb1314.js";import{M as x}from"./Slider.591a0c61.js";import{M as u,a as b}from"./NewDvdReleaseDetail.69060719.js";import"./DvdPoster.abb040ea.js";import"./ic_rolling.5b20d59e.js";import"./IdolTag.75c7f0fc.js";import"./IdolDetail.77f3ec83.js";import"./Image.afcc4918.js";import"./IdolStyle.9bb3dde5.js";import"./render-color.e980cc55.js";import"./sizes-cup.fcc04310.js";const h=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0px;
  box-sizing: border-box;
  animation: ${r} 0.8s ease-in-out;
`,v=e.div`
  ${o}
  padding: 5px;
  border-radius: 6px;
  background: linear-gradient(to right, ${n}, ${s});
  position: absolute;
  top: 20px;
  left: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${l};
  color: ${c};

  &:hover {
    background: linear-gradient(to right, ${n}, ${s});
    color: ${c};
  }
`,$=e(t)`
  ${o}
  padding: 5px;
  border-radius: 6px;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${l};
  text-decoration: none;
  color: ${d};

  &:hover {
    background: linear-gradient(to right, ${n}, ${s});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,f=e.div`
  width: calc(21vw + 800px);
  height: calc(14vw + 100px);
`,j=e.div`
  ${o}
  margin-top: 20px;
  width: calc(60vw + 50px);
`;function w(){const[e,t]=a.exports.useState(0),r=a.exports.useCallback((e=>{t(e)}),[]);return i.createElement(h,null,i.createElement(f,null,i.createElement(v,null,"NEW RELEASE"),i.createElement($,{to:"/jav/lucky-box"},"LUCKY BOX"),i.createElement(x,{highlight:e,width:"21vw",height:"calc(14vw + 40px)",onSelect:r,customColor:p[e]&&"Uncensored"===p[e].type?`linear-gradient(to right, ${m}, ${g})`:`linear-gradient(to right, ${n}, ${s})`},p.map(((t,a)=>i.createElement(u,{key:t.idDvd,data:t,active:a===e}))))),i.createElement(j,null,p.map(((t,a)=>i.createElement(b,{key:t.idDvd,data:t,active:a===e})))))}export{w as default};
