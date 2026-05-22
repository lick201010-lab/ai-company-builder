# ai-company-builder

**VE 指南 · 在你自己的电脑上搭一支 AI 团队**

手把手教小白怎么在 Claude Code、Codex、OpenHermes 里配出多角色 AI 团队的中文教程站。

基于 [Next.js 16](https://nextjs.org) + [Fumadocs](https://fumadocs.dev) 构建。

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:3000 查看效果。

## 项目结构

| 路径 | 说明 |
| --- | --- |
| `src/app/(home)` | 落地页 |
| `src/app/docs` | 文档主路由 |
| `content/docs/` | 所有教程 MDX 文件 |
| `src/lib/source.ts` | 内容源适配器 |
| `src/lib/layout.shared.tsx` | 布局共享配置 |

## 教程主线

- `content/docs/claude-code/` — Claude Code 主线（已写完第 1 章）
- `content/docs/codex/` — Codex 主线（占位）
- `content/docs/openhermes/` — OpenHermes 主线（占位）
- `content/docs/templates/` — 3 套模板包
- `content/docs/tools/` — 推荐工具

## 部署

推荐部署到 [Vercel](https://vercel.com)：连接此 GitHub 仓库 → Import → Deploy。

## License

MIT
