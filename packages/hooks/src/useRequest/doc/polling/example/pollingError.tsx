/* eslint-disable react/display-name */
import { Button, message } from 'antd'
import { useRequest } from 'etc-hooks'
import Mock from 'mockjs'
import React from 'react'

function getUsername() {
  console.log('polling getUsername Error')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(Mock.mock('@name')))
    }, 1000)
  })
}

export default () => {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
    pollingErrorRetryCount: 3,
    manual: true,
    onError: (error) => {
      message.error(error.message)
    },
  })

  return (
    <>
      <p>Username: {loading ? 'Loading' : (data as string)}</p>

      <Button type="primary" onClick={run}>
        start
      </Button>

      <Button onClick={cancel} style={{ marginLeft: 16 }}>
        stop
      </Button>
    </>
  )
}
