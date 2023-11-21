import { DependencyList } from 'react'
import type Fetch from './Fetch'
import type { CachedData } from './utils/cache'

export type Service<TData, TParams extends any[]> = (
  ...args: TParams
) => Promise<TData>
export type Subscribe = () => void

export interface FetchState<TData, TParams extends any[]> {
  data?: TData
  loading: boolean
  params?: TParams
  error?: Error
}

export interface Options<TData, TParams extends any[]> {
  manual?: boolean

  defaultParams?: TParams

  // LifeCycle hook
  onBefore?: (params: TParams) => void
  onSuccess?: (data: TData, params: TParams) => void
  onError?: (e: Error, params: TParams) => void
  onFinally?: (params: TParams, data?: TData, e?: Error) => void

  // refreshDeps
  refreshDeps?: DependencyList
  refreshDepsAction?: () => void

  // loading delay
  loadingDelay?: number

  // cache
  cacheKey?: string
  cacheTime?: number
  staleTime?: number
  setCache?: (data: CachedData<TData, TParams>) => void
  getCache?: (params: TParams) => CachedData<TData, TParams> | undefined

  // retry
  retryCount?: number
  retryInterval?: number

  // ready
  ready?: boolean

  // debounce
  debounceWait?: number
  debounceLeading?: boolean
  debounceTrailing?: boolean
  debounceMaxWait?: number

  // throttle
  throttleWait?: number
  throttleLeading?: boolean
  throttleTrailing?: boolean

  // polling
  pollingInterval?: number
  pollingWhenHidden?: boolean
  pollingErrorRetryCount?: number

  // refresh on window focus
  refreshOnWindowFocus?: boolean
  focusTimespan?: number
}

export interface PluginReturn<TData, TParams extends any[]> {
  onBefore?: (params: TParams) =>
    | ({
        stopNow?: boolean
        returnNow?: boolean
      } & Partial<FetchState<TData, TParams>>)
    | undefined

  onRequest?: (
    service: Service<TData, TParams>,
    params: TParams,
  ) => {
    servicePromise?: Promise<TData>
  }

  onSuccess?: (data: TData, params: TParams) => void
  onError?: (e: Error, params: TParams) => void
  onFinally?: (params: TParams, data?: TData, e?: Error) => void
  onCancel?: () => void
  onMutate?: (data: TData) => void
}

export interface Plugin<TData, TParams extends any[]> {
  onInit?: (options: Options<TData, TParams>) => Partial<FetchState<TData, TParams>>

  (
    fetchInstance: Fetch<TData, TParams>,
    options: Options<TData, TParams>,
  ): PluginReturn<TData, TParams>
}

export interface Result<TData, TParams extends any[]> {
  loading: boolean
  data?: TData
  error?: Error
  params: TParams | []
  cancel: Fetch<TData, TParams>['cancel']
  refresh: Fetch<TData, TParams>['refresh']
  refreshAsync: Fetch<TData, TParams>['refreshAsync']
  run: Fetch<TData, TParams>['run']
  runAsync: Fetch<TData, TParams>['runAsync']
  mutate: Fetch<TData, TParams>['mutate']
}

export type Timeout = ReturnType<typeof setTimeout>
