import { Options, Plugin, Result, Service } from './types'
import useCreation from '../../useCreation'
import useLatest from '../../useLatest'
import useMount from '../../useMount'
import useMemoizedFn from '../../useMemoizedFn'
import useUnmount from '../../useUnmount'
import useUpdate from '../../useUpdate'
import isDev from '../../utils/isDev'
import Fetch from './Fetch'

const useRequestImplement = <TData, TParams extends []>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {},
  plugins: Array<Plugin<TData, TParams>> = [],
): Result<TData, TParams> => {
  const { manual = false, ...restOptions } = options

  if (isDev) {
    if (options.defaultParams && !Array.isArray(options.defaultParams)) {
      console.warn(
        `expected defaultParams is array, but got ${typeof options.defaultParams}`,
      )
    }
  }

  const fetchOptions = {
    manual,
    ...restOptions,
  }

  // 基于原有 service 发送请求
  const serviceRef = useLatest(service)

  const update = useUpdate()
  const fetchInstance = useCreation(() => {
    const initState = plugins.map((p) => p?.onInit?.(fetchOptions)).filter(Boolean)

    return new Fetch<TData, TParams>(
      serviceRef,
      fetchOptions,
      update,
      Object.assign({}, ...initState),
    )
  }, [])
  fetchInstance.options = fetchOptions
  // run all plugins hooks
  fetchInstance.pluginImpls = plugins.map((p) => p(fetchInstance, fetchOptions))

  useMount(() => {
    if (!manual) {
      const params =
        fetchInstance.state.params || options.defaultParams || ([] as TParams)

      fetchInstance.run(...params)
    }
  })

  useUnmount(() => {
    fetchInstance.cancel()
  })

  return {
    data: fetchInstance.state.data,
    loading: fetchInstance.state.loading,
    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),
    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
  }
}

export default useRequestImplement
