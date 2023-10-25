import React from 'react'
import { useToggle } from 'etcHooks'
import { Button } from 'antd'

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle()

  return (
    <div>
      <p>当前的 state 的值为: {`${state}`}</p>

      <p>
        <Button onClick={toggle}>toggle切换</Button>
        <Button onClick={setLeft}>setLeft切换</Button>
        <Button onClick={setRight}>setRight切换</Button>
      </p>
    </div>
  )
}
