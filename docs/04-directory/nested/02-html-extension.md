---
title: "嵌套实测 B：.html 后缀与手写 children 侧栏"
---

# 嵌套实测 B：`.html` 后缀与手写 `children` 侧栏

与 VitePress 类似，VuePress v2 默认主题 `@vuepress/theme-default` 同样**不提供内置递归 `autogenerate` 侧边栏**，需要在 `docs/.vuepress/config.js` 的 `sidebar` 中逐层手写 `children` 数组（若需自动扫描则需改用重型社区主题如 `vuepress-theme-hope`）。

- [返回《04. 目录结构与路由取舍》](../)
