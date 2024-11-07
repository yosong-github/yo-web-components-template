import render from '@/utils/render'
import html from './index.html?raw'
import staticRouter from '@/router/config/staticRouter'
import { getAllPaths } from '@/router'

export class YoLayoutHeader extends HTMLElement {
  constructor() {
    super()
    render(this, html)
  }
  init() {
    const paths = getAllPaths(staticRouter)

  }
}

customElements.define('yo-layout-header', YoLayoutHeader)
