const langToDom = (data) => {
  for (const module in data) {

    Object.keys(data[module]).forEach(key => {
      let element = document.querySelectorAll(`[data-lang='${module}.${key}']`);  // 查找需要翻译的元素
      if (element) {
        element.forEach(it => {
          it.innerHTML = data[module][key];  // 设置翻译后的文本
        })
      }
    })
  }
}

export let loadLanguagePack = () => {
  return new Promise((res) => {
    let lang = sessionStorage.getItem("lang") || 'Zh';  // 获取本地存储的语言环境，默认为英文（en）
    if (lang) {
      if (lang == 'Zh') {
        lang = 'zh'
      }
      // 初始化
      window.langMap = window.langMap || {}
      // 缓存
      let langMap = window.langMap[`${lang}.json`]

      if (langMap) {
        let data = langMap
        langToDom(data)
        res(true)
      } else {
        import(`./language/${lang}.json`).then(data => {
          let resData = data.default
          window.langMap[`${lang}.json`] = resData
          langToDom(resData)
        })
        // fetch(`./language/${lang}.json`)  // 根据语言环境读取相应的语言包文件

      }

    }

  })
}
