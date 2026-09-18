import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";

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
    nav: [
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:home-variant-outline"></iconify-icon>主页',
        link: "/",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:book-open-page-variant-outline"></iconify-icon>玩家文档',
        link: "/guide/",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:puzzle-outline"></iconify-icon>插件教程',
        items: [
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:home-lock"></iconify-icon>圈地与保护',
            link: "/guide/plugins/residence",
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:backup-restore"></iconify-icon>方块回档',
            link: "/guide/plugins/coreprotect",
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:storefront-outline"></iconify-icon>商店交易',
            link: "/guide/plugins/quickshop",
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:map-marker-radius"></iconify-icon>传送指令',
            link: "/guide/plugins/tp",
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:music-note"></iconify-icon>音乐点歌',
            link: "/guide/plugins/allmusic",
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:auto-fix"></iconify-icon>更多附魔',
            link: "/guide/plugins/custom-enchants/",
          },
        ],
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:palette-swatch-outline"></iconify-icon>客户端设置',
        items: [
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:account-box-outline"></iconify-icon>皮肤设置',
            link: "/guide/client/skin",
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:package-variant-closed"></iconify-icon>材质包',
            link: "/guide/client/resourcepack",
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:weather-sunset"></iconify-icon>光影',
            link: "/guide/client/shaders",
          },
        ],
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:account-group-outline"></iconify-icon>社区',
        items: [
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:qqchat"></iconify-icon>加入 QQ 群',
            link: "https://qm.qq.com/q/JSzjMcoNKq",
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:github"></iconify-icon>GitHub 组织',
            link: "https://github.com/MGTown/",
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:cloud-download-outline"></iconify-icon>老地图下载',
            link: "https://pan.baidu.com/s/1sLgTGYhKO_MWxz89Kg6OGA?pwd=0515",
          },
        ],
      },
    ],

    // ---------- 侧边栏（文档均位于 /guide/ 下，使用全局侧边栏） ----------
    sidebar: [
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:book-open-variant"></iconify-icon>玩家文档',
        link: "/guide/",
        items: [
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:door-open"></iconify-icon>第一次加入游戏',
            collapsed: false,
            items: [
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:human-greeting-variant"></iconify-icon>初次游玩毛怪小镇',
                link: "/guide/first-join",
              },
            ],
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:puzzle-outline"></iconify-icon>插件使用教程',
            collapsed: false,
            items: [
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:home-lock"></iconify-icon>圈地插件',
                link: "/guide/plugins/residence",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:backup-restore"></iconify-icon>CoreProtect 插件',
                link: "/guide/plugins/coreprotect",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:music-note"></iconify-icon>音乐插件',
                link: "/guide/plugins/allmusic",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:seat-outline"></iconify-icon>动作插件',
                link: "/guide/plugins/gsit",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:projector"></iconify-icon>全息文本插件',
                link: "/guide/plugins/holograms",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:sword-cross"></iconify-icon>mcMMO 插件',
                link: "/guide/plugins/mcmmo",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:storefront-outline"></iconify-icon>QuickShop 商店插件',
                link: "/guide/plugins/quickshop",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:map-marker-radius"></iconify-icon>传送插件',
                link: "/guide/plugins/tp",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:view-dashboard-outline"></iconify-icon>菜单插件',
                link: "/guide/plugins/menu",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:auto-fix"></iconify-icon>更多附魔',
                collapsed: true,
                items: [
                  { text: "概述", link: "/guide/plugins/custom-enchants/" },
                  {
                    text: "特别说明",
                    link: "/guide/plugins/custom-enchants/special-notes",
                  },
                  {
                    text: "魔咒",
                    link: "/guide/plugins/custom-enchants/magic-enchants",
                  },
                  {
                    text: "附魔",
                    link: "/guide/plugins/custom-enchants/enchants",
                  },
                  {
                    text: "诅咒",
                    link: "/guide/plugins/custom-enchants/curses",
                  },
                  {
                    text: "粒子",
                    link: "/guide/plugins/custom-enchants/particles",
                  },
                ],
              },
            ],
          },
          {
            text: '<iconify-icon class="mg-ico" icon="mdi:palette-swatch-outline"></iconify-icon>客户端相关配置教程',
            collapsed: false,
            items: [
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:account-box-outline"></iconify-icon>皮肤相关',
                link: "/guide/client/skin",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:package-variant-closed"></iconify-icon>材质包相关',
                link: "/guide/client/resourcepack",
              },
              {
                text: '<iconify-icon class="mg-ico" icon="mdi:weather-sunset"></iconify-icon>光影相关',
                link: "/guide/client/shaders",
              },
            ],
          },
        ],
      },
    ],

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
