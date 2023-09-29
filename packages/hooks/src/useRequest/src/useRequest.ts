import useRequestImplement from 'etcHooks/lib/useRequest/src/useRequestImplement'
import { Options, Plugin, Service } from './types'

const useRequest = <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Array<Plugin<TData, TParams>>,
) => {
  return useRequestImplement<TData, TParams>(service, options, [
    ...(plugins || []),
  ] as Array<Plugin<TData, TParams>>)
}

export default useRequest
