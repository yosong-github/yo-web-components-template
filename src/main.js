// 初始化样式
import 'normalize.css'
// 通用样式
import '@/styles/common.less'
import '@/styles/font.less'
// 主入口
import html from './App.html?raw'
// 事件处理工具
import render from "@/utils/render";

// 路由
import "@/router";
// 国际化
import { loadLanguagePack } from './locales';

export class App extends HTMLElement {
  constructor() {
    super()
    render(this, html)
  }
  init() {

  }
  connectedCallback() {
    loadLanguagePack()
    window.addEventListener('load', () => {
      loadLanguagePack()
    })
  }
}

customElements.define('app-component', App)
