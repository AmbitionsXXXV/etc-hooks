/**
 * title: 修改用户名
 */

import { Button, Input, message } from 'antd'
import React, { useRef, useState } from 'react'
import { useRequest } from 'etc-hooks'
import Mock from 'mockjs'

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}

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
  // store last username
  const lastRef = useRef<string>()

  const [state, setState] = useState('')

  // get username
  const { data: username, mutate } = useRequest(getUsername)

  // edit username
  const { run: edit } = useRequest(editUsername, {
    manual: true,
    onSuccess: (result, params) => {
      setState('')
      message.success(`The username was changed to "${params[0]}" !`)
    },
    onError: (error) => {
      message.error(error.message)
      mutate(lastRef.current)
    },
  })

  const onChange = () => {
    lastRef.current = username
    mutate(state)
    edit(state)
  }

  return (
    <div>
      <p>Username: {username}</p>
      <Input
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
        onChange={(e) => setState(e.target.value)}
      />

      <Button type="primary" onClick={onChange}>
        Edit
      </Button>
    </div>
  )
}
