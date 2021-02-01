module.exports = {
    title: '黄困困',
    description: '点滴记录',
    base:'/studyFile/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
          ],
          markdown: {
            extendMarkdown: md => {
              md.use(require("markdown-it-disable-url-encode"));
            }
          },
          sidebar: [
            '',
            {
                title: 'VUEPRESS',   // 必要的
                path: '/vuepress/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/vuepress/vuepress_1',
                ]
            }
        ]
      }
  }