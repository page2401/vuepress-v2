---
title: "嵌套实测 A：README.md 双重身份"
---

# 嵌套实测 A：`README.md` 在 GitHub 与静态站间的双重身份

在 VuePress 的目录哲学中，`docs/` 既是一个静态网站源码目录，同时也是一个可以直接在 GitHub 网页端顺畅阅读的文档库：每个子目录下的 `README.md` 既是 GitHub 文件夹封面，也是编译后的 `index.html`。

但这也导致将 VuePress 项目迁移至 VitePress 或 Astro Starlight 时，必须批量把所有子目录的 `README.md` 重命名为 `index.md`。

- [返回《04. 目录结构与路由取舍》](../)
- [下一篇：《嵌套实测 B：.html 显式后缀的利弊》](./02-html-extension.html)
