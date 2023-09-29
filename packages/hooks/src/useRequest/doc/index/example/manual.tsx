/**
 * title: 修改用户名
 * desc: 在这个例子中，我们尝试修改用户名。
 */

import React, { useState } from 'react'
import { Button, Input, message } from 'antd'
import { useRequest } from 'etc-hooks'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function changeUsername(username: string): Promise<{ success: boolean }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 1000)
  })
}

export default () => {
  const [state, setState] = useState('')

  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.success) {
        setState('')
        message.success(`The username was changed to "${params[0]}" !`)
      }
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
