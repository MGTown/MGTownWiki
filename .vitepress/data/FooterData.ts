// .vitepress/data/FooterData.ts
// 页脚数据：内链分组 + 外部资源分组 + 版权作者信息
import type { FooterData } from "@theojs/lumen";

export const Footer_Data: FooterData = {
  author: {
    name: "MGTown 毛怪小镇",
    link: "https://mgtown.cn",
    startYear: 2021,
    rel: "noopener noreferrer",
  },

  group: [
    {
      icon: { icon: "mdi:compass-outline", color: "var(--mg-c-brand)" },
      title: "站内导航",
      links: [
        { name: "小镇简介", link: "/guide/quickstart" },
        { name: "首次游玩", link: "/guide/quickstart/first-join" },
        { name: "账号与密码", link: "/guide/quickstart/account" },
      ],
    },
    {
      icon: { icon: "mdi:link-variant", color: "var(--mg-c-indigo)" },
      title: "外部链接",
      links: [
        {
          name: "官方 QQ 群",
          link: "https://qm.qq.com/q/JSzjMcoNKq",
          icon: { icon: "mdi:qqchat", color: "var(--mg-c-qq)" },
          rel: "noopener noreferrer",
        },
        {
          name: "GitHub 组织",
          link: "https://github.com/MGTown/",
          icon: { icon: "mdi:github", color: "var(--mg-c-slate)" },
          rel: "noopener noreferrer",
        },
        {
          name: "老地图下载",
          link: "https://pan.baidu.com/s/1sLgTGYhKO_MWxz89Kg6OGA?pwd=0515",
          icon: {
            icon: "mdi:cloud-download-outline",
            color: "var(--mg-c-blue)",
          },
          rel: "noopener noreferrer",
        },
      ],
    },
  ],
};
