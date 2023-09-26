import { useState } from 'react'
import { clamp } from '../utils'

type counterOptions = Partial<{ min: number; max: number }>

const DEFAULT_OPTIONS: counterOptions = {
  min: -Infinity,
  max: Infinity,
}

const useCounter = (initialValue = 0, options: counterOptions = DEFAULT_OPTIONS) => {
  const { min, max } = { ...DEFAULT_OPTIONS, ...options }
  const [count, setCount] = useState<number>(clamp(initialValue, min, max))

  const set = (value: number) => setCount(clamp(value, min, max))
  const reset = () => setCount(clamp(initialValue, min, max))
  const increment = () => setCount((current) => clamp(current + 1, min, max))
  const decrement = () => setCount((current) => clamp(current - 1, min, max))

  return [count, { set, reset, increment, decrement }] as const
}

export default useCounter
