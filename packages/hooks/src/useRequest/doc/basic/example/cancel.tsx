import { Button, Input, message } from 'antd'
import React, { useState } from 'react'
import { useRequest } from 'etc-hooks'

function editUsername(username: string): Promise<void> {
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

  const { loading, run, cancel } = useRequest(editUsername, {
    manual: true,
    onSuccess: (_result, params) => {
      setState('')
      message.success(`The username was changed to "${params[0]}" !`)
    },
    onError: (error) => {
      message.error(error.message)
    },
  })

  return (
    <div>
      <Input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />

      <Button disabled={loading} type="primary" onClick={() => run(state)}>
        {loading ? 'Loading' : 'Edit'}
      </Button>
      <Button type="primary" onClick={cancel} style={{ marginLeft: 16 }}>
        Cancel
      </Button>
    </div>
  )
}
