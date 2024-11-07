import render from "@/utils/render";
import html from "./index.html?raw";
import emitter from '@/utils/mitt';
import '@/components/yo-button/index'
import '@/components/yo-switch/index'
import '@/components/yo-mask/index'
import '@/components/yo-card/index'
import { useTips } from "@/components/yo-tips/index";
import { loadLanguagePack } from "@/locales";

export class YoPageExample extends HTMLElement {
  constructor() {
    super();
    render(this, html);
  }
  // 初始化
  init() {
    this.querySelector('.yosong').onmouseover = (e => {
      useTips(e, `
        我是提示内容，提示内容<br>
        我是提示内容，提示内容<br>
        我是提示内容，提示内容<br>
        我是提示内容，提示内容<br>
      `)
    })
    loadLanguagePack()
  }

  // 自定义事件
  customBtn() {
    console.log("自定义组件事件触发");
  }

  switchEvn({ eventDom, fn, target, temp }) {
    let active = eventDom.getAttribute("active");
    (active == '' || active == 'true') ?
      eventDom.setAttribute("active", "false") :
      eventDom.setAttribute("active", "true");
  }
}

customElements.define("yo-page-example", YoPageExample);
