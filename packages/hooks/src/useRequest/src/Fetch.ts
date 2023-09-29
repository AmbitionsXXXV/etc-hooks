import { FetchState, Options, PluginReturn, Service, Subscribe } from './types'
import { MutableRefObject } from 'react'
import { isFunction } from '../../utils'

export default class Fetch<TData, TParams extends any[]> {
  count = 0

  pluginImpls: Array<PluginReturn<TData, TParams>>

  state: FetchState<TData, TParams> = {
    loading: false,
    params: undefined,
    data: undefined,
    error: undefined,
  }

  constructor(
    public serviceRef: MutableRefObject<Service<TData, TParams>>,
    public options: Options<TData, TParams>,
    public subscribe: Subscribe,
    public initState: Partial<FetchState<TData, TParams>> = {},
  ) {
    this.state = {
      ...this.state,
      loading: !options.manual,
      ...initState,
    }
  }

  cancel() {
    this.count += 1
    this.setState({
      loading: false,
    })

    this.runPluginHandler('onCancel')
  }

  run(...params: TParams) {
    this.runAsync(...params).catch((error) => {
      if (!this.options.onError) {
        console.error(error)
      }
    })
  }

  async runAsync(...params: TParams): Promise<TData> {
    this.count += 1
    const currentCount = this.count

    const {
      stopNow = false,
      returnNow = false,
      ...state
    } = this.runPluginHandler('onBefore', params)

    // stop request
    if (stopNow) {
      return new Promise(() => {})
    }

    this.setState({ loading: true, params, ...state })

    if (returnNow) {
      return Promise.resolve(state.data)
    }

    this.options.onBefore && this.options.onBefore(params)

    try {
      let { servicePromise } = this.runPluginHandler(
        'onRequest',
        this.serviceRef.current,
        params,
      )

      if (!servicePromise) {
        servicePromise = this.serviceRef.current(...params)
      }

      const res = await servicePromise

      if (currentCount !== this.count) {
        return new Promise(() => {})
      }

      this.setState({
        data: res,
        loading: false,
        error: undefined,
      })

      this.options.onSuccess && this.options.onSuccess(res, params)
      this.runPluginHandler('onSuccess', res, params)

      this.options.onFinally && this.options.onFinally(params, res, undefined)

      if (currentCount === this.count) {
        this.runPluginHandler('onFinally', params, res, undefined)
      }

      return res
    } catch (error) {
      if (currentCount !== this.count) {
        return new Promise(() => {})
      }

      this.setState({
        error,
        loading: false,
      })

      this.options.onError && this.options.onError(error, params)

      this.runPluginHandler('onError', error, params)

      this.options.onFinally && this.options.onFinally(params, undefined, error)

      if (currentCount === this.count) {
        this.runPluginHandler('onFinally', params, undefined, error)
      }

      throw error
    }
  }

  refresh() {
    this.run(...((this.state.params || []) as TParams))
  }

  refreshAsync() {
    return this.runAsync(...((this.state.params || []) as TParams))
  }

  mutate(data?: TData | ((oldData?: TData) => TData | undefined)) {
    const targetData = isFunction(data) ? data(this.state.data) : data

    this.runPluginHandler('onMutate', targetData)
    this.setState({
      data: targetData,
    })
  }

  runPluginHandler(event: keyof PluginReturn<TData, TParams>, ...rest: unknown[]) {
    // @ts-ignore
    const r = this.pluginImpls.map((i) => i[event]?.(...rest)).filter(Boolean)

    return Object.assign({}, ...r)
  }

  private setState(s: Partial<FetchState<TData, TParams>> = {}) {
    this.state = {
      ...this.state,
      ...s,
    }
    this.subscribe()
  }
}
