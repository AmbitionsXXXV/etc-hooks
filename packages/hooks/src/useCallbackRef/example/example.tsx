import React, { useCallback } from 'react'
import { useCallbackRef } from 'etcHooks'

const EtcDemo = () => {
  // 创建一个回调函数的引用
  const callback = useCallbackRef((value: string) => {
    console.log('Callback invoked with value:', value)
  })

  // 使用 useCallback 保证依赖项不变时引用不变
  const handleClick = useCallback(() => {
    callback && callback('Hello World')
  }, [callback])

  return (
    <div>
      <button onClick={handleClick}>Invoke Callback</button>
    </div>
  )
}

export default EtcDemo
