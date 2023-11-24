import useAutoRunPlugin from './plugins/useAutoRunPlugin'
import useCachePlugin from './plugins/useCachePlugin'
import useDebouncePlugin from './plugins/useDebouncePlugin'
import useLoadingDelayPlugin from './plugins/useLoadingDelayPlugin'
import usePollingPlugin from './plugins/usePollingPlugin'
import useRefreshOnWindowFocusPlugin from './plugins/useRefreshOnWindowFocusPlugin'
import useRetryPlugin from './plugins/useRetryPlugin'
import useThrottlePlugin from './plugins/useThrottlePlugin'
import { Options, Plugin, Service } from './types'
import useRequestImplement from './useRequestImplement'

const useRequest = <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Array<Plugin<TData, TParams>>,
) => {
  return useRequestImplement<TData, TParams>(service, options, [
    ...(plugins || []),
    useRetryPlugin,
    useCachePlugin,
    useAutoRunPlugin,
    usePollingPlugin,
    useDebouncePlugin,
    useThrottlePlugin,
    useLoadingDelayPlugin,
    useRefreshOnWindowFocusPlugin,
  ] as Array<Plugin<TData, TParams>>)
}

export default useRequest
