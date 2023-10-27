import { useMediaQuery, UseMediaQueryOptions } from '../useMediaQuery'

function useColorScheme(
  initialValue?: 'dark' | 'light',
  options?: UseMediaQueryOptions,
) {
  return useMediaQuery(
    '(prefers-color-scheme: dark)',
    initialValue === 'dark',
    options,
  )
    ? 'dark'
    : 'light'
}

export default useColorScheme
