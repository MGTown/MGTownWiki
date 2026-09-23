/**
 * 顶部导航
 *
 * 分组规则：主页 / 快速开始 / 指令相关 / 玩法相关 / 客户端相关 / 社区。
 *
 * 图标统一写 <iconify-icon class="mg-ico" icon="mdi:xxx">，颜色由
 * theme/var.css 的 [icon='…'] 属性选择器统一指定（含明暗两套），
 * 此处只负责图标名，不写死颜色。
 */
export default [
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:home-variant-outline"></iconify-icon>主页',
    link: "/",
  },
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:rocket-launch-outline"></iconify-icon>快速开始',
    link: "/guide/quickstart/",
  },
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:console-line"></iconify-icon>指令相关',
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
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:gamepad-variant-outline"></iconify-icon>玩法相关',
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
        link: "/guide/gameplay/enchants/",
      },
    ],
  },
  {
    text: '<iconify-icon class="mg-ico" icon="mdi:palette-swatch-outline"></iconify-icon>客户端相关',
    items: [
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:account-box-outline"></iconify-icon>皮肤设置',
        link: "/guide/client/skin",
      },
      {
        text: '<iconify-icon class="mg-ico" icon="mdi:virtual-reality"></iconify-icon>VR 游玩',
        link: "/guide/client/vivecraft",
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
