import React from 'react'
import { useCounter } from 'etcHooks'

export default () => {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 })

  return (
    <div>
      <p style={{ marginTop: 16 }}> {count} </p>
      <div style={{ display: 'flex', gap: 2 }}>
        <button onClick={handlers.increment}>Increment</button>
        <button onClick={handlers.decrement}>Decrement</button>
        <button onClick={handlers.reset}>Reset</button>
        <button onClick={() => handlers.set(5)}>Set 5</button>
      </div>
    </div>
  )
}
