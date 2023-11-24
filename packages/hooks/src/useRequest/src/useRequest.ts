import useDebouncePlugin from './plugins/useDebouncePlugin'
import usePollingPlugin from './plugins/usePollingPlugin'
import { Options, Plugin, Service } from './types'
import useRequestImplement from './useRequestImplement'

const useRequest = <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Array<Plugin<TData, TParams>>,
) => {
  return useRequestImplement<TData, TParams>(service, options, [
    ...(plugins || []),
    useDebouncePlugin,
    usePollingPlugin,
  ] as Array<Plugin<TData, TParams>>)
}

export default useRequest
