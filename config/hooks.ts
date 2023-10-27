export const menus = [
  {
    title: '请求',
    children: [
      { title: '快速上手', link: '/hooks/index' },
      { title: '基本用法', link: '/hooks/basic' },
    ],
  },
  {
    title: '生命周期',
    link: '/hooks',
    children: [
      { title: 'useCallbackRef', link: '/hooks/use-callback-ref' },
      { title: 'useMount', link: '/hooks/use-mount' },
      { title: 'useUnmount', link: '/hooks/use-unmount' },
      { title: 'useUnmountRef', link: '/hooks/use-unmount-ref' },
    ],
  },
  {
    title: '状态',
    children: [
      { title: 'useBoolean', link: '/hooks/use-boolean' },
      { title: 'useCounter', link: '/hooks/use-counter' },
      { title: 'useDebounce', link: '/hooks/use-debounce' },
      { title: 'useSet', link: '/hooks/use-set' },
      { title: 'useToggle', link: '/hooks/use-toggle' },
      { title: 'useUpdate', link: '/hooks/use-update' },
    ],
  },
  {
    title: 'DOM',
    children: [{ title: 'useTitle', link: '/hooks/use-title' }],
  },
  {
    title: 'Effect',
    children: [
      {
        title: 'useDebounceFn',
        link: '/hooks/use-debounce-fn',
      },
    ],
  },
  {
    title: '进阶工具 hooks',
    children: [
      { title: 'useClipboard', link: '/hooks/use-clipboard' },
      { title: 'useLatest', link: '/hooks/use-latest' },
      { title: 'useMemoizedFn', link: '/hooks/use-memoized-fn' },
      { title: 'useOs', link: '/hooks/use-os' },
    ],
  },
]
