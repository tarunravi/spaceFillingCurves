(this["webpackJsonphilbert-web-app"]=this["webpackJsonphilbert-web-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(5),a=n.n(r),s=(n(10),n(2)),l=(n(11),n(12),n(0));var o=function(e){var t=e.color,n=e.height;console.log(window.innerHeight);var c={backgroundColor:t,flex:1,width:"100%",height:n+"px",zIndex:"1"};return Object(l.jsx)("div",{className:"box",style:c})},j=n(3),h=(n(14),Object(c.createContext)()),b=function(e){var t=Object(c.useState)("light"),n=Object(s.a)(t,2),i=n[0],r=n[1];return Object(l.jsx)(h.Provider,{value:[i,r],children:e.children})};var u=function(e){e.color,e.height;var t,n=Object(c.useContext)(h),i=Object(s.a)(n,2),r=i[0],a=i[1];return Object(l.jsxs)("nav",{className:"Navbar "+r+"Bar",children:[Object(l.jsxs)("h1",{className:"titleText "+r+"TitleText",children:[Object(l.jsx)("span",{className:"bold",children:"Tarun Ravi's "}),"Space Filling Curve"]}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("h1",{onClick:function(e){return a("dark")},className:"buttonText "+r+"Text",children:"Linear"}),Object(l.jsx)("h1",{onClick:function(e){return a("light")},className:"buttonText "+r+"Text",children:"Hilbert"}),Object(l.jsx)("div",(t={className:"themeSwitch"},Object(j.a)(t,"className",r+"Switch switch"),Object(j.a)(t,"onClick",(function(){return a("light"===r?"dark":"light")})),Object(j.a)(t,"children",Object(l.jsx)("div",{className:r+"Circle switchCircle"})),t))]})]})},d=Object(c.createContext)(),O=function(e){var t=Object(c.useState)("linear"),n=Object(s.a)(t,2),i=n[0],r=n[1];return Object(l.jsx)(d.Provider,{value:[i,r],children:e.children})};var x=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("/hilbert").then((function(e){return e.json()})).then((function(e){i(e.data)}))}),[]),Object(l.jsx)(O,{children:Object(l.jsx)(b,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"spaceFilling",children:[n&&n.map((function(e){return Object(l.jsx)("div",{className:"row",children:e.map((function(e){return Object(l.jsx)(o,{color:e,height:(window.innerHeight-40)/n.length})}))})})),n&&console.log(n)]})]})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),v()}],[[15,1,2]]]);
//# sourceMappingURL=main.131c0727.chunk.js.map