import React, { useCallback, useState } from 'react'
import { Button, message } from 'antd'
import { useMemoizedFn } from 'etc-hooks'

export default () => {
  const [count, setCount] = useState(0)

  const callbackFn = useCallback(() => {
    message.info(`Current count is ${count}`)
  }, [count])

  const memoizedFn = useMemoizedFn(() => {
    message.info(`Current count is ${count}`)
  })

  return (
    <>
      <p>count: {count}</p>
      <Button
        type="primary"
        onClick={() => {
          setCount((c) => c + 1)
        }}
      >
        Add Count
      </Button>

      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={callbackFn}>
          call callbackFn
        </Button>
        <Button type="primary" onClick={memoizedFn} style={{ marginLeft: 8 }}>
          call memoizedFn
        </Button>
      </div>
    </>
  )
}
