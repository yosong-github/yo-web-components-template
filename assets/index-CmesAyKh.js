import{_ as n}from"./index-DoESu-js.js";const s=`<!DOCTYPE html>
<template>
  <style>
    .yo-button {
      background-color: #aaa;
      display: block;
      min-width: 74px;
      line-height: 16px;
      font-size: 12px;
      padding: 6px 12px;
      color: #fff;
      cursor: pointer;
      border-radius: 3px;
      border: 0;
      text-align: center;
      -webkit-transition: background-color 0.25s ease-in-out;
      transition: background-color 0.25s ease-in-out;
    }

    .yo-button:hover {
      filter: brightness(110%);
    }

  </style>
  <button class="yo-button"></button>
</template>
`;class r extends HTMLElement{static get observedAttributes(){return["type","lang"]}constructor(){super(),n(this,s)}init(){this.querySelector(".yo-button").setAttribute("style",this.getAttribute("style"))}attributeChangedCallback(e,i,t){e==="type"&&(this.querySelector(".yo-button").style.backgroundColor=`var(--color-theme-${t})`),e==="lang"&&this.querySelector(".yo-button").setAttribute("data-lang",t)}}customElements.define("yo-button",r);const l=`<!DOCTYPE html>

<template>
  <style>
    .toggle {
      width: 50px;
      height: 21px;
      box-sizing: border-box;
      padding: 3px;
      border-radius: 25px;
      background-color: #e1e1e1;
      transition: background-color 0.3s ease;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .toggle::after {
      content: '';
      display: block;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      top: 2.5px;
      transition: margin-left 0.3s ease;
    }

    .toggle_on::after {
      margin-left: calc(50% + 4px);
    }

    .toggle_on {
      background-color: var(--color-theme-primary);
    }

  </style>
  <div class="toggle">
    <span data-lang="common.on" style="
        color: #fff;
        font-size: 10px;
        margin-left: 1px;
        pointer-events: none;
      "></span>
    <span data-lang="common.off" style="
        color: #aaa;
        margin-right: 0;
        font-size: 10px;
        margin-right: 1px;
        pointer-events: none;
      "></span>
  </div>
</template>
`;class a extends HTMLElement{static get observedAttributes(){return["active"]}constructor(){super(),this.getAttribute("active")||this.getAttribute("active")===""?this.active=!0:this.active=!1,n(this,l)}init(){this.querySelector(".toggle").setAttribute("style",this.getAttribute("style")),this.active?this.querySelector(".toggle").setAttribute("class","toggle toggle_on"):this.querySelector(".toggle").setAttribute("class","toggle"),this.getAttribute("id")||this.getAttribute("id")===""?this.querySelector(".toggle").setAttribute("id","btn-toggle"+this.getAttribute("id")):this.querySelector(".toggle").setAttribute("id","btn-toggle")}attributeChangedCallback(e,i,t){e==="active"&&(t==="true"||t===""?this.active=!0:this.active=!1,this.init())}}customElements.define("yo-switch",a);const c=`<!DOCTYPE html>
<template>
  <style>
    .mask {
      height: 100vh;
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999
    }

  </style>
  <div class="mask"></div>
</template>
`;class g extends HTMLElement{static get observedAttributes(){return["show"]}constructor(){super(),n(this,c)}init(){}attributeChangedCallback(e,i,t){console.log(e,i,t),e==="show"&&(t==="true"?this.style.display="block":this.style.display="none")}}customElements.define("yo-mask",g);const d=`<!DOCTYPE html>
<template>
  <style lang="less">
    .yo-card {
      box-sizing: border-box;
      width: 100%;
      height: 100px;
      padding: 16px;
      background-color: #f5f5f5;
      border-radius: 16px;

      .title {
        background-color: var(--theme-color);
      }
    }

  </style>
  <div class="yo-card">
    <div class="title">title</div>
    card
  </div>
</template>
`;class u extends HTMLElement{constructor(){super(),n(this,d)}init(){}}customElements.define("yo-card",u);
