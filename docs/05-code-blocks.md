---
title: "05. 高阶代码块与语法高亮"
description: "实测 VuePress v2 (2.0.0-rc.32) 默认内置 Shiki 的 title=\"...\" 标题栏、{3,7-9} 行高亮、notationDiff 词法级对比与 ::: code-tabs 多标签组。"
---

# 05. 高阶代码块与语法高亮 <Badge type="tip" text="vuepress@2.0-rc.32 · Shiki" vertical="middle" />

相比初代 VuePress v1 的 Prism.js 管线，**VuePress v2 (`2.0.0-rc.32`)** 的 `@vuepress/theme-default` 已在底层**默认集成 `@vuepress/plugin-shiki` 与 `@vuepress/plugin-markdown-tab`**——不仅升级为双主题 Shiki（`github-light` / `github-dark`），更演化出了与姊妹项目 VitePress 截然不同的标题属性与代码选项卡方言。

## 1. 独立代码块文件名标题栏（`title="..."` 属性语法）

这是 VuePress v2 与 VitePress 最直观的分水岭之一：VitePress 写 `[scripts/resolve-route.ts]` 且需包裹在 `::: code-group` 中才会显示顶栏；而 VuePress v2 通过 `@vuepress/highlighter-helper` 原生支持在**任意独立代码块**后直接追加 `title="scripts/resolve-route.ts"` 生成顶部标题栏：

```ts title="scripts/resolve-route.ts"
export interface RouteContext {
  basePath: string
  slug: string
  cleanUrls: boolean
}

export function formatDocRoute(ctx: RouteContext): string {
  const prefix = ctx.basePath.endsWith('/') ? ctx.basePath : `${ctx.basePath}/`
  const normalized = ctx.slug.replace(/^\/+|\/+$/g, '')
  if (!normalized || normalized === 'index') return prefix
  return ctx.cleanUrls ? `${prefix}${normalized}/` : `${prefix}${normalized}.html`
}
```

## 2. 关键行聚焦与高亮（`{3,7-9}` + 标题组合）

沿袭自 VuePress v1 的 `{3,7-9}` 行区间标记可与 `title="..."` 同行混用，构建期直接在对应 `<span class="line highlighted">` 上注入高亮样式：

```json{3,7-9} title="benchmark.config.json"
{
  "id": "ssg-benchmark",
  "routeStyle": "clean",
  "strictZeroCdn": true,
  "markdown": {
    "mathEngine": "katex",
    "diagramEngine": "mermaid",
    "lineHighlight": true,
    "codeTransformers": ["diff", "focus"]
  }
}
```

## 3. 保留词法着色的 Shiki Diff（需开启 `notationDiff: true`）

::: warning 默认配置差异实测
与 VitePress 开箱即启用所有 Shiki 注释转换器不同，VuePress v2 的 `@vuepress/plugin-shiki` 默认将 `notationDiff` 设为 `false`。必须在 `themeDefault({ themePlugins: { shiki: { notationDiff: true, notationHighlight: true } } })` 中显式开启后，下方的 `// [!code --]` 与 `// [!code ++]` 才会被编译为带红绿增删背景的 TypeScript 代码行！
:::

```ts title="scripts/mount-subsite.ts"
export function mountSubsite(baseDir: string, subPath: string): string | null {
  const cleanRel = decodeURIComponent(subPath).replace(/\.\./g, '') // [!code --]
  return `${baseDir}/${cleanRel}` // [!code --]
  const resolvedBase = path.resolve(baseDir) // [!code ++]
  const target = path.resolve(resolvedBase, decodeURIComponent(subPath).replace(/^\/+/, '')) // [!code ++]
  return target.startsWith(`${resolvedBase}${path.sep}`) ? target : null // [!code ++]
}
```

## 4. 多语言运行时命令组（`::: code-tabs` + `@tab`）

VuePress v2 默认主题内置了 `@vuepress/plugin-markdown-tab`（默认 `codeTabs: true`）。注意其容器名并非 VitePress 的 `::: code-group`，而是采用 **`::: code-tabs` 搭配 `@tab 标签标题`** 的显式分栏指令，并支持通过 `#runtime` 在同站多个代码组之间联动记忆激活状态：

::: code-tabs#runtime

@tab Node.js (package.json)

```bash
npm ci && npm run build
```

@tab Deno 2 (deno.json)

```bash
deno task build
```

@tab Python (requirements.txt)

```bash
pip install -r requirements.txt && sphinx-build -b dirhtml . _build/dirhtml
```

@tab Ruby (Gemfile)

```bash
bundle install && bundle exec jekyll build
```

:::

## 5. 四大底层高亮引擎能力对照小结

| 高亮引擎代表 | 典型采用框架 | 构建期零运行时 JS | 原生行号 / 行高亮 | 保留词法着色的 Diff |
| :--- | :--- | :--- | :--- | :--- |
| **Shiki / Expressive Code** | **VuePress v2**、VitePress v1/v2、Starlight、Fumadocs、Nuxt | ✅ 纯静态双主题变量 | ✅ `{3,7-9}` + `title="..."` | ✅ 开启 `notationDiff` 后支持 |
| **Prism.js** | VuePress v1、Docusaurus、Eleventy (plugin) | ✅ 静态 Token 类名 | ✅ `{3,7-9}` / 魔法注释 | ⚠️ 需配 diff-highlight 插件 |
| **Pygments / Rouge** | MkDocs Material、Sphinx、Pelican、Jekyll | ✅ Python/Ruby 编译直出 | ✅ `hl_lines` / `emphasize-lines` | ⚠️ 仅标准 `diff` 块红绿 |
| **Chroma / Giallo / hljs** | Hugo (Go Chroma)、Zola (Rust Giallo)、mdBook (hljs) | ✅ (mdBook 为客户端 hljs) | ✅ Hugo/Zola 原生 `hl_lines` | ⚠️ 仅标准 `diff` 块红绿 |
