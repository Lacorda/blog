// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '基础|博文',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '基础知识点',
        items: [
          { text: 'JavaScript', link: '/pages/4456e3/' },
          { text: 'ES6', link: '/pages/d45d68/' },
          { text: 'HTML与CSS', link: '/pages/0135b8/' },
          { text: 'JS设计模式', link: '/pages/e1006e/' },
          { text: 'Web API', link: '/pages/5b3b9e/' },
        //   { text: '性能', link: '/pages/5b3b9e/' },
        ],
      },
    ],
  },
  {
    text: '算法|试题',
    link: '/algorithm/',
    items: [
        { text: '排序算法', link: '/pages/7d4d69/' },
        // { text: 'LeetCode', link: '/pages/a0057b/' },
        { text: '算法面试题解', link: '/pages/a0057b/' },
    ],
  },
  {
    text: '插件|框架',
    link: '/services/',
    items: [
        // { text: 'Vue', link: '/pages/a0057b/' },
        // { text: 'React', link: '/pages/a0057b/' },
    ],
  },
  {
    text: '项目|工具',
    link: '/tools/',
    items: [
      { text: '项目笔记', link: '/pages/3f852b/' },
    //   { text: '项目搭建', link: '/pages/docs/' },
    //   { text: '技术文档', link: '/pages/docs/' },
    //   { text: 'Git技巧', link: '/pages/git/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/learning/' },
      { text: '面试', link: '/pages/interview/' },
      { text: '心情杂货', link: '/pages/mood/' },
      { text: '实用技巧', link: '/pages/skill/' },
    ],
  },
];
