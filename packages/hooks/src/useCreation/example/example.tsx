import React, { useState } from 'react'
import { useCreation } from 'etc-hooks'
import { Button } from 'antd'

class Foo {
  data: number

  constructor() {
    this.data = Math.random()
  }
}

export default () => {
  const foo = useCreation(() => new Foo(), [])
  const [, setFlag] = useState({})

  return (
    <>
      <p>{foo.data}</p>
      <Button
        type="primary"
        onClick={() => {
          setFlag({})
        }}
      >
        Rerender
      </Button>
    </>
  )
}
