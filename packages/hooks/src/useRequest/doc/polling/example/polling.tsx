/* eslint-disable react/display-name */
import { Button } from 'antd'
import { useRequest } from 'etc-hooks'
import Mock from 'mockjs'
import React from 'react'

function getUsername() {
  console.log('polling getUsername')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}

export default () => {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
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
