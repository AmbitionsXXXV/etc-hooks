import React from 'react'
import { useToggle } from 'etcHooks'

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('OOR', 'Aimyon')

  return (
    <div>
      <p>Effects：{state}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" style={{ margin: '0 8px' }} onClick={() => set('OOR')}>
          Set OOR
        </button>
        <button type="button" onClick={() => set('Aimyon')}>
          Set Aimyon
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          setLeft
        </button>
        <button type="button" onClick={setRight}>
          setRight
        </button>
      </p>
    </div>
  )
}
