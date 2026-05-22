import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <ThreeRoutes />
      <WhatYouGet />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="border-b border-fd-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs font-medium text-fd-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          免费 · 不需要会写代码
        </span>
        <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          在你自己电脑上搭一支{' '}
          <span className="text-emerald-600 dark:text-emerald-400">AI 团队</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-fd-muted-foreground">
          手把手教你在 Claude Code、Codex、OpenHermes 里，配出 CFO、CMO、COO 多个 AI 角色——一人公司也能开起来。
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/docs"
            className="inline-flex h-12 items-center justify-center rounded-full bg-fd-foreground px-6 text-sm font-medium text-fd-background transition-opacity hover:opacity-90"
          >
            开始第一篇教程
          </Link>
          <Link
            href="/docs/templates"
            className="inline-flex h-12 items-center justify-center rounded-full border border-fd-border bg-fd-card px-6 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            浏览模板包
          </Link>
        </div>
        <p className="mt-6 text-xs text-fd-muted-foreground">
          有免费路线（OpenHermes 本地跑）和付费路线（Claude / ChatGPT）
        </p>
      </div>
    </section>
  );
}

const routes = [
  {
    name: 'Claude Code',
    tagline: 'Anthropic 官方 CLI',
    cost: '$20/月起',
    pros: ['推理能力最强', 'subagents 编排成熟', '官方 skills 生态'],
    cons: ['需要付费订阅', '国内访问需要代理'],
    href: '/docs/claude-code',
    color: 'border-emerald-500/30 bg-emerald-500/5',
  },
  {
    name: 'Codex',
    tagline: 'OpenAI 出的 Agent CLI',
    cost: 'ChatGPT Plus 起',
    pros: ['熟悉的 ChatGPT 体验', '可与 GPT App 联动', '社区资源多'],
    cons: ['Agent 编排能力中等', '需要 ChatGPT 订阅'],
    href: '/docs/codex',
    color: 'border-blue-500/30 bg-blue-500/5',
  },
  {
    name: 'OpenHermes',
    tagline: '本地跑的开源模型',
    cost: '免费',
    pros: ['完全免费', '隐私数据不出本机', '不限调用次数'],
    cons: ['需要一定显卡（推荐 16GB+）', '推理质量略低于商用模型'],
    href: '/docs/openhermes',
    color: 'border-purple-500/30 bg-purple-500/5',
  },
];

function ThreeRoutes() {
  return (
    <section className="border-b border-fd-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          3 条主线，选适合你的那条
        </h2>
        <p className="mt-3 max-w-2xl text-fd-muted-foreground">
          每条主线都是一套独立教程：从下载安装到多 Agent 编排，6 个章节带你跑通。
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {routes.map((r) => (
            <Link
              key={r.name}
              href={r.href}
              className={`flex flex-col rounded-2xl border p-6 transition-transform hover:-translate-y-1 ${r.color}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{r.name}</h3>
                <span className="text-xs font-medium text-fd-muted-foreground">
                  {r.cost}
                </span>
              </div>
              <p className="mt-1 text-sm text-fd-muted-foreground">{r.tagline}</p>

              <ul className="mt-4 space-y-1.5">
                {r.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 text-emerald-600">+</span>
                    <span>{p}</span>
                  </li>
                ))}
                {r.cons.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-fd-muted-foreground"
                  >
                    <span className="mt-1">−</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <span className="mt-6 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                查看教程 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    title: '从零开始',
    desc: '默认你没装过任何工具。每一步都有可复制的命令、截图占位、避坑提示。',
  },
  {
    title: '可下载的模板包',
    desc: '提供「自媒体一人版」「电商创业版」「咨询师独立版」三套预制 Agent 配置——下载即用。',
  },
  {
    title: '不烧你 token',
    desc: '我们不替你跑 AI，所以不会有意料外的账单。教程里告诉你怎么用免费额度试出效果。',
  },
];

function WhatYouGet() {
  return (
    <section className="border-b border-fd-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          这个网站给你什么
        </h2>
        <div className="mt-12 grid gap-12 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title}>
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-7 text-fd-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          准备好了吗？
        </h2>
        <p className="mt-6 text-lg text-fd-muted-foreground">
          先看 5 分钟的总览，确认这玩意儿你能搞定，再决定要不要花一小时把第一支 AI 团队搭起来。
        </p>
        <Link
          href="/docs"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-fd-foreground px-8 text-sm font-medium text-fd-background transition-opacity hover:opacity-90"
        >
          从总览开始
        </Link>
      </div>
    </section>
  );
}
