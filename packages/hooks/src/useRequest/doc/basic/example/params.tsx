import React, { useState } from 'react'
import { useRequest } from 'etc-hooks'
import Mock from 'mockjs'
import { Button, Input } from 'antd'

function getUsername(_id: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}

export default () => {
  const [state, setState] = useState('')

  // get username
  const {
    data: username,
    run,
    params,
  } = useRequest(getUsername, {
    defaultParams: ['1'],
  })

  const onChange = () => {
    run(state)
  }

  return (
    <div>
      <Input
        value={state}
        placeholder="Please enter userId"
        style={{ width: 240, marginRight: 16 }}
        onChange={(e) => setState(e.target.value)}
      />
      <Button type="primary" onClick={onChange}>
        GetUserName
      </Button>
      <p style={{ marginTop: 8 }}>UserId: {params[0]}</p>
      <p>Username: {username}</p>
    </div>
  )
}
