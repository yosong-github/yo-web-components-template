import{_ as n}from"./index-jjUas1RV.js";import"./index-JolgRYIs.js";const o=`<!DOCTYPE html>
<template>
  <style>.root {
  height: 100%;
  background-color: skyblue;
}
</style>
  <div class="login">
    我是登录页面
    <button @click="goHome">去首页</button>
  </div>

</template>
`;class t extends HTMLElement{constructor(){super(),n(this,o)}init(){}goHome(){location.href="#/home"}}customElements.define("yo-page-login",t);export{t as YoPageLogin};
