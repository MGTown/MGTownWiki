/**
 * 侧边栏
 *
 * VitePress 的对象式 sidebar 按「路径前缀最长匹配」选组：内部先把键按 `/` 段数
 * 降序排序，再取第一个 `path.startsWith(key)` 命中（client/theme-default/support/
 * sidebar.js 的 getSidebar）。故键必须写成带结尾斜杠的目录形式，且匹配的是
 * 页面相对 srcDir 的路径（如 /guide/commands/teleport.md）。
 *
 * 分组映射：
 *   /guide/quick/**     → 快速开始
 *   /guide/commands/**  → 指令相关
 *   /guide/gameplay/**  → 玩法相关
 *   /guide/client/**    → 客户端相关
 *
 * 副作用（符合预期）：上/下一篇（docFooter）同样按本表取组，因此只在组内串联，
 * 不再跨组跳转。
 *
 * 图标统一写 <iconify-icon class="mg-ico" icon="mdi:xxx">，颜色由 theme/var.css
 * 的 [icon='…'] 属性选择器统一控制（含明暗两套）；此处只写图标名，不写死颜色。
 */
import type { DefaultTheme } from "vitepress";

/** 快速开始：小镇简介 + 首次游玩 */
const quickStart: DefaultTheme.SidebarItem[] = [
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:rocket-launch-outline"></iconify-icon>快速开始',
    collapsed: false,
    items: [
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:book-open-page-variant-outline"></iconify-icon>小镇简介',
        link: "/guide/quickstart",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:human-greeting-variant"></iconify-icon>首次游玩',
        link: "/guide/quickstart/first-join",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:account-key-outline"></iconify-icon>账号密码',
        link: "/guide/quickstart/account",
      },
    ],
  },
];

/** 指令相关：与 nav「指令相关」下拉完全同序 */
const commands: DefaultTheme.SidebarItem[] = [
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:console-line"></iconify-icon>指令相关',
    collapsed: false,
    items: [
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:map-marker-radius"></iconify-icon>传送',
        link: "/guide/commands/teleport",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:storefront-outline"></iconify-icon>箱子插件',
        link: "/guide/commands/quickshop",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:home-lock"></iconify-icon>圈地',
        link: "/guide/commands/residence",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:backup-restore"></iconify-icon>方块审计',
        link: "/guide/commands/coreprotect",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:music-note"></iconify-icon>点歌',
        link: "/guide/commands/allmusic",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:view-dashboard-outline"></iconify-icon>菜单',
        link: "/guide/commands/menu",
      },
    ],
  },
];

/** 玩法相关：「更多附魔」为多页图鉴，保留二级折叠结构 */
const gameplay: DefaultTheme.SidebarItem[] = [
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:gamepad-variant-outline"></iconify-icon>玩法相关',
    collapsed: false,
    items: [
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:circle-multiple-outline"></iconify-icon>憨币',
        link: "/guide/gameplay/coins",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:dice-multiple-outline"></iconify-icon>小游戏',
        link: "/guide/gameplay/minigames",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:auto-fix"></iconify-icon>更多附魔',
        collapsed: true,
        items: [
          { text: "概述", link: "/guide/gameplay/enchants/" },
          {
            text: "特别说明",
            link: "/guide/gameplay/enchants/special-notes",
          },
          {
            text: "魔咒",
            link: "/guide/gameplay/enchants/spell",
          },
          {
            text: "附魔",
            link: "/guide/gameplay/enchants/enchants",
          },
          {
            text: "诅咒",
            link: "/guide/gameplay/enchants/curses",
          },
          {
            text: "粒子",
            link: "/guide/gameplay/enchants/particles",
          },
        ],
      },
    ],
  },
];

/** 客户端相关：皮肤 / 材质包 / 光影 */
const client: DefaultTheme.SidebarItem[] = [
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:palette-swatch-outline"></iconify-icon>客户端相关',
    collapsed: false,
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
];

/**
 * 键的书写顺序不影响匹配（运行时按 `/` 段数重排），此处按目录层级排列便于阅读。
 * 新增分组页面时：把目录加进来即可，无需改动其他分组。
 */
const sidebar: DefaultTheme.SidebarMulti = {
  "/guide/quickstart": quickStart,
  "/guide/commands/": commands,
  "/guide/gameplay/": gameplay,
  "/guide/client/": client,
};

export default sidebar;
