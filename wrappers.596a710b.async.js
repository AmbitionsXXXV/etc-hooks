(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{MZF8:function(e,t,n){"use strict";var o=n("ogwx");n.d(t,"a",(function(){return o["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var o=n("mn0l"),r=n("ahKI"),s=n.n(r),i=n("RGYn"),u=n("DBVu"),a=n("GAyR"),l=n("7JWa"),c="import React from 'react'\nimport { useBoolean } from 'etc-hooks'\n\nexport default () => {\n  const [state, { toggle, setTrue, setFalse }] = useBoolean(true)\n\n  return (\n    <div>\n      <p>Effects\uff1a{JSON.stringify(state)}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={setFalse} style={{ margin: '0 16px' }}>\n          setFalse\n        </button>\n        <button type=\"button\" onClick={setTrue}>\n          setTrue\n        </button>\n      </p>\n    </div>\n  )\n}",p="import React from 'react'\nimport { useTitle } from 'etc-hooks'\n\nexport default () => {\n  useTitle('Page Title')\n\n  return (\n    <div>\n      <p>Set title of this page.</p>\n    </div>\n  )\n}",b="import React from 'react'\nimport { useToggle } from 'etcHooks'\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle()\n\n  return (\n    <div>\n      <p>\u5f53\u524d\u7684 state \u7684\u503c\u4e3a: {`${state}`}</p>\n      <p>\n        <button onClick={toggle}>toggle\u5207\u6362</button>\n        <button onClick={setLeft}>setLeft\u5207\u6362</button>\n        <button onClick={setRight}>setRight\u5207\u6362</button>\n      </p>\n    </div>\n  )\n}",g="import React from 'react'\nimport { useToggle } from 'etcHooks'\n\nexport default () => {\n  const [state, { toggle, set, setLeft, setRight }] = useToggle('OOR', 'Aimyon')\n\n  return (\n    <div>\n      <p>Effects\uff1a{state}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" style={{ margin: '0 8px' }} onClick={() => set('OOR')}>\n          Set OOR\n        </button>\n        <button type=\"button\" onClick={() => set('Aimyon')}>\n          Set Aimyon\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          setLeft\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          setRight\n        </button>\n      </p>\n    </div>\n  )\n}",d={"useboolean-example":{component:Object(l["dynamic"])({loader:function(){var e=Object(a["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"lbCV"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:c}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"etc-hooks":{version:"0.1.1"}},hideActions:["CSB"],identifier:"useboolean-example"}},"usetitle-example":{component:Object(l["dynamic"])({loader:function(){var e=Object(a["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"PgAO"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"etc-hooks":{version:"0.1.1"}},hideActions:["CSB"],identifier:"usetitle-example"}},"usetoggle-example":{component:Object(l["dynamic"])({loader:function(){var e=Object(a["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"ezlC"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-example"}},"usetoggle-example2":{component:Object(l["dynamic"])({loader:function(){var e=Object(a["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"0meg"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-example2"}}},h=n("Zs1V"),f=n("ENuX"),m=n.n(f);t["default"]=e=>s.a.createElement(m.a,Object(o["a"])({},e,{config:i,demos:d,apis:h}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-boolean","title":"useBoolean"},{"path":"/hooks/use-toggle","title":"useToggle"}]},{"title":"DOM","children":[{"path":"/hooks/use-title","title":"useTitle"}]}],"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"},{"title":"GitHub","path":"https://github.com/AmbitionsXXXV/etc-hooks"}]},"title":"Etcetera hooks","logo":"/etc-hooks/short-logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);