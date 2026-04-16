import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "未来技术学院生存手册",
  description: "深圳技术大学未来技术学院 (College of Future Technology) 非官方生存指南",
  lang: 'zh-CN',
  base: '/sztu-manual/',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/sztu-manual/logo.png' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: '未来生存手册',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '生存指南',
        items: [
          { text: '序言', link: '/guide/intro' },
          { text: '思维篇', link: '/guide/thinking' },
          { text: '学术篇', link: '/guide/academic' },
          { text: '实验室篇', link: '/guide/labs' },
          { text: '生活篇', link: '/guide/life' },
          { text: '深造篇', link: '/guide/career' },
        ]
      },
    ],

    sidebar: [
      {
        text: '开始阅读',
        collapsed: false,
        items: [
          { text: '序言', link: '/guide/intro' },
          { text: '思维篇', link: '/guide/thinking' },
        ]
      },
      {
        text: '学院生活',
        collapsed: false,
        items: [
          { text: '学术篇', link: '/guide/academic' },
          { text: '实验室篇', link: '/guide/labs' },
          { text: '生活篇', link: '/guide/life' },
        ]
      },
      {
        text: '未来去向',
        collapsed: false,
        items: [
          { text: '深造篇', link: '/guide/career' },
        ]
      },
      {
        text: '关于',
        collapsed: false,
        items: [
          { text: '参与贡献', link: '/guide/contributing' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hkding0125/sztu-manual' },
    ],

    footer: {
      message: '基于 MIT 许可发布 | 未来技术学院非官方版',
      copyright: 'Copyright © 2025-present CFT Manual Team'
    },

    editLink: {
      pattern: 'https://github.com/hkding0125/sztu-manual/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    outline: {
      level: [2, 3],
      label: '目录',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
  },
})
