import{s as e,b as t,R as a}from"./vendor.5a693d40.js";import{S as l}from"./sizes-cup.fcc04310.js";import{M as r,m as n}from"./render-color.e980cc55.js";import{f as o,O as i,P as s,c,X as u,h as d,k as m,j as p,W as h,n as x,D as g,R as b,G as v,l as f,Y as y,B as $,g as E,S as C}from"./index.e9eb1314.js";import{M as w}from"./Input.f896e223.js";import{M as k}from"./Textarea.3f61f1e6.js";import{M as S}from"./Select.27efbc7b.js";import{C as j,a as T}from"./ic_clipboard_green.1b28116b.js";const R=e.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  padding: 35px 160px;
  box-sizing: border-box;
  animation: ${o} 0.8s ease-in-out;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${i}, ${s});
    border-radius: 10px;
  }
`,M=e.div`
  ${c}
  font-size: ${u};
  font-weight: bold;
  color: ${d};
  margin-bottom: 80px;
`,O=e.div`
  flex: 1;
  display: flex;
  margin: 0px -30px;
`,z=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`,A=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`,D=e.div`
  font-size: ${m};
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`,W=e(k)`
  width: 100%;
`,B=e(w)`
  width: 100%;
`,I=e(S)`
  width: 50%;
`,L=e(S)`
  width: 100%;
`,H=e.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  ${c};
  background: ${p};
  margin-left: 30px;
  border-radius: 6px;
  color: ${h};
  font-size: ${x};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${g};
  }
`,P=e(H)`
  background: ${b};

  &:hover {
    background: ${i};
  }
`,_=e.img`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 20px;
  height: 20px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.6:1};
`,F=e.div`
  ${c};
  background: ${e=>e.disabled?v:e.active?f:y};
  padding: 10px 30px;
  border-radius: 6px;
  box-shadow: none;
  white-space: nowrap;
  color: ${$};
  font-size: ${E};
  text-align: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${e=>e.disabled?v:e.active?f:b};
  }
`,G=e(F)`
  margin-top: 30px;
  background: ${v};
  color: ${h};

  &:hover {
    background: ${v};
  }
`;function J(){const[e,o]=t.exports.useState(""),[i,s]=t.exports.useState(""),[c,u]=t.exports.useState(""),[d,m]=t.exports.useState(""),[p,h]=t.exports.useState(""),[x,g]=t.exports.useState(""),[v,f]=t.exports.useState(null),[$,E]=t.exports.useState(""),[w,k]=t.exports.useState(""),[S,J]=t.exports.useState(null),[N,U]=t.exports.useState([""]),[V,X]=t.exports.useState(!1),Y=t.exports.useRef(),q=t.exports.useMemo((()=>e||i||c||d||p||x||v||$||w||S&&S.length||N&&N.length&&""!==N[0]?`{\n        idIdol: "jai${Array(3-String(C+1).length).fill("0").join("")}${C+1}",\n        avatar: "${e}"\n        name: "${i}",\n        other: "${c}",\n        born: "${d}"\n        height: "${p} cm",\n        breast: "${x} cm",\n        cup: "${(null==v?void 0:v.label)||""}",\n        waist: "${$} cm",\n        hips: "${w} cm",\n        styles: [${(null==S?void 0:S.map((e=>`{ tag: "${e.label}" }`)).join(", "))||""}],\n        album: [${(null==N?void 0:N.filter((e=>!!e)).map((e=>`{ picture: "${e}" }`)).join(", "))||""}],\n},`:""),[e,i,c,d,p,x,v,$,w,S,N]),K=t.exports.useMemo((()=>i?`{ idIdol: "jai${Array(3-String(C+1).length).fill("0").join("")}${C+1}", name: "${i}" },`:""),[i]);t.exports.useEffect((()=>()=>{Y.current&&clearTimeout(Y.current)}),[]);const Q=t.exports.useCallback((()=>{if(q&&!V){const e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=q,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),X(!0),Y.current&&clearTimeout(Y.current),Y.current=setTimeout((()=>{X(!1)}),1e3)}}),[q,V]),Z=t.exports.useCallback((()=>{if(K&&!V){const e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=K,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),X(!0),Y.current&&clearTimeout(Y.current),Y.current=setTimeout((()=>{X(!1)}),1e3)}}),[K,V]);return a.createElement(R,null,a.createElement(M,null,"JAV IDOL DATA TOOL"),a.createElement(O,null,a.createElement(z,null,a.createElement(D,{style:{color:b}},"FORM"),a.createElement(A,null,a.createElement(B,{placeholder:"Avatar...",value:e,onChange:e=>o(e.target.value.trim())})),a.createElement(A,{style:{flexDirection:"row"}},a.createElement(B,{style:{width:"50%",minWidth:"unset",marginRight:"30px"},placeholder:"Name...",value:i,onChange:e=>s(e.target.value.trim())}),a.createElement(B,{style:{width:"50%",minWidth:"unset"},placeholder:"Other...",value:c,onChange:e=>u(e.target.value.trim())})),a.createElement(A,null,a.createElement(B,{placeholder:"Born...",value:d,onChange:e=>m(e.target.value.trim())})),a.createElement(A,null,a.createElement(B,{placeholder:"Height...",type:"number",value:p,onChange:e=>h(e.target.value)})),a.createElement(A,{style:{flexDirection:"row"}},a.createElement(B,{style:{width:"50%",minWidth:"unset",marginRight:"30px"},placeholder:"Breast...",type:"number",value:x,onChange:e=>g(e.target.value)}),a.createElement(I,{placeholder:"Born...",options:l.map((e=>({label:e,value:e}))),value:v,onChange:e=>f(e)})),a.createElement(A,null,a.createElement(B,{placeholder:"Waist...",type:"number",value:$,onChange:e=>E(e.target.value)})),a.createElement(A,null,a.createElement(B,{placeholder:"Hips...",type:"number",value:w,onChange:e=>k(e.target.value)})),a.createElement(A,null,a.createElement(L,{isMulti:!0,options:r.map((e=>({label:e,value:e,color:n(e)}))),placeholder:"Styles...",value:S,onChange:e=>J(e)})),N.map(((e,t)=>a.createElement(A,{key:t,style:{flexDirection:"row"}},a.createElement(B,{placeholder:"Picture...",value:e,onChange:e=>U((a=>a.map(((a,l)=>l===t?e.target.value.trim():a))))}),t===N.length-1?a.createElement(H,{onClick:()=>U((e=>[...e,""]))},"+"):a.createElement(P,{onClick:()=>U((e=>e.filter(((e,a)=>a!==t))))},"-"))))),a.createElement(z,null,a.createElement(D,{style:{color:y}},"RESULT"),a.createElement(A,null,a.createElement(W,{readOnly:!0,rows:12,placeholder:"Result...",value:q})),a.createElement(A,null,a.createElement(B,{readOnly:!0,placeholder:"Short...",value:K}),a.createElement(_,{disabled:!K,src:V?j:T,onClick:Z})),a.createElement(F,{disabled:!q,active:V,type:"button",onClick:Q},V?"Copied To Clipboard":"Copy To Clipboard"),a.createElement(G,{disabled:!q,type:"button",onClick:()=>{o(""),s(""),u(""),m(""),h(""),g(""),f(null),E(""),k(""),J(null),U([""])}},"Reset"))))}export{J as default};
