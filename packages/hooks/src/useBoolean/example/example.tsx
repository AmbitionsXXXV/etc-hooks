import React from 'react'
import { useBoolean } from 'etc-hooks'
import { Button } from 'antd'

export default () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true)

  return (
    <div>
      <p>Effects：{JSON.stringify(state)}</p>
      <p>
        <Button type="primary" onClick={toggle}>
          Toggle
        </Button>
        <Button type="primary" onClick={setFalse} style={{ margin: '0 16px' }}>
          setFalse
        </Button>
        <Button type="primary" onClick={setTrue}>
          setTrue
        </Button>
      </p>
    </div>
  )
}
