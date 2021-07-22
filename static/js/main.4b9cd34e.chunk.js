(this["webpackJsonphilbert-web-app"]=this["webpackJsonphilbert-web-app"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(26),i=c.n(r),s=(c(34),c(14)),b=c(3),l=(c(35),c(36),c(11)),o=c(4),j=(c(37),c(1)),u=Object(n.createContext)(),h=function(e){var t=Object(n.useState)("light"),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(j.jsx)(u.Provider,{value:[a,r],children:e.children})},d=Object(n.createContext)(),O=function(e){var t=Object(n.useState)("linear"),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(j.jsx)(d.Provider,{value:[a,r],children:e.children})};var x=function(e){e.color,e.height;var t,c=Object(n.useContext)(u),a=Object(o.a)(c,2),r=a[0],i=a[1],s=Object(n.useContext)(d),b=Object(o.a)(s,2),h=b[0],O=b[1];return Object(j.jsxs)("nav",{className:"Navbar "+r+"Bar",children:[Object(j.jsxs)("h1",{className:"titleText "+r+"TitleText",children:[Object(j.jsx)("span",{className:"bold",children:"Tarun Ravi's "}),"Space Filling Curve"]}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("h1",{onClick:function(){return O("linear")},className:"buttonText "+r+"Text"+("linear"===h?" selected"+r:""),children:"Linear"}),Object(j.jsx)("h1",{onClick:function(){return O("hilbert")},className:"buttonText "+r+"Text"+("hilbert"===h?" selected"+r:""),children:"Hilbert"}),Object(j.jsx)("div",(t={className:"themeSwitch"},Object(l.a)(t,"className",r+"Switch switch"),Object(l.a)(t,"onClick",(function(){return i("light"===r?"dark":"light")})),Object(l.a)(t,"children",Object(j.jsx)("div",{className:r+"Circle switchCircle"})),t))]})]})};c(39),c(40);var f=function(e){var t=e.colorCode,c=Object(n.useContext)(u),a=Object(o.a)(c,2),r=a[0],i=(a[1],"#000000");if("light"===r)switch(t){case"0":i="rgb(242,242,247)";break;case"1":i="rgb(229,229,234)";break;case"2":i="rgb(219,219,219)";break;case"3":i="rgb(199,199,204)";break;case"4":i="rgb(174,174,178)";break;case"5":i="rgb(142,142,147)"}else switch(t){case"0":i="rgb(142,142,147)";break;case"1":i="rgb(99,99,102)";break;case"2":i="rgb(72,72,74)";break;case"3":i="rgb(58,58,60)";break;case"4":i="rgb(44,44,46)";break;case"5":i="rgb(28,28,30)"}var s={backgroundColor:i,flex:1,width:"100%",height:"100%",zIndex:"1"};return Object(j.jsx)("div",{className:"box",style:s})},g=c(29);var v=function(){var e=Object(n.useContext)(d),t=Object(o.a)(e,2),c=t[0],a=(t[1],Object(n.useContext)(u)),r=Object(o.a)(a,2),i=r[0],s=(r[1],Object(n.useState)(0)),b=Object(o.a)(s,2),l=b[0],h=b[1],O=Object(n.useState)(!1),x=Object(o.a)(O,2),v=(x[0],x[1],Object(n.useState)(!0)),m=Object(o.a)(v,2),p=(m[0],m[1],Object(n.useState)(null)),C=Object(o.a)(p,2);return C[0],C[1],Object(n.useEffect)((function(){fetch("/"+c).then((function(e){return e.json()})).then((function(e){console.log(e),h(e.data)}))}),[c]),Object(j.jsxs)("div",{className:"spaceFilling "+i,children:[l&&Object(j.jsx)(g.a,{className:"Grid",columnCount:l[0].length,columnWidth:100,height:window.innerHeight-40,rowCount:l.length,rowHeight:70,width:window.innerWidth,children:function(e){var t=e.columnIndex,c=e.rowIndex,n=e.style;return Object(j.jsx)("div",{className:t%2?c%2===0?"GridItemOdd":"GridItemEven":c%2?"GridItemOdd":"GridItemEven",style:n,children:Object(j.jsx)(f,{colorCode:l[c][t]})})}}),!l&&Object(j.jsx)("div",{children:Object(j.jsx)("h3",{children:"loading..."})})]})};var m=function(){return Object(j.jsx)(O,{children:Object(j.jsx)(h,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{}),Object(j.jsx)(v,{})]})})})},p=c(27),C=c.n(p);var w=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(b.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"file",name:"file",onChange:function(e){a(e.target.files[0])}}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault();var t=new FormData;t.append("file",c),C.a.post("/api/upload",t).then((function(e){return console.log(e)})).catch((function(e){return console.warn(e)})),r.push("/Main")},children:"Upload"})]})};var k=function(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{path:"/",exact:!0,component:w}),Object(j.jsx)(b.a,{path:"/main",component:m})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),N()}},[[64,1,2]]]);
//# sourceMappingURL=main.4b9cd34e.chunk.js.map