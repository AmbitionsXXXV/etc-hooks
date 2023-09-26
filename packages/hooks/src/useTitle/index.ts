import { useEffect, useRef } from 'react'
import useUnmount from '../useUnmount'
import isBrowser from '../utils/isBrowser'

export interface Options {
  restorePrevTitle?: boolean
}

const DEFAULT_OPTIONS = {
  restorePrevTitle: false,
}

/**
 * @param {string} title
 * @param {Object} options
 * @description
 * 1. 实现更新 title
 * 2. 组件销毁时，回复本身的页面标题
 */
function useTitle(title: string, options: Options = DEFAULT_OPTIONS) {
  const titleRef = useRef(isBrowser ? document.title : '')

  useEffect(() => {
    document.title = title
  }, [title])

  useUnmount(() => {
    if (options.restorePrevTitle) {
      document.title = titleRef.current
    }
  })
}

export default useTitle
