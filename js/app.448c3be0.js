(function(){"use strict";var e={2830:function(e,t,n){var o=n(144),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],s=n(1001),l={},a=(0,s.Z)(l,r,i,!1,null,null,null),u=a.exports,c=n(8345),f=function(){var e=this,t=e._self._c;return t("div",[t("MyHeader"),t("MyLeft"),t("MyCenter")],1)},d=[],p=function(){var e=this;e._self._c;return e._m(0)},h=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"top"},[t("div",[e._v("世间数百年旧家无非积德，天下第一件好事还是读书")])])}],m={},v=(0,s.Z)(m,p,h,!1,null,"22bf5e6f",null),b=v.exports,y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"left"},[t("el-radio-group",{staticStyle:{"margin-bottom":"20px"},model:{value:e.isCollapse,callback:function(t){e.isCollapse=t},expression:"isCollapse"}},[t("el-radio-button",{attrs:{label:!1}},[e._v("展开")]),t("el-radio-button",{attrs:{label:!0}},[e._v("收起")])],1),t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"/economics",collapse:e.isCollapse,router:!0},on:{open:e.handleOpen,close:e.handleClose}},[t("el-menu-item",{attrs:{index:"/economics"}},[t("i",{staticClass:"el-icon-s-flag"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("经济学")])]),t("el-menu-item",{attrs:{index:"/MedicalScience"}},[t("i",{staticClass:"el-icon-share"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("医学")])]),t("el-menu-item",{attrs:{index:"/Psychology"}},[t("i",{staticClass:"el-icon-view"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("心理学")])]),t("el-menu-item",{attrs:{index:"/Philosophy"}},[t("i",{staticClass:"el-icon-refresh"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("宗哲")])]),t("el-menu-item",{attrs:{index:"/History"}},[t("i",{staticClass:"el-icon-tickets"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("历史")])]),t("el-menu-item",{attrs:{index:"/Novel"}},[t("i",{staticClass:"el-icon-ship"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("小说")])]),t("el-menu-item",{attrs:{index:"/Biography"}},[t("i",{staticClass:"el-icon-user"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("人物传记")])]),t("el-menu-item",{attrs:{index:"/Literature"}},[t("i",{staticClass:"el-icon-sunrise-1"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("文学")])]),t("el-menu-item",{attrs:{index:"/Metaphysics"}},[t("i",{staticClass:"el-icon-moon"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("玄学")])])],1)],1)},g=[],C={data(){return{isCollapse:!0}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)}}},_=C,w=(0,s.Z)(_,y,g,!1,null,null,null),x=w.exports,k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"center"},[t("router-view")],1)},O=[],M={},P=(0,s.Z)(M,k,O,!1,null,null,null),S=P.exports,j={components:{MyHeader:b,MyLeft:x,MyCenter:S}},E=j,T=(0,s.Z)(E,f,d,!1,null,"6c56c9da",null),A=T.exports;o["default"].use(c.Z);const L=[{path:"/",name:"integrate",component:A,redirect:"/economics",children:[{path:"/economics",component:()=>n.e(234).then(n.bind(n,9234))},{path:"/Biography",component:()=>n.e(291).then(n.bind(n,7291))},{path:"/History",component:()=>n.e(52).then(n.bind(n,3052))},{path:"/Literature",component:()=>n.e(478).then(n.bind(n,478))},{path:"/MedicalScience",component:()=>n.e(387).then(n.bind(n,387))},{path:"/Metaphysics",component:()=>n.e(706).then(n.bind(n,706))},{path:"/Novel",component:()=>n.e(390).then(n.bind(n,2390))},{path:"/Philosophy",component:()=>n.e(160).then(n.bind(n,3160))},{path:"/Psychology",component:()=>n.e(935).then(n.bind(n,3935))}]}],N=new c.Z({base:"",routes:L});var Z=N,B=n(629);o["default"].use(B.ZP);var H=new B.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),F=n(4720),q=n.n(F);o["default"].use(q()),o["default"].config.productionTip=!1,new o["default"]({router:Z,store:H,render:e=>e(u)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,a=0;a<o.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(l=!1,i<s&&(s=i));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{52:"5a86b70a",160:"b5680b5b",234:"e2e95e9e",291:"5a29ef55",387:"7d078cee",390:"104bd412",478:"6d83f14d",706:"57f62360",935:"54608a28"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{52:"9e0f1337",160:"9e0f1337",234:"9e0f1337",387:"9e0f1337",478:"9e0f1337",706:"9e0f1337",935:"9e0f1337"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="books:";n.l=function(o,r,i,s){if(e[o])e[o].push(r);else{var l,a;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){l=f;break}}l||(a=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=o),e[o]=[r];var d=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),a&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var s=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=s,a.request=l,r.parentNode.removeChild(r),o(a)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var s=n.miniCssF(o),l=n.p+s;if(t(s,l))return r();e(o,l,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={52:1,160:1,234:1,387:1,478:1,706:1,935:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var s=n.p+n.u(t),l=new Error,a=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,r[1](l)}};n.l(s,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],l=o[1],a=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(a)var c=a(n)}for(t&&t(o);u<s.length;u++)i=s[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkbooks"]=self["webpackChunkbooks"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2830)}));o=n.O(o)})();
//# sourceMappingURL=app.448c3be0.js.map