const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CFNWsBTT.js","./index-CmesAyKh.js","./index-D3UivanA.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const L=`<!DOCTYPE html>
<template>
  <style>
    #app {
      height: 100vh;
      width: 100vw;
      background-color: var(--theme-bg-color);
    }

  </style>
  <div id="app">
    <yo-router></yo-router>
  </div>
</template>
`;class g{constructor(t){this.eventObj=t.obj,this.target=t.target||this.eventObj,this.eventType=t.eventType||"click",this.popup=t.popup||!1,this.bindEvent()}bindEvent(){let t=this;t.target.addEventListener(t.eventType,r=>{let o=r.target,e,n;l(o);function l(s){var u;if(s===document)return!1;e=((u=s==null?void 0:s.getAttribute("@"+t.eventType))==null?void 0:u.split(" "))||[],n=s==null?void 0:s.parentNode,e.length==0&&n?l(n):(e.forEach(m=>{t.eventObj.__proto__[m]&&t.eventObj.__proto__[m].call(t.eventObj,{fn:t.eventObj.__proto__[m],temp:t.eventObj,target:r,eventDom:s})}),n&&l(n))}})}}let h=(a,t)=>{var n;let r=document.createElement("div");r.innerHTML=t;const e=r.querySelector("template").content.cloneNode(!0);a.appendChild(e),a.event=new g({obj:a}),a.change=new g({obj:a,eventType:"change"}),a.change=new g({obj:a,eventType:"input"}),(n=a.init)==null||n.call(a)};const P=`<!DOCTYPE html>
<template>
  <yo-layout>
  </yo-layout>
</template>
`,T=`<!DOCTYPE html>
<template>
  <style lang="less">
    .yo-layout {
      display: flex;
      height: 100vh;

      .main {
        flex: 1;
        display: flex;
        flex-direction: column;

        .content {
          flex: 1;
          padding: 24px;
        }
      }
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
  <style>
    .yo-layout-aside {
      box-sizing: border-box;
      height: 100%;
      width: 266px;
      overflow-x: hidden;
      padding: 16px 0 0 16px;

      a,
      span {
        font-size: 14px;
      }

      .logo {
        margin: 0 auto;
        width: 80%;
        height: calc(80px - 16px);
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: .6px solid rgba(0, 0, 0, 0.077);
        margin-bottom: 1rem;
      }

      ul {
        height: calc(100% - 80px - 1rem);
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        overflow-x: hidden;

        svg {
          transition: transform .3s
        }

        >.menu-item,
        .submenu>div {
          width: calc(100% - 32px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 16px;
          margin: 0 16px;
          cursor: pointer;
          margin-top: 2px;

          >a,
          >span {
            flex: 1;
            color: var(--menu-defalut-color);
            pointer-events: none;
          }

          .point {
            background-color: var(--menu-defalut-color);
          }

          >i {
            color: var(--menu-defalut-color);
            pointer-events: none;
          }
        }

        .submenu {
          flex-direction: column;

          ul {
            transition: height .3s ease-in-out;
            overflow: hidden;
          }

          >div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: calc(100% - 32px);
          }
        }

        >.active,
        .open {
          background-color: #fff;
          box-shadow: 0 20px 27px 0 rgba(0, 0, 0, .05);
          border-radius: 12px;

          svg {
            transform: rotate(180deg);
            fill: var(--menu-active-color)
          }

          i,
          a,
          span {
            color: var(--menu-active-color) !important;
            /* font-size: 14.5px; */
            font-weight: 600;
          }

          .point {
            background-color: var(--menu-active-color) !important;
            /* font-size: 14.5px; */
            font-weight: 600;
          }
        }

        .submenu>ul>.active {
          box-shadow: none;
          background-color: transparent;
          border-radius: 0;
        }

      }
    }

  </style>
  <div class="yo-layout-aside">
    <div class="logo">yo-web-components</div>
    <ul>

    </ul>
  </div>
</template>
`,S="modulepreload",O=function(a,t){return new URL(a,t).href},E={},i=function(t,r,o){let e=Promise.resolve();if(r&&r.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));e=Promise.allSettled(r.map(m=>{if(m=O(m,o),m in E)return;E[m]=!0;const p=m.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const _=l[d];if(_.href===m&&(!p||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${b}`))return;const c=document.createElement("link");if(c.rel=p?"stylesheet":S,p||(c.as="script"),c.crossOrigin="",c.href=m,u&&c.setAttribute("nonce",u),document.head.appendChild(c),p)return new Promise((d,_)=>{c.addEventListener("load",d),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${m}`)))})}))}function n(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return e.then(l=>{for(const s of l||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})},v=[{path:"/login",component:()=>i(()=>import("./index-CFNWsBTT.js"),__vite__mapDeps([0,1]),import.meta.url),meta:{name:"login",notMenu:!0}},{path:"/example",component:()=>i(()=>import("./index-D3UivanA.js"),__vite__mapDeps([2,1]),import.meta.url),meta:{name:"test.example",icon:"fld1Status"}},{path:"/home",component:()=>i(()=>import("./index-VCmrDaHX.js"),[],import.meta.url),meta:{name:"menu.home",icon:"fld1Status"}},{path:"/system",meta:{name:"menu.system",icon:"fld1Diag"},children:[{path:"/deviceInfo",component:()=>i(()=>import("./index-BeH_m-Gk.js"),[],import.meta.url),meta:{name:"menu.deviceInfo"}},{path:"/ipSetting",component:()=>i(()=>import("./index-n9R3j3__.js"),[],import.meta.url),meta:{name:"menu.ipSetting"}},{path:"/accountSetting",component:()=>i(()=>import("./index-ftPwDCI9.js"),[],import.meta.url),meta:{name:"menu.accountSetting"}},{path:"/reboot",component:()=>i(()=>import("./index-eBOqEcHM.js"),[],import.meta.url),meta:{name:"menu.reboot"}},{path:"/upgrade",component:()=>i(()=>import("./index-tBHcIULd.js"),[],import.meta.url),meta:{name:"menu.upgrade"}},{path:"/restoreDefault",component:()=>i(()=>import("./index-DfYFRPm4.js"),[],import.meta.url),meta:{name:"menu.restoreDefault"}},{path:"/saveSettings",component:()=>i(()=>import("./index-Cuj07o8W.js"),[],import.meta.url),meta:{name:"menu.saveSettings"}}]},{path:"/monitoring",meta:{name:"menu.monitoring",icon:"fld1Discov"},children:[{path:"/switches",component:()=>i(()=>import("./index-C7P98nUO.js"),[],import.meta.url),meta:{name:"menu.switches"}},{path:"/ONVIF",component:()=>i(()=>import("./index-BjPE6O2j.js"),[],import.meta.url),meta:{name:"menu.ONVIF"}},{path:"/portStatistics",component:()=>i(()=>import("./index-BABA2BVn.js"),[],import.meta.url),meta:{name:"menu.portStatistics"}},{path:"/cableDiagnostics",component:()=>i(()=>import("./index-ynQsdwfw.js"),[],import.meta.url),meta:{name:"menu.cableDiagnostics"}},{path:"/loopGuard",component:()=>i(()=>import("./index-CDVOV3CZ.js"),[],import.meta.url),meta:{name:"menu.loopGuard"}}]},{path:"/switchSettings",meta:{name:"menu.switchSettings",icon:"fld1Network"},children:[{path:"/portSettings",component:()=>i(()=>import("./index-CqdFqplt.js"),[],import.meta.url),meta:{name:"menu.portSettings"}},{path:"/portTrunking",component:()=>i(()=>import("./index-DLJJqmDK.js"),[],import.meta.url),meta:{name:"menu.portTrunking"}},{path:"/portMirroring",component:()=>i(()=>import("./index-DivnPg7X.js"),[],import.meta.url),meta:{name:"menu.portMirroring"}},{path:"/portIsolation",component:()=>i(()=>import("./index-CKhYLHfo.js"),[],import.meta.url),meta:{name:"menu.portIsolation"}},{path:"/staticMAC",component:()=>i(()=>import("./index-DThKvCcE.js"),[],import.meta.url),meta:{name:"menu.staticMAC"}},{path:"/searchMAC",component:()=>i(()=>import("./index-C9wdbkjB.js"),[],import.meta.url),meta:{name:"menu.searchMAC"}},{path:"/MACList",component:()=>i(()=>import("./index-Bdm0uRn0.js"),[],import.meta.url),meta:{name:"menu.MACList"}},{path:"/DHCPSnooping",component:()=>i(()=>import("./index-C4xwsjFO.js"),[],import.meta.url),meta:{name:"menu.DHCPSnooping"}}]},{path:"/vlanSettings",meta:{name:"menu.VLANSettings",icon:"fld1Vlan"},children:[{path:"/VLANSettings",component:()=>i(()=>import("./index-BHB4-sEE.js"),[],import.meta.url),meta:{name:"menu.VLANSettings"}},{path:"/pvidSetting",component:()=>i(()=>import("./index-sDOijmVD.js"),[],import.meta.url),meta:{name:"menu.pvidSetting"}}]},{path:"/QoSSettings",meta:{name:"menu.QoSSettings",icon:"fld1Qos"},children:[{path:"/portRate",component:()=>i(()=>import("./index-CeJ6761t.js"),[],import.meta.url),meta:{name:"menu.portRate"}},{path:"/stormControl",component:()=>i(()=>import("./index-De6G6ACF.js"),[],import.meta.url),meta:{name:"menu.stormControl"}}]},{path:"/poeSetting",component:()=>i(()=>import("./index-jp-Q-dpz.js"),[],import.meta.url),meta:{name:"menu.poeSetting",icon:"fld1PoE"}}],A=(a,t,r)=>{const o=a[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((e,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==r?". Note that variables only represent file names one level deep.":""))))})},w=a=>{for(const t in a)Object.keys(a[t]).forEach(r=>{let o=document.querySelectorAll(`[data-lang='${t}.${r}']`);o&&o.forEach(e=>{e.innerHTML=a[t][r]})})};let f=()=>new Promise(a=>{let t=sessionStorage.getItem("lang")||"Zh";if(t){t=="Zh"&&(t="zh"),window.langMap=window.langMap||{};let r=window.langMap[`${t}.json`];r?(w(r),a(!0)):A(Object.assign({"./language/en.json":()=>i(()=>import("./en-5hzIUo98.js"),[],import.meta.url),"./language/zh.json":()=>i(()=>import("./zh-MeAQrAOo.js"),[],import.meta.url)}),`./language/${t}.json`,3).then(o=>{let e=o.default;window.langMap[`${t}.json`]=e,w(e)})}});class D extends HTMLElement{constructor(){super(),h(this,x)}init(){this.itemHeight=51,this.hash=location.hash;let t=(e,n="")=>`
        <li id="#${n+e.path}" class="menu-item ${this.hash=="#"+(n+e.path)?"active":""}">
          ${n!=""?'<i class="point"></i>':`<i class="fa fa-${e.meta.icon}"></i>`}
          <a data-lang="${e.meta.name}"></a>
        </li>
      `,r=(e,n)=>`
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
      `,o="";v.forEach(e=>{var n;(n=e.meta)!=null&&n.notMenu||(e.children?o+=r(e,e.children):o+=t(e))}),this.querySelector("ul").innerHTML=o,f(),this.menuEvn()}menuEvn(){let t=this.querySelector(".yo-layout-aside>ul"),r=t==null?void 0:t.querySelectorAll(".submenu"),o=t==null?void 0:t.querySelectorAll(".menu-item");r==null||r.forEach(e=>{e.firstElementChild.onclick=n=>{n.stopPropagation(),e.querySelector("ul").style.height=="0px"?(e.querySelector("ul").style.height=e.querySelector("ul").children.length*this.itemHeight+"px",e.querySelector("div>svg").style.transform="rotateZ(180deg)"):(e.querySelector("ul").style.height="0px",e.querySelector("div>svg").style.transform="rotateZ(0deg)",e.querySelector("div").style.background="")}}),o==null||o.forEach(e=>{e.onclick=n=>{n.stopPropagation(),o==null||o.forEach(l=>l.setAttribute("class","menu-item")),n.target.setAttribute("class","menu-item active"),r==null||r.forEach(l=>{l!=n.target.parentElement.parentElement?(l.querySelector("ul").style.height="0px",l.querySelector("div>svg").style.transform="rotateZ(0deg)",l.querySelector("div").style.background="",l.firstElementChild.setAttribute("class","")):l.firstElementChild.setAttribute("class","open")}),location.href=e.id}})}connectedCallback(){window.addEventListener("hashchange",()=>{this.hash!=location.hash&&this.init()})}}customElements.define("yo-layout-menu",D);const R=`<!DOCTYPE html>
<template>
  <style>
    .yo-layout-header {
      height: 80px;
      padding: 24px;
      padding-bottom: 0;
      border-bottom: .6px solid rgba(0, 0, 0, 0.077);

      display: flex;
      align-items: center;
      justify-content: space-between
    }

  </style>
  <div class="yo-layout-header">
    <div class="breadcrumb">面包屑</div>
    <div class="edit">操作区</div>
  </div>
</template>
`;class I extends HTMLElement{constructor(){super(),h(this,R)}init(){y(v)}}customElements.define("yo-layout-header",I);class V extends HTMLElement{constructor(){super(),h(this,T)}init(){}}customElements.define("yo-layout",V);function C(a){let t=a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();return`<${t}></${t}>`}class $ extends HTMLElement{constructor(){super(),this.allPaths=y(v),h(this,P)}init(){window.location.hash||(location.hash="/example")}renderPage(){const t=window.location.hash;this.allPaths[t]?this.allPaths[t].component().then(o=>{this.querySelector("yo-layout").querySelector("slot").innerHTML=C(Object.keys(o)[0])}):location.hash="/example"}connectedCallback(){this.renderPage(),window.addEventListener("hashchange",()=>{this.renderPage()})}}customElements.define("yo-router",$);const y=(a,t="#")=>{let r={};return a.forEach(o=>{if(o.children)r={...r,...y(o.children,t+o.path)};else{const e=t+o.path;r[e]=o}}),r};class M extends HTMLElement{constructor(){super(),h(this,L)}init(){}connectedCallback(){f(),window.addEventListener("load",()=>{f()})}}customElements.define("app-component",M);export{h as _,f as l};
