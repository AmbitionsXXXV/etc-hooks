import React from 'react'
import { useToggle } from 'etcHooks'

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle()

  return (
    <div>
      <p>当前的 state 的值为: {`${state}`}</p>
      <p>
        <button onClick={toggle}>toggle切换</button>
        <button onClick={setLeft}>setLeft切换</button>
        <button onClick={setRight}>setRight切换</button>
      </p>
    </div>
  )
}
