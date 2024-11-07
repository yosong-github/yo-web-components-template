import render from '../../utils/render'
import html from './index.html?raw'

export class YoCard extends HTMLElement {
  constructor() {
    super()
    render(this, html)
  }
  init() {

  }
}

customElements.define('yo-card', YoCard)
