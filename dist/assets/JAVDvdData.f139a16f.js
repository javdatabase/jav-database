import{s as e,b as t,R as l}from"./vendor.5a693d40.js";import{S as o}from"./short-idols.532b1a81.js";import{f as a,O as n,P as r,c as s,X as i,h as d,k as c,G as u,l as p,W as m,g as x,B as b,m as f,Y as v,R as g,i as h}from"./index.e9eb1314.js";import{M as E}from"./Input.f896e223.js";import{M as $}from"./Textarea.3f61f1e6.js";import{M as y}from"./Select.27efbc7b.js";const C=e.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  padding: 35px 160px;
  box-sizing: border-box;
  animation: ${a} 0.8s ease-in-out;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${n}, ${r});
    border-radius: 10px;
  }
`,w=e.div`
  ${s}
  font-size: ${i};
  font-weight: bold;
  color: ${d};
  margin-bottom: 80px;
`,k=e.div`
  flex: 1;
  display: flex;
  margin: 0px -30px;
`,T=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`,S=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`,j=e.div`
  font-size: ${c};
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`,R=e($)`
  width: 100%;
`,I=e(E)`
  width: 100%;
`,M=e(y)`
  width: 100%;
`,O=e.div`
  ${s};
  background: ${e=>e.disabled?u:e.active?p:r};
  padding: 10px 30px;
  border-radius: 6px;
  box-shadow: none;
  white-space: nowrap;
  color: ${m};
  font-size: ${x};
  text-align: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${e=>e.disabled?u:e.active?p:n};
  }
`,U=e(O)`
  margin-top: 30px;
  background: ${u};
  color: ${b};

  &:hover {
    background: ${u};
  }
`;function z(){const[e,a]=t.exports.useState(""),[s,i]=t.exports.useState(""),[d,c]=t.exports.useState(""),[u,p]=t.exports.useState(null),[m,x]=t.exports.useState(null),[b,E]=t.exports.useState(!1),$=t.exports.useRef(),y=t.exports.useMemo((()=>e||s||d||u||m&&m.length?`{\n      code: "${e}",\n      title: \`${s}\`,\n      poster: "${d}",\n      type: "${(null==u?void 0:u.label)||""}",\n      idols: [${(null==m?void 0:m.map((e=>`{ idIdol: "${e.value}", name: "${e.label}" }`)).join(", "))||""}],\n},`:""),[e,s,d,u,m]);t.exports.useEffect((()=>()=>{$.current&&clearTimeout($.current)}),[]);const z=t.exports.useCallback((()=>{if(y&&!b){const e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=y,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),E(!0),$.current&&clearTimeout($.current),$.current=setTimeout((()=>{E(!1)}),1e3)}}),[y,b]);return l.createElement(C,null,l.createElement(w,null,"JAV DVD DATA TOOL"),l.createElement(k,null,l.createElement(T,null,l.createElement(j,{style:{color:n}},"FORM"),l.createElement(S,null,l.createElement(I,{placeholder:"Code...",value:e,onChange:e=>a(e.target.value.trim().toUpperCase())})),l.createElement(S,null,l.createElement(R,{rows:6,placeholder:"Title...",value:s,onChange:e=>i(e.target.value.trim().toUpperCase())})),l.createElement(S,null,l.createElement(I,{placeholder:"Poster...",value:d,onChange:e=>c(e.target.value.trim())})),l.createElement(S,null,l.createElement(M,{options:[{label:"Censored",value:"Censored"},{label:"Uncensored",value:"Uncensored"}],placeholder:"Type...",value:u,onChange:e=>p(e)})),l.createElement(S,null,l.createElement(M,{isMulti:!0,options:o.map((e=>({label:e.name,value:e.idIdol,colors:1===f(e.idIdol)?[v,g]:2===f(e.idIdol)?[h,r]:[r,n]}))),placeholder:"Idols...",value:m,onChange:e=>x(e)}))),l.createElement(T,null,l.createElement(j,{style:{color:r}},"RESULT"),l.createElement(S,null,l.createElement(R,{readOnly:!0,rows:12,placeholder:"Result...",value:y})),l.createElement(O,{disabled:!y,active:b,type:"button",onClick:z},b?"Copied To Clipboard":"Copy To Clipboard"),l.createElement(U,{disabled:!y,type:"button",onClick:()=>{a(""),i(""),c(""),p(null),x(null)}},"Reset"))))}export{z as default};
