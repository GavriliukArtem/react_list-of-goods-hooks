(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c,s=n(5),o=n.n(s),i=n(4),r=n(2),a=n.n(r),l=n(1),u=(n(10),n(11),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.SORT_ABC="Sort ABC",t.SORT_LENGTH="Sort by length"}(c||(c={}));var h=function(){var t=Object(l.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(l.useState)(!1),r=Object(i.a)(o,2),h=r[0],j=r[1],O=[].concat(b);if(n){switch(n){case c.SORT_ABC:O=O.sort((function(t,e){return t.localeCompare(e)}));break;case c.SORT_LENGTH:O=O.sort((function(t,e){return t.length-e.length}))}h&&O.reverse()}!n&&h&&O.reverse();return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:a()("button","is-info",{"is-light":n!==c.SORT_ABC}),onClick:function(){return s(c.SORT_ABC)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:a()("button","is-success",{"is-light":n!==c.SORT_LENGTH}),onClick:function(){return s(c.SORT_LENGTH)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:a()("button","is-warning",{"is-light":!h}),onClick:function(){return j(!h)},children:"Reverse"}),(n||h)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),j(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:O.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6d704511.chunk.js.map