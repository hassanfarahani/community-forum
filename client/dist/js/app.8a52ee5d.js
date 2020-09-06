(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],p=0,m=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=(r("422b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("appNav"),r("router-view",{staticClass:"container"})],1)}),o=[],s=r("5530"),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Community")]),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])])}],u={},l=u,p=r("2877"),m=Object(p["a"])(l,i,c,!1,null,null,null),g=m.exports,f=r("2f62"),d={components:{appNav:g},methods:Object(s["a"])({},Object(f["b"])(["login","loadCategories"])),mounted:function(){this.login(localStorage.getItem("token")),this.loadCategories()}},v=d,h=Object(p["a"])(v,a,o,!1,null,null,null),b=h.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list-group"},t._l(t.categories,(function(e){return r("a",{key:e.id,staticClass:"list-group-item list-group-item-action flex-column align-items-start",attrs:{href:"#"}},[r("div",{staticClass:"d-flex w-100 justify-content-between"},[r("h5",{staticClass:"mb-1"},[t._v(t._s(e.title))])]),r("p",{staticClass:"mb-1"},[t._v(t._s(e.description))])])})),0)},C=[],w={props:["categories"]},_=w,j=Object(p["a"])(_,y,C,!1,null,null,null),O=j.exports,x=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"jumbotron"},[r("h1",{staticClass:"display-3"},[t._v("Welcome to Community!")]),r("p",{staticClass:"lead"},[t._v("A fully open source forum made by Hassan.")]),r("hr",{staticClass:"my-4"}),r("p",[t._v("This forum is all about community. Be kind! Be Helpful!")]),r("p",{staticClass:"lead"},[t.user?t._e():r("a",{staticClass:"btn btn-warning btn-lg",attrs:{href:t.getLoginURL,role:"button"}},[t._v("Login with Google")]),r("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{else:"",to:{name:"forum"},role:"button"}},[t._v("Go to Forum")])],1)])])},$=[],S={name:"home",computed:Object(s["a"])(Object(s["a"])({},Object(f["c"])(["user"])),{},{getLoginURL:function(){return"localhost"===window.location.hostname?"http://localhost:3000/auth/google":"https://community-forum-server.herokuapp.com/auth/google"}})},R=S,T=Object(p["a"])(R,k,$,!1,null,null,null),P=T.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[t._v("logging in ...")])},L=[],N={name:"login-token",mounted:function(){var t=this.$route.params.token;t?(this.login(t),this.$router.push({name:"forum"})):this.$router.push({name:"Home"})},methods:Object(s["a"])({},Object(f["b"])(["login"]))},A=N,I=Object(p["a"])(A,E,L,!1,null,null,null),U=I.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mt-3"},[r("category-list",{attrs:{categories:t.categories}})],1)},J=[],M={computed:Object(s["a"])({},Object(f["c"])(["categories"]))},B=M,H=Object(p["a"])(B,F,J,!1,null,null,null),q=H.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("Community Settings")]),r("category-list",{attrs:{categories:t.categories}}),r("div",{staticClass:"mt-4"},[r("h3",[t._v("Add Category")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.addCategory(t.newCategory)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[t._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategory.title,expression:"newCategory.title"}],staticClass:"form-control",attrs:{id:"title",required:""},domProps:{value:t.newCategory.title},on:{input:function(e){e.target.composing||t.$set(t.newCategory,"title",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("Example textarea")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newCategory.description,expression:"newCategory.description"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3",required:""},domProps:{value:t.newCategory.description},on:{input:function(e){e.target.composing||t.$set(t.newCategory,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategory.image_url,expression:"newCategory.image_url"}],staticClass:"form-control",attrs:{id:"image"},domProps:{value:t.newCategory.image_url},on:{input:function(e){e.target.composing||t.$set(t.newCategory,"image_url",e.target.value)}}})]),r("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Add Category")])])])],1)},z=[],D=(r("96cf"),r("1da1")),W={data:function(){return{newCategory:{title:"",description:"",image_url:""}}},created:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.isAdmin(),r||t.$router.push({name:"Forum"});case 2:case"end":return e.stop()}}),e)})))()},computed:Object(s["a"])({},Object(f["c"])(["categories"])),methods:Object(s["a"])({},Object(f["b"])(["isAdmin","addCategory"]))},K=W,Q=Object(p["a"])(K,G,z,!1,null,null,null),V=Q.exports,X=(r("ac1f"),r("5319"),r("1276"),r("d3b7"),"https://community-forum-server.herokuapp.com/");"localhost"===window.location.hostname&&(X="http://localhost:3000");var Y="".concat(X,"api/v1/");function Z(){return tt.apply(this,arguments)}function tt(){return tt=Object(D["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(Y,"categories"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)}))),tt.apply(this,arguments)}function et(t){return rt.apply(this,arguments)}function rt(){return rt=Object(D["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(Y,"categories"),{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json",authorization:"Bearer ".concat(localStorage.token)}});case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)}))),rt.apply(this,arguments)}n["a"].use(f["a"]);var nt=new f["a"].Store({state:{token:"",user:null,categories:[]},mutations:{setToken:function(t,e){t.token=e},setUser:function(t,e){t.user=JSON.parse(e)},setCategories:function(t,e){t.categories=e},pushCategory:function(t,e){t.categories.push(e)}},actions:{login:function(t,e){var r=t.commit;if(e){r("setToken",e),localStorage.setItem("token",e);var n=e.split(".")[1],a=n.replace(/-/g,"+").replace(/_/g,"/"),o=window.atob(a);r("setUser",o)}else r("setToken",""),r("setUser",null)},isAdmin:function(t){var e=t.state;return 3===e.user.role_id},loadCategories:function(t){return Object(D["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Z();case 3:n=e.sent,r("setCategories",n);case 5:case"end":return e.stop()}}),e)})))()},addCategory:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,et(e);case 3:a=r.sent,n("pushCategory",a);case 5:case"end":return r.stop()}}),r)})))()}},getters:{isLoggedIn:function(t){return!!t.user}},modules:{}});n["a"].use(x["a"]);var at=[{path:"/",name:"home",component:P},{path:"/login/token/:token",name:"login-token",component:U},{path:"/forum",name:"forum",component:q},{path:"/admin",name:"admin",component:V,beforeEnter:function(t,e,r){nt.getters.isLoggedIn?r():r({name:"home"})}}],ot=new x["a"]({base:"/",routes:at}),st=ot;n["a"].config.productionTip=!1,n["a"].component("category-list",O),new n["a"]({router:st,store:nt,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.8a52ee5d.js.map