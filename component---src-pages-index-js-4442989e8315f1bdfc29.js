(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{225:function(t,e,o){"use strict";o.r(e);var n=o(32),c=o(1),l=o(0),r=o.n(l),a=o(222),u=o.n(a),i=o(31),s=o(7),b=o(223);o(23),o(15),o(13),o(5),o(24);function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}var d=Object(n.a)("button",{target:"e15mykn60"})("padding:1em 2em;background:",i.a.blue400,";font-weight:600;color:white;outline:none;border:none;font-size:1rem;border-radius:2px;position:relative;transition:background 100ms ease-in-out;@media (max-width:",s.a.maxwidthMobile,'px){padding:0.8em 1.8em;font-size:1em;}p{margin:0;}&:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient( 135deg,',i.a.pink400," 0%,",i.a.purple400," 100% );z-index:-1;}&:hover{cursor:pointer;background:transparent;transition:background 100ms ease-in-out;}&.Button--secondary{background:",i.a.blue200,";color:",i.a.blue600,";padding:0.95em 1.8em;font-size:0.95rem;&:hover{background:",i.a.blue300,";transition:background 100ms ease-in-out;}}"),h=function(t){var e,o;function n(){return t.apply(this,arguments)||this}return o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,n.prototype.render=function(){var t=this.props,e=(t.children,function(t,e){if(null==t)return{};var o,n,c={},l=Object.keys(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||(c[o]=t[o]);return c}(t,["children"]));return Object(c.c)(d,p({onClick:this.props.onClick},e),this.props.children)},n}(l.Component),g=o(226),f=o.n(g),m=o(227),O=o.n(m);var j=Object(n.a)("div",{target:"erio1kc0"})("padding-top:2.5em;padding-bottom:3em;margin-bottom:6em;max-width:830px;@media (max-width:",s.a.maxwidthMobile,"px){margin-bottom:3em;}h1{margin-bottom:1em;a{text-decoration:none;transition:all 100ms ease-in-out;&:nth-of-type(1){color:",i.a.blue500,";}&:nth-of-type(2){color:",i.a.orange500,";}&:nth-of-type(3){color:",i.a.purple500,";}&:nth-of-type(4){color:",i.a.green500,";}&:nth-of-type(5){color:",i.a.teal500,";}&:hover{cursor:pointer;transition:all 100ms ease-in-out;&:nth-of-type(1){color:",i.a.blue600,";background-color:",i.a.blue200,";}&:nth-of-type(2){color:",i.a.orange600,";background-color:",i.a.orange200,";}&:nth-of-type(3){color:",i.a.purple600,";background-color:",i.a.purple200,";}&:nth-of-type(4){color:",i.a.green600,";background-color:",i.a.green200,";}&:nth-of-type(5){color:",i.a.teal600,";background-color:",i.a.teal200,";}}}}"),y=Object(n.a)("div",{target:"erio1kc1"})("margin-bottom:10em;display:flex;flex-direction:column;@media (max-width:",s.a.maxwidthTablet,"px){margin-bottom:4em;}&:last-of-type{margin-bottom:0;}"),w=function(t){var e,o;function n(e){var o;return(o=t.call(this,e)||this).state={color:null},o.randomColor=function(){var t=["red","orange","green","teal","blue","indigo","purple","pink","gray",""],e=t[Math.floor(Math.random()*t.length)];return o.setState({color:e}),e},o.render=function(){return Object(c.c)(r.a.Fragment,null,Object(c.c)(u.a,null,Object(c.c)("link",{rel:"stylesheet",type:"text/css",href:"https://cdn.jsdelivr.net/npm/@fab-ulous/github@0.1.5/dist/github.min.css"}),Object(c.c)("title",null,"fab-ulous")),Object(c.c)(j,null,Object(c.c)("img",{width:"100%",src:f.a}),Object(c.c)("h1",null,"Colorful ",Object(c.c)("u",null,"f"),"loating ",Object(c.c)("u",null,"a"),"ction ",Object(c.c)("u",null,"b"),"uttons for your GitHub repo or account (wip)")),Object(c.c)(y,null,Object(c.c)("h3",null,"Get started"),Object(c.c)("p",null,Object(c.c)("h4",null,"Import fab-ulous"),"You can add fab-ulous directly in"," ",Object(c.c)("strong",null,"head")),Object(c.c)("code",{className:"special"},'<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fab-ulous/github@latest/dist/github.min.css">'),Object(c.c)("p",null,"or"),Object(c.c)("code",{className:"special"},'<link rel="stylesheet" type="text/css" href="https://unpkg.com/@fab-ulous/github@latest/dist/github.min.css">'),Object(c.c)("p",null,"or through ",Object(c.c)("strong",null,"npm")," / ",Object(c.c)("strong",null,"yarn")),Object(c.c)("code",null,"npm install @fab-ulous/github"),Object(c.c)("code",null,"yarn add @fab-ulous/github"),Object(c.c)("p",null,"and then import it with"),Object(c.c)("code",null,"import '@fab-ulous/github';"),Object(c.c)("p",null,Object(c.c)("h4",null,"Usage"),"Add (where you want) this"),Object(c.c)("code",{className:"special"},'<a id="github-fabulous" href="[repo_url]">[optional_text]</a>')),Object(c.c)(y,null,Object(c.c)("h3",null,"Customization"),Object(c.c)("p",null,Object(c.c)("h4",null,"Color"),"Choose your color between"," ",Object(c.c)("strong",{style:{color:"#f56565"}},"red"),","," ",Object(c.c)("strong",{style:{color:"#ed8936"}},"orange"),","," ",Object(c.c)("strong",{style:{color:"#48bb78"}},"green"),","," ",Object(c.c)("strong",{style:{color:"#38b2ac"}},"teal"),","," ",Object(c.c)("strong",{style:{color:"#4299e1"}},"blue"),","," ",Object(c.c)("strong",{style:{color:"#667eea"}},"indigo"),","," ",Object(c.c)("strong",{style:{color:"#9f7aea"}},"purple"),","," ",Object(c.c)("strong",{style:{color:"#ed64a6"}},"pink")," or"," ",Object(c.c)("strong",{style:{color:"#a0aec0"}},"gray"),", and add it as a class (default is"," ",Object(c.c)("strong",{style:{color:"#1a202c"}},"this color"),"), an example?"),Object(c.c)("code",null,'<a id="github-fabulous" class="red" href="[repo_url]">[option_text]</a>'),Object(c.c)("a",{id:"github-fabulous",className:"red",href:"https://github.com/manzinello/fab-ulous",target:"_blank",style:{position:"inherit",marginTop:15}},"fab-ulous"),Object(c.c)("p",null,"Randomize the color of the fab-ulous in this page"),Object(c.c)(h,{style:{width:300},onClick:o.randomColor},"Random color"),Object(c.c)("p",null,Object(c.c)("h4",null,"Position"),"Choose between ",Object(c.c)("strong",null,"left")," /"," ",Object(c.c)("strong",null,"right"),", ",Object(c.c)("strong",null,"bottom")," / ",Object(c.c)("strong",null,"top")),Object(c.c)("code",null,'<a id="github-fabulous" class="red left top" href="[repo_url]">[option_text]</a>'),Object(c.c)("p",null,Object(c.c)("h4",null,"Shadow"),"Don't like ",Object(c.c)("strong",null,"shadow"),"? Remove it"),Object(c.c)("code",null,'<a id="github-fabulous" class="green left top no-shadow" href="[repo_url]">[option_text]</a>'),Object(c.c)("a",{id:"github-fabulous",className:"green left top no-shadow",href:"https://github.com/manzinello/fab-ulous",target:"_blank",style:{position:"inherit",marginTop:15}},"fab-ulous"),Object(c.c)("p",null,Object(c.c)("h4",null,"Other customization"),"More customization? Add a ",Object(c.c)("strong",null,"style")," to the element and specify what you want!"),Object(c.c)("code",null,'<a id="github-fabulous" style="..." href="[repo_url]">[option_text]</a>'),Object(c.c)("div",{className:"arrow"},Object(c.c)("img",{src:O.a,width:"200"})),Object(c.c)("a",{id:"github-fabulous",className:o.state.color,href:"https://github.com/manzinello/fab-ulous",target:"_blank"},"fab-ulous")))},o.state={color:o.randomColor()},o}return o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,n}(r.a.Component);e.default=function(){return Object(c.c)(b.a,null,Object(c.c)(w,null))}},226:function(t,e,o){t.exports=o.p+"static/github-fabulous-fefe3853a663692543fd647a7cce1994.png"},227:function(t,e,o){t.exports=o.p+"static/arrow-ac3537540f085e52a6dc5e4c44e9edab.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-4442989e8315f1bdfc29.js.map