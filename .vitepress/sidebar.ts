export default [
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
];
