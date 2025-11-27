# 猜数字游戏

这是一个基于Next.js构建的简单猜数字游戏，用户需要在1到100之间猜测一个随机生成的数字。

## 项目简介

这是一个使用Next.js和React构建的单页应用，实现了经典的猜数字游戏功能。游戏会随机生成一个1到100之间的数字，用户需要通过猜测来找到这个数字，系统会给出提示（太大、太小或正确），并记录用户的尝试次数。

## 使用的技术

- **Next.js 16**: 现代化的React框架，提供服务器端渲染和静态站点生成能力
- **React 19**: 用于构建用户界面的JavaScript库
- **TypeScript**: 提供类型安全的JavaScript超集
- **Tailwind CSS 4**: 实用优先的CSS框架，用于快速构建现代UI
- **React Hooks**: 使用useState和useEffect管理组件状态和副作用

## 核心功能

- 随机生成1到100之间的数字
- 接收用户输入并验证有效性
- 给出猜测提示（太大/太小/正确）
- 记录并显示尝试次数
- 支持重新开始游戏
- 响应式设计，适配不同屏幕尺寸

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 项目总结

这个猜数字游戏项目展示了如何使用Next.js和React构建一个简单但完整的Web应用。通过这个项目，我们学习了：

1. 如何使用React Hooks管理组件状态
2. 如何实现表单处理和用户输入验证
3. 如何使用Tailwind CSS快速构建美观的UI界面
4. 如何在Next.js中创建客户端组件（'use client'指令）
5. 如何实现游戏逻辑和状态管理

## 未来规划

1. **增加游戏难度选择**：提供简单（1-50）、中等（1-100）、困难（1-200）等不同难度级别
2. **添加历史记录功能**：记录用户的游戏成绩和最佳记录
3. **实现排行榜系统**：允许用户查看其他玩家的成绩
4. **增加主题切换**：支持深色模式和多种主题选择
5. **添加动画效果**：为游戏交互添加过渡动画和反馈效果
6. **实现多人游戏功能**：支持在线多人对战模式
7. **添加音效**：为游戏操作添加音效反馈

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
