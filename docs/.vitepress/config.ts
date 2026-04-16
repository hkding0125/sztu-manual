import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "深技大生存手册",
  description: "深圳技术大学非官方生存指南",
  lang: 'zh-CN',
  base: '/sztu-manual/', // 修正为您的仓库名
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/intro' },
      { text: '深技大官网', link: 'https://www.sztu.edu.cn' }
    ],
    sidebar: [
      {
        text: '开始阅读',
        items: [
          { text: '序言', link: '/guide/intro' },
          { text: '思维篇', link: '/guide/thinking' }
        ]
      },
      {
        text: '校园生存',
        items: [
          { text: '学术篇', link: '/guide/academic' },
          { text: '生活篇', link: '/guide/life' },
          { text: '未来篇', link: '/guide/career' }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '如何贡献', link: '/guide/contributing' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sztu-manual/manual' }
    ],
    footer: {
      message: '基于 CC BY-NC-SA 4.0 许可发布',
      copyright: 'Copyright © 2024-present SZTU Manual Team'
    }
  }
})
