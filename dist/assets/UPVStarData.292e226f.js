import{s as e,b as t,R as a}from"./vendor.5a693d40.js";import{S as r}from"./sizes-cup.fcc04310.js";import{f as l,O as n,P as o,c as i,X as s,h as c,k as u,j as d,W as p,n as m,D as x,R as b,G as g,l as h,i as f,B as v,g as $,Y as y,o as E}from"./index.e9eb1314.js";import{M as C}from"./Input.f896e223.js";import{M as k}from"./Textarea.3f61f1e6.js";import{M as w}from"./Select.27efbc7b.js";import{C as S,a as j}from"./ic_clipboard_green.1b28116b.js";const T=e.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  padding: 35px 160px;
  box-sizing: border-box;
  animation: ${l} 0.8s ease-in-out;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${n}, ${o});
    border-radius: 10px;
  }
`,R=e.div`
  ${i}
  font-size: ${s};
  font-weight: bold;
  color: ${c};
  margin-bottom: 80px;
`,z=e.div`
  flex: 1;
  display: flex;
  margin: 0px -30px;
`,A=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`,M=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`,O=e.div`
  font-size: ${u};
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`,B=e(k)`
  width: 100%;
`,D=e(C)`
  width: 100%;
`,P=e(w)`
  width: 50%;
`,W=e.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  ${i};
  background: ${d};
  margin-left: 30px;
  border-radius: 6px;
  color: ${p};
  font-size: ${m};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${x};
  }
`,H=e(W)`
  background: ${b};

  &:hover {
    background: ${n};
  }
`,L=e.img`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 20px;
  height: 20px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.6:1};
`,U=e.div`
  ${i};
  background: ${e=>e.disabled?g:e.active?h:f};
  padding: 10px 30px;
  border-radius: 6px;
  box-shadow: none;
  white-space: nowrap;
  color: ${v};
  font-size: ${$};
  text-align: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${e=>e.disabled?g:e.active?h:y};
  }
`,_=e(U)`
  margin-top: 30px;
  background: ${g};
  color: ${p};

  &:hover {
    background: ${g};
  }
`;function F(){const[e,l]=t.exports.useState(""),[n,o]=t.exports.useState(""),[i,s]=t.exports.useState(""),[c,u]=t.exports.useState(""),[d,p]=t.exports.useState(""),[m,x]=t.exports.useState(null),[b,g]=t.exports.useState(""),[h,v]=t.exports.useState(""),[$,C]=t.exports.useState([""]),[k,w]=t.exports.useState(!1),F=t.exports.useRef(),G=t.exports.useMemo((()=>e||n||i||c||d||m||b||h||$&&$.length&&""!==$[0]?`{\n          idStar: "ups${Array(3-String(E+1).length).fill("0").join("")}${E+1}",\n          avatar: "${e}"\n          name: "${n}",\n          born: "${i}"\n          height: "${c} cm",\n          breast: "${d} in",\n          cup: "${(null==m?void 0:m.label)||""}",\n          waist: "${b} in",\n          hips: "${h} in",\n          album: [${(null==$?void 0:$.filter((e=>!!e)).map((e=>`{ picture: "${e}" }`)).join(", "))||""}],\n  },`:""),[e,n,i,c,d,m,b,h,$]),I=t.exports.useMemo((()=>n?`{ idStar: "jai${Array(3-String(E+1).length).fill("0").join("")}${E+1}", name: "${n}" },`:""),[n]);t.exports.useEffect((()=>()=>{F.current&&clearTimeout(F.current)}),[]);const N=t.exports.useCallback((()=>{if(G&&!k){const e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=G,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),w(!0),F.current&&clearTimeout(F.current),F.current=setTimeout((()=>{w(!1)}),1e3)}}),[G,k]),V=t.exports.useCallback((()=>{if(I&&!k){const e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=I,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),w(!0),F.current&&clearTimeout(F.current),F.current=setTimeout((()=>{w(!1)}),1e3)}}),[I,k]);return a.createElement(T,null,a.createElement(R,null,"UPV STAR DATA TOOL"),a.createElement(z,null,a.createElement(A,null,a.createElement(O,{style:{color:y}},"FORM"),a.createElement(M,null,a.createElement(D,{placeholder:"Avatar...",value:e,onChange:e=>l(e.target.value.trim())})),a.createElement(M,null,a.createElement(D,{placeholder:"Name...",value:n,onChange:e=>o(e.target.value.trim())})),a.createElement(M,null,a.createElement(D,{placeholder:"Born...",value:i,onChange:e=>s(e.target.value.trim())})),a.createElement(M,null,a.createElement(D,{placeholder:"Height...",type:"number",value:c,onChange:e=>u(e.target.value)})),a.createElement(M,{style:{flexDirection:"row"}},a.createElement(D,{style:{width:"50%",minWidth:"unset",marginRight:"30px"},placeholder:"Breast...",type:"number",value:d,onChange:e=>p(e.target.value)}),a.createElement(P,{placeholder:"Born...",options:r.map((e=>({label:e,value:e}))),value:m,onChange:e=>x(e)})),a.createElement(M,null,a.createElement(D,{placeholder:"Waist...",type:"number",value:b,onChange:e=>g(e.target.value)})),a.createElement(M,null,a.createElement(D,{placeholder:"Hips...",type:"number",value:h,onChange:e=>v(e.target.value)})),$.map(((e,t)=>a.createElement(M,{key:t,style:{flexDirection:"row"}},a.createElement(D,{placeholder:"Picture...",value:e,onChange:e=>C((a=>a.map(((a,r)=>r===t?e.target.value.trim():a))))}),t===$.length-1?a.createElement(W,{onClick:()=>C((e=>[...e,""]))},"+"):a.createElement(H,{onClick:()=>C((e=>e.filter(((e,a)=>a!==t))))},"-"))))),a.createElement(A,null,a.createElement(O,{style:{color:f}},"RESULT"),a.createElement(M,null,a.createElement(B,{readOnly:!0,rows:12,placeholder:"Result...",value:G})),a.createElement(M,null,a.createElement(D,{readOnly:!0,placeholder:"Short...",value:I}),a.createElement(L,{disabled:!I,src:k?S:j,onClick:V})),a.createElement(U,{disabled:!G,active:k,type:"button",onClick:N},k?"Copied To Clipboard":"Copy To Clipboard"),a.createElement(_,{disabled:!G,type:"button",onClick:()=>{l(""),o(""),s(""),u(""),p(""),x(null),g(""),v(""),C([""])}},"Reset"))))}export{F as default};
