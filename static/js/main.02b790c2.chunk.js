(this["webpackJsonphilbert-web-app"]=this["webpackJsonphilbert-web-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(5),a=n.n(r),s=(n(10),n(11),n(3)),l=n(2),o=(n(12),n(0)),j=Object(c.createContext)(),u=function(e){var t=Object(c.useState)("light"),n=Object(l.a)(t,2),i=n[0],r=n[1];return Object(o.jsx)(j.Provider,{value:[i,r],children:e.children})};var b=function(e){e.color,e.height;var t,n=Object(c.useContext)(j),i=Object(l.a)(n,2),r=i[0],a=i[1];return Object(o.jsxs)("nav",{className:"Navbar "+r+"Bar",children:[Object(o.jsxs)("h1",{className:"titleText "+r+"TitleText",children:[Object(o.jsx)("span",{className:"bold",children:"Tarun Ravi's "}),"Space Filling Curve"]}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("h1",{onClick:function(e){return a("dark")},className:"buttonText "+r+"Text",children:"Linear"}),Object(o.jsx)("h1",{onClick:function(e){return a("light")},className:"buttonText "+r+"Text",children:"Hilbert"}),Object(o.jsx)("div",(t={className:"themeSwitch"},Object(s.a)(t,"className",r+"Switch switch"),Object(s.a)(t,"onClick",(function(){return a("light"===r?"dark":"light")})),Object(s.a)(t,"children",Object(o.jsx)("div",{className:r+"Circle switchCircle"})),t))]})]})};n(14),n(15);var h=function(e){var t=e.color,n=e.height;console.log(window.innerHeight);var c={backgroundColor:t,flex:1,width:"100%",height:n+"px",zIndex:"1"};return Object(o.jsx)("div",{className:"box",style:c})},d=Object(c.createContext)(),O=function(e){var t=Object(c.useState)("linear"),n=Object(l.a)(t,2),i=n[0],r=n[1];return Object(o.jsx)(d.Provider,{value:[i,r],children:e.children})};var x=function(){var e=Object(c.useContext)(d),t=Object(l.a)(e,2),n=t[0],i=(t[1],Object(c.useState)(0)),r=Object(l.a)(i,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){fetch("/"+n).then((function(e){return e.json()})).then((function(e){s(e.data)}))}),[]),Object(o.jsx)("div",{className:"spaceFilling",children:a&&a.map((function(e){return Object(o.jsx)("div",{className:"row",children:e.map((function(e){return Object(o.jsx)(h,{color:e,height:(window.innerHeight-40)/a.length})}))})}))})};var f=function(){return Object(o.jsx)(O,{children:Object(o.jsx)(u,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{}),Object(o.jsx)(x,{})]})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),v()}],[[16,1,2]]]);
//# sourceMappingURL=main.02b790c2.chunk.js.map