import React from 'react'
import { useColorSchema } from 'etcHooks'

export default () => {
  const colorScheme = useColorSchema()

  return (
    <div className="dark:text-white">Your system color scheme is {colorScheme}</div>
  )
}
