import { useBoolean, useUnmountRef } from 'etc-hooks'
import { Button, message } from 'antd'
import React, { useEffect } from 'react'

const MyComponent = () => {
  const unmountedRef = useUnmountRef()
  useEffect(() => {
    setTimeout(() => {
      if (!unmountedRef.current) {
        message.info('component is alive')
      }
    }, 3000)
  }, [])

  return <p>Hello World!</p>
}

export default () => {
  const [state, { toggle }] = useBoolean(true)

  return (
    <>
      <Button type="primary" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </Button>

      {state && <MyComponent />}
    </>
  )
}
