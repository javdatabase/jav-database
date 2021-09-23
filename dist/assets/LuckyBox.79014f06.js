import{s as e,b as t,R as r,L as a,e as o,f as i,g as n}from"./vendor.5a693d40.js";import{c as l,G as s,j as c,g as d,Y as p,i as m,f as u,B as x,W as g,X as h,n as v,k as b,O as $,D as f,a1 as w,a2 as E}from"./index.e9eb1314.js";import{M as k}from"./StarTag.3a84caf8.js";import{M as y}from"./Slider.591a0c61.js";import{M as C}from"./Image.afcc4918.js";import{M as S}from"./StarCup.d99bc3b6.js";import{M as j}from"./StarPicture.a11131a3.js";import{R as z}from"./ic_rolling.5b20d59e.js";import"./render-color.e980cc55.js";import"./sizes-cup.fcc04310.js";const M=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 14vw;
  height: calc(19.25vw + 40px);
`,D=e.div`
  ${l}
  width: calc(14vw + 6px);
  height: calc(19.25vw + 6px);
  background: ${e=>e.active?e.customColor?e.customColor:`linear-gradient(to right,  ${s}, ${c})`:"transparent"};
  border-radius: 18px;
`,_=e(C)`
  width: 14vw;
  height: 19.25vw;
  border-radius: 18px;
  object-fit: cover;
`,B=e.div`
  margin-top: 10px;
  font-size: ${d};
  background: ${e=>e.customColor?e.customColor:`linear-gradient(to right,  ${s}, ${c})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;const H=t.exports.memo((function({data:e,active:t,customColor:a}){return r.createElement(M,null,r.createElement(D,{active:t,customColor:a},r.createElement(_,{src:e.avatar})),r.createElement(B,{customColor:a},e.name))})),I=e.div`
  width: 100%;
  display: flex;
  border-radius: 18px;
  padding: 10px;
  box-sizing: border-box;
  background: ${e=>e.customColor||`linear-gradient(to right, ${p}, ${m})`};
  animation: ${u} 1s linear;
`,L=e.div`
  ${l}
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
`,R=e.div`
  position: relative;
  width: 10vw;
  height: 15vw;
`,T=e(C)`
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  object-fit: cover;
`,F=e.div`
  position: relative;
  width: 450px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`,O=e.div`
  color: ${c};
  font-size: ${h};
`,V=e.div`
  color: ${x};
`,W=e.div`
  width: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 10px;
`,A=e.div`
  ${l}
  padding: 0px;
  border-radius: 12px;
  border: solid 5px transparent;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: solid 5px ${c};
  }
`,G=e(C)`
  width: 5vw;
  min-width: 5vw;
  height: 7.5vw;
  object-fit: cover;
`,P=e(a)`
  position: absolute;
  bottom: 0px;
  ${l}
  width: 10vw;
  height: 0px;
  overflow: hidden;
  border-radius: 0px 0px 18px 18px;
  box-sizing: border-box;
  background: ${e=>e.customColor||`linear-gradient(to right, ${p}, ${m})`};
  text-decoration: none;
  color: ${x};
  font-size: ${v};
  transition: height 0.3s ease-in-out;

  ${I}:hover & {
    height: 30px;
    border: solid 1px ${x};
  }
`;const X=t.exports.memo((function({data:e,active:a,customColor:o}){const[i,n]=t.exports.useState(!1),[l,s]=t.exports.useState(null),c=t.exports.useCallback((()=>{n(!i)}),[i]),d=t.exports.useCallback((e=>{s(e)}),[]),p=t.exports.useCallback((e=>{s(e||null),c()}),[c]);return r.createElement(t.exports.Fragment,null,a&&r.createElement(I,{customColor:o},r.createElement(L,null,e.position),r.createElement("div",{style:{display:"flex",width:"100%"}},r.createElement(R,null,r.createElement(T,{src:e.avatar}),r.createElement(P,{to:`/upv/star/${e.idStar}`,customColor:o},"View")),r.createElement(F,null,r.createElement(O,null,e.name," ",e.other?`(${e.other})`:""),r.createElement(V,null,"● Born: ",e.born," (",e.age," year olds)",r.createElement("br",null),"● Height: ",e.height,r.createElement("br",null),"● Breast: ",e.breast," ",r.createElement(S,{cup:e.cup},"(",e.cup,")"),r.createElement("br",null),"● Waist: ",e.waist,r.createElement("br",null),"● Hips: ",e.hips),r.createElement("div",{style:{height:46}})),r.createElement(W,null,e.album.filter(((e,t)=>t<18)).map((e=>r.createElement(A,{key:e.picture},r.createElement(G,{src:e.picture,onClick:()=>p(e.picture),alt:""}))))))),r.createElement(j,{show:i,toggleModal:c,listData:e.album.filter(((e,t)=>t<10)).map((e=>e.picture)),data:l,setData:d}))})),Y=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  box-sizing: border-box;
  animation: ${u} 0.8s ease-in-out;
`,q=e.div`
  ${l}
  padding: 5px;
  border-radius: 6px;
  background: ${e=>e.active?`linear-gradient(to right, ${c}, ${s})`:"transparent"};
  position: absolute;
  top: 20px;
  left: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${d};
  color: ${e=>e.active?x:g};

  &:hover {
    background: linear-gradient(to right, ${c}, ${s});
    color: ${x};
  }
`,J=e.div`
  ${l}
  padding: 5px;
  border-radius: 6px;
  background: ${e=>e.active?`linear-gradient(to right, ${c}, ${s})`:"transparent"};
  position: absolute;
  top: 20px;
  right: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${d};
  color: ${e=>e.active?x:g};

  &:hover {
    background: linear-gradient(to right, ${c}, ${s});
    color: ${x};
  }
`,K=e.div`
  margin: 10px 0px 30px;
`,N=e.div`
  color: ${g};
  font-size: ${b};
  margin-bottom: 5px;
`,Q=e.span`
  color: ${$};
`,U=e.div`
  font-size: ${v};
  color: ${g};
`,Z=e.a`
  font-size: ${v};
  color: ${f};
  text-decoration: underline;

  &:hover {
    color: ${m};
  }
`,ee=e.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`,te=e(k)`
  cursor: pointer;
  margin-top: 10px;
`,re=e.div`
  width: 943px;
  height: 530px;
  border: solid 1px ${g};
  background: url(${z}) center center no-repeat;
`,ae=e.div`
  width: calc(14vw + 800px);
  height: calc(19.25vw + 100px);
`,oe=e.div`
  ${l}
  margin-top: 20px;
  width: calc(100vw - 40px);
`;function ie(){const e=o(),l=i(),[d,p]=t.exports.useState(!0),[m,u]=t.exports.useState(0),[g,h]=t.exports.useState([]),v=t.exports.useMemo((()=>{const e=l.state;return n(e,"type","videos")}),[l.state]);t.exports.useEffect((()=>{d&&(h("videos"===v?w():E()),p(!1))}),[d,v]);const b=t.exports.useCallback((e=>{u(e)}),[]),$=t.exports.useCallback((t=>{h("videos"===t?w():E()),e.push(l.pathname,{type:t})}),[e,l.pathname]),f=t.exports.useCallback((()=>{h(E())}),[]);return r.createElement(Y,null,r.createElement(q,{active:"videos"===v,onClick:()=>$("videos")},"VIDEOS"),r.createElement(J,{active:"stars"===v,onClick:()=>$("stars")},"STARS"),"videos"===v?r.createElement(K,null,r.createElement(N,null,n(g,"title","")," ",r.createElement(Q,null,"[",n(g,"type",""),"]")),r.createElement(U,null,"in"," ",r.createElement(Z,{href:n(g,"link",""),target:"_blank",rel:"noreferrer noopener"},n(g,"source",""))),r.createElement(ee,null,n(g,"stars",[]).map((e=>"ups000"===e.idStar?r.createElement(te,{key:e.idStar,name:e.name,style:{cursor:"auto",background:s}}):r.createElement(a,{key:e.idStar,to:`/upv/star/${e.idStar}`,style:{textDecoration:"none",color:x}},r.createElement(te,{name:e.name}))))),r.createElement(re,{dangerouslySetInnerHTML:{__html:n(g,"content","")}})):r.createElement(r.Fragment,null,r.createElement(ae,{type:v},r.createElement(y,{highlight:m,width:"14vw",height:"calc(19.25vw + 40px)",onSelect:b,endLoop:f,customColor:`linear-gradient(to right, ${c}, ${s})`},g.map(((e,t)=>r.createElement(H,{key:e.idStar,data:e,active:t===m}))))),r.createElement(oe,null,g.map(((e,t)=>r.createElement(X,{key:e.idStar,data:e,active:t===m}))))))}export{ie as default};
