import { menus } from './hooks'

export default {
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  history: {
    type: 'hash',
  },
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
  mode: 'site',
  title: 'Etcetera hooks',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    etcHooks: process.cwd() + '/packages/hooks/src/index.ts',
    ['etc-hooks']: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: ['packages/hooks/src', 'docs'],
  },
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
    { title: 'GitHub', path: 'https://github.com/AmbitionsXXXV/etc-hooks' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
}
