// .vitepress/theme/index.ts
// MGTown 文档站主题入口：继承 VitePress 默认主题，接入 @theojs/lumen 样式与组件
import * as lm from '@theojs/lumen'
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

// 全量导入 lumen 样式（含 components-var.css）
import '@theojs/lumen/style'
// 站点自定义变量覆盖，需在 lumen 样式之后引入
import './var.css'

import { Footer_Data } from '../data/FooterData'

export default {
  extends: DefaultTheme,

  // 通过布局插槽挂载 lumen 的 Footer（首页页脚：站内导航分组 + 版权）
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(lm.Footer, { Footer_Data })
    })
  },

  enhanceApp({ app }: EnhanceAppContext) {
    // 全局注册 lumen 组件，全局可用（Markdown 中可直接书写标签）
    app.component('Pill', lm.Pill)
    app.component('Links', lm.Links)
    app.component('Card', lm.Card)
    app.component('Copy', lm.CopyText)
    app.component('BoxCube', lm.BoxCube)
    app.component('Underline', lm.Underline)
  }
}
