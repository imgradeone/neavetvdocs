module.exports = {
    title: 'Neave.tv Doc',
    description: 'Neave.tv 的秘密集合处。',
    plugins: {
      "vuepress-plugin-auto-sidebar": {
        titleMap: {
          "info": "网站信息"
        }
      },
    },
    lang: 'zh-CN',
    theme: 'yuu',
    head: [
      ['meta', { name: 'theme-color', content: '#ffb500' }],
    ],
    base: '/neavetvdocs',
    themeConfig: {
      yuu: {
        disableThemeIgnore: true,
      },
      docsRepo: 'imgradeone/neavetvdocs',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      smoothScroll: true,
      editLinkText: '前往 GitHub 编辑此页面',
      lastUpdated: '上次更新于',
      nav: [
        { text: '主页', link: '/' },
        { text: '网站信息', link: '/info/about.html' },
      ],
    }
    
  }