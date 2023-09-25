import React from 'react'
import { useTitle } from 'etc-hooks'

export default () => {
  useTitle('Page Title')

  return (
    <div>
      <p>Set title of this page.</p>
    </div>
  )
}
