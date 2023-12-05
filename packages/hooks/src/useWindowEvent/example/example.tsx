import { useWindowEvent } from 'etc-hooks'
import React from 'react'

export default () => {
  useWindowEvent('resize', (event) => {
    console.log('窗口大小已更改', event)
  })

  // 对于自定义事件
  useWindowEvent('myCustomEvent', (event) => {
    console.log('自定义事件触发', event)
  })

  return <div>示例组件</div>
}
