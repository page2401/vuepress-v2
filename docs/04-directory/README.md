---
title: "04. 目录结构与路由取舍"
description: "剖析 VuePress 体系中 README.md 即目录首页、配置藏于 docs/.vuepress/ 以及默认 .html 后缀路由的得失。"
---

# 04. 目录结构与路由取舍 <Badge type="warning" text="README 即首页派" vertical="middle" />

VuePress 开创了将所有配置内聚在文档目录内部（`docs/.vuepress/`）并把 **`README.md` 直接映射为目录根路由 `/`** 的经典范式。

## 1. 与 VitePress 完全相反的 `README.md` 语义

| 框架 | 目录下的 `README.md` 会发生什么？ | 优缺点评析 |
| :--- | :--- | :--- |
| **VuePress (v1 / v2)** | 自动编译为该目录的 `index.html`（即 `/04-directory/README.md` -> `/04-directory/`） | **优势**：在 GitHub 网页端浏览源码文件夹时，GitHub 会自动在下方渲染该目录的 `README.md` 导读！<br/>**痛点**：若习惯写 `index.md` 与 `README.md` 并存，会产生路由冲突报错。 |
| **VitePress (v1 / v2)** | 被当作普通文章编译为 `/README`（必须配 `srcExclude` 排除仓库根说明） | 以 `index.md` 为唯一首页标准，更贴近 Web 服务器直觉，但在 GitHub 浏览子文件夹时缺少自动渲染的目录导读。 |

## 2. 默认 `.html` 后缀路由与多级子目录实测

VuePress 默认生成带 `.html` 后缀的路由（如 `/01-annotations.html`），虽然不如无后缀 URL 简短，但在任意静态文件托管服务器或本地双击预览时**从不依赖服务器 `cleanUrls` 查找规则**。

- [进入嵌套子页 A：`nested/01-readme-convention.html`](./nested/01-readme-convention.html)
- [进入嵌套子页 B：`nested/02-html-extension.html`](./nested/02-html-extension.html)
