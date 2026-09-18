// .vitepress/data/FooterData.ts
// 页脚数据：内链分组 + 外部资源分组 + 版权作者信息
import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  author: {
    name: 'MGTown 毛怪小镇',
    link: 'https://mgtown.cn',
    startYear: 2021,
    rel: 'noopener noreferrer'
  },

  group: [
    {
      icon: { icon: 'mdi:compass-outline', color: '#d97757' },
      title: '站内导航',
      links: [
        { name: '玩家文档总览', link: '/guide/' },
        { name: '初次游玩毛怪小镇', link: '/guide/first-join' },
        { name: '插件使用教程', link: '/guide/plugins/residence' }
      ]
    },
    {
      icon: { icon: 'mdi:link-variant', color: '#81b29a' },
      title: '外部链接',
      links: [
        {
          name: '官方 QQ 群',
          link: 'https://qm.qq.com/q/JSzjMcoNKq',
          icon: { icon: 'mdi:qqchat', color: '#12b7f5' },
          rel: 'noopener noreferrer'
        },
        {
          name: 'GitHub 组织',
          link: 'https://github.com/MGTown/',
          icon: { icon: 'mdi:github', color: '#6e5494' },
          rel: 'noopener noreferrer'
        },
        {
          name: '老地图下载',
          link: 'https://pan.baidu.com/s/1sLgTGYhKO_MWxz89Kg6OGA?pwd=0515',
          icon: { icon: 'mdi:cloud-download-outline', color: '#3d8bfd' },
          rel: 'noopener noreferrer'
        }
      ]
    }
  ]
}
