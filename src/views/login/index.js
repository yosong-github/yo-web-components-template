import render from "../../utils/render";
import html from "./index.html?raw";
import emitter from '../../utils/mitt';
import '@/components/yo-button/index'
import '@/components/yo-switch/index'
import '@/components/yo-mask/index'
import '@/components/yo-card/index'


export class YoPageLogin extends HTMLElement {
  constructor() {
    super();
    render(this, html);
  }
  // 初始化
  init() {
  }

  goHome() {
    location.href = '#/home'
  }
}

customElements.define("yo-page-login", YoPageLogin);
