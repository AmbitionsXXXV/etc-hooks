import { useEffect, useRef } from 'react'
import useLatest from '../useLatest'

type Fn = () => void

export interface Options {
  restorePrevTitle?: boolean
}

const DEFAULT_OPTIONS = {
  restorePrevTitle: false,
}

const useUnmount = (fn: Fn) => {
  const fnRef = useLatest(fn)

  useEffect(() => () => fnRef.current(), [])
}

/**
 * @param {string} title
 * @param {Object} options
 * @description
 * 1. 实现更新 title
 * 2. 组件销毁时，回复本身的页面标题
 */
function useTitle(title: string, options: Options = DEFAULT_OPTIONS) {
  const titleRef = useRef(document.title)

  useEffect(() => {
    document.title = title
  }, [])

  useUnmount(() => {
    if (options.restorePrevTitle) {
      document.title = titleRef.current
    }
  })
}

export default useTitle
