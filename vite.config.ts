/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-11-01 19:49:28
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-11-01 19:50:03
 * @FilePath: \vite.config.ts
 */
import { defineConfig } from 'vite'
import path from 'path'

// 打包成单页面
export default defineConfig({
  base: './',
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})