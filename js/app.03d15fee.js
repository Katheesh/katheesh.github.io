(function(t){function a(a){for(var s,i,l=a[0],n=a[1],c=a[2],v=0,d=[];v<l.length;v++)i=l[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);f&&f(a);while(d.length)d.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(s=!1)}s&&(o.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},r={app:0},o=[];function l(t){return n.p+"js/"+({}[t]||t)+"."+{"chunk-2d210c47":"37f159f5","chunk-2d22d746":"2b152324","chunk-2d237cc7":"de9db915","chunk-2fef6a68":"1783d09f"}[t]+".js"}function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.e=function(t){var a=[],e={"chunk-2fef6a68":1};i[t]?a.push(i[t]):0!==i[t]&&e[t]&&a.push(i[t]=new Promise((function(a,e){for(var s="css/"+({}[t]||t)+"."+{"chunk-2d210c47":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-2d237cc7":"31d6cfe0","chunk-2fef6a68":"b772111e"}[t]+".css",r=n.p+s,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],v=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(v===s||v===r))return a()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],v=c.getAttribute("data-href");if(v===s||v===r)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var s=a&&a.target&&a.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete i[t],f.parentNode.removeChild(f),e(o)},f.href=r;var u=document.getElementsByTagName("head")[0];u.appendChild(f)})).then((function(){i[t]=0})));var s=r[t];if(0!==s)if(s)a.push(s[2]);else{var o=new Promise((function(a,e){s=r[t]=[a,e]}));a.push(s[2]=o);var c,v=document.createElement("script");v.charset="utf-8",v.timeout=120,n.nc&&v.setAttribute("nonce",n.nc),v.src=l(t);var d=new Error;c=function(a){v.onerror=v.onload=null,clearTimeout(f);var e=r[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,e[1](d)}r[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:v})}),12e4);v.onerror=v.onload=c,document.head.appendChild(v)}return Promise.all(a)},n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],v=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var f=v;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"22ca":function(t,a,e){"use strict";var s=e("f68f"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"header_area"},[e("div",{staticClass:"main_menu"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand logo_h"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"img/logo.png",alt:""}})])],1),e("a",{staticClass:"navbar-brand logo_inner_page"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"img/logo2.png",alt:""}})])],1),t._m(0),e("div",{staticClass:"collapse navbar-collapse offset",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"nav navbar-nav menu_nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/"}},[e("a",{staticClass:"nav-link"},[t._v("Home")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/about"}},[e("a",{staticClass:"nav-link"},[t._v("About")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/blogs"}},[e("a",{staticClass:"nav-link"},[t._v("Blogs")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/contact"}},[e("a",{staticClass:"nav-link"},[t._v("Contact")])])],1),t._m(1)])])])])])]),e("router-view")],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"/cli/index.html"}},[t._v("CLI Version")])])}],o={created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.querySelector(".header_area");window.scrollY>50?t.classList.add("navbar_fixed"):window.scrollY<50&&t.classList.remove("navbar_fixed")}}},l=o,n=(e("5c0b"),e("2877")),c=Object(n["a"])(l,i,r,!1,null,null,null),v=c.exports,d=(e("b0c0"),e("d3b7"),e("8c4f")),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("section",{staticClass:"home_banner_area"},[e("div",{staticClass:"banner_inner"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center justify-content-between"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"banner_content"},[e("h3",[t._v("Hey There !")]),e("h1",{staticClass:"text-uppercase"},[t._v("I am KATHEESH")]),e("h5",{staticClass:"text-uppercase"},[t._v("Software Engineer & Entrepreneur")]),e("br"),t._m(0),t._v(" "),e("br"),e("github-button",{attrs:{href:"https://github.com/katheesh","data-size":"large","data-show-count":"true","aria-label":"Follow @katheesh on GitHub"}},[t._v("katheesh")]),t._m(1),t._m(2),t._m(3)],1)]),t._m(4)])])])]),t._m(5),e("section",{staticClass:"about_area section_gap"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-start align-items-center",attrs:{"data-aos":"fade-up"}},[t._m(6),e("div",{staticClass:"offset-lg-1 col-lg-5"},[e("div",{staticClass:"main_title text-left"},[t._m(7),t._m(8),e("p",[t._v(" “I love to program and have done so for 10,000 hours over the past four years. I’m great at knowing the right algorithm for a problem because I read computer science literature constantly. I like Algorithms based problems. I love working with people to do things bigger than I could accomplish alone. I’m motivated by big problems, and I think you’ve got some here that I can help solve.” "),e("router-link",{attrs:{to:"/about"}},[e("a",[t._v("more ...")])])],1),e("button",{staticClass:"primary_btn",on:{click:t.downloadWithAxios}},[t._v("Download CV with Axios")])])])])])]),t._m(9),t._m(10),e("Footer")],1)},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h6",[e("strong",[t._v("❤️ Efficiency consists in a resolute mind.")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"margin-top":"30px","margin-bottom":"20px"}},[e("a",{attrs:{target:"_blank",href:"ttps://www.npmjs.com/package/@katheesh/mailer-js"}},[e("img",{attrs:{height:"30",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAA7CAMAAABBn+jeAAAAJFBMVEX////LODfJKCfot7bgmJfOSUnFAADuy8v14eHGEA7kqKfXdXRcp15cAAAA+0lEQVRoge3Z4Q7CIAwEYCiMse3939cYwSUlpaCSkXn3y7Bb/WaiJmDsnDFXA4TA1Re4+jK9i9SMaIq3Zhd5p4UGNHk8cddqtITe5hbVJs9auNwAl97kcXDBBVfFdX7XNVfRFF2Rv3ovNLhs2J4JXnVRau6q61U8mzEvZFiDa0kXdFceobuIvVncUhMuuOCCCy644Pp3F83pOlIca17tKgIXXHDd01XMyC7+a/nN/hd3Ge4q9r/swmP5FfkJpFubZ9qi0b/vK/4//jRw9QWuvkzr6j6KqLg+ON+QYnxzxFOMzDraZ6nhz15JkD6VvL7rM0Yk2Hrggguum7oeyc0jXd/03kcAAAAASUVORK5CYII="}}),e("a",{attrs:{target:"_blank",href:"https://www.npmjs.com/package/@katheesh/mailer-js"}},[e("pre",{staticStyle:{display:"inline","font-size":"15px"}},[t._v(" @katheesh/mailer-js ")])]),t._v("Package Collaborator ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"social_icons my-5",staticStyle:{padding:"auto"}},[e("a",{attrs:{title:"Stackoverflow",target:"_blank",href:"https://stackoverflow.com/story/katheesh"}},[e("img",{attrs:{src:"img/icon/stackoverflow.png"}})]),e("a",{attrs:{title:"GitLab",target:"_blank",href:"https://gitlab.com/katheesh"}},[e("img",{attrs:{src:"img/icon/gitlab.png"}})]),e("a",{attrs:{title:"GitHub",target:"_blank",href:"https://github.com/katheesh"}},[e("img",{attrs:{src:"img/icon/github.png"}})]),e("a",{attrs:{title:"CodePen",target:"_blank",href:"https://codepen.io/katheesh"}},[e("img",{attrs:{src:"img/icon/codepen.png"}})]),e("a",{attrs:{title:"Dev Blog",target:"_blank",href:"https://dev.to/katheesh"}},[e("img",{attrs:{src:"img/icon/dev.png"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"https://www.patreon.com/bePatron?u=32135007"}},[e("img",{attrs:{src:"https://i.ya-webdesign.com/images/patreon-link-button-png-2.png",height:"60"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"home_right_img"},[e("img",{staticClass:"img-fluid",attrs:{src:"img/banner/home-right.png"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"statistics_area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-lg-start justify-content-center",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"col-lg-2 col-md-3"},[e("div",{staticClass:"statistics_item"},[e("h3",[e("span",{staticClass:"counter"},[t._v("3")]),t._v("+")]),e("p",[t._v("Years Experience Working")])])]),e("div",{staticClass:"col-lg-2 col-md-3"},[e("div",{staticClass:"statistics_item"},[e("h3",[e("span",{staticClass:"counter"},[t._v("5")]),t._v("+")]),e("p",[t._v("Open Source Projects")])])]),e("div",{staticClass:"col-lg-2 col-md-3"},[e("div",{staticClass:"statistics_item"},[e("h3",[e("span",{staticClass:"counter"},[t._v("8")]),t._v("+")]),e("p",[t._v("Contributing Projects")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"about_img"},[e("img",{attrs:{src:"img/about-us.png",alt:""}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"top_text"},[t._v("About me "),e("span")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[t._v(" Software Engineer "),e("br"),t._v("& Entrepreneur ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"services_area"},[e("div",{staticClass:"container",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"main_title"},[e("p",{staticClass:"top_text"},[t._v("My Service "),e("span")]),e("h2",[t._v("What Service "),e("br"),t._v(" Offer For You ")])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-md-6 mb-4 mb-lg-0"},[e("div",{staticClass:"service_item"},[e("img",{attrs:{src:"img/services/s1.png",alt:""}}),e("h4",[t._v("IOT Development")]),e("p")])]),e("div",{staticClass:"col-lg-4 col-md-6 mb-4 mb-lg-0"},[e("div",{staticClass:"service_item"},[e("img",{attrs:{src:"img/services/s2.png",alt:""}}),e("h4",[t._v("Mobile & PC App Development")]),e("p")])]),e("div",{staticClass:"col-lg-4 col-md-6 mb-4 mb-lg-0"},[e("div",{staticClass:"service_item"},[e("img",{attrs:{src:"img/services/s3.png",alt:""}}),e("h4",[t._v("Web App Development")]),e("p")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"portfolio_area",attrs:{id:"portfolio"}},[e("div",{staticClass:"container",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"main_title"},[e("p",{staticClass:"top_text"},[t._v("My Portfolio "),e("span")]),e("h2",[t._v("Check My Recent Works ")])])])]),e("div",{staticClass:"filters portfolio-filter"},[e("ul",[e("li",{staticClass:"active",attrs:{"data-filter":"*"}},[t._v("all")]),e("li",{attrs:{"data-filter":".popular"}},[t._v("Popular")]),e("li",{attrs:{"data-filter":".front"}},[t._v("Front-End Design")]),e("li",{attrs:{"data-filter":".back"}},[t._v("Backend Dashboards")]),e("li",{attrs:{"data-filter":".package"}},[t._v("Packages")]),e("li",{attrs:{"data-filter":".desktop"}},[t._v("Desktop Apps")])])]),e("div",{staticClass:"filters-content"},[e("div",{staticClass:"row portfolio-grid"},[e("div",{staticClass:"grid-sizer col-md-4 col-lg-4"}),e("div",{staticClass:"col-lg-4 col-md-6 all back popular"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/back01.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://battiwestzone.lk"}},[t._v("Back End Development for Zonal Education Office")])]),e("p",[t._v("Laravel Development")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 all front"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/pic2.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://battiwestzone.lk"}},[t._v("Zonal Education Office Website")])]),e("p",[t._v("Website, Laravel Development")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 all front"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/pic3.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://btkjs.edu.lk"}},[t._v("Junior School Web Application")])]),e("p",[t._v("Website, Laravel Development")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 all front"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/pic4.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://learn.scinav.org"}},[t._v("Science Navigators Quiz Application")])]),e("p",[t._v("Website, Laravel Development")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 all back"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/back02.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://btkjs.edu.lk"}},[t._v("Back End Development for Junior School")])]),e("p",[t._v("Laravel Development")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 all back"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/back03.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://learn.scinav.org"}},[t._v("Quiz App Development for Science Navigators")])]),e("p",[t._v("Laravel Development")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 all desktop"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/pic1.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://bell.gitleaf.com"}},[t._v("The Smart School Bell System")])]),e("p",[t._v("IOT, Programming")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 all package popular"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/pack01.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://www.npmjs.com/package/vue-mailer"}},[t._v("VUE-Mailer Open source Package")])]),e("p",[t._v("NPM Javascript Development")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 all package popular"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/pack02.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://packagist.org/packages/katheesh/visitorinfo"}},[t._v("visitorinfo Open source Package")])]),e("p",[t._v("Composer Package Development")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 all desktop front"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/desk1.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://aulanka.com"}},[t._v("This premium application Developed for tamil Students career evaluation ")])]),e("p",[t._v("Developed by Electron Js")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 all desktop front"},[e("div",{staticClass:"single_portfolio"},[e("img",{staticClass:"img-fluid w-100",attrs:{src:"img/portfolio/desk2.png",alt:""}}),e("div",{staticClass:"overlay"}),e("div",{staticClass:"short_info"},[e("h4",[e("a",{attrs:{href:"https://github.com/Katheesh/passwordManager"}},[t._v("This open source application Developed for store secret credintials ")])]),e("p",[t._v("Developed by Electron Js")])])])])])])])])}],p=(e("3ca3"),e("ddb0"),e("2b3d"),e("fd2d")),m=e("bc3a"),h=e.n(m),g=e("e878"),_={name:"Home",data:function(){return{url:"https://katheesh.gitleaf.com/CV-Katheeskumar.docx"}},components:{Footer:p["a"],GithubButton:g["a"]},methods:{forceFileDownload:function(t){var a=window.URL.createObjectURL(new Blob([t.data])),e=document.createElement("a");e.href=a,e.setAttribute("download","Katheeskumar.docx"),document.body.appendChild(e),e.click()},downloadWithAxios:function(){var t=this;h()({method:"get",url:this.url,responseType:"arraybuffer"}).then((function(a){t.forceFileDownload(a)})).catch((function(){return console.log("error occured")}))}}},C=_,b=Object(n["a"])(C,f,u,!1,null,null,null),k=b.exports,w=(e("a5d8"),e("323e")),y=e.n(w);s["a"].use(d["a"]);var A=[{path:"/",name:"Home",component:k,meta:{title:"Home - KATHEESH's official Website"}},{path:"/about",name:"About",component:function(){return e.e("chunk-2d22d746").then(e.bind(null,"f820"))},meta:{title:"About - KATHEESH's official Website"}},{path:"/blogs",name:"Blogs",component:function(){return e.e("chunk-2d237cc7").then(e.bind(null,"fd3f"))},meta:{title:"Blogs - KATHEESH's official Website"}},{path:"/contact",name:"Contact",component:function(){return e.e("chunk-2d210c47").then(e.bind(null,"b8fa"))},meta:{title:"Contact - KATHEESH's official Website"}},{path:"/thanks",name:"Thanks",component:function(){return e.e("chunk-2fef6a68").then(e.bind(null,"aa78"))},meta:{title:"Thanks a lot! - KATHEESH's official Website"}}],E=new d["a"]({routes:A,mode:"history",linkActiveClass:"active",linkExactActiveClass:"exact-active-link",scrollBehavior:function(t,a,e){return e||{x:0,y:0}}});E.beforeEach((function(t,a,e){t.meta.title&&(document.title=t.meta.title),e()})),E.beforeResolve((function(t,a,e){t.name&&y.a.start(),e()})),E.afterEach((function(){y.a.done()}));var S=E,x=e("2f62");s["a"].use(x["a"]);var j=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=e("a65d"),O=e.n(D),P=e("f5af"),T=e.n(P);e("e829");s["a"].use(O.a),s["a"].config.productionTip=!1,new s["a"]({created:function(){T.a.init()},router:S,store:j,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),i=e.n(s);i.a},"9c0c":function(t,a,e){},f68f:function(t,a,e){},fd2d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("footer",{staticClass:"footer_area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"footer_top flex-column"},[e("div",{staticClass:"footer_logo"},[t._m(0),e("div",{staticClass:"d-lg-block d-none"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light justify-content-center"},[e("div",{staticClass:"collapse navbar-collapse offset"},[e("ul",{staticClass:"nav navbar-nav menu_nav mx-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/"}},[e("a",{staticClass:"nav-link text-white"},[t._v("Home")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/about"}},[e("a",{staticClass:"nav-link text-white"},[t._v("About")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/blogs"}},[e("a",{staticClass:"nav-link text-white"},[t._v("BLogs")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/contact"}},[e("a",{staticClass:"nav-link text-white"},[t._v("Contact")])])],1)])])])])]),t._m(1)])])]),t._m(2)])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:"img/logo2.png",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer_social mt-lg-0 mt-4"},[e("a",{attrs:{target:"_blank",href:"https://www.facebook.com/iKatheesh"}},[e("i",{staticClass:"fab fa-facebook-f social-btn"})]),e("a",{attrs:{target:"_blank",href:"https://www.twitter.com/iKatheesh"}},[e("i",{staticClass:"fab fa-twitter social-btn"})]),e("a",{attrs:{target:"_blank",href:"https://www.instagram.com/iKatheesh"}},[e("i",{staticClass:"fab fa-instagram social-btn"})]),e("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/katheeskumar"}},[e("i",{staticClass:"fab fa-linkedin social-btn"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row footer_bottom justify-content-center"},[e("p",{staticClass:"col-lg-8 col-sm-12 footer-text"},[t._v(" Katheesh © 2020 All rights reserved. ")])])}],r=(e("22ca"),e("2877")),o={},l=Object(r["a"])(o,s,i,!1,null,"7e85c8ea",null);a["a"]=l.exports}});
//# sourceMappingURL=app.03d15fee.js.map