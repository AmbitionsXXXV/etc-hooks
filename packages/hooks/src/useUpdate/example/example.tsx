import React from 'react'
import { useUpdate } from 'etc-hooks'
import { Button } from 'antd'

export default () => {
  const update = useUpdate()

  return (
    <>
      <div>Time: {Date.now()}</div>

      <Button type="primary" onClick={update} style={{ marginTop: 8 }}>
        update
      </Button>
    </>
  )
}
