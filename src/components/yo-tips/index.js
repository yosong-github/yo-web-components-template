import render from '@/utils/render'
import html from './index.html?raw'

export class YoTips extends HTMLElement {
  constructor() {
    super()
    render(this, html)
  }
  init() {

  }
}

customElements.define('yo-tips', YoTips)

const useTips = (e, content, direction = 'bottom') => {
  let timer
  // 目标对象的宽高
  let info = e.target.getBoundingClientRect()
  // 修改目标元素鼠标样式
  e.target.style.cursor = 'pointer'

  // 初始化提示对象
  let yoTips = new YoTips()

  // 提示对象
  yoTips.querySelector('.index_tips .tips_content').innerHTML = content
  let tips = yoTips.querySelector('.index_tips')
  let tipsContent = tips.querySelector('.tips_content')
  let tipsTip = tips.querySelector('.tip')
  // 添加提示对象
  document.querySelector('body').appendChild(yoTips)
  // 清除定时器
  clearTimeout(timer)

  // 设置位置
  if (direction == 'bottom') {
    tips.style.display = 'block'
    tips.style.top = info.y + info.height + 15 + 'px'
    tipsTip.style.transform = 'rotate(45deg)'
    tips.style.left = (info.x - (tips.getBoundingClientRect().width / 2) + (info.width / 2)) + 'px'
    tipsTip.style.left = ((tipsContent.getBoundingClientRect().width / 2)) + 'px'
    tipsTip.style.top = '-8px'
  } else if (direction == 'left') {
    tips.style.display = 'block'

    tips.style.top = (info.y - (tipsContent.getBoundingClientRect().height / 2)) + 'px'
    tips.style.left = (info.x - info.width - (tipsContent.getBoundingClientRect().width - 20)) + 'px'

    tipsTip.style.transform = 'rotate(135deg)'
    tipsTip.style.top = ((tipsContent.getBoundingClientRect().height / 2) + 2) + 'px'
    tipsTip.style.left = ((tipsContent.getBoundingClientRect().width) + 11) + 'px'
  }

  // 离开关闭
  e.target.onmouseleave = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      tips.style.left = '0px'
      tips.style.top = '0px'
      tips.style.display = 'none'
      document.querySelector('body').removeChild(yoTips)
    }, 100)
    tips.onmouseover = () => {
      clearTimeout(timer)
      tips.onmouseleave = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          tips.style.left = '0px'
          tips.style.top = '0px'
          tips.style.display = 'none'
          document.querySelector('body').removeChild(yoTips)
        }, 100)
      }
    }
  }
}

export {
  useTips,

}
