---
title: "01. 专属标注与元数据"
description: "测试 VuePress v2 (2.0.0-rc.32) 基于官方 @vuepress/plugin-markdown-hint 的容器、折叠块、GFM Alerts 与 Badge 组件。"
---

# 01. 专属标注与元数据 <Badge type="tip" text="vuepress@2.0-rc.32" vertical="middle" />

不同静态网站生成器对“提示框 / 标注（Callouts / Admonitions）”和页面元数据的语法约定存在显著分歧。本页展示 **VuePress v2 (`2.0.0-rc.32`)** 配合官方 `@vuepress/plugin-markdown-hint@2.0.0-rc.141` 的表现。

## 1. Frontmatter 元数据机制

VuePress v2 采用宽松 YAML Frontmatter，首页配置字段与 VitePress 略有不同（如使用 `home: true`、`heroText` 而非 `layout: home`、`hero.name`）。内置全局 `<Badge>` 组件支持 `type="tip|warning|danger"` 与 `vertical` 对齐参数：<Badge type="tip" text="Tip" /> <Badge type="warning" text="Warning" /> <Badge type="danger" text="Danger" />。

## 2. 标准提示容器（Official Hint Containers）

相比 VuePress v1 仅支持 `tip`/`warning`/`danger` 三种提示框，VuePress v2 的官方 `markdownHintPlugin({ hint: true })` 完整覆盖了 `info`、`note`、`tip`、`important`、`warning`、`caution`/`danger`：

::: info
默认信息提示块：静态站点对比平台的每个子模块均独立维护 `main`（源码）与 `page`（构建产物）双分支，互不污染提交历史。
:::

::: tip 性能优化建议（自定义标题）
在 VuePress v2 中，自定义标题同样直接写在 `::: tip ` 空格之后，语法体验与 VitePress 一脉相承。
:::

::: warning 版本边界注意
在旧版 VuePress v1 中编写 `::: info` 不会生效（v1 仅内置 `tip`/`warning`/`danger`），升级至 VuePress v2 后才由官方 `plugin-markdown-hint` 补齐。
:::

::: caution 不可逆分支覆盖警告
自动化流水线在向 `page` 分支推送构建产物时会启用 `force_orphan: true`（注：VuePress v2 将危险容器关键字统一向 GFM 对齐为 `caution` / `danger`）。
:::

## 3. 原生可折叠详情容器（Details Block）

::: details 点击展开查看 VuePress v2 容器语法源码结构
```markdown
::: tip 性能优化建议（自定义标题）
自定义标题直接跟在类型关键字空格后。
:::
```
除了代码块，折叠容器内同样支持列表、表格与数学公式 $f(x) = x^2 + 1$。
:::

## 4. GitHub 风格引用警报（GFM Alerts）兼容性

在配置 `markdownHintPlugin({ alert: true })` 后，原始 GFM Alert 语法同样原生可用：

> [!NOTE]
> 这是一段标准的 GitHub Flavored Markdown `[!NOTE]` 警报文本。VuePress v2 开启 `alert: true` 后可原生解析。

> [!IMPORTANT]
> 跨平台迁移 Markdown 文档时，是否原生兼容 `> [!IMPORTANT]` 与 `> [!WARNING]` 直接决定了旧文档的改造成本。

> [!CAUTION]
> 若目标生成器未内置 GFM Alert 解析器，上方标记会退化为普通引用块并原样露出 `[!CAUTION]` 字符串。
