import { useBoolean, useUnmount } from 'etc-hooks'
import { message } from 'antd'
import React from 'react'

const EtcComponent = () => {
  useUnmount(() => {
    message.info('Component unmount')
  })

  return <p>Et cetera!!!</p>
}

export default () => {
  const [state, { toggle }] = useBoolean(true)

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <EtcComponent />}
    </>
  )
}
