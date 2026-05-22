import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="font-semibold tracking-tight">
          <span className="text-emerald-600 dark:text-emerald-400">VE</span> 指南
        </span>
      ),
    },
    links: [
      {
        type: 'main',
        text: '教程',
        url: '/docs',
      },
      {
        type: 'main',
        text: '模板包',
        url: '/docs/templates',
      },
      {
        type: 'main',
        text: '推荐工具',
        url: '/docs/tools',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
