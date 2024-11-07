import { loadLanguagePack } from "@/locales";
import render from "../../utils/render";
import html from "./index.html?raw";

export class YoSwitch extends HTMLElement {

  // 监听属性
  static get observedAttributes() {
    return ['active']
  }

  constructor() {
    super();
    if (!!this.getAttribute('active') || this.getAttribute('active') === '') {
      this.active = true
    } else {
      this.active = false
    }
    render(this, html);
  }
  init() {
    // 继承样式
    this.querySelector('.toggle').setAttribute('style', this.getAttribute('style'))

    if (this.active) {
      this.querySelector('.toggle').setAttribute('class', 'toggle toggle_on')
    } else {
      this.querySelector('.toggle').setAttribute('class', 'toggle')
    }
    if (!!this.getAttribute('id') || this.getAttribute('id') === '') {
      this.querySelector('.toggle').setAttribute('id', 'btn-toggle' + this.getAttribute('id'))
    } else {
      this.querySelector('.toggle').setAttribute('id', 'btn-toggle')
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') {
      if (newValue === 'true' || newValue === '') {
        this.active = true
      } else {
        this.active = false
      }
      this.init()
    }
  }
}

customElements.define("yo-switch", YoSwitch);
