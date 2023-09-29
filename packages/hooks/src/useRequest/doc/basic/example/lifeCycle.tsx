import React, { useState } from 'react'
import { Button, Input, message } from 'antd'
import { useRequest } from 'etc-hooks'

function editUsername(_username: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve()
      } else {
        reject(new Error('Failed to modify username'))
      }
    }, 1000)
  })
}

export default () => {
  const [state, setState] = useState('')

  const { loading, run } = useRequest(editUsername, {
    manual: true,
    onBefore: (params) => {
      message.info(`Start Request: ${params[0]}`)
    },
    onSuccess: (_result, params) => {
      setState('')
      message.success(`The username was changed to "${params[0]}" !`)
    },
    onError: (error) => {
      message.error(error.message)
    },
    onFinally: (_params, _result, _error) => {
      message.info(`Request finish`)
    },
  })

  return (
    <div>
      <Input
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
        onChange={(e) => setState(e.target.value)}
      />

      <Button disabled={loading} type="primary" onClick={() => run(state)}>
        {loading ? 'Loading' : 'Edit'}
      </Button>
    </div>
  )
}
