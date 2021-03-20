// nav
module.exports = [
    { text: '首页', link: '/' },
    {
      text: '学习记录',
      link: '/vuepress/', //目录页链接
      items: [
        // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
        {
          text: 'vuepress',
          items: [
            { text: '简单搭建', link: '/vuepress/vuepress_1/' },
            { text: 'logo设置', link: '/vuepress/vuepress_2/' },
          ],
          },
          {
            text: 'element-ui',
            items: [
              { text: 'el-image', link: '/ElementUI-record/el-image使用记录' },
            ],
          },
      ],
    },

  ]
