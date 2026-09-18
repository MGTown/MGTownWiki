// .vitepress/env.d.ts
// 全局类型补充：为 VitePress 项目声明静态资源与 Vue SFC 的模块类型。
//
// 为什么需要它：
//   1. VitePress 的 client.d.ts 会 `/// <reference types="vite/client" />`，但在
//      pnpm 这类严格隔离的包管理器下，项目根 node_modules 中并无 vite，
//      该引用无法解析，`import './var.css'` 之类的副作用导入会报 TS2307。
//   2. @theojs/lumen 的类型入口 types/index.d.ts 间接 export 了 .vue 文件
//      （components/index.ts），TS 需要 *.vue 的模块声明才能解析其导出类型。
//
// 声明范围刻意保持最小：只覆盖本项目实际用到的静态资源类型。

/** 样式文件：仅用于副作用导入（如 `import './var.css'`） */
declare module '*.css' {
  const content: Record<string, string>
  export default content
}

/** Vue 单文件组件 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

// import.meta.env 的最小声明。
// 正常情况下由 vite/client 提供，但同上原因无法解析；而 @theojs/lumen 以 TS 源码
// 形式发布（composables/*.ts 直接用了 import.meta.env.PROD），缺失时会产生 TS2339。
// 此处保持与 vite/client 一致的形状，便于将来真正引入 vite 时接口合并无冲突。
interface ImportMetaEnv {
  [key: string]: any
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
