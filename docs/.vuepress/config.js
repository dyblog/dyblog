module.exports = {
    base: '/blog-demo/',//项目根目录
    title: 'D之Y族',//标题
    description: 'Vuepress blog demo',
    themeConfig: {
        repo: 'https://github.com/raoshihong',
        repoLabel: 'My GitHub',
        nav: [//导航栏
            {text: 'Home',link: '/'},
            {text: "FistBlog", link: '/blog/java/FirstBlog.md'}
        ],
        sidebar: [//侧栏
            {
                title: '首页',
                path: '/'
            },
            {
                title: 'java',
                children: [
                    {
                        title: 'juc',
                        path: '/blog/java/FirstBlog.md'
                    },
                    {
                        title: 'collections',
                        path: '/blog/java/SecondBlog.md'
                    }
                ]
            },
            {
                title: 'java',
                children: [
                    {
                        title: 'spring',
                        path: '/blog/spring/FirstBlog.md'
                    },
                    {
                        title: 'collections',
                        path: '/blog/spring/SecondBlog.md'
                    }
                ]
            }
            
          ]
    }
}