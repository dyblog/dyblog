采用vuepress构建博客
https://www.vuepress.cn/

执行npm run dev启动服务

生成dist网站文件

deploy.sh部署

git add .
git commit -m ''

提交项目
git push -f git@github.com:raoshihong/blog-demo.git master:master

提交网站
git push -f git@github.com:raoshihong/blog-demo.git master:gh-pages