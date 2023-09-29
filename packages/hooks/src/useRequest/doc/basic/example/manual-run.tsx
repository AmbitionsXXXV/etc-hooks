/**
 * title: 修改用户名
 * desc: 在这个例子中，我们通过 `run(username)` 来修改用户名，通过 `onSuccess` 和 `onError` 来处理成功和失败。
 */

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
    onSuccess: (result, params) => {
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
    </div>
  )
}
