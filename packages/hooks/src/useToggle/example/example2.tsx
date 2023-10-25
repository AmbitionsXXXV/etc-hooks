import React from 'react'
import { useToggle } from 'etcHooks'
import { Button } from 'antd'

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('OOR', 'Aimyon')

  return (
    <div>
      <p>Effects：{state}</p>

      <p>
        <Button type="primary" onClick={toggle}>
          Toggle
        </Button>

        <Button
          type="primary"
          style={{ margin: '0 8px' }}
          onClick={() => set('OOR')}
        >
          Set OOR
        </Button>

        <Button type="primary" onClick={() => set('Aimyon')}>
          Set Aimyon
        </Button>

        <Button type="primary" onClick={setLeft} style={{ margin: '0 8px' }}>
          setLeft
        </Button>

        <Button type="primary" onClick={setRight}>
          setRight
        </Button>
      </p>
    </div>
  )
}
