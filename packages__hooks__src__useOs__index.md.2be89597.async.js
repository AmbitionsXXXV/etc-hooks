(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},hPU5:function(e,t,n){"use strict";var a=n("ahKI"),l=n.n(a),r=n("bIC1"),c=n.n(r);n("nxnQ");function o(e,t){return s(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),i=o(r,2),u=i[0],m=i[1],d=Object(a["useState"])(!1),s=o(d,2),E=s[0],h=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},nxnQ:function(e,t,n){},xcKp:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),l=n.n(a),r=n("Y5pD"),c=n("vlId"),o=n("hPU5"),i=l.a.memo((e=>{var t=e.demos,n=t["useos-example"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"useos"},l.a.createElement(r["AnchorLink"],{to:"#useos","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useOs"),l.a.createElement("p",null,"\u8be5\u81ea\u5b9a\u4e49 Hook \u7528\u4e8e\u83b7\u53d6\u7528\u6237\u64cd\u4f5c\u7cfb\u7edf\u7684\u4fe1\u606f\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],t["useos-example"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u53c2\u6570"},l.a.createElement(r["AnchorLink"],{to:"#\u53c2\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"\u5f53\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u5728\u7ec4\u4ef6\u6302\u8f7d\u65f6\u6216\u8005\u6d4f\u89c8\u5668\u73af\u5883\u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u91cd\u65b0\u83b7\u53d6\u64cd\u4f5c\u7cfb\u7edf\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a true\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a false\uff0c\u5219\u5728\u7ec4\u4ef6\u6302\u8f7d\u65f6\u53ea\u83b7\u53d6\u4e00\u6b21\u64cd\u4f5c\u7cfb\u7edf\u4fe1\u606f"),l.a.createElement("td",null,l.a.createElement("code",null,"{"," getValueInEffect: boolean ","}")),l.a.createElement("td",null,l.a.createElement("code",null,"{"," getValueInEffect = true ","}"))))),l.a.createElement("h3",{id:"returntype"},l.a.createElement(r["AnchorLink"],{to:"#returntype","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"ReturnType"),l.a.createElement("h3",{id:"\u53c2\u6570-1"},l.a.createElement(r["AnchorLink"],{to:"#\u53c2\u6570-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"OS"),l.a.createElement("td",null,"\u5f53\u524d\u7684\u64cd\u4f5c\u7cfb\u7edf\u4fe1\u606f"),l.a.createElement("td",null,l.a.createElement("code",null,"OS: 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'")),l.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:n})}}}]);