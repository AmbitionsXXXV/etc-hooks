import React from 'react'
import { useOs } from 'etc-hooks'
import { OS } from 'etcHooks/lib/useOs'

export default () => {
  const os: OS = useOs({ getValueInEffect: false })

  return <div>Current operating system: {os}</div>
}
