import{c as e,B as t,W as a,X as n,_ as o}from"./index.e9eb1314.js";import{s as r,b as c,R as s,S as p,c as l,d as m}from"./vendor.5a693d40.js";const i=r.div`
  position: absolute;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  ${e}
`,u=r.img`
  width: 150px;
`,_=r.div`
  width: 100%;
  height: 100%;
  ${e};
  background: ${t};
  color: ${a};
  font-size: ${n};
  line-height: 50px;
  text-align: center;
`;function E(){return s.createElement(i,null,s.createElement(u,{src:"/assets/ic_loading_upv.4f8ad6d0.svg",alt:""}))}function x(){return s.createElement(_,null,"404",s.createElement("br",null),"Not Found")}function h(e,t=3){return new Promise(((a,n)=>{e().then(a).catch((o=>{setTimeout((()=>{1!==t?h(e,t-1).then(a,n):n(o)}),500)}))}))}const d=c.exports.lazy((()=>h((()=>o((()=>import("./Home.3400a862.js")),["assets/Home.3400a862.js","assets/vendor.5a693d40.js","assets/index.e9eb1314.js","assets/index.d7654b2f.css","assets/Pagination.12647ace.js","assets/StarTag.3a84caf8.js","assets/ic_rolling.5b20d59e.js"]))))),v=c.exports.lazy((()=>h((()=>o((()=>import("./LuckyBox.79014f06.js")),["assets/LuckyBox.79014f06.js","assets/vendor.5a693d40.js","assets/index.e9eb1314.js","assets/index.d7654b2f.css","assets/StarTag.3a84caf8.js","assets/Slider.591a0c61.js","assets/Image.afcc4918.js","assets/ic_rolling.5b20d59e.js","assets/StarCup.d99bc3b6.js","assets/render-color.e980cc55.js","assets/sizes-cup.fcc04310.js","assets/StarPicture.a11131a3.js"]))))),f=c.exports.lazy((()=>h((()=>o((()=>import("./Stars.ebf1a160.js")),["assets/Stars.ebf1a160.js","assets/vendor.5a693d40.js","assets/index.150f0615.js","assets/index.4d105fd6.js","assets/sizes-cup.fcc04310.js","assets/render-color.e980cc55.js","assets/index.e9eb1314.js","assets/index.d7654b2f.css","assets/Input.f896e223.js","assets/Select.27efbc7b.js","assets/Pagination.12647ace.js","assets/Image.afcc4918.js","assets/ic_rolling.5b20d59e.js","assets/StarTag.3a84caf8.js","assets/StarCup.d99bc3b6.js"]))))),g=c.exports.lazy((()=>h((()=>o((()=>import("./Star.59c7e83c.js")),["assets/Star.59c7e83c.js","assets/vendor.5a693d40.js","assets/index.150f0615.js","assets/render-price.51e4f9fd.js","assets/index.e9eb1314.js","assets/index.d7654b2f.css","assets/Tabs.5c045b13.js","assets/Image.afcc4918.js","assets/ic_rolling.5b20d59e.js","assets/StarCup.d99bc3b6.js","assets/render-color.e980cc55.js","assets/sizes-cup.fcc04310.js","assets/StarPicture.a11131a3.js"]))))),b=c.exports.lazy((()=>h((()=>o((()=>import("./TopEarnings.a7464e97.js")),["assets/TopEarnings.a7464e97.js","assets/vendor.5a693d40.js","assets/js.cookie.b6205acc.js","assets/index.150f0615.js","assets/index.e9eb1314.js","assets/index.d7654b2f.css","assets/render-price.51e4f9fd.js","assets/Image.afcc4918.js","assets/ic_rolling.5b20d59e.js","assets/StarCup.d99bc3b6.js","assets/render-color.e980cc55.js","assets/sizes-cup.fcc04310.js","assets/StarPicture.a11131a3.js"])))));function j(){return s.createElement(c.exports.Suspense,{fallback:s.createElement(E,null)},s.createElement(p,null,s.createElement(l,{path:"/upv",exact:!0,render:()=>s.createElement(m,{to:"/upv/home",exact:!0})}),s.createElement(l,{path:"/upv/home",exact:!0,component:d}),s.createElement(l,{path:"/upv/lucky-box",exact:!0,component:v}),s.createElement(l,{path:"/upv/top-earnings",exact:!0,component:b}),s.createElement(l,{path:"/upv/stars",exact:!0,component:f}),s.createElement(l,{path:"/upv/star/:id",exact:!1,component:g}),s.createElement(l,{path:"*",component:x})))}export{j as default};
