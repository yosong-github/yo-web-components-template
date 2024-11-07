import render from '@/utils/render'
import html from './index.html?raw'

import './cpns/menu'
import './cpns/header'

export class YoLayout extends HTMLElement {
  constructor() {
    super()
    render(this, html)
  }
  init() {
  }
}

customElements.define('yo-layout', YoLayout)
