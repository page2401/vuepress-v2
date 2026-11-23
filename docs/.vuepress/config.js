import { viteBundler } from '@vuepress/bundler-vite'
import { themeDefault } from '@vuepress/theme-default'
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart'
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { defineUserConfig } from 'vuepress'

const rawBase = process.env.BASE_PATH || '/vuepress-v2/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'VuePress v2 (2.0-rc.32)',
  description: 'SSG 多版本实测基准子站 — VuePress 2.0.0-rc.32 + 官方 Hint / KaTeX / Mermaid 12 插件',
  base,
  bundler: viteBundler(),
  theme: themeDefault({
    repo: 'page2401/vuepress-v2',
    contributors: false,
    lastUpdated: false,
    navbar: [
      { text: '← 返回对比总站', link: 'https://page.2401.xyz/' },
      { text: '01. 标注', link: '/01-annotations.html' },
      { text: '02. 流程图', link: '/02-diagrams.html' },
      { text: '03. 公式', link: '/03-math.html' },
      { text: '04. 目录结构', link: '/04-directory/' }
    ],
    sidebar: [
      {
        text: 'VuePress v2 基准套件',
        collapsible: false,
        children: [
          { text: '00. 版本与基准概览', link: '/' },
          { text: '01. 专属标注与元数据', link: '/01-annotations.html' },
          { text: '02. 流程图与时序图', link: '/02-diagrams.html' },
          { text: '03. 数学公式排版', link: '/03-math.html' },
          {
            text: '04. 目录结构与路由取舍',
            collapsible: false,
            children: [
              { text: 'README 即首页与 .html 路由', link: '/04-directory/' },
              {
                text: 'nested 子目录（手写 children）',
                collapsible: false,
                children: [
                  { text: 'A. README.md 语义反转', link: '/04-directory/nested/01-readme-convention.html' },
                  { text: 'B. .html 后缀路由特征', link: '/04-directory/nested/02-html-extension.html' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }),
  plugins: [
    markdownHintPlugin({
      hint: true,
      alert: true
    }),
    markdownMathPlugin({
      type: 'katex'
    }),
    markdownChartPlugin({
      mermaid: true
    })
  ]
})
