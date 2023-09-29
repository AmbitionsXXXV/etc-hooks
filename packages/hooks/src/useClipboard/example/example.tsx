import React from 'react'
import { useClipboard } from 'etcHooks'
import { Button } from 'antd'

const EtcDemo = () => {
  const clipboard = useClipboard({ timeout: 500 })

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  )
}

export default EtcDemo
