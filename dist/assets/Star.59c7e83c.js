import{s as e,q as t,b as r,g as a,R as o}from"./vendor.5a693d40.js";import{_ as i}from"./index.150f0615.js";import{p as l}from"./render-price.51e4f9fd.js";import{f as n,G as s,j as p,c as d,g as c,X as m,B as u,k as b,a4 as x,a5 as g,a6 as f}from"./index.e9eb1314.js";import{M as v}from"./Tabs.5c045b13.js";import{M as h}from"./Image.afcc4918.js";import{M as w}from"./StarCup.d99bc3b6.js";import{M as $}from"./StarPicture.a11131a3.js";import"./ic_rolling.5b20d59e.js";import"./render-color.e980cc55.js";import"./sizes-cup.fcc04310.js";const E=e.div`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 30px;
  box-sizing: border-box;
  animation: ${n} 0.8s ease-in-out;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${s}, ${p});
    border-radius: 10px;
  }
`,k=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px;
`,j=e.div`
  display: flex;
  margin-bottom: 10px;
`,C=e.div`
  position: relative;
  ${d}
  width: 18vw;
  height: 25vw;
  border-radius: 18px;
  border: solid 5px transparent;
  overflow: hidden;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: solid 5px ${p};
  }
`,M=e(h)`
  width: 18vw;
  height: 25vw;
  object-fit: cover;
`,y=e.div`
  margin-left: 10px;
  color: ${s};
  font-size: ${c};
  line-height: 35px;
`,z=e.div`
  font-size: ${m};
  background: linear-gradient(to right, ${s}, ${p});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,S=e.div`
  ${d}
  width: 150px;
  margin-top: 10px;
  margin-bottom: 50px;
  border-radius: 18px;
  background: linear-gradient(to right, ${s}, ${p});
  color: ${u};
  font-size: ${b};
`,B=e(k)`
  align-items: center;
`,D=e.div`
  max-height: calc(100vh - 204px);
  margin-top: 5px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${p};
    border-radius: 10px;
  }
`,H=e(e.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11vw, 1fr));
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
`)`
  grid-template-columns: repeat(auto-fill, minmax(17vw, 1fr));
  gap: 20px;
`,P=e.div`
  ${d}
  width: 18vw;
  padding: 0px;
  border-radius: 12px;
  border: solid 5px transparent;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.3s ease-in-out;
  animation: ${n} 0.8s ease-in-out;

  &:hover {
    border: solid 5px ${p};
  }
`,_=e(h)`
  width: 18vw;
  object-fit: cover;
`,q=e.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
`,F=e.div`
  padding: 5px 10px;
  border-radius: 12px;
  background: ${s};
  color: ${u};
  font-size: ${c};
`;function G(){const{id:e}=t(),[n,d]=r.exports.useState(0),[c,m]=r.exports.useState(!1),[u,b]=r.exports.useState(null),h=r.exports.useMemo((()=>x(e)),[e]),G=r.exports.useMemo((()=>[a(h,"avatar","")].concat(a(h,"album",[]).map((e=>e.picture)))),[h]),I=r.exports.useMemo((()=>g(a(h,"points",0))),[h]),R=r.exports.useMemo((()=>f(I)),[I]),T=r.exports.useMemo((()=>[`Pictures (${a(h,"album.length",0)})`]),[h]),W=r.exports.useCallback((e=>{d(e)}),[]),X=r.exports.useCallback((()=>{m(!c)}),[c]),A=r.exports.useCallback((e=>{b(e)}),[]),J=r.exports.useCallback((e=>{b(e||null),X()}),[X]);return o.createElement(r.exports.Fragment,null,o.createElement(E,null,o.createElement(k,null,o.createElement(j,null,o.createElement(C,null,o.createElement(M,{src:a(h,"avatar",""),onClick:()=>J(a(h,"avatar",""))})),o.createElement(y,null,o.createElement(z,null,a(h,"name","")),o.createElement(S,null,a(h,"points",0)," points"),"● Born:"," ",a(h,"born","")," (",a(h,"age","")," year olds)",o.createElement("br",null),"● Height: ",a(h,"height",""),o.createElement("br",null),"● Breast: ",a(h,"breast","")," ",o.createElement(w,{cup:a(h,"cup","")},"(",a(h,"cup",""),")"),o.createElement("br",null),"● Waist: ",a(h,"waist",""),o.createElement("br",null),"● Hips: ",a(h,"hips","")))),o.createElement(B,null,o.createElement("div",{style:{width:"100%"}},o.createElement(v,{data:T,active:n,tabColor:`linear-gradient(${p}, ${s})`,barColor:`linear-gradient(${s}, ${p})`,onChange:W}),o.createElement(D,null,o.createElement(H,null,a(h,"album",[]).map((e=>o.createElement(i,{key:e.picture,height:450,once:!0,overflow:!0},o.createElement(P,null,o.createElement(_,{src:e.picture,onClick:()=>J(e.picture),alt:""}))))))))),o.createElement(q,null,o.createElement(F,null,"$",l(I)," (",l(R),")"))),o.createElement($,{show:c,toggleModal:X,listData:G,data:u,setData:A}))}export{G as default};
