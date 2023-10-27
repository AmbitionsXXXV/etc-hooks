import { defineConfig } from 'dumi'
import path from 'node:path'
import { menus } from './config/hooks'

export default defineConfig({
  publicPath: '/etc-hooks/',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  logo: '/etc-hooks/short-logo.png',
  title: 'Etcetera hooks',
  manifest: {},
  alias: {
    etcHooks: path.join(__dirname, '/packages/hooks/src/index.ts'),
    ['etc-hooks']: path.join(__dirname, '/packages/hooks/src/index.ts'),
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'hooks', dir: 'packages/hooks/src' },
      { type: 'hooks', dir: 'packages/hooks/src/useRequest/doc' },
    ],
    codeBlockMode: 'passive',
  },
  themeConfig: {
    nav: [
      { title: '指南', link: '/guide' },
      { title: 'Hooks', link: '/hooks/index' },
      { title: 'GitHub', link: 'https://github.com/AmbitionsXXXV/etc-hooks' },
    ],
    sidebar: {
      '/hooks': menus,
    },
  },
})
