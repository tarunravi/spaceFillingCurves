(this["webpackJsonphilbert-web-app"]=this["webpackJsonphilbert-web-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(3),a=n.n(s),r=(n(9),n(4)),o=(n(10),n(11),n(0));var l=function(e){var t=e.color,n=e.height;console.log(window.innerHeight);var c={backgroundColor:t,flex:1,width:"100%",height:n+"px",zIndex:"1"};return Object(o.jsx)("div",{className:"box",style:c})};n(13);var h=function(e){return e.color,e.height,Object(o.jsxs)("nav",{className:"Navbar",children:[Object(o.jsxs)("h1",{className:"titleText",children:[Object(o.jsx)("span",{className:"bold",children:"Tarun Ravi's "}),"Space Filling Curve"]}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("h1",{className:"buttonText",children:"Linear"}),Object(o.jsx)("h1",{className:"buttonText",children:"Hilbert"})]})]})};var u=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("/linear").then((function(e){return e.json()})).then((function(e){i(e.data)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(h,{}),Object(o.jsxs)("div",{className:"spaceFilling",children:[n&&n.map((function(e){return Object(o.jsx)("div",{className:"row",children:e.map((function(e){return Object(o.jsx)(l,{color:e,height:(window.innerHeight-40)/n.length})}))})})),n&&console.log(n)]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.5cde74c9.chunk.js.map