import { useEffect, useMemo, useRef } from 'react'

type Callback = (...args: any[]) => any

const useCallbackRef = <T extends Callback>(callback: T | undefined): T => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, [])
}

export default useCallbackRef
