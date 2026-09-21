export default [
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
];
