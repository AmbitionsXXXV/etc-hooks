export default {
  nodeModulesTransform: {
    type: 'none',
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
  title: 'Etc hooks',
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
}
