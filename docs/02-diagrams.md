---
title: "02. 流程图与时序图"
description: "测试 VuePress v2 (2.0.0-rc.32) 官方 @vuepress/plugin-markdown-chart 渲染 Mermaid 12 图表。"
---

# 02. 流程图与时序图（Mermaid） <Badge type="tip" text="mermaid@12.3.0" vertical="middle" />

这是 VuePress v2 相比 VitePress 与 Astro Starlight 的一大工程亮点：**拥有官方维护的一等公民图表插件 `@vuepress/plugin-markdown-chart@2.0.0-rc.139`**！只需配置 `markdownChartPlugin({ mermaid: true })` 并安装 `mermaid@12.3.0`，即可开箱支持图表渲染与深浅色主题联动，无需自行编写 AST 插件或担心野生社区包断更。

## 1. 复杂子图与架构流程图（`flowchart TD`）

```mermaid
flowchart TD
    subgraph MainRepo["主仓库 page2401.github.io"]
        Spec["相似 *.md 基准规范"]
        SubPtr["Git Submodule 指针 (sites/*)"]
        Workbench["对比工作台源码 (main)"]
    end

    subgraph SubRepo["独立子仓库 (vuepress-v2)"]
        SrcBranch["main 分支: docs/ + 官方插件配置"]
        Actions{"GitHub Actions 构建"}
        PageBranch["page 孤儿分支: docs/.vuepress/dist"]
        SrcBranch --> Actions
        Actions -->|"构建通过 + .nojekyll"| PageBranch
    end

    SubPtr -.->|"跟踪最新提交"| SrcBranch
    Workbench -->|"构建期提取真实 *.md"| Portal["https://page.2401.xyz/"]
    PageBranch -->|"GitHub Organization Pages"| SubSite["https://page.2401.xyz/vuepress-v2/"]
```

## 2. 编译管线交互时序图（`sequenceDiagram`）

```mermaid
sequenceDiagram
    autonumber
    actor Author as 文档作者
    participant Git as 子模块 main 分支
    participant CI as GitHub Actions (Node 22)
    participant Engine as VuePress 2.0-rc.32 编译器
    participant Pages as GitHub Pages (page 分支)

    Author->>Git: 提交 docs/*.md 文档
    Git->>CI: 触发 deploy-page.yml 工作流
    activate CI
    CI->>Engine: 执行 vuepress build docs
    activate Engine
    alt 包含数学公式 ($...$ / $$...$$)
        Engine->>Engine: @vuepress/plugin-markdown-math (KaTeX)
    else 包含 Mermaid 代码块
        Engine->>Engine: @vuepress/plugin-markdown-chart (Mermaid 12)
    end
    Engine-->>CI: 输出静态产物至 docs/.vuepress/dist
    deactivate Engine
    CI->>Pages: force_orphan 推送产物与 .nojekyll
    deactivate CI
    Pages-->>Author: 子路径 /vuepress-v2/ 即刻生效
```

## 3. 子模块同步状态机（`stateDiagram-v2`）

```mermaid
stateDiagram-v2
    [*] --> CleanSubmodule: git clone --recurse-submodules
    CleanSubmodule --> SubmoduleModified: 编辑子模块 *.md 基准文档
    SubmoduleModified --> SubmodulePushed: 子模块 commit & push origin main
    SubmodulePushed --> PageDeploying: 子仓库 Actions 自动更新 page 分支
    SubmodulePushed --> MainRepoUpdated: 主仓库 git add sites/* 更新指针
    PageDeploying --> LiveSynced: 子站实测渲染已就绪
    MainRepoUpdated --> LiveSynced: 主站源码差异视图已同步
    LiveSynced --> [*]
```
