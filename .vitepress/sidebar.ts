/**
 * 侧边栏（2026-09-21 重构）
 *
 * 四组：快速开始 / 指令相关 / 玩法相关 / 客户端相关。
 * 前三组的一级分组图标同时出现在顶部导航的下拉里，颜色由 var.css 统一控制。
 * 「更多附魔」为多页图鉴，保留二级折叠结构。
 */
export default [
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:rocket-launch-outline"></iconify-icon>快速开始',
    collapsed: false,
    items: [
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:book-open-page-variant-outline"></iconify-icon>小镇简介',
        link: "/guide/",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:human-greeting-variant"></iconify-icon>首次游玩',
        link: "/guide/first-join",
      },
    ],
  },
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:console-line"></iconify-icon>指令相关',
    collapsed: false,
    items: [
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:account-key-outline"></iconify-icon>账号密码',
        link: "/guide/commands/account",
      },
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
