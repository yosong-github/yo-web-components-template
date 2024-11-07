import html from "./index.html?raw";
import render from "@/utils/render";

export class YoPagePortSetting extends HTMLElement {
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

customElements.define("yo-page-port-setting", YoPagePortSetting);
