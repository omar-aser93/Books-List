(this.webpackJsonpreading_list=this.webpackJsonpreading_list||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),o=n.n(l),u=(n(13),n(14),n(7)),i=n(1),c=n(6),s=n.n(c),m=Object(a.createContext)(),d=function(e){var t=Object(a.useState)([{title:"The lord of the rings",auther:"J.R.R. Tolkien",id:0,isCompleted:!1},{title:"Game of thrones",auther:"George R.R. Martin",id:1,isCompleted:!1}]),n=Object(i.a)(t,2),l=n[0],o=n[1];Object(a.useEffect)((function(){null!==localStorage.getItem("books")&&JSON.parse(localStorage.getItem("books")),o(JSON.parse(localStorage.getItem("books")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("books",JSON.stringify(l))}),[l]);return r.a.createElement(m.Provider,{value:{Books:l,addBooks:function(e,t){return o([].concat(Object(u.a)(l),[{title:e,auther:t,id:s()(),isCompleted:!1}]))},removeBooks:function(e){return o(l.filter((function(t){return t.id!==e})))},editBooks:function(e,t,n){var a=l.map((function(a){return a.id===e?{title:t,auther:n,id:e,isCompleted:!1}:a}));o(a)},editAuther:function(e,t,n){var a=l.map((function(a){return a.id===e?{title:n,auther:t,id:e,isCompleted:!1}:a}));o(a)},completedBook:function(e,t,n,a){var r=l.map((function(r){return r.id===e?{title:t,auther:n,id:e,isCompleted:!a}:r}));o(r)}}},e.children)},f=function(e){var t=e.Book,n=Object(a.useContext)(m),l=n.removeBooks,o=n.editBooks,u=n.editAuther,c=n.completedBook,s=Object(a.useRef)(),d=Object(a.useRef)(),f=Object(a.useState)(1),h=Object(i.a)(f,2),p=h[0],E=h[1],v=function(e){e.preventDefault(),o(t.id,s.current.value,t.auther),E(1)},b=function(e){e.preventDefault(),u(t.id,d.current.value,t.title),E(1)};return r.a.createElement(a.Fragment,null,1===p?r.a.createElement("li",null,r.a.createElement("div",{className:"title",style:{textDecoration:t.isCompleted?"line-through":""},onClick:function(){return E(2)}}," ",t.title," "),r.a.createElement("div",{className:"auther",style:{textDecoration:t.isCompleted?"line-through":""},onClick:function(){return E(3)}}," ",t.auther,"  "),r.a.createElement("button",{className:"f",onClick:function(){return c(t.id,t.title,t.auther,t.isCompleted)}},"Finished / Unfinished  "),r.a.createElement("button",{className:"r",onClick:function(){return l(t.id)}},"Remove")):2===p?r.a.createElement("form",{className:"editForm",onSubmit:v},r.a.createElement("input",{type:"text",defaultValue:t.title,ref:s,required:!0}),r.a.createElement("div",{className:"auther"},t.auther)):r.a.createElement("form",{className:"editForm",onSubmit:b},r.a.createElement("div",{className:"title"},t.title),r.a.createElement("input",{type:"auther",defaultValue:t.auther,ref:d,required:!0}))," ")},h=function(){var e=Object(a.useContext)(m).Books;return e.length?r.a.createElement("div",{className:"list"},r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(f,{Book:e,key:e.id})}))),r.a.createElement("p",null,"* click on the title or auther name to edit it's value")):r.a.createElement("div",{className:"noBooks"},"There is no Books to read ... Please enter new ones")},p=function(){var e=Object(a.useContext)(m).addBooks,t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],o=n[1],u=Object(a.useState)(""),c=Object(i.a)(u,2),s=c[0],d=c[1];return r.a.createElement("form",{className:"addForm",onSubmit:function(t){t.preventDefault(),e(l,s),o(""),d("")}},r.a.createElement("input",{type:"text",placeholder:"Enter title ...",value:l,onChange:function(e){return o(e.target.value)},required:!0}),r.a.createElement("input",{type:"text",placeholder:"Enter auther's name ...",value:s,onChange:function(e){return d(e.target.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"Add Book",className:"addButton"}))},E=function(){var e=Object(a.useContext)(m).Books;return r.a.createElement("nav",null,r.a.createElement("h1",null,"Welcome to your books reading list"),r.a.createElement("h4",null,"You have ",r.a.createElement("span",null,e.length)," Books on your reading list"),r.a.createElement("hr",null))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null,r.a.createElement(E,null),r.a.createElement(p,null),r.a.createElement(h,null)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c4a68fd0.chunk.js.map