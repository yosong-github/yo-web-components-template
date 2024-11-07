# yo-web-componets

基于 Web Components + vite 的项目框架。

> 为小内存系统构建项目。如：物联网设备、嵌入式设备等。

## 项目亮点

- 基于 Web Components，组件化开发，提高代码复用性。
- 基于 vite，实现热更新，打包优化，适用于最新技术。
- 打包产物体积小，加载速度快。
- 以实现路由与组件功能。后续更加情况更新。

## 技术

- [x] Web Components
- [x] Less
- [x] Prettier
- [x] Husky
- [x] Pnpm
- [x] Vite

## 规范

### components（组件）

每个组件都放在一个文件夹中，文件夹名称与组件名称一致，文件夹中包含以下文件：

- index.html：组件的 HTML 模板
  组件名必须添加前缀（yo）,组件只包含一个根节点，根节点类名与组件名相同。
- index.js：组件的 JavaScript 逻辑

### utils（工具）

工具文件夹中包含一些常用的工具函数

### styles（样式）

样式文件夹中包含一些常用的样式文件

### views（视图）

页面文件夹中包含一些常用的页面文件

### assets（资源）

资源文件夹中包含一些常用的资源文件

## 使用

- 安装依赖

```bash
pnpm install
```

- 启动开发服务器

```bash
pnpm dev
```

- 构建项目

```bash
pnpm build
```
