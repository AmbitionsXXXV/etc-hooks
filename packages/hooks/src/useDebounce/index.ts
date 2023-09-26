import { useEffect, useState } from 'react'

const useDebounce = <T>(value: T, waitTime?: number) => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value)
    }, waitTime ?? 300)

    return () => clearTimeout(timer)
  }, [value, waitTime])

  return debounced
}

export default useDebounce
