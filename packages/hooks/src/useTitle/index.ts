import { useEffect, useRef } from 'react'

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

const useLatest = <T>(value: T) => {
  const ref = useRef(value)

  ref.current = value

  return ref
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
