import React, { useState } from 'react'
import { useDebounce } from 'etc-hooks'
import { Input } from 'antd'

export default () => {
  const [value, setValue] = useState<string>()
  const debouncedValue = useDebounce(value, { wait: 500 })

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </div>
  )
}
