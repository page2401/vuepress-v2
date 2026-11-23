---
home: true
title: VuePress v2 基准实测
heroText: VuePress v2
tagline: 锁定版本 vuepress@2.0.0-rc.32 · 官方一等公民插件体系 (Hint / KaTeX / Mermaid 12)
actions:
  - text: 01. 专属标注与元数据 →
    link: /01-annotations.html
    type: primary
  - text: 02. 流程图 Mermaid 12
    link: /02-diagrams.html
    type: secondary
  - text: 04. 目录与 README 约定
    link: /04-directory/
    type: secondary
features:
  - title: "01. 官方内置 markdown-hint 插件"
    details: "同时支持 ::: info / note / tip / warning / caution / important / details 七种容器与 GitHub > [!NOTE] 警报语法。"
  - title: "02. 官方 markdown-chart 插件"
    details: "无需等待野生社区插件适配，官方 @vuepress/plugin-markdown-chart 直接原生接入最新 mermaid@12.3.0。"
  - title: "03. 双引擎可选数学公式"
    details: "官方 @vuepress/plugin-markdown-math 支持一键切换 KaTeX (0.19.1) 或 MathJax 4，无需手写底层 remark/rehype 链。"
  - title: "04. README.md 即目录首页与 .html 路由"
    details: "延续 GitHub 友好的 README.md 映射为 / 首页传统，普通页面默认保留 .html 后缀（无需服务端重写规则）。"
footer: 独立子模块仓库 page2401/vuepress-v2 · main 存源码 / page 发产物
---

## 子模块版本档案（对比 `vuepress-v1`）

| 依赖模块 | 精确锁定版本 | 与 VuePress v1 (`1.9.10`) 的核心跨代差异 |
| :--- | :--- | :--- |
| `vuepress` | `2.0.0-rc.32` | 从 Vue 2 + Webpack 4 全面重构为 Vue 3 + Vite 现代管线 |
| `@vuepress/plugin-markdown-hint` | `2.0.0-rc.141` | 补齐了 v1 缺失的 `info`/`note`/`important` 容器与 GFM Alert 支持 |
| `@vuepress/plugin-markdown-math` | `2.0.0-rc.139` | 官方接管数学公式支持，配合 `katex@0.19.1` 构建期渲染 |
| `@vuepress/plugin-markdown-chart` | `2.0.0-rc.139` | 官方接管图表渲染，原生支持 `mermaid@12.3.0` |
