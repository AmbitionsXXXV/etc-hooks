import React from 'react'
import { useBoolean } from 'etc-hooks'

export default () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true)

  return (
    <div>
      <p>Effects：{JSON.stringify(state)}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setFalse} style={{ margin: '0 16px' }}>
          setFalse
        </button>
        <button type="button" onClick={setTrue}>
          setTrue
        </button>
      </p>
    </div>
  )
}
