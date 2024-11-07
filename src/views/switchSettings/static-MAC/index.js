import html from "./index.html?raw";
import render from "@/utils/render";

export class YoPageStaticMac extends HTMLElement {
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

customElements.define("yo-page-static-mac", YoPageStaticMac);
