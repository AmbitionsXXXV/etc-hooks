import React, { useState } from 'react'
import { useClipboard } from 'etcHooks'
import { Button, Input } from 'antd'

const EtcDemo = () => {
  const [value, setValue] = useState('Hello, world!')
  const clipboard = useClipboard({ timeout: 500 })

  return (
    <>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />

      <Button
        color={clipboard.copied ? 'teal' : 'blue'}
        onClick={() => clipboard.copy(value)}
      >
        {clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </>
  )
}

export default EtcDemo
