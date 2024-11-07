import render from "@/utils/render";
import html from "./index.html?raw";

export class YoPageHome extends HTMLElement {
  constructor() {
    super();
    render(this, html);
  }
  // 初始化
  init() {
  }
}

customElements.define("yo-page-home", YoPageHome);
