import { useBoolean, useUnmountRef } from 'etc-hooks'
import { message } from 'antd'
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
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  )
}
