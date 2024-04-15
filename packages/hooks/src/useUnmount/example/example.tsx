import { useBoolean, useUnmount } from 'etc-hooks'
import React from 'react'
import { toast, Toaster } from 'sonner'

const EtcComponent = () => {
  useUnmount(() => {
    toast.info('Component unmount')
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

      <Toaster />
    </>
  )
}
