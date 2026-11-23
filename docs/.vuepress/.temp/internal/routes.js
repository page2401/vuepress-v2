export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/01-annotations.html", { loader: () => import(/* webpackChunkName: "01-annotations.html" */"/home/antigravity/page2401/page2401.github.io/sites/vuepress-v2/docs/01-annotations.md"), meta: {"title":"01. 专属标注与元数据"} }],
  ["/02-diagrams.html", { loader: () => import(/* webpackChunkName: "02-diagrams.html" */"/home/antigravity/page2401/page2401.github.io/sites/vuepress-v2/docs/02-diagrams.md"), meta: {"title":"02. 流程图与时序图"} }],
  ["/03-math.html", { loader: () => import(/* webpackChunkName: "03-math.html" */"/home/antigravity/page2401/page2401.github.io/sites/vuepress-v2/docs/03-math.md"), meta: {"title":"03. 数学公式排版"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/antigravity/page2401/page2401.github.io/sites/vuepress-v2/docs/README.md"), meta: {"title":"VuePress v2 基准实测"} }],
  ["/04-directory/", { loader: () => import(/* webpackChunkName: "04-directory_index.html" */"/home/antigravity/page2401/page2401.github.io/sites/vuepress-v2/docs/04-directory/README.md"), meta: {"title":"04. 目录结构与路由取舍"} }],
  ["/04-directory/nested/01-readme-convention.html", { loader: () => import(/* webpackChunkName: "04-directory_nested_01-readme-convention.html" */"/home/antigravity/page2401/page2401.github.io/sites/vuepress-v2/docs/04-directory/nested/01-readme-convention.md"), meta: {"title":"嵌套实测 A：README.md 双重身份"} }],
  ["/04-directory/nested/02-html-extension.html", { loader: () => import(/* webpackChunkName: "04-directory_nested_02-html-extension.html" */"/home/antigravity/page2401/page2401.github.io/sites/vuepress-v2/docs/04-directory/nested/02-html-extension.md"), meta: {"title":"嵌套实测 B：.html 后缀与手写 children 侧栏"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/antigravity/page2401/page2401.github.io/sites/vuepress-v2/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);
