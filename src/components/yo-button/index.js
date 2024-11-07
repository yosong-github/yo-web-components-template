import render from "../../utils/render";
import html from "./index.html?raw";

export class YoButton extends HTMLElement {
  // 监听属性
  static get observedAttributes() {
    return ['type', 'lang']
  }
  constructor() {
    super();
    render(this, html);
  }
  init() {
    // 继承样式
    this.querySelector('.yo-button').setAttribute('style', this.getAttribute('style'))

    // let btnInfo = this.firstChild
    // this.removeChild(this.firstChild)
    // this.querySelector('.yo-button').innerText = btnInfo.data
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'type') {
      this.querySelector('.yo-button').style.backgroundColor = `var(--color-theme-${newValue})`;
    }
    if (name === 'lang') {
      this.querySelector('.yo-button').setAttribute('data-lang', newValue)
    }
  }
}

customElements.define("yo-button", YoButton);
