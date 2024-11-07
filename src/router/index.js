import render from '@/utils/render'
import html from './index.html?raw'
// 布局
import '@/layouts'
// 路由
import staticRouter from './config/staticRouter.js'
// 格式化标签
import convertToHtmlTag from '@/utils/convertToHtmlTag';

export class YoRouter extends HTMLElement {
  constructor() {
    super()
    this.allPaths = getAllPaths(staticRouter)
    render(this, html)
  }
  init() {
    // 路由初始化, 获取当前hash值
    const hash = window.location.hash
    if (!hash) {
      // 默认跳转到首页
      location.hash = import.meta.env.VITE_DEFAULT_HOPME_PATH
    }
  }

  // 渲染页面
  renderPage() {
    // 获取当前hash值
    const hash = window.location.hash

    // 判断当前hash值是否存在路由中，如果存在则渲染页面，如果不存在则跳转到首页
    if (this.allPaths[hash]) {
      let currentRoute = this.allPaths[hash]
      currentRoute.component().then((res) => {
        this.querySelector('yo-layout').querySelector('slot').innerHTML = convertToHtmlTag(Object.keys(res)[0])
      })
    } else {
      // 默认跳转到首页
      location.hash = import.meta.env.VITE_DEFAULT_HOPME_PATH
    }

  }

  // 页面挂载完成
  connectedCallback() {
    // 渲染页面
    this.renderPage()
    // 监听hashchange事件，更新页面
    window.addEventListener('hashchange', () => {
      this.renderPage()
    })
  }
}

customElements.define('yo-router', YoRouter)


const getAllPaths = (routes, basePath = '#') => {
  let paths = {};
  routes.forEach(route => {
    if (route.children) {
      // paths = paths.concat(this.getAllPaths(route.children, currentPath));
      paths = { ...paths, ...getAllPaths(route.children, basePath + route.path) };
    } else {
      const currentPath = basePath + route.path;
      paths[currentPath] = route;
    }
  });
  return paths;
}

export { getAllPaths }
