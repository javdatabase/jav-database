(this["webpackJsonpjav-database"]=this["webpackJsonpjav-database"]||[]).push([[10],{278:function(e,t,n){"use strict";var r=n(6),o=n(27),a=n(32),i=n(1),c=n(0),u=n.n(c),l=n(2),d=n(279),f=n.n(d),s=n(282),p=n.n(s),b=n(4),v=n(17);function h(){var e=Object(i.a)(["\n  ","\n  border: solid 1px ",";\n  box-sizing: border-box;\n\n  img {\n    width: 50%;\n  }\n"]);return h=function(){return e},e}var m=l.b.div(h(),v.a,b.j);t.a=function(e){var t=e.src,n=(e.lazy,Object(a.a)(e,["src","lazy"])),i=Object(c.useState)(t||p.a),l=Object(o.a)(i,2),d=l[0],s=l[1],b=Object(c.useState)(!0),v=Object(o.a)(b,2),h=v[0],g=v[1];Object(c.useEffect)((function(){s(t||p.a)}),[t]);var w=Object(c.useCallback)((function(){g(!1)}),[]),O=Object(c.useCallback)((function(){s(p.a)}),[]);return u.a.createElement(c.Fragment,null,h&&u.a.createElement(m,{className:n.className,style:n.style},u.a.createElement("img",{src:f.a,alt:"error",onClick:n.onClick})),u.a.createElement("img",Object.assign({src:d,alt:"error",onLoad:w,onError:O,style:h?Object(r.a)({display:"none"},n.style):Object(r.a)({},n.style)},n)))}},279:function(e,t,n){e.exports=n.p+"static/media/ic_rolling.77858ceb.svg"},281:function(e,t,n){"use strict";var r=n(32),o=n(1),a=n(0),i=n.n(a),c=n(2),u=n(4),l=n(18);function d(){var e=Object(o.a)(["\n  margin-right: 10px;\n  padding: 5px 10px;\n  border-radius: 6px;\n  background: linear-gradient(to right, ",", ",");\n  text-align: center;\n  font-size: ",";\n"]);return d=function(){return e},e}var f=c.b.div(d(),u.h,u.g,l.a);var s=Object(a.memo)((function(e){var t=e.name,n=Object(r.a)(e,["name"]);return i.a.createElement(f,n,t)}));t.a=s},282:function(e,t,n){e.exports=n.p+"static/media/bg_sexy_shadow.13624c84.jpg"},284:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(11),c=n(2),u=n(20),l=n(7),d=n(33),f=n(278),s=n(281),p=n(4),b=n(17),v=n(18);function h(){var e=Object(r.a)(["\n  border: solid 2px ",";\n  margin-top: 10px;\n  background: ",";\n"]);return h=function(){return e},e}function m(){var e=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return m=function(){return e},e}function g(){var e=Object(r.a)(["\n  color: ",";\n  font-size: ",";\n"]);return g=function(){return e},e}function w(){var e=Object(r.a)(["\n  color: ",";\n  font-size: ",";\n"]);return w=function(){return e},e}function O(){var e=Object(r.a)(["\n  width: 36vw;\n  height: calc(24vw + 6px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px 10px 10px 20px;\n  box-sizing: border-box;\n"]);return O=function(){return e},e}function y(){var e=Object(r.a)(["\n  width: 36vw;\n  height: 24vw;\n"]);return y=function(){return e},e}function j(){var e=Object(r.a)(["\n  position: fixed;\n  z-index: 300;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  ","\n  display: ",";\n  padding: 10px;\n  background: ",";\n  animation: "," 0.3s ease-in-out;\n"]);return j=function(){return e},e}var x=c.b.div(j(),b.a,(function(e){return e.show?"flex":"none"}),(function(e){return e.uncensored?"linear-gradient(to right, ".concat(p.b,", ").concat(p.e,")"):"linear-gradient(to right, ".concat(p.h,", ").concat(p.g,")")}),b.b),E=Object(c.b)(f.a)(y()),k=c.b.div(O()),C=c.b.span(w(),p.a,v.d),_=c.b.div(g(),p.j,v.a),z=c.b.div(m()),M=Object(c.b)(s.a)(h(),p.a,(function(e){return e.queen?"linear-gradient(to right, ".concat(p.k,", ").concat(p.i,")"):e.runnerUp?"linear-gradient(to right, ".concat(p.e,", ").concat(p.h,")"):"linear-gradient(to right,  ".concat(p.g,", ").concat(p.h,")")}));var T=Object(o.memo)((function(e){var t=e.show,n=e.toggleModal,r=e.data;return a.a.createElement(o.Fragment,null,a.a.createElement(d.a,{show:t,hiddenModal:n}),a.a.createElement(x,{show:t,uncensored:"Uncensored"===Object(i.get)(r,"type","")},a.a.createElement(E,{src:Object(i.get)(r,"poster",null)}),a.a.createElement(k,null,a.a.createElement("div",null,a.a.createElement(C,null,Object(i.get)(r,"code",""))),a.a.createElement(_,null,Object(i.get)(r,"title","")),a.a.createElement(z,null,Object(i.get)(r,"idols",[]).map((function(e){return"jai000"===e.idIdol?a.a.createElement(M,{key:e.idIdol,name:e.name}):a.a.createElement(u.a,{key:e.idIdol,to:"/idol/".concat(e.idIdol),style:{textDecoration:"none",color:p.a}},a.a.createElement(M,{key:e.idIdol,queen:1===Object(l.g)(e.idIdol),runnerUp:2===Object(l.g)(e.idIdol),name:e.name}))}))))))}));t.a=T},287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=s(o),i=s(n(34)),c=s(n(21)),u=n(291),l=s(n(292)),d=s(n(293)),f=s(n(294));function s(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,m=0,g=0,w=0,O="data-lazyload-listened",y=[],j=[],x=!1;try{var E=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("test",null,E)}catch(P){}var k=!!x&&{capture:!1,passive:!0},C=function(e){var t=i.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,l.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=i.default.findDOMNode(e),r=void 0,o=void 0,a=void 0,c=void 0;try{var u=t.getBoundingClientRect();r=u.top,o=u.left,a=u.height,c=u.width}catch(P){r=h,o=m,a=w,c=g}var l=window.innerHeight||document.documentElement.clientHeight,d=window.innerWidth||document.documentElement.clientWidth,f=Math.max(r,0),s=Math.max(o,0),p=Math.min(l,r+a)-f,b=Math.min(d,o+c)-s,v=void 0,O=void 0,y=void 0,j=void 0;try{var x=n.getBoundingClientRect();v=x.top,O=x.left,y=x.height,j=x.width}catch(P){v=h,O=m,y=w,j=g}var E=v-f,k=O-s,C=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return E-C[0]<=p&&E+y+C[1]>=0&&k-C[0]<=b&&k+j+C[1]>=0}(e,n):function(e){var t=i.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(P){n=h,r=w}var a=window.innerHeight||document.documentElement.clientHeight,c=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-c[0]<=a&&n+r+c[1]>=0}(e))?e.visible||(e.props.once&&j.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},_=function(){j.forEach((function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1)})),j=[]},z=function(){for(var e=0;e<y.length;++e){var t=y[e];C(t)}_()},M=void 0,T=null,D=function(e){function t(e){p(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return v(t,e),r(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===M||"debounce"===M&&void 0===this.props.debounce;if(n&&((0,u.off)(e,"scroll",T,k),(0,u.off)(window,"resize",T,k),T=null),T||(void 0!==this.props.debounce?(T=(0,d.default)(z,"number"===typeof this.props.debounce?this.props.debounce:300),M="debounce"):void 0!==this.props.throttle?(T=(0,f.default)(z,"number"===typeof this.props.throttle?this.props.throttle:300),M="throttle"):T=z),this.props.overflow){var r=(0,l.default)(i.default.findDOMNode(this));if(r&&"function"===typeof r.getAttribute){var o=+r.getAttribute(O)+1;1===o&&r.addEventListener("scroll",T,k),r.setAttribute(O,o)}}else if(0===y.length||n){var a=this.props,c=a.scroll,s=a.resize;c&&(0,u.on)(e,"scroll",T,k),s&&(0,u.on)(window,"resize",T,k)}y.push(this),C(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(i.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(O)-1;0===t?(e.removeEventListener("scroll",T,k),e.removeAttribute(O)):e.setAttribute(O,t)}}var n=y.indexOf(this);-1!==n&&y.splice(n,1),0===y.length&&"undefined"!==typeof window&&((0,u.off)(window,"resize",T,k),(0,u.off)(window,"scroll",T,k))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:a.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(o.Component);D.propTypes={once:c.default.bool,height:c.default.oneOfType([c.default.number,c.default.string]),offset:c.default.oneOfType([c.default.number,c.default.arrayOf(c.default.number)]),overflow:c.default.bool,resize:c.default.bool,scroll:c.default.bool,children:c.default.node,throttle:c.default.oneOfType([c.default.number,c.default.bool]),debounce:c.default.oneOfType([c.default.number,c.default.bool]),placeholder:c.default.node,scrollContainer:c.default.oneOfType([c.default.string,c.default.object]),unmountIfInvisible:c.default.bool},D.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var N=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function o(){p(this,o);var e=b(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+N(t),e}return v(o,n),r(o,[{key:"render",value:function(){return a.default.createElement(D,e,a.default.createElement(t,this.props))}}]),o}(o.Component)}},t.default=D,t.forceCheck=z,t.forceVisible=function(){for(var e=0;e<y.length;++e){var t=y[e];t.visible=!0,t.forceUpdate()}_()}},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}},292:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),a=o.position,i=o.overflow,c=o["overflow-x"],u=o["overflow-y"];if("static"===a&&t)r=r.parentNode;else{if(n.test(i)&&n.test(c)&&n.test(u))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},293:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=void 0,o=void 0,a=void 0,i=void 0,c=void 0,u=function u(){var l=+new Date-i;l<t&&l>=0?r=setTimeout(u,t-l):(r=null,n||(c=e.apply(a,o),r||(a=null,o=null)))};return function(){a=this,o=arguments,i=+new Date;var l=n&&!r;return r||(r=setTimeout(u,t)),l&&(c=e.apply(a,o),a=null,o=null),c}}},294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r,o;return t||(t=250),function(){var a=n||this,i=+new Date,c=arguments;r&&i<r+t?(clearTimeout(o),o=setTimeout((function(){r=i,e.apply(a,c)}),t)):(r=i,e.apply(a,c))}}},295:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(2),c=n(4),u=n(17),l=n(18);function d(){var e=Object(r.a)(["\n  margin-top: -2.5px;\n"]);return d=function(){return e},e}function f(){var e=Object(r.a)(["\n  ","\n  width: 25px;\n  min-width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  margin: 5px 2.5px;\n  cursor: ",";\n  background: ",";\n  color: ",";\n  font-size: ",";\n  font-weight: 500;\n\n  ","\n"]);return f=function(){return e},e}function s(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  margin: 0px 2.5px;\n  overflow-x: scroll;\n\n  &::-webkit-scrollbar {\n    height: 6px;\n    background: transparent;\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: linear-gradient(",", ",");\n    border-radius: 10px;\n  }\n"]);return s=function(){return e},e}function p(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  width: 350px;\n  overflow: hidden;\n  position: relative;\n"]);return p=function(){return e},e}var b=i.b.div(p()),v=i.b.div(s(),c.g,c.h),h=i.b.div(f(),u.a,(function(e){return e.active?"default":"pointer"}),(function(e){return e.active?"linear-gradient(to right, ".concat(c.h,", ").concat(c.g,")"):"transparent"}),c.j,l.b,(function(e){return e.active?"":"&:hover {\n    background: linear-gradient(to right, ".concat(c.h,", ").concat(c.g,");\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }")})),m=Object(i.b)(h)(d());t.a=function(e){var t=e.count,n=e.page,r=e.size,i=e.handleChangePage,c=Object(o.useRef)(),u=Object(o.useMemo)((function(){return Array(Math.ceil(t/r)).fill(0).map((function(e,t){return t+1}))}),[t,r]),l=Object(o.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=0;e<1||e>u.length?(i(n),r=35*(n-1)):(i(e),r=35*(e-1)),t&&c.current.scrollTo(r,0)}),[u,n,i]);return a.a.createElement(b,null,a.a.createElement(m,{onClick:function(){return l(1,!0)}},"<<"),a.a.createElement(m,{onClick:function(){return l(n-1,!0)}},"<"),a.a.createElement(v,{ref:c},u.map((function(e){return a.a.createElement(h,{key:"page-".concat(e),active:e===n,onClick:function(){return l(e)}},e)}))),a.a.createElement(m,{onClick:function(){return l(n+1,!0)}},">"),a.a.createElement(m,{onClick:function(){return l(u.length,!0)}},">>"))}},296:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(2),c=n(278),u=n(4),l=n(17),d=n(18);function f(){var e=Object(r.a)(["\n  margin-top: 10px;\n  font-size: ",";\n  background: ",";\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]);return f=function(){return e},e}function s(){var e=Object(r.a)(["\n  width: 15vw;\n  height: 10vw;\n"]);return s=function(){return e},e}function p(){var e=Object(r.a)(["\n  ","\n  flex-direction: column;\n  cursor: pointer;\n  width: 15vw;\n  height: calc(10vw + 50px);\n  transform: translateY(0px);\n  transition: transform 0.3s ease-in-out;\n\n  &:hover {\n    transform: translateY(-20px);\n  }\n"]);return p=function(){return e},e}var b=i.b.div(p(),l.a),v=Object(i.b)(c.a)(s()),h=i.b.div(f(),d.a,(function(e){return e.uncensored?"linear-gradient(to right, ".concat(u.b,", ").concat(u.e,")"):"linear-gradient(to right, ".concat(u.h,", ").concat(u.g,")")}));var m=Object(o.memo)((function(e){var t=e.data,n=e.click;return a.a.createElement(b,{onClick:n},a.a.createElement(v,{src:t.poster}),a.a.createElement(h,{uncensored:"Uncensored"===t.type},t.code))}));t.a=m},304:function(e,t,n){"use strict";n.r(t);var r=n(27),o=n(1),a=n(0),i=n.n(a),c=n(2),u=n(287),l=n.n(u),d=n(13),f=n(295),s=n(296),p=n(284),b=n(4),v=n(17);function h(){var e=Object(o.a)(["\n  width: 100%;\n  height: 200px;\n  color: ",";\n  ",";\n  font-style: italic;\n"]);return h=function(){return e},e}function m(){var e=Object(o.a)(["\n  ","\n  margin-bottom: 5px;\n"]);return m=function(){return e},e}function g(){var e=Object(o.a)(["\n  ","\n  width: 15vw;\n  animation: "," 1s linear;\n"]);return g=function(){return e},e}function w(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(14vw, 1fr));\n  gap: 10px;\n  padding: 30px 20px;\n  box-sizing: border-box;\n"]);return w=function(){return e},e}function O(){var e=Object(o.a)(["\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 100px);\n  overflow: auto;\n  box-sizing: border-box;\n\n  &::-webkit-scrollbar {\n    width: 6px;\n    background: transparent;\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: linear-gradient(",", ",");\n    border-radius: 10px;\n  }\n"]);return O=function(){return e},e}var y=c.b.div(O(),b.g,b.h),j=c.b.div(w()),x=c.b.div(g(),v.a,v.b),E=c.b.div(m(),v.a),k=c.b.div(h(),b.j,v.a);t.default=function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),u=Object(r.a)(c,2),b=u[0],v=u[1],h=Object(a.useState)(null),m=Object(r.a)(h,2),g=m[0],w=m[1],O=Object(a.useMemo)((function(){return Object(d.b)(n,30)}),[n]),C=Object(a.useCallback)((function(e){o(e)}),[]),_=Object(a.useCallback)((function(){v(!b)}),[b]),z=Object(a.useCallback)((function(e){w(e||null),_()}),[_]);return i.a.createElement(a.Fragment,null,i.a.createElement(y,null,0===d.g?i.a.createElement(k,null,"Not Found"):i.a.createElement(j,null,O.map((function(e){return i.a.createElement(l.a,{key:e.idDvd,height:200,once:!0,overflow:!0},i.a.createElement(x,null,i.a.createElement(s.a,{data:e,click:function(){return z(e)}})))}))),i.a.createElement(E,null,i.a.createElement(f.a,{count:d.g,page:n,size:30,handleChangePage:C}))),i.a.createElement(p.a,{show:b,toggleModal:_,data:g}))}}}]);
//# sourceMappingURL=10.d8c64d32.chunk.js.map