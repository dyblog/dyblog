module.exports = {
    base: '/blog-demo',
    title: 'blog-demo',
    description: 'Vuepress blog demo',
    themeConfig: {
        repo: 'https://github.com/raoshihong',
        repoLabel: 'My GitHub',
        nav: [
            {text: 'Home',link: '/'},
            {text: "FistBlog", link: '/blog/FirstBlog.md'}
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
          ]
    }
}