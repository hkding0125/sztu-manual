import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "未来技术学院生存手册",
  description: "深圳技术大学未来技术学院 (College of Future Technology) 非官方生存指南",
  lang: 'zh-CN',
  base: '/sztu-manual/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '新才生存指南', link: '/guide/intro' },
      { text: '学院官网', link: 'https://cft.sztu.edu.cn/' }
    ],
    sidebar: [
      {
        text: '开始阅读',
        items: [
          { text: '序言：坪山的“特区”', link: '/guide/intro' },
          { text: '思维篇：拒绝当高级技工', link: '/guide/thinking' }
        ]
      },
      {
        text: '硬核生存',
        items: [
          { text: '学术篇：PBL与全英教学', link: '/guide/academic' },
          { text: '实验室：院士大腿怎么抱', link: '/guide/labs' },
          { text: '生活篇：未来人的坪山日常', link: '/guide/life' }
        ]
      },
      {
        text: '未来去向',
        items: [
          { text: '深造篇：从坪山飞向世界', link: '/guide/career' }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '贡献者名单', link: '/guide/contributing' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hkding0125/sztu-manual' }
    ],
    footer: {
      message: '基于 MIT 许可发布 | 未来技术学院非官方版',
      copyright: 'Copyright © 2026-present CFT Manual Team'
    }
  }
})
