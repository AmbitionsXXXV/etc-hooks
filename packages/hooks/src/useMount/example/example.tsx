import React from 'react'
import { useBoolean, useMount } from 'etc-hooks'
import { Button, message } from 'antd'

const MyComponent = () => {
  useMount(() => {
    message.info('mount')
  })

  return <div>Hello World</div>
}

export default () => {
  const [state, { toggle }] = useBoolean(false)

  return (
    <>
      <Button type="primary" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </Button>

      {state && <MyComponent />}
    </>
  )
}
