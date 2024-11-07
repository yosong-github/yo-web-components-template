import render from '../../utils/render'
import html from './index.html?raw'

export class YoMask extends HTMLElement {
  // 监听属性
  static get observedAttributes() {
    return ['show']
  }

  constructor() {
    super()
    render(this, html)
  }
  init() {

  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    if (name === 'show') {
      if (newValue === 'true') {
        this.style.display = 'block'
      } else {
        this.style.display = "none";
      }
    }
  }
}

customElements.define('yo-mask', YoMask)
