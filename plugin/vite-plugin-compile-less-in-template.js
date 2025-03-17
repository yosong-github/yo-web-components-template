import less from 'less'

const vitePluginCompileLessInTemplate = () => {
  return {
    name: 'compile-less-in-template',
    // code 代码，id 文件路径
    async transform(code, id) {
      // 拿到需要编译的html文件
      if (id.endsWith('.html?raw')) {
        // if (id.endsWith('login/index.html?raw')) {
        // 通过正则获取到style中的字符串
        let style = code.match(/<style[^>]*>([\s\S]*?)<\/style>/g)
        if (style) {
          let lessCode = style[0].match(/<style[^>]*>([\s\S]*?)<\/style>/g)[0].replace(/<style[^>]*>|<\/style>/g, '')
          lessCode = lessCode.replace(/\\n/g, '\n')
          lessCode = lessCode.replace(/\\r/g, '\r')
          let css = await handlerLess(lessCode)
          code = code.replace(/<style([\s\S]*?)>([\s\S]*?)<\/style>/gi, `<style>${css}</style>`)
        }
      }

      return {
        code,
        map: null
      }
    }
  }
}

// 编译less
const handlerLess = async code => {
  const { css: cssCode } = await less.render(code)
  return cssCode.replace(/\r?\n|\r/g, '\\n') // 将换行符替换为\n
}



export default vitePluginCompileLessInTemplate
