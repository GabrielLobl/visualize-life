(this.webpackJsonpvisualize=this.webpackJsonpvisualize||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=(n(10),n(1)),l=n(2),u=n.n(l);n(12);var s=function(){var e={month:27,year:6,week:65},t={month:40,year:15,week:72},n=Object(a.useState)(0),o=Object(i.a)(n,2),c=o[0],l=o[1],s=Object(a.useState)(!1),d=Object(i.a)(s,2),m=d[0],p=d[1],g=Object(a.useState)("month"),h=Object(i.a)(g,2),f=h[0],b=h[1],y=Object(a.useState)([]),v=Object(i.a)(y,2),E=v[0],w=v[1];Object(a.useEffect)((function(){console.log(f),w((function(){console.log("grid with new time ".concat(f));for(var n=[],a=function(e){n.push(Array.from(Array(t[f]),(function(n,a){return a+e*t[f]})))},r=0;r<e[f];r++)a(r);return n}))}),[f]);var k=r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"field",autoFocus:!0,value:c||"",onChange:function(e){return l(e.target.value)}}),r.a.createElement("button",{className:"btn",onClick:function(e){e.preventDefault(),p(!0)},style:{fontWeight:700}},"visualize")),C=function(){return console.log("renders "+f),r.a.createElement(u.a,{transitionDuration:2e3},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(t[f],", 28px)"),justifyContent:"center",paddingTop:"20px"}},E.map((function(e,t){return e.map((function(e,n){return r.a.createElement("div",{key:"".concat(t,"-").concat(n),style:{width:20,height:20,margin:3,backgroundColor:E[t][n]<12*c?"white":void 0,border:"solid 1px",borderColor:"rgba(255, 255, 255, ".concat(1-t/27,")"),borderRadius:20}})}))}))))},j=function(){return console.log("renders "+f),r.a.createElement(u.a,{transitionDuration:2e3},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(t[f],", 81px)"),justifyContent:"center",paddingTop:"20px"}},E.map((function(e,t){return e.map((function(e,n){return r.a.createElement("div",{key:"".concat(t,"-").concat(n),style:{width:60,height:60,margin:10,backgroundColor:E[t][n]<c?"white":void 0,border:"solid 1px",borderColor:"rgba(255, 255, 255, ".concat(1-t/6,")"),borderRadius:10}})}))}))))},x=function(){return console.log("renders "+f),r.a.createElement(u.a,{transitionDuration:3e3},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(t[f],", 14px)"),justifyContent:"center",paddingTop:"20px"}},E.map((function(e,t){return e.map((function(e,n){return r.a.createElement("div",{key:"".concat(t,"-").concat(n),style:{width:8,height:8,margin:2,backgroundColor:E[t][n]<52*c?"white":void 0,border:"solid 0.1px rgba(255, 255, 255, ".concat(1-t/65,")"),borderRadius:8}})}))}))))},O={month:r.a.createElement(C,null),year:r.a.createElement(j,null),week:r.a.createElement(x,null)},T=r.a.createElement("button",{className:"btn",onClick:function(){switch(f){case"month":b("year");break;case"year":b("week");break;case"week":b("month")}},style:{fontWeight:700}},f,"s");return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},m?r.a.createElement(r.a.Fragment,null," your life in",T):"enter your age:"),r.a.createElement(r.a.Fragment,null,m?O[f]:k))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.87d7a028.chunk.js.map