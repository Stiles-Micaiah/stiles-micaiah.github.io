(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)o=r[u],n[o]&&d.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9695a7fa"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=n[t]=[e,s]});e.push(a[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t),i=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+i+")");o.type=s,o.request=i,a[1](o)}n[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var h=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07bb":function(t,e,a){},1440:function(t,e,a){t.exports=a.p+"img/1920px-Node.js_logo.svg.f1c6f36a.png"},"1cf8":function(t,e,a){"use strict";var s=a("60e8"),n=a.n(s);n.a},"2b39":function(t,e,a){t.exports=a.p+"img/640px-MySQL.svg.a2916ffe.png"},"56d2":function(t,e,a){"use strict";var s=a("ea18"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Micaiah")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[t._m(1),a("form",{staticClass:"form-inline search-form-nav my-2 my-lg-0",on:{submit:function(e){return e.preventDefault(),t.searchRepo()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search My Repositories"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),a("button",{staticClass:"btn btn-info my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])])],1),a("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"https://github.com/Stiles-Micaiah?tab=repositories"}},[t._v("GitHub Repos "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"https://stiles-micaiah.github.io/Music-Tunes"}},[t._v("Music Tunes")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"https://stiles-micaiah.github.io/blog-thingy"}},[t._v("Blog-Thingy")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"https://stiles-micaiah.github.io/Galactica"}},[t._v("Slap Game")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"https://stiles-micaiah.github.io/ptsdgame"}},[t._v("Lame Card Game")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"https://drive.google.com/file/d/1vhPlX6RJo8KKq_uaqL8aOfjdC_2-r-Ge/view?usp=sharing"}},[t._v("Resume")])])])}],o={name:"Navbar",data(){return{input:""}},methods:{searchRepo(){window.open("https://github.com/Stiles-Micaiah?utf8=✓&tab=repositories&q="+this.input+"&type=&language="),console.log(this.input)}}},r=o,l=(a("c1e3"),a("b0a0"),a("2877")),c=Object(l["a"])(r,n,i,!1,null,"48903e1f",null),u=c.exports,h=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("main",[a("div",{staticClass:"container-fluid"},[t._m(0),a("div",{staticClass:"row",attrs:{id:"Contact-row "}},[a("div",{staticClass:"col"},[t._m(1),a("div",{staticClass:"row bottom-row contact-content-row"},[a("div",{staticClass:"col-lg-4 justify-contact"},[a("div",{staticClass:"card contact-cards",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Email Me")]),a("p",{staticClass:"card-text"},[t._v("If you would like to contact me via Email. Click the link below!\n                  ")]),a("a",{staticClass:"green-anchor card-link",staticStyle:{color:"#ff0000"},attrs:{href:"mailto:evansjudah@gmail.com"}},[t._v("Email\n                    Me!")]),a("a",{staticClass:"green-anchor card-link",staticStyle:{color:"#ffffff78"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.copyText("evansjudah@gmail.com")}}},[t._v("Or copy it here!")])])])]),a("div",{staticClass:"col-lg-4 justify-contact"},[a("div",{staticClass:"card contact-cards",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Call or Text")]),t._m(2),a("a",{staticClass:"green-anchor card-link",attrs:{href:"tel:208-908-8853"}},[t._v("(208) 908-8853")]),a("a",{staticClass:"green-anchor card-link",staticStyle:{color:"#ffffff78"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.copyText("2089088853")}}},[t._v("Copy\n                    it!")])])])]),t._m(3)])])])])])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"row",attrs:{id:"intro-row"}},[s("div",{staticClass:"col"},[s("div",{staticClass:"card-white",attrs:{id:"journey-card"}},[s("h1",{staticClass:"d-flex justify-content-center",attrs:{id:"page-intro"}},[t._v("My Journey To Here\n                  ")])])])]),s("div",{staticClass:"row about-row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card-white about-card"},[s("h3",{staticClass:"d-flex justify-content-center"},[t._v("About")]),s("hr"),s("p",{staticClass:"main-body-text"},[t._v("I've always been into technology. I'm your regular enthusiast when it comes\n                  to\n                  computers and\n                  electronics of any kind. I\n                  love watching, helping, and being there as technology grows. I have several computers and a few old\n                  rack-serves that I\n                  work on as a hobby. Along with hanging out with friends, most of my free time is spent tinkering and\n                  trying out\n                  different things. My more recent projects have been/are setting up a local data base and learning\n                  how\n                  to run a website,\n                  C#/Node.js server and data bae all on my local systems. I don't have the technology to properly\n                  setup\n                  security, so I'll\n                  probably just settle with running it locally for right now.")])])])]),s("div",{staticClass:"row main-row-body",attrs:{id:"about-row"}},[s("div",{staticClass:"col-lg-6 body-paragraphs"},[s("div",{staticClass:"card-white about-cards"},[s("h3",{staticClass:"d-flex justify-content-center"},[t._v("Brief Recap of Work History")]),s("hr"),s("p",{staticClass:"main-body-text"},[t._v("I was privileged enough to get a job right after I turned 16. I was able to\n                  land the job at the Jack\n                  in The Box between\n                  my house and the high school I was in thanks to the help of a friend at the time. I grew to really\n                  like the team I\n                  worked with at the time. Though for a time, as it goes with fast food, the management was replaced\n                  with someone who\n                  wasn't as good as the last. During this time the management was bad enough for me to pick up a\n                  second\n                  job at Dominos for\n                  about 8 months. At the start of that 8 months I was still in school, so managing both was a little\n                  difficult, but\n                  eventually I was able to schedule one in the morning and the other in the afternoon. In the last\n                  half\n                  of the 14 months I\n                  worked at Jack in The Box I started taking on responsibilities of the team leads and even the GM\n                  when\n                  it came to\n                  inventory. It went downhill very quickly as the now new General Manager (GM) didn't see me for any\n                  of\n                  that. And only as\n                  the minor who was 50-60 hours a week. Which understandable was a liability for her. As it was\n                  technically illegal for me\n                  to be working that much. But even then, I had bills to pay. So, following my two weeks and\n                  resignation, a received a job\n                  offer at taco bell. I worked there for about 4 months before leaving there for a better opportunity\n                  at\n                  Sevy Brothers\n                  Construction. There I worked with literally all 5 of my roommates and ~6 other friends and family of\n                  theirs, until I had\n                  to leave there for health reasons nearly four months later. Which is when started into\n                  BoiseCodeCamp,\n                  bringing me here\n                  to you.")])])]),s("div",{staticClass:"col-lg-6 body-paragraphs"},[s("div",{staticClass:"card-white"},[s("h3",{staticClass:"d-flex justify-content-center"},[t._v("Hobbies")]),s("hr"),s("p",{staticClass:"main-body-text"},[t._v("I personally have several hobbies if I were to be honest with myself, yet\n                  I\n                  wouldn't consider having\n                  any hobbies except\n                  enthusiasm. I'm not necessarily devoted to much but I do a lot of hobby like things. the best way\n                  to\n                  describe it would\n                  be having 5 hobbies in a constant state of flux. Most of the time though, the most persistent is\n                  defiantly my baby. my\n                  computer. I lo9ve working on/with computers. the future both excites me and kind of puts me down.\n                  only\n                  because I realize\n                  I won't always be here to see technology continue to grow. I really love Sci-Fi games because they\n                  show a very exciting\n                  future with technology. and yes, I realize what you may be thinking. \"Sci-Fi is just science\n                  "),s("i",[t._v("fiction")]),t._v('." Yes, yet\n                  also no. Even the most outlandish Sci-Fi is based on some science. and in fact, the Sci-Fi of\n                  yesterday is just todays\n                  science, even better most of the time. in my mind '),s("em",[t._v("technology has no limits")]),t._v(", and I want to\n                  bet\n                  there to test it!")])]),s("div",{staticClass:"images-small"},[s("div",{staticClass:"Display-Images",attrs:{id:"cpu3"}}),s("div",{staticClass:"Display-Images",attrs:{id:"zx"}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 skills-card"},[s("div",{staticClass:"card-white about-cards aligned-card"},[s("h3",{staticClass:"d-flex alternitive-color justify-content-center"},[t._v("Skills")]),s("hr"),s("div",{staticClass:"skills"},[s("div",{staticClass:"image-size"},[s("img",{staticClass:"skills-image",attrs:{src:a("9d34"),alt:""}})]),s("div",{staticClass:"image-size"},[s("img",{staticClass:"skills-image",attrs:{src:a("9d3e"),alt:""}})]),s("div",{staticClass:"image-size"},[s("img",{staticClass:"skills-image",attrs:{src:a("77fe"),alt:""}})]),s("div",{staticClass:"image-size"},[s("img",{staticClass:"skills-image",attrs:{src:a("9112"),alt:""}})]),s("div",{staticClass:"image-size"},[s("img",{staticClass:"skills-image",attrs:{src:a("1440"),alt:""}})]),s("div",{staticClass:"image-size"},[s("img",{staticClass:"skills-image",attrs:{src:a("2b39"),alt:""}})]),s("div",{staticClass:"image-size"},[s("img",{staticClass:"skills-image",attrs:{src:a("916d"),alt:""}})])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row main-row-body"},[a("div",{staticClass:"col",attrs:{id:"contact-col"}},[a("h1",{staticClass:"d-flex justify-content-center",attrs:{id:"contact-title-h1"}},[t._v("Contact Information")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"card-text"},[t._v("You can call or text me here for a potentially faster reply. Although keep in\n                    mind, I get a lot of spam calls like the rest of us. But leave a voicemail and I will\n                    "),a("b",[t._v("Definitly")]),t._v("\n                    give you a call back!\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 justify-contact"},[a("div",{staticClass:"card contact-cards",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Social Media!")]),a("p",{staticClass:"card-text"},[t._v("I'm very active on social media. Although, in order to seperate professional\n                    and\n                    personal\n                    life, I won't list my Facebook. But feel free to add me on\n                    LinkedIn and Twitter!!\n                  ")]),a("a",{staticClass:"green-anchor card-link",staticStyle:{color:"#4ad2ff"},attrs:{href:"https://www.linkedin.com/in/stiles-micaiah/",target:"_blank"}},[t._v("LinkedIn")]),a("a",{staticClass:"green-anchor card-link",staticStyle:{color:"blue"},attrs:{href:"https://twitter.com/Stiles_Micaiah",target:"_blank"}},[t._v("Twitter")])])])])}],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),a("br"),t._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[t._v("pwa")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},g=p,b=(a("1cf8"),Object(l["a"])(g,v,m,!1,null,"02921ff8",null)),y=b.exports,w={name:"home",components:{HelloWorld:y},methods:{copyText(t){var e=t;$("<input>").val(e).appendTo("body").select();document.execCommand("copy"),alert("Copied to clipboard!")}}},_=w,C=(a("56d2"),Object(l["a"])(_,d,f,!1,null,"1ae0192a",null)),k=C.exports;s["a"].use(h["a"]);var j=new h["a"]({routes:[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),x=a("2f62");s["a"].use(x["a"]);var I=new x["a"].Store({state:{},mutations:{},actions:{}}),S=a("9483");Object(S["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),s["a"].config.productionTip=!1,new s["a"]({router:j,store:I,render:function(t){return t(u)}}).$mount("#app")},"5f9b":function(t,e,a){},"60e8":function(t,e,a){},"77fe":function(t,e,a){t.exports=a.p+"img/4Pm03N.a62c45ab.png"},9112:function(t,e,a){t.exports=a.p+"img/1200px-.NET_Core_Logo.svg.56c19952.png"},"916d":function(t,e,a){t.exports=a.p+"img/sql-logo.a0560ee2.webp"},"9d34":function(t,e,a){t.exports=a.p+"img/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67.e8460f0d.png"},"9d3e":function(t,e,a){t.exports=a.p+"img/unityLogo.2c3664b2.png"},b0a0:function(t,e,a){"use strict";var s=a("07bb"),n=a.n(s);n.a},c1e3:function(t,e,a){"use strict";var s=a("5f9b"),n=a.n(s);n.a},ea18:function(t,e,a){}});
//# sourceMappingURL=app.3b89025f.js.map