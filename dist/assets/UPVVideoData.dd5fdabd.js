import{s as e,b as t,R as a}from"./vendor.5a693d40.js";import{M as r}from"./Input.f896e223.js";import{M as l}from"./Textarea.3f61f1e6.js";import{M as n}from"./Select.27efbc7b.js";import{f as o,O as i,P as s,c as d,X as u,h as c,k as p,G as m,l as x,j as b,W as h,g as f,D as g,B as v,Y as S,i as y}from"./index.e9eb1314.js";const E=[{idStar:"ups001",name:"Gabbie Carter"},{idStar:"ups002",name:"Melody Marks"},{idStar:"ups003",name:"Skylar Vox"},{idStar:"ups004",name:"Leah Gotti"},{idStar:"ups005",name:"Dolly Leigh"},{idStar:"ups006",name:"Malina Mars"},{idStar:"ups007",name:"Aubrey Gold"},{idStar:"ups008",name:"Lily Jordan"},{idStar:"ups009",name:"Abigaile Johnson"},{idStar:"ups010",name:"Kylie Page"},{idStar:"ups011",name:"Kendra Sunderland"},{idStar:"ups012",name:"Stella Cox"},{idStar:"ups013",name:"Katrina Jade"},{idStar:"ups014",name:"Mia Khalifa"}],$=e.div`
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
`,w=e.div`
  ${d}
  font-size: ${u};
  font-weight: bold;
  color: ${c};
  margin-bottom: 80px;
`,C=e.div`
  flex: 1;
  display: flex;
  margin: 0px -30px;
`,k=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`,M=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`,T=e.div`
  font-size: ${p};
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`,j=e(l)`
  width: 100%;
`,R=e(r)`
  width: 100%;
`,L=e(n)`
  width: 100%;
`,O=e.div`
  ${d};
  background: ${e=>e.disabled?m:e.active?x:b};
  padding: 10px 30px;
  border-radius: 6px;
  box-shadow: none;
  white-space: nowrap;
  color: ${h};
  font-size: ${f};
  text-align: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${e=>e.disabled?m:e.active?x:g};
  }
`,U=e(O)`
  margin-top: 30px;
  background: ${m};
  color: ${v};

  &:hover {
    background: ${m};
  }
`;function D(){const[e,r]=t.exports.useState(""),[l,n]=t.exports.useState(""),[o,i]=t.exports.useState(""),[s,d]=t.exports.useState(""),[u,c]=t.exports.useState(null),[p,x]=t.exports.useState(!1),h=t.exports.useRef(),f=t.exports.useMemo((()=>e||l||o||s||u&&u.length?`{\n        title: \`${e}\`,\n        source: "${l}",\n        link: "${o}",\n        content: \`<iframe width="943" height="530" src="${s}" frameborder="0" allowfullscreen></iframe>\`,\n        type: "US/EU",\n        stars: [${(null==u?void 0:u.map((e=>`{ idStar: "${e.value}", name: "${e.label}" }`)).join(", "))||""}],\n  },`:""),[e,l,o,s,u]);t.exports.useEffect((()=>()=>{h.current&&clearTimeout(h.current)}),[]);const g=t.exports.useCallback((()=>{if(f&&!p){const e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=f,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),x(!0),h.current&&clearTimeout(h.current),h.current=setTimeout((()=>{x(!1)}),1e3)}}),[f,p]);return a.createElement($,null,a.createElement(w,null,"UPV VIDEO DATA TOOL"),a.createElement(C,null,a.createElement(k,null,a.createElement(T,{style:{color:m}},"FORM"),a.createElement(M,null,a.createElement(j,{rows:6,placeholder:"Title...",value:e,onChange:e=>r(e.target.value.trim().toUpperCase())})),a.createElement(M,{style:{flexDirection:"row"}},a.createElement(R,{style:{width:"50%",minWidth:"unset",marginRight:"30px"},placeholder:"Source...",value:l,onChange:e=>n(e.target.value.trim().toUpperCase())}),a.createElement(R,{style:{width:"50%",minWidth:"unset"},placeholder:"Link...",value:o,onChange:e=>i(e.target.value.trim())})),a.createElement(M,null,a.createElement(R,{placeholder:"Content...",value:s,onChange:e=>d(e.target.value.trim())})),a.createElement(M,null,a.createElement(L,{isMulti:!0,options:E.map((e=>({label:e.name,value:e.idStar,colors:[S,y]}))),placeholder:"Stars...",value:u,onChange:e=>c(e)}))),a.createElement(k,null,a.createElement(T,{style:{color:b}},"RESULT"),a.createElement(M,null,a.createElement(j,{readOnly:!0,rows:12,placeholder:"Result...",value:f})),a.createElement(O,{disabled:!f,active:p,type:"button",onClick:g},p?"Copied To Clipboard":"Copy To Clipboard"),a.createElement(U,{disabled:!f,type:"button",onClick:()=>{r(""),n(""),i(""),d(""),c(null)}},"Reset"))))}export{D as default};
