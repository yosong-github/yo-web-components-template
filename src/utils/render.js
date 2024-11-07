// 事件处理
// evn：单击事件
// change: 值改变事件
class PopEvent {
  constructor(option) {
    this.eventObj = option.obj // 对象的this
    this.target = option.target || this.eventObj // 监听的元素
    this.eventType = option.eventType || 'click' // 监听的事件
    this.popup = option.popup || false // 冒泡
    this.bindEvent()
  }

  bindEvent() {
    let _this = this
    // 监听事件
    _this.target.addEventListener(_this.eventType, (ev) => {
      // 事件的目标对象
      let target = ev.target
      // 定义属性
      let dataset, parent;
      // 调用方法
      popup(target)
      function popup(obj) {
        if (obj === document) {
          return false
        }
        // 获取事件方法
        dataset = obj?.getAttribute('@' + _this.eventType)?.split(" ") || []
        // 获取父节点
        parent = obj?.parentNode
        // 如果点击的对象没有就找父节点
        if (dataset.length == 0 && parent) {
          popup(parent)
        } else {
          dataset.forEach(it => {
            // 获取原型上的方法
            if (_this.eventObj.__proto__[it]) {
              // 运行方法改变this指向
              _this.eventObj.__proto__[it].call(_this.eventObj, {
                fn: _this.eventObj.__proto__[it],
                temp: _this.eventObj,
                target: ev,
                eventDom: obj
              })
            }
          });
          // 向上冒泡
          if (parent) popup(parent)
        }

      }
    })
  }
}
// 渲染的公共方法
let _render = (_this, id) => {
  let div = document.createElement('div');
  div.innerHTML = id;
  const temp = div.querySelector('template').content
  const copyTemp = temp.cloneNode(true)
  _this.appendChild(copyTemp)
  // 单击事件
  _this.event = new PopEvent({ obj: _this })
  // change事件
  _this.change = new PopEvent({ obj: _this, eventType: 'change' })
  // input事件
  _this.change = new PopEvent({ obj: _this, eventType: 'input' })


  // 初始化函数
  _this.init?.call(_this)
}

export default _render
