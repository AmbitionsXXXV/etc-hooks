/**
 * title: Default usage
 * desc: ThrottledValue will change every 500ms.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: ThrottledValue 每隔 500ms 变化一次。
 */

import { Input } from 'antd'
import { useThrottle } from 'etc-hooks'
import React, { useState } from 'react'

export default () => {
  const [value, setValue] = useState<string>()
  const throttledValue = useThrottle(value, { wait: 500 })

  return (
    <div>
      <Input
        value={value}
        style={{ width: 280 }}
        placeholder="Typed value"
        onChange={(e) => setValue(e.target.value)}
      />

      <p className="mt-4">throttledValue: {throttledValue}</p>
    </div>
  )
}
