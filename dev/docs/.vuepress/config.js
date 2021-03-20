const head = require('./config/head.js')
const nav=require('./config/themeConfig/nav.js')
module.exports = {
    title: 'hydeia‘s blog',
    description: '点滴记录',
    base:'/studyFile/',
    themeConfig: {
        logo:'/img/logo.png',
        lastUpdated: 'Last Updated',//必填：文章显示最新修改时间
        nav,
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
                    '/vuepress/vuepress_2',
                ]
              },
              {
                title: 'ELEMENT-UI',   // 必要的
                path: '/ElementUI-record/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/ElementUI-record/el-image使用记录'
                ]
            }
        ],
      },
      head,
  }