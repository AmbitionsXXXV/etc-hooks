import React from 'react'
import { useCounter } from 'etcHooks'
import { Button } from 'antd'

export default () => {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 })

  return (
    <div>
      <p style={{ marginTop: 16 }}> {count} </p>

      <div style={{ display: 'flex', gap: 2 }}>
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
        <Button onClick={() => handlers.set(5)}>Set 5</Button>
      </div>
    </div>
  )
}
