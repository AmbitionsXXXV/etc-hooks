(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0meg":function(t,e,n){"use strict";n.r(e);var a=n("iojd"),l=n("ahKI"),o=n.n(l),c=n("L2hj");e["default"]=()=>{var t=Object(c["a"])("OOR","Aimyon"),e=Object(a["a"])(t,2),n=e[0],l=e[1],r=l.toggle,i=l.set,u=l.setLeft,s=l.setRight;return o.a.createElement("div",null,o.a.createElement("p",null,"Effects\uff1a",n),o.a.createElement("p",null,o.a.createElement("button",{type:"button",onClick:r},"Toggle"),o.a.createElement("button",{type:"button",style:{margin:"0 8px"},onClick:()=>i("OOR")},"Set OOR"),o.a.createElement("button",{type:"button",onClick:()=>i("Aimyon")},"Set Aimyon"),o.a.createElement("button",{type:"button",onClick:u,style:{margin:"0 8px"}},"setLeft"),o.a.createElement("button",{type:"button",onClick:s},"setRight")))}},L2hj:function(t,e,n){"use strict";var a=n("iojd"),l=n("ahKI");function o(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=Object(l["useState"])(t),o=Object(a["a"])(n,2),c=o[0],r=o[1],i=Object(l["useMemo"])((()=>{var n=void 0===e?!t:e,a=()=>r((e=>e===t?n:t)),l=t=>r(t),o=()=>r(t),c=()=>r(n);return{set:l,toggle:a,setLeft:o,setRight:c}}),[]);return[c,i]}e["a"]=o},ezlC:function(t,e,n){"use strict";n.r(e);var a=n("iojd"),l=n("ahKI"),o=n.n(l),c=n("L2hj");e["default"]=()=>{var t=Object(c["a"])(),e=Object(a["a"])(t,2),n=e[0],l=e[1],r=l.toggle,i=l.setLeft,u=l.setRight;return o.a.createElement("div",null,o.a.createElement("p",null,"\u5f53\u524d\u7684 state \u7684\u503c\u4e3a: ","".concat(n)),o.a.createElement("p",null,o.a.createElement("button",{onClick:r},"toggle\u5207\u6362"),o.a.createElement("button",{onClick:i},"setLeft\u5207\u6362"),o.a.createElement("button",{onClick:u},"setRight\u5207\u6362")))}}}]);