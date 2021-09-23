import{s as e,b as t,R as r,g as o,L as i}from"./vendor.5a693d40.js";import{c as n,Y as a,R as l,i as s,P as d,O as c,g as p,m,f as u,B as x,W as g,X as h,n as $,G as v}from"./index.e9eb1314.js";import{M as b}from"./Image.afcc4918.js";import{d as w}from"./render-color.e980cc55.js";import{M as f,a as E}from"./IdolStyle.9bb3dde5.js";import{M as k}from"./DvdPoster.abb040ea.js";import{M as y}from"./DvdDetail.1adf7472.js";const C=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 14vw;
  height: calc(19.25vw + 40px);
`,j=e.div`
  ${n}
  width: calc(14vw + 6px);
  height: calc(19.25vw + 6px);
  background: ${e=>e.active?e.customColor?e.customColor:e.queen?`linear-gradient(to right, ${a}, ${l})`:e.runnerUp?`linear-gradient(to right, ${s}, ${d})`:`linear-gradient(to right,  ${c}, ${d})`:"transparent"};
  border-radius: 18px;
`,z=e(b)`
  width: 14vw;
  height: 19.25vw;
  border-radius: 18px;
  object-fit: cover;
`,I=e.div`
  margin-top: 10px;
  font-size: ${p};
  background: ${e=>e.customColor?e.customColor:e.queen?`linear-gradient(to right, ${a}, ${l})`:e.runnerUp?`linear-gradient(to right, ${s}, ${d})`:`linear-gradient(to right,  ${c}, ${d})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;const q=t.exports.memo((function({data:e,active:t,customColor:i}){return r.createElement(C,null,r.createElement(j,{active:t,queen:1===m(o(e,"idIdol","")),runnerUp:2===m(o(e,"idIdol","")),customColor:i},r.createElement(z,{src:e.avatar})),r.createElement(I,{queen:1===m(o(e,"idIdol","")),runnerUp:2===m(o(e,"idIdol","")),customColor:i},e.name))})),M=e.div`
  width: 100%;
  display: flex;
  border-radius: 18px;
  padding: 10px;
  box-sizing: border-box;
  background: ${e=>e.customColor||(e.queen?`linear-gradient(to right, ${a}, ${l})`:e.runnerUp?`linear-gradient(to right, ${s}, ${d})`:`linear-gradient(to right,  ${c}, ${d})`)};
  animation: ${u} 1s linear;
`,U=e.div`
  ${n}
  align-self: center;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border: solid 3px ${x};
  border-radius: 50px;
  margin-right: 10px;
  box-sizing: border-box;
  background: ${g};
  color: ${x};
  font-size: ${h};
`,S=e.div`
  position: relative;
  width: 10vw;
  height: 15vw;
`,D=e(b)`
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  object-fit: cover;
`,B=e.div`
  position: relative;
  width: 450px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`,Y=e.div`
  color: ${x};
  font-size: ${h};
`,H=e.div`
  color: ${g};
`,P=e.div`
  display: flex;
  flex-wrap: wrap;
`,R=e(f)`
  border: solid 2px ${x};
  margin-top: 10px;
`,W=e.div`
  width: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 10px;
`,F=e.div`
  ${n}
  flex-direction: column;
  margin: 5px;
  cursor: pointer;
  transform: translateY(0px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`,G=e(k)`
  width: 7.5vw;
  max-width: 7.5vw;
  height: 5vw;
  max-height: 5vw;
`,L=e.div`
  margin-top: 5px;
  font-size: ${$};
  color: ${e=>e.uncensored?v:x};
`,O=e.div`
  ${n}
  width: 90px;
  min-width: 90px;
  height: auto;
  margin: -10px -10px -10px 0px;
  border-radius: 0px 18px 18px 0px;
  box-sizing: border-box;
  background: ${g};
  color: ${e=>e.color};
  font-size: ${h};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${x};
`,V=e(i)`
  position: absolute;
  bottom: 0px;
  ${n}
  width: 10vw;
  height: 0px;
  overflow: hidden;
  border-radius: 0px 0px 18px 18px;
  box-sizing: border-box;
  background: ${e=>e.customColor||("true"===e.queen?`linear-gradient(to right, ${a}, ${l})`:"true"===e.runner?`linear-gradient(to right, ${s}, ${d})`:`linear-gradient(to right,  ${c}, ${d})`)};
  text-decoration: none;
  color: ${x};
  font-size: ${$};
  transition: height 0.3s ease-in-out;

  ${M}:hover & {
    height: 30px;
    border: solid 1px ${x};
  }
`;const X=t.exports.memo((function({data:e,active:o,customColor:i}){const[n,a]=t.exports.useState(!1),[l,s]=t.exports.useState(null),d=t.exports.useMemo((()=>e.dvds.filter(((t,r)=>r>e.dvds.length-13)).reverse()),[e.dvds]),c=t.exports.useMemo((()=>w(e.points)),[e.points]),p=t.exports.useCallback((()=>{a(!n)}),[n]),u=t.exports.useCallback((e=>{s(e||null),p()}),[p]);return r.createElement(t.exports.Fragment,null,o&&r.createElement(M,{queen:1===e.rank,runnerUp:2===e.rank,customColor:i},r.createElement(U,null,e.rank),r.createElement("div",{style:{display:"flex",width:"100%"}},r.createElement(S,null,r.createElement(D,{src:e.avatar}),r.createElement(V,{to:`/jav/idol/${e.idIdol}`,queen:(1===m(e.idIdol)).toString(),runner:(2===m(e.idIdol)).toString(),customColor:i},"View")),r.createElement(B,null,r.createElement(Y,null,e.name," ",e.other?`(${e.other})`:""),r.createElement(H,null,"● Born: ",e.born," (",e.age," year olds)",r.createElement("br",null),"● Height: ",e.height,r.createElement("br",null),"● Breast: ",e.breast," ",r.createElement(E,{cup:e.cup},"(",e.cup,")"),r.createElement("br",null),"● Waist: ",e.waist,r.createElement("br",null),"● Hips: ",e.hips),r.createElement(P,null,e.styles.map((e=>r.createElement(R,{key:e.tag,tag:e.tag}))))),r.createElement(W,null,d.map((e=>r.createElement(F,{key:e.idDvd,onClick:()=>u(e)},r.createElement(G,{src:e.poster}),r.createElement(L,{uncensored:"Uncensored"===e.type},e.code)))))),r.createElement(O,{color:c},e.points,"p")),r.createElement(y,{show:n,toggleModal:p,data:l}))}));export{q as M,X as a};
