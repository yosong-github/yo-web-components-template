import{_ as c,l as p}from"./index-DoESu-js.js";import"./index-CmesAyKh.js";const u=`<!DOCTYPE html>
<template>
  <style>
    .root {
      height: 100%;
      background-color: skyblue;
    }

  </style>
  <div id="root">
    <div class="card mb-4">
      <span class="yosong">鼠标放上来我有提示</span>
    </div>

    <div class="card mb-4">
      <div class="card-header">我是卡片header</div>
      <div class="card-body  flex juc-between">
        <div class="card  mb-4 flex-1">
          <div class="card-header">
            <span>自定义按钮</span>
          </div>
          <div class="card-body flex juc-between">
            <yo-button type="primary" lang="test.primary" @click="customBtn"></yo-button>
            <yo-button type="info" lang="test.info" @click="customBtn"></yo-button>
            <yo-button type="danger" lang="test.danger" @click="customBtn"></yo-button>
            <yo-button type="success" lang="test.success" @click="customBtn"></yo-button>
            <yo-button lang="test.defalut" @click="customBtn"></yo-button>
          </div>
        </div>
        <div style="width: 16px;"></div>
        <div class="card mb-4 flex-1">
          <div class="card-header">
            <span>自定义开关</span>
          </div>
          <div class="card-body flex juc-between">
            <yo-switch @click="switchEvn" active="false"></yo-switch>
            <yo-switch @click="switchEvn"></yo-switch>
            <yo-switch @click="switchEvn" active="true"></yo-switch>
            <yo-switch @click="switchEvn" active></yo-switch>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">自定义表格</div>
      <div class="card-body">
        <table class="yotable center">
          <thead>
            <tr>
              <th data-lang="Port" rowspan="2"><a href="javascript:">端口</a></th>
              <th data-lang="Status" rowspan="2">开关</th>
              <th data-lang="Speed/Duplex" colspan="2">速率/双工</th>
              <th data-lang="Flow Control" colspan="2">流量控制</th>
            </tr>
            <tr>
              <th data-lang="Config Status">配置状态</th>
              <th data-lang="Actual Status">实际状态</th>
              <th data-lang="Config Status">配置状态</th>
              <th data-lang="Actual Status">实际状态</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Port 1</td>
              <td style="color: var(--color)" data-lang="Enabled">开启</td>
              <td>
                Auto /
                <span data-lang="Half Duplex"> 半双工 </span>
              </td>
              <td style="color: var(--color)">
                1000M/
                <span data-lang="Half Duplex"> 半双工 </span>
              </td>
              <td data-lang="Enabled">开启</td>
              <td data-lang="Enabled">开启</td>
            </tr>

            <tr>
              <td>Port 2</td>
              <td style="color: var(--color)" data-lang="Enabled">开启</td>
              <td>
                Auto /
                <span data-lang="Full Duplex"> 全双工 </span>
              </td>
              <td style="color: var(--color)">
                1000M/
                <span data-lang="Full Duplex"> 全双工 </span>
              </td>
              <td data-lang="Enabled">开启</td>
              <td data-lang="Enabled">开启</td>
            </tr>

            <tr>
              <td>Port 2</td>
              <td data-lang="Disabled">关闭</td>
              <td>
                100M /
                <span data-lang="Auto"> Auto </span>
              </td>
              <td data-lang="Disconnected">断开</td>
              <td data-lang="Disabled">关闭</td>
              <td data-lang="Disabled">关闭</td>
            </tr>

            <tr>
              <td>Port 2</td>
              <td style="color: var(--color)" data-lang="Enabled">开启</td>
              <td>
                Auto /
                <span data-lang="Auto"> Auto </span>
              </td>
              <td style="color: var(--color)">
                1000M/
                <span data-lang="Full Duplex"> 全双工 </span>
              </td>
              <td data-lang="Enabled">开启</td>
              <td data-lang="Enabled">开启</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- <yo-mask show="false" @click="close"></yo-mask> -->

    <!-- <button class="gologin" @click="goLogin">去登陆</button> -->
  </div>
</template>
`,g=`<!DOCTYPE html>
<template>
  <style>
    /* 提示框样式 */
    .index_tips {
      background-color: #fff;
      z-index: 999;
      color: #333;
      border-radius: 12px;
      box-shadow: 10px 2px 20px rgba(0, 0, 0, .15), -10px -2px 20px rgba(0, 0, 0, .15);
      max-width: 400px;
      font-size: 14px;


      .tips_content {
        min-height: 1.1rem;
        line-height: 1.1rem;
        font-size: small;
        margin: 10px;
        max-height: 250px;
        overflow-x: hidden;

        >div {
          line-height: normal;
        }
      }

      .tip {
        position: absolute;
        top: -9px;
        content: '';
        height: 15px;
        width: 15px;
        transform: rotate(45deg);
        left: 101px;
        background-color: #fff;
      }

      .tipLeft {
        position: absolute;
        top: -9px;
        content: '';
        height: 15px;
        width: 15px;
        transform: rotate(45deg);
        left: 101px;
        background-color: #fff;
      }
    }

  </style>
  <div class="index_tips" style="position: fixed;top: 171.5px;left: 328.546875px;">
    <div class="tips_content"></div>
    <div class="tip"></div>
  </div>
</template>
`;class r extends HTMLElement{constructor(){super(),c(this,g)}init(){}}customElements.define("yo-tips",r);const y=(d,a,i="bottom")=>{let l,n=d.target.getBoundingClientRect();d.target.style.cursor="pointer";let e=new r;e.querySelector(".index_tips .tips_content").innerHTML=a;let t=e.querySelector(".index_tips"),s=t.querySelector(".tips_content"),o=t.querySelector(".tip");document.querySelector("body").appendChild(e),clearTimeout(l),i=="bottom"?(t.style.display="block",t.style.top=n.y+n.height+15+"px",o.style.transform="rotate(45deg)",t.style.left=n.x-t.getBoundingClientRect().width/2+n.width/2+"px",o.style.left=s.getBoundingClientRect().width/2+"px",o.style.top="-8px"):i=="left"&&(t.style.display="block",t.style.top=n.y-s.getBoundingClientRect().height/2+"px",t.style.left=n.x-n.width-(s.getBoundingClientRect().width-20)+"px",o.style.transform="rotate(135deg)",o.style.top=s.getBoundingClientRect().height/2+2+"px",o.style.left=s.getBoundingClientRect().width+11+"px"),d.target.onmouseleave=()=>{clearTimeout(l),l=setTimeout(()=>{t.style.left="0px",t.style.top="0px",t.style.display="none",document.querySelector("body").removeChild(e)},100),t.onmouseover=()=>{clearTimeout(l),t.onmouseleave=()=>{clearTimeout(l),l=setTimeout(()=>{t.style.left="0px",t.style.top="0px",t.style.display="none",document.querySelector("body").removeChild(e)},100)}}}};class h extends HTMLElement{constructor(){super(),c(this,u)}init(){this.querySelector(".yosong").onmouseover=a=>{y(a,`
        我是提示内容，提示内容<br>
        我是提示内容，提示内容<br>
        我是提示内容，提示内容<br>
        我是提示内容，提示内容<br>
      `)},p()}customBtn(){console.log("自定义组件事件触发")}switchEvn({eventDom:a,fn:i,target:l,temp:n}){let e=a.getAttribute("active");e==""||e=="true"?a.setAttribute("active","false"):a.setAttribute("active","true")}}customElements.define("yo-page-example",h);export{h as YoPageExample};
