import { useState } from 'react'
import useMemoizedFn from '../useMemoizedFn'

function useSet<T>(initialValue?: Iterable<T>) {
  const getInitValue = () => new Set(initialValue)
  const [set, setSet] = useState(getInitValue)

  const add = useMemoizedFn((key: T) => {
    if (set.has(key)) return

    setSet((prevSet) => {
      const temp = new Set(prevSet)
      temp.add(key)

      return temp
    })
  })

  const remove = useMemoizedFn((key: T) => {
    if (!set.has(key)) return

    setSet((prevSet) => {
      const temp = new Set(prevSet)
      temp.delete(key)

      return temp
    })
  })

  const reset = useMemoizedFn(() => setSet(getInitValue()))

  return [
    set,
    {
      add,
      remove,
      reset,
    },
  ] as const
}

export default useSet
