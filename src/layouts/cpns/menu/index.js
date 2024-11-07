import render from '@/utils/render'
import html from './index.html?raw'

// 路由
import staticRouter from '@/router/config/staticRouter.js'
import { loadLanguagePack } from '@/locales'

export class YoLayoutMenu extends HTMLElement {
  constructor() {
    super()
    render(this, html)
  }
  init() {
    // items高度
    this.itemHeight = 51
    // 当前hash
    this.hash = location.hash

    // 菜单列表
    let menuItem = (item, parentPath = '') => {
      return `
        <li id="#${parentPath + item.path}" class="menu-item ${this.hash == ('#' + (parentPath + item.path)) ? 'active' : ''}">
          ${parentPath != '' ? '<i class="point"></i>' : `<i class="fa fa-${item.meta.icon}"></i>`}
          <a data-lang="${item.meta.name}"></a>
        </li>
      `
    }
    // 二级菜单
    let submenu = (parent, children) => {
      return `
        <li class="submenu">
          <div class="${this.hash.includes(parent.path) ? 'open' : ''}" >
            ${`<i class="fa fa-${parent.meta.icon}"></i>`}
            <span data-lang="${parent.meta.name}"></span>
            <svg t="1684119979259" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="2500" width="16" height="16">
              <path d="M185.884 327.55 146.3 367.133 512.021 732.779 877.7 367.133 838.117 327.55 511.997 653.676Z"
                p-id="2501"></path>
            </svg>
          </div>
          <ul style="height: ${this.hash.includes(parent.path) ? children.length * this.itemHeight : '0'}px;">
            ${children.map(it => menuItem(it, parent.path)).join('')}
          </ul>
        </li>
      `
    }

    // 渲染
    let menuItemStr = ''
    staticRouter.forEach((item) => {
      if (item.meta?.notMenu) return
      if (item.children) {
        menuItemStr += submenu(item, item.children)
      } else {
        menuItemStr += menuItem(item)
      }
    })
    this.querySelector('ul').innerHTML = menuItemStr
    // 语言
    loadLanguagePack()
    // 注册事件
    this.menuEvn()

    // this.querySelector('ul').innerHTML = `
    // <li id="#/home" class="menu-item active">
    //   <i class=" fa fa-fld1Status"></i>
    //   <a data-lang="home">home</a>
    // </li>
    // <li class="submenu">
    //   <div>
    //     <i class=" fa fa-fld1Status"></i>
    //     <span data-lang="system">system</span>
    //     <svg t="1684119979259" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    //       p-id="2500" width="16" height="16">
    //       <path d="M185.884 327.55 146.3 367.133 512.021 732.779 877.7 367.133 838.117 327.55 511.997 653.676Z"
    //         p-id="2501"></path>
    //     </svg>
    //   </div>
    //   <ul style="height: 0px;">
    //     <li id="#/system/deviceInfo" class="menu-item"><a data-lang="system/deviceInfo">system/deviceInfo</a></li>
    //     <li id="#/system/ipSetting" class="menu-item"><a data-lang="system/ipSetting">system/ipSetting</a></li>
    //     <li id="#/system/accountSetting" class="menu-item"><a
    //         data-lang="system/accountSetting">system/accountSetting</a></li>
    //   </ul>
    // </li>
    // <li class="submenu">
    //   <div class="">
    //     <i class=" fa fa-fld1Status"></i>
    //     <span data-lang="system">system</span>
    //     <svg t="1684119979259" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    //       p-id="2500" width="16" height="16">
    //       <path d="M185.884 327.55 146.3 367.133 512.021 732.779 877.7 367.133 838.117 327.55 511.997 653.676Z"
    //         p-id="2501"></path>
    //     </svg>
    //   </div>
    //   <ul style="height: 0;">
    //     <li id="#/system/deviceInfo" class="menu-item"><a data-lang="system/deviceInfo">system/deviceInfo</a>
    //     </li>
    //     <li id="#/system/ipSetting" class="menu-item"><a data-lang="system/ipSetting">system/ipSetting</a></li>
    //     <li id="#/system/accountSetting" class="menu-item active"><a
    //         data-lang="system/accountSetting">system/accountSetting</a></li>
    //   </ul>
    // </li>
    // <li id="#/login" class="menu-item">
    //   <i class=" fa fa-fld1Status"></i>
    //   <a data-lang="login">login</a>
    // </li>
    // `
  }


  menuEvn() {
    // 菜单对象
    let menuDom = this.querySelector('.yo-layout-aside>ul')
    // submenu对象
    let submenu = menuDom?.querySelectorAll('.submenu')
    // 菜单项对象
    let menuItem = menuDom?.querySelectorAll('.menu-item')

    // 给所有的submenu设置点击事件，开启或者展开子菜单
    submenu?.forEach(it => {
      it.firstElementChild.onclick = (e) => {
        // 阻止事件冒泡
        e.stopPropagation()
        // 判断是否展开
        if (it.querySelector('ul').style.height == '0px') {
          // 设置高度
          it.querySelector('ul').style.height = (it.querySelector('ul').children.length * this.itemHeight) + 'px'
          // 旋转图标
          it.querySelector('div>svg').style.transform = "rotateZ(180deg)";
        } else {
          it.querySelector('ul').style.height = '0px'
          // 旋转图标
          it.querySelector('div>svg').style.transform = "rotateZ(0deg)";
          // 设置背景塞
          it.querySelector('div').style.background = ''
        }
      }
    })

    menuItem?.forEach(it => {
      it.onclick = (e) => {
        // 阻止默认事件
        e.stopPropagation()
        // 清除所有的选中状态
        menuItem?.forEach(it => it.setAttribute('class', 'menu-item'))
        // 给当前点击的设置选中状态
        e.target.setAttribute('class', 'menu-item active')
        // 收起除了自己的所有子菜单
        submenu?.forEach(it => {
          if (it != e.target.parentElement.parentElement) {
            it.querySelector('ul').style.height = '0px'
            // 旋转图标
            it.querySelector('div>svg').style.transform = "rotateZ(0deg)";
            // 设置背景塞
            it.querySelector('div').style.background = ''

            it.firstElementChild.setAttribute('class', '')
          } else {
            it.firstElementChild.setAttribute('class', 'open')
          }
        })
        // 改变页面显示
        location.href = it.id
      }
    })
  }

  connectedCallback() {
    window.addEventListener('hashchange', () => {
      if (this.hash == location.hash) return
      this.init()
    })
  }
}

customElements.define('yo-layout-menu', YoLayoutMenu)
