import html from "./index.html?raw";
import render from "@/utils/render";

export class YoPageAccountSetting extends HTMLElement {
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

customElements.define("yo-page-account-setting", YoPageAccountSetting);
