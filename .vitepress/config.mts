import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import nav from "./nav";
import sidebar from "./sidebar";

/**
 * 毛怪小镇玩家文档站配置
 *
 * 目录约定（项目根为站点根，srcDir 指向 docs）：
 *   .vitepress/               站点配置、主题与数据，构建产物输出到 .vitepress/dist
 *   docs/                     文档源码（所有页面统一收录于此）
 *   public/                   静态资源，按原路径直出（/logo.png、/imgs/…）
 *
 * 注：VitePress 默认把 publicDir 解析为 <srcDir>/public，且其内部 Vite 实例的
 * root 亦为 srcDir。因静态资源独立放在项目根 public/，此处显式覆盖 publicDir
 * （取绝对路径，保证 VitePress 与 Vite 两端解析结果一致）。
 *
 * 导航图标统一使用 <iconify-icon>：VitePress 的 nav / sidebar 文本走 v-html，
 * 可直接内联该自定义元素；图标资源由 @theojs/lumen 引入的 iconify 负责加载。
 */

// 静态资源目录：<项目根>/public（本文件位于 .vitepress/ 下，故回退一级）
const publicDir = fileURLToPath(new URL("../public", import.meta.url));

export default defineConfig({
  // 站点根为项目根，文档源码集中在 docs/
  srcDir: "docs",

  // 静态资源不随 srcDir 走，独立放在项目根 public/
  vite: { publicDir },

  lang: "zh-CN",
  title: "毛怪小镇",
  description: "Hanser的粉丝们 '毛怪' 所开发维护的 Minecraft 服务器",

  cleanUrls: true,
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#055fcd" }],
  ],

  // lumen 使用 <iconify-icon> 自定义元素，需告知 Vue 编译器不要当作组件解析
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === "iconify-icon" },
    },
  },

  themeConfig: {
    // 站点标题（lumen 支持 HTML，此处保持纯文本）
    siteTitle: "毛怪小镇",

    // Logo（VitePress 2 使用对象形式，可指定尺寸与加载优先级）
    logo: {
      src: "/logo.png",
      width: 32,
      height: 32,
      alt: "MGTownLogo",
      fetchpriority: "high",
    },

    // ---------- 顶部导航 ----------
    nav: nav,

    // ---------- 侧边栏（文档均位于 /guide/ 下，使用全局侧边栏） ----------
    sidebar: sidebar,

    socialLinks: [{ icon: "github", link: "https://github.com/MGTown/" }],

    // ---------- lumen 主题文案优化 ----------
    outline: { level: "deep", label: "本页目录" },
    lastUpdated: { text: "最后更新于" },
    docFooter: { prev: "上一篇", next: "下一篇" },
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "文章",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    darkModeSwitchLabel: "主题模式",
    externalLinkIcon: true,
    langMenuLabel: "切换语言",
    navMenuLabel: "主导航",
    mobileMenuLabel: "菜单",
    extraMenuLabel: "更多选项",
    skipToContentLabel: "跳转到内容",

    // 本地搜索（中文文案）
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    // 404 页面（lumen 支持自定义文案）
    notFound: {
      title: "找不到页面",
      quote: "这片区块还没有被生成，也许它去找寻新的冒险了！",
      linkLabel: "返回首页重新探索",
      linkText: "返回首页",
      code: "404",
    },

    // 说明：版权信息由 lumen 的 Footer 组件在首页统一输出（含站内导航分组），
    // 故此处不再配置 themeConfig.footer，避免首页出现两条版权文案。
  },

  sitemap: {
    hostname: "https://mgtown.cn",
  },
});
