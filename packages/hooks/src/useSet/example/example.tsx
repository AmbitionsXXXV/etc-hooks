import React from 'react'
import { useSet } from 'etc-hooks'
import { Button } from 'antd'

export default () => {
  const [set, { add, remove, reset }] = useSet(['Hello'])

  return (
    <div>
      <Button type="primary" onClick={() => add(String(Date.now()))}>
        Add Timestamp
      </Button>

      <Button
        type="primary"
        onClick={() => remove('Hello')}
        disabled={!set.has('Hello')}
        style={{ margin: '0 8px' }}
      >
        Remove Hello
      </Button>

      <Button type="primary" onClick={() => reset()}>
        Reset
      </Button>

      <div style={{ marginTop: 16 }}>
        <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
      </div>
    </div>
  )
}
