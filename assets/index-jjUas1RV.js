const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DkE736K4.js","./index-JolgRYIs.js","./index-C5uB43dX.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const L=`<!DOCTYPE html>
<template>
  <style>#app {
  height: 100vh;
  width: 100vw;
  background-color: var(--theme-bg-color);
}
</style>
  <div id="app">
    <yo-router></yo-router>
  </div>
</template>
`;class _{constructor(t){this.eventObj=t.obj,this.target=t.target||this.eventObj,this.eventType=t.eventType||"click",this.popup=t.popup||!1,this.bindEvent()}bindEvent(){let t=this;t.target.addEventListener(t.eventType,a=>{let o=a.target,e,n;l(o);function l(s){var c;if(s===document)return!1;e=((c=s==null?void 0:s.getAttribute("@"+t.eventType))==null?void 0:c.split(" "))||[],n=s==null?void 0:s.parentNode,e.length==0&&n?l(n):(e.forEach(u=>{t.eventObj.__proto__[u]&&t.eventObj.__proto__[u].call(t.eventObj,{fn:t.eventObj.__proto__[u],temp:t.eventObj,target:a,eventDom:s})}),n&&l(n))}})}}let h=(i,t)=>{var n;let a=document.createElement("div");a.innerHTML=t;const e=a.querySelector("template").content.cloneNode(!0);i.appendChild(e),i.event=new _({obj:i}),i.change=new _({obj:i,eventType:"change"}),i.change=new _({obj:i,eventType:"input"}),(n=i.init)==null||n.call(i)};const P=`<!DOCTYPE html>
<template>
  <yo-layout>
  </yo-layout>
</template>
`,T=`<!DOCTYPE html>
<template>
  <style>.yo-layout {
  display: flex;
  height: 100vh;
}
.yo-layout .main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.yo-layout .main .content {
  flex: 1;
  padding: 24px;
}
</style>
  <div class="yo-layout">
    <yo-layout-menu class="left"></yo-layout-menu>
    <div class="main">
      <yo-layout-header></yo-layout-header>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
`,x=`<!DOCTYPE html>
<template>
  <style>.yo-layout-aside {
  box-sizing: border-box;
  height: 100%;
  width: 266px;
  overflow-x: hidden;
  padding: 16px 0 0 16px;
}
.yo-layout-aside a,
.yo-layout-aside span {
  font-size: 14px;
}
.yo-layout-aside .logo {
  margin: 0 auto;
  width: 80%;
  height: calc(80px - 16px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.6px solid rgba(0, 0, 0, 0.077);
  margin-bottom: 1rem;
}
.yo-layout-aside ul {
  height: calc(100% - 80px - 1rem);
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
.yo-layout-aside ul svg {
  transition: transform 0.3s;
}
.yo-layout-aside ul > .menu-item,
.yo-layout-aside ul .submenu > div {
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  margin: 0 16px;
  cursor: pointer;
  margin-top: 2px;
}
.yo-layout-aside ul > .menu-item > a,
.yo-layout-aside ul .submenu > div > a,
.yo-layout-aside ul > .menu-item > span,
.yo-layout-aside ul .submenu > div > span {
  flex: 1;
  color: var(--menu-defalut-color);
  pointer-events: none;
}
.yo-layout-aside ul > .menu-item .point,
.yo-layout-aside ul .submenu > div .point {
  background-color: var(--menu-defalut-color);
}
.yo-layout-aside ul > .menu-item > i,
.yo-layout-aside ul .submenu > div > i {
  color: var(--menu-defalut-color);
  pointer-events: none;
}
.yo-layout-aside ul .submenu {
  flex-direction: column;
}
.yo-layout-aside ul .submenu ul {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}
.yo-layout-aside ul .submenu > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 32px);
}
.yo-layout-aside ul > .active,
.yo-layout-aside ul .open {
  background-color: #fff;
  box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
  border-radius: 12px;
}
.yo-layout-aside ul > .active svg,
.yo-layout-aside ul .open svg {
  transform: rotate(180deg);
  fill: var(--menu-active-color);
}
.yo-layout-aside ul > .active i,
.yo-layout-aside ul .open i,
.yo-layout-aside ul > .active a,
.yo-layout-aside ul .open a,
.yo-layout-aside ul > .active span,
.yo-layout-aside ul .open span {
  color: var(--menu-active-color) !important;
  /* font-size: 14.5px; */
  font-weight: 600;
}
.yo-layout-aside ul > .active .point,
.yo-layout-aside ul .open .point {
  background-color: var(--menu-active-color) !important;
  /* font-size: 14.5px; */
  font-weight: 600;
}
.yo-layout-aside ul .submenu > ul > .active {
  box-shadow: none;
  background-color: transparent;
  border-radius: 0;
}
</style>
  <div class="yo-layout-aside">
    <div class="logo">yo-web-components</div>
    <ul>

    </ul>
  </div>
</template>
`,S="modulepreload",O=function(i,t){return new URL(i,t).href},E={},r=function(t,a,o){let e=Promise.resolve();if(a&&a.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));e=Promise.allSettled(a.map(u=>{if(u=O(u,o),u in E)return;E[u]=!0;const p=u.endsWith(".css"),w=p?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const y=l[d];if(y.href===u&&(!p||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${w}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":S,p||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),p)return new Promise((d,y)=>{m.addEventListener("load",d),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function n(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return e.then(l=>{for(const s of l||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})},v=[{path:"/login",component:()=>r(()=>import("./index-DkE736K4.js"),__vite__mapDeps([0,1]),import.meta.url),meta:{name:"login",notMenu:!0}},{path:"/example",component:()=>r(()=>import("./index-C5uB43dX.js"),__vite__mapDeps([2,1]),import.meta.url),meta:{name:"test.example",icon:"fld1Status"}},{path:"/home",component:()=>r(()=>import("./index-CwEqXyoI.js"),[],import.meta.url),meta:{name:"menu.home",icon:"fld1Status"}},{path:"/system",meta:{name:"menu.system",icon:"fld1Diag"},children:[{path:"/deviceInfo",component:()=>r(()=>import("./index-Dum7XmqR.js"),[],import.meta.url),meta:{name:"menu.deviceInfo"}},{path:"/ipSetting",component:()=>r(()=>import("./index-DPPYl5aU.js"),[],import.meta.url),meta:{name:"menu.ipSetting"}},{path:"/accountSetting",component:()=>r(()=>import("./index-NUDcoyQ9.js"),[],import.meta.url),meta:{name:"menu.accountSetting"}},{path:"/reboot",component:()=>r(()=>import("./index-C47M8_Dy.js"),[],import.meta.url),meta:{name:"menu.reboot"}},{path:"/upgrade",component:()=>r(()=>import("./index-D3WrqUwz.js"),[],import.meta.url),meta:{name:"menu.upgrade"}},{path:"/restoreDefault",component:()=>r(()=>import("./index-CR9Cvzwu.js"),[],import.meta.url),meta:{name:"menu.restoreDefault"}},{path:"/saveSettings",component:()=>r(()=>import("./index-B0_zRREM.js"),[],import.meta.url),meta:{name:"menu.saveSettings"}}]},{path:"/monitoring",meta:{name:"menu.monitoring",icon:"fld1Discov"},children:[{path:"/switches",component:()=>r(()=>import("./index-H5QxGMHN.js"),[],import.meta.url),meta:{name:"menu.switches"}},{path:"/ONVIF",component:()=>r(()=>import("./index-Dwv1rrjd.js"),[],import.meta.url),meta:{name:"menu.ONVIF"}},{path:"/portStatistics",component:()=>r(()=>import("./index-n8BOsHve.js"),[],import.meta.url),meta:{name:"menu.portStatistics"}},{path:"/cableDiagnostics",component:()=>r(()=>import("./index-j7fqU4ZX.js"),[],import.meta.url),meta:{name:"menu.cableDiagnostics"}},{path:"/loopGuard",component:()=>r(()=>import("./index-BEwVoZBf.js"),[],import.meta.url),meta:{name:"menu.loopGuard"}}]},{path:"/switchSettings",meta:{name:"menu.switchSettings",icon:"fld1Network"},children:[{path:"/portSettings",component:()=>r(()=>import("./index-BIeWC6u2.js"),[],import.meta.url),meta:{name:"menu.portSettings"}},{path:"/portTrunking",component:()=>r(()=>import("./index-OobkadvV.js"),[],import.meta.url),meta:{name:"menu.portTrunking"}},{path:"/portMirroring",component:()=>r(()=>import("./index-D6GZ1ChT.js"),[],import.meta.url),meta:{name:"menu.portMirroring"}},{path:"/portIsolation",component:()=>r(()=>import("./index-CN-SWZAJ.js"),[],import.meta.url),meta:{name:"menu.portIsolation"}},{path:"/staticMAC",component:()=>r(()=>import("./index-MaTsk70K.js"),[],import.meta.url),meta:{name:"menu.staticMAC"}},{path:"/searchMAC",component:()=>r(()=>import("./index-EB5oQoQR.js"),[],import.meta.url),meta:{name:"menu.searchMAC"}},{path:"/MACList",component:()=>r(()=>import("./index-BFe95iWb.js"),[],import.meta.url),meta:{name:"menu.MACList"}},{path:"/DHCPSnooping",component:()=>r(()=>import("./index-8DsLX4iz.js"),[],import.meta.url),meta:{name:"menu.DHCPSnooping"}}]},{path:"/vlanSettings",meta:{name:"menu.VLANSettings",icon:"fld1Vlan"},children:[{path:"/VLANSettings",component:()=>r(()=>import("./index-D97VScez.js"),[],import.meta.url),meta:{name:"menu.VLANSettings"}},{path:"/pvidSetting",component:()=>r(()=>import("./index-IMYOEEfu.js"),[],import.meta.url),meta:{name:"menu.pvidSetting"}}]},{path:"/QoSSettings",meta:{name:"menu.QoSSettings",icon:"fld1Qos"},children:[{path:"/portRate",component:()=>r(()=>import("./index-CvAKkB2M.js"),[],import.meta.url),meta:{name:"menu.portRate"}},{path:"/stormControl",component:()=>r(()=>import("./index-BdJT22gs.js"),[],import.meta.url),meta:{name:"menu.stormControl"}}]},{path:"/poeSetting",component:()=>r(()=>import("./index-C6Ur5ddV.js"),[],import.meta.url),meta:{name:"menu.poeSetting",icon:"fld1PoE"}}],A=(i,t,a)=>{const o=i[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((e,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==a?". Note that variables only represent file names one level deep.":""))))})},b=i=>{for(const t in i)Object.keys(i[t]).forEach(a=>{let o=document.querySelectorAll(`[data-lang='${t}.${a}']`);o&&o.forEach(e=>{e.innerHTML=i[t][a]})})};let g=()=>new Promise(i=>{let t=sessionStorage.getItem("lang")||"Zh";if(t){t=="Zh"&&(t="zh"),window.langMap=window.langMap||{};let a=window.langMap[`${t}.json`];a?(b(a),i(!0)):A(Object.assign({"./language/en.json":()=>r(()=>import("./en-5hzIUo98.js"),[],import.meta.url),"./language/zh.json":()=>r(()=>import("./zh-MeAQrAOo.js"),[],import.meta.url)}),`./language/${t}.json`,3).then(o=>{let e=o.default;window.langMap[`${t}.json`]=e,b(e)})}});class D extends HTMLElement{constructor(){super(),h(this,x)}init(){this.itemHeight=51,this.hash=location.hash;let t=(e,n="")=>`
        <li id="#${n+e.path}" class="menu-item ${this.hash=="#"+(n+e.path)?"active":""}">
          ${n!=""?'<i class="point"></i>':`<i class="fa fa-${e.meta.icon}"></i>`}
          <a data-lang="${e.meta.name}"></a>
        </li>
      `,a=(e,n)=>`
        <li class="submenu">
          <div class="${this.hash.includes(e.path)?"open":""}" >
            ${`<i class="fa fa-${e.meta.icon}"></i>`}
            <span data-lang="${e.meta.name}"></span>
            <svg t="1684119979259" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="2500" width="16" height="16">
              <path d="M185.884 327.55 146.3 367.133 512.021 732.779 877.7 367.133 838.117 327.55 511.997 653.676Z"
                p-id="2501"></path>
            </svg>
          </div>
          <ul style="height: ${this.hash.includes(e.path)?n.length*this.itemHeight:"0"}px;">
            ${n.map(l=>t(l,e.path)).join("")}
          </ul>
        </li>
      `,o="";v.forEach(e=>{var n;(n=e.meta)!=null&&n.notMenu||(e.children?o+=a(e,e.children):o+=t(e))}),this.querySelector("ul").innerHTML=o,g(),this.menuEvn()}menuEvn(){let t=this.querySelector(".yo-layout-aside>ul"),a=t==null?void 0:t.querySelectorAll(".submenu"),o=t==null?void 0:t.querySelectorAll(".menu-item");a==null||a.forEach(e=>{e.firstElementChild.onclick=n=>{n.stopPropagation(),e.querySelector("ul").style.height=="0px"?(e.querySelector("ul").style.height=e.querySelector("ul").children.length*this.itemHeight+"px",e.querySelector("div>svg").style.transform="rotateZ(180deg)"):(e.querySelector("ul").style.height="0px",e.querySelector("div>svg").style.transform="rotateZ(0deg)",e.querySelector("div").style.background="")}}),o==null||o.forEach(e=>{e.onclick=n=>{n.stopPropagation(),o==null||o.forEach(l=>l.setAttribute("class","menu-item")),n.target.setAttribute("class","menu-item active"),a==null||a.forEach(l=>{l!=n.target.parentElement.parentElement?(l.querySelector("ul").style.height="0px",l.querySelector("div>svg").style.transform="rotateZ(0deg)",l.querySelector("div").style.background="",l.firstElementChild.setAttribute("class","")):l.firstElementChild.setAttribute("class","open")}),location.href=e.id}})}connectedCallback(){window.addEventListener("hashchange",()=>{this.hash!=location.hash&&this.init()})}}customElements.define("yo-layout-menu",D);const R=`<!DOCTYPE html>
<template>
  <style>.yo-layout-header {
  height: 80px;
  padding: 24px;
  padding-bottom: 0;
  border-bottom: 0.6px solid rgba(0, 0, 0, 0.077);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
  <div class="yo-layout-header">
    <div class="breadcrumb">面包屑</div>
    <div class="edit">操作区</div>
  </div>
</template>
`;class I extends HTMLElement{constructor(){super(),h(this,R)}init(){f(v)}}customElements.define("yo-layout-header",I);class V extends HTMLElement{constructor(){super(),h(this,T)}init(){}}customElements.define("yo-layout",V);function C(i){let t=i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();return`<${t}></${t}>`}class $ extends HTMLElement{constructor(){super(),this.allPaths=f(v),h(this,P)}init(){window.location.hash||(location.hash="/example")}renderPage(){const t=window.location.hash;this.allPaths[t]?this.allPaths[t].component().then(o=>{this.querySelector("yo-layout").querySelector("slot").innerHTML=C(Object.keys(o)[0])}):location.hash="/example"}connectedCallback(){this.renderPage(),window.addEventListener("hashchange",()=>{this.renderPage()})}}customElements.define("yo-router",$);const f=(i,t="#")=>{let a={};return i.forEach(o=>{if(o.children)a={...a,...f(o.children,t+o.path)};else{const e=t+o.path;a[e]=o}}),a};class M extends HTMLElement{constructor(){super(),h(this,L)}init(){}connectedCallback(){g(),window.addEventListener("load",()=>{g()})}}customElements.define("app-component",M);export{h as _,g as l};
