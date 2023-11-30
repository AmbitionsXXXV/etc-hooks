/**
 * title: Default usage
 * desc: Frequent calls run, but the function is only executed every 500ms.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 频繁调用 run，但只会每隔 500ms 执行一次相关函数。
 */

import { Button } from 'antd'
import { useThrottleFn } from 'etc-hooks'
import React, { useState } from 'react'

export default () => {
  const [value, setValue] = useState(0)
  const { run } = useThrottleFn(
    () => {
      setValue(value + 1)
    },
    { wait: 500 },
  )

  return (
    <div>
      <p className="mt-4"> Clicked count: {value} </p>

      <Button onClick={run}>Click fast!</Button>
    </div>
  )
}
