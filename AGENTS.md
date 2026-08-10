# AGENTS.md

## 项目概览

Rundown AI 新闻卡片展示页面，用于展示每日 AI 资讯，固定 URL 对外分享。

## 技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4

## 目录结构

```
src/app/
├── layout.tsx       # 根布局，定义 metadata
├── page.tsx         # 首页 - 新闻卡片展示
├── globals.css      # 全局样式
└── favicon.ico      # 图标
```

## 构建与运行

- 安装依赖：`pnpm install`
- 开发环境：`pnpm dev`
- 构建：`pnpm build`
- 生产启动：`pnpm start`

## 代码规范

- 使用 TypeScript strict 模式
- 禁止隐式 any
- 组件使用函数式组件
- 样式使用 Tailwind CSS utility classes

## 内容更新

更新新闻内容时，修改 `src/app/page.tsx` 中的以下数据：
- `subtitleLines` 数组：副标题说明文字
- `cards` 数组：图片卡片数据（src + alt）
- 标题在 JSX 中直接修改
- 页脚信息在 JSX 中直接修改
