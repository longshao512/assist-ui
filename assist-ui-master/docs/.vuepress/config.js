module.exports = {
  theme: '',
  title: 'Assist UI',
  description: '一个寻常的vue组件库',
  base: '/',
  port: '8080',
  themeConfig: {
    logo: 'https://zhang_shaolong.gitee.io/img/avatar.jpeg',
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      }
    ],
    sidebar: { // 配置侧边栏部分
      '/comps/': ['/comps/', '/comps/button.md', '/comps/dialog.md', '/comps/input.md', '/comps/Switch.md', '/comps/radio.md', '/comps/checkbox.md', '/comps/form.md']
    },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://gitee.com/zhang_shaolong/assist-ui.git',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://gitee.com/zhang_shaolong/assist-ui.git',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  },
  head: [],
  plugins: ['demo-container'], // 配置插件
  markdown: {}
}
