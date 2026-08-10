# AGENTS.md

## 项目概览

Rundown AI 新闻卡片展示页面，用于展示每日 AI 资讯，固定 URL 对外分享。

## 技术栈

- **纯静态 HTML/CSS**
- 无框架依赖，单文件 `index.html`

## 目录结构

```
.
├── index.html         # 主页面（含所有内容和样式）
├── images/            # 新闻卡片图片
│   ├── card_01_astra.png
│   ├── card_02_kimi.png
│   ├── card_03_mozilla.png
│   ├── card_04_roundtable.png
│   └── card_05_quick_hits.png
└── .coze              # 部署配置
```

## 构建与运行

- 开发环境：`npx serve -l ${DEPLOY_RUN_PORT} .`
- 无需构建步骤

## 内容更新

更新新闻内容时，直接编辑 `index.html` 文件：
- 标题：`<h1>` 标签
- 日期：`<p class="date-line">` 标签
- 副标题：`<p class="subtitle-item">` 标签
- 图片：`<img src="/images/xxx.png">` 标签
- 页脚：`<footer>` 标签
