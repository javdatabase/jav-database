import{s as a,L as t,R as e}from"./vendor.5a693d40.js";import{f as o,O as r,P as n,c as i,X as d,h as l,W as s,g as c,R as g,Y as p,D as u,i as b,G as x,j as m}from"./index.e9eb1314.js";const $=a.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  padding: 35px 320px;
  box-sizing: border-box;
  animation: ${o} 0.8s ease-in-out;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${r}, ${n});
    border-radius: 10px;
  }
`,h=a.div`
  ${i}
  font-size: ${d};
  font-weight: bold;
  color: ${l};
  margin-bottom: 80px;
`,v=a.div`
  position: relative;
  ${i};
  margin-bottom: 60px;
`,f=a(t)`
  ${i};
  width: 150px;
  background: ${a=>a.background};
  padding: 10px 30px;
  border-radius: 6px;
  margin: 0px 30px;
  box-shadow: none;
  white-space: nowrap;
  color: ${s};
  font-size: ${c};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;function k(){return e.createElement($,null,e.createElement(h,null,"TOOLS"),e.createElement(v,null,e.createElement(f,{to:"/tools/jav-dvd-data",background:`linear-gradient(to right, ${n}, ${r})`},"JAV Dvd Data"),e.createElement(f,{to:"/tools/jav-idol-data",background:`linear-gradient(to right, ${g}, ${p})`},"JAV Idol Data"),e.createElement(f,{to:"/tools/jav-video-data",background:`linear-gradient(to right, ${u}, ${b})`},"JAV Video Data")),e.createElement(v,null,e.createElement(f,{to:"/tools/upv-video-data",background:`linear-gradient(to right, ${x}, ${m})`},"UPV Video Data"),e.createElement(f,{to:"/tools/upv-star-data",background:`linear-gradient(to right, ${b}, ${p})`},"UPV Star Data")))}export{k as default};
