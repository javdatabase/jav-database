import{s as e,b as t,R as o}from"./vendor.5a693d40.js";import{M as a}from"./Input.f896e223.js";import{M as r}from"./Textarea.3f61f1e6.js";import{f as l,O as n,P as i,c as s,X as c,h as d,k as u,G as p,D as m,i as x,W as b,g as f,l as g,B as h}from"./index.e9eb1314.js";const v=e.div`
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
    background: linear-gradient(${n}, ${i});
    border-radius: 10px;
  }
`,E=e.div`
  ${s}
  font-size: ${c};
  font-weight: bold;
  color: ${d};
  margin-bottom: 80px;
`,y=e.div`
  flex: 1;
  display: flex;
  margin: 0px -30px;
`,$=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`,w=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`,C=e.div`
  font-size: ${u};
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`,k=e(r)`
  width: 100%;
`,T=e(a)`
  width: 100%;
`,O=e.div`
  ${s};
  background: ${e=>e.disabled?p:e.active?m:x};
  padding: 10px 30px;
  border-radius: 6px;
  box-shadow: none;
  white-space: nowrap;
  color: ${b};
  font-size: ${f};
  text-align: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${e=>e.disabled?p:e.active?g:x};
  }
`,R=e(O)`
  margin-top: 30px;
  background: ${p};
  color: ${h};

  &:hover {
    background: ${p};
  }
`;function j(){const[e,a]=t.exports.useState(""),[r,l]=t.exports.useState(""),[n,i]=t.exports.useState(!1),s=t.exports.useRef(),c=t.exports.useMemo((()=>e||r?`{\n        code: "${e}",\n        content: \`<iframe width="943" height="530" src="${r}" frameborder="0" allowfullscreen></iframe>\`,\n},`:""),[e,r]);t.exports.useEffect((()=>()=>{s.current&&clearTimeout(s.current)}),[]);const d=t.exports.useCallback((()=>{if(c&&!n){const e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=c,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),i(!0),s.current&&clearTimeout(s.current),s.current=setTimeout((()=>{i(!1)}),1e3)}}),[c,n]);return o.createElement(v,null,o.createElement(E,null,"JAV VIDEO DATA TOOL"),o.createElement(y,null,o.createElement($,null,o.createElement(C,{style:{color:m}},"FORM"),o.createElement(w,null,o.createElement(T,{placeholder:"Code...",value:e,onChange:e=>a(e.target.value.trim().toUpperCase())})),o.createElement(w,null,o.createElement(T,{placeholder:"Content...",value:r,onChange:e=>l(e.target.value.trim())}))),o.createElement($,null,o.createElement(C,{style:{color:x}},"RESULT"),o.createElement(w,null,o.createElement(k,{readOnly:!0,rows:12,placeholder:"Result...",value:c})),o.createElement(O,{disabled:!c,active:n,type:"button",onClick:d},n?"Copied To Clipboard":"Copy To Clipboard"),o.createElement(R,{disabled:!c,type:"button",onClick:()=>{a(""),l("")}},"Reset"))))}export{j as default};
