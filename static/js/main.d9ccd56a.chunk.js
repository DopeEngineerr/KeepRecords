(this.webpackJsonpkeep=this.webpackJsonpkeep||[]).push([[0],{12:function(e,t,n){},41:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(13),l=n.n(s),a=(n(41),n(33)),r=n(22),o=(n(12),n(2)),j=function(){var e=(new Date).getFullYear();return Object(o.jsx)("div",{children:Object(o.jsx)("footer",{id:"MyFoot",children:Object(o.jsx)("div",{className:"page-footer white",children:Object(o.jsx)("div",{class:"footer-copyright indigo lighten-5",children:Object(o.jsxs)("div",{class:"container center indigo-text ",id:"foot",children:["\xa9 ",e," My Records Corp."]})})})})})},d=n(26),u=n(30),b=function(e){return Object(o.jsx)("button",{href:"#",class:"btn-floating indigo waves-effect waves-light right",onClick:e.onSelect,children:Object(o.jsx)("i",{class:"material-icons",children:"add"})})},h=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(r.a)(t,2),i=n[0],s=n[1],l=Object(c.useState)(!1),a=Object(r.a)(l,2),j=a[0],h=a[1],O=function(e){var t=e.target,n=t.name,c=t.value;s((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},n,c))}))},x=function(){h(!0)};return Object(o.jsx)("div",{className:"input2",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col l4 s12 offset-l4",children:Object(o.jsx)("div",{className:"z-depth-1 indigo lighten-5",children:Object(o.jsxs)("div",{className:"",id:"input",onDoubleClick:function(){h(!1)},onClick:x,children:[j?Object(o.jsxs)("div",{className:"input-field",children:[Object(o.jsx)("input",{type:"text",id:"title",name:"title",autoComplete:"off",value:i.title,onChange:O,required:!0}),Object(o.jsx)("label",{htmlFor:"",for:"title",children:"Title"})]}):null,Object(o.jsxs)("div",{className:"input-field",children:[Object(o.jsx)("textarea",{name:"content",id:"content",className:"materialize-textarea",cols:"30",rows:"10",value:i.content,onChange:O,onClick:x,required:!0}),Object(o.jsx)("label",{htmlFor:"",for:"content",children:"Write a note"}),j?Object(o.jsxs)("div",{className:"myButton",children:[Object(o.jsx)("br",{}),Object(o.jsx)(b,{onSelect:function(){e.passNote(i),s({title:"",content:""})}})]}):null]})]})})})})})},O=n(73),x=n(78),f=n(75),m=n(76),v=n(77),g=n(32),p=n.n(g),N=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function w(){var e=N();return Object(o.jsx)("div",{className:e.root,children:Object(o.jsx)(x.a,{position:"static",children:Object(o.jsxs)(f.a,{children:[Object(o.jsx)(v.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(o.jsx)(p.a,{})}),Object(o.jsx)(m.a,{variant:"h6",className:e.title,id:"myRec",children:"My Records"})]})})})}var C=function(e){return Object(o.jsx)("div",{className:"col s12 m6 l3",id:"",children:Object(o.jsx)("div",{className:"z-depth-1 indigo lighten-5 hello",id:"input",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"input-field",children:Object(o.jsx)("h5",{className:"indigo-text",id:"myTitle",children:e.title})}),Object(o.jsxs)("div",{className:"input-field",children:[Object(o.jsx)("h7",{id:"myContent",children:e.content}),Object(o.jsx)("div",{className:"add",children:Object(o.jsx)("button",{href:"#",class:"btn-floating indigo waves-effect waves-light right",children:Object(o.jsx)("i",{class:"material-icons",onClick:function(t){t.preventDefault(),e.deleteItem(e.id)},children:"delete"})})})]})]})})})},y=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],s=function(e){i((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(o.jsx)("div",{className:"project",children:Object(o.jsxs)("div",{className:"top",children:[Object(o.jsx)(w,{}),Object(o.jsx)(h,{passNote:function(e){i((function(t){return[].concat(Object(a.a)(t),[e])}))}}),Object(o.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(o.jsx)(C,{id:t,title:e.title,content:e.content,deleteItem:s},t)}))}),Object(o.jsx)(j,{})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),i(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),k()}},[[52,1,2]]]);
//# sourceMappingURL=main.d9ccd56a.chunk.js.map