import { useMemo, useState } from 'react'

type ToggleFn = () => void

export interface Actions<T> {
  toggle: ToggleFn
  setLeft: ToggleFn
  setRight: ToggleFn
  set: (value: T) => void
}

function useToggle<T = boolean>(): [boolean, Actions<T>]

function useToggle<T>(defaultValue: T): [T, Actions<T>]

function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>]

function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  const [state, setState] = useState<D | R>(defaultValue)

  const actions = useMemo(() => {
    const reverseValueOrigin = (
      reverseValue === undefined ? !defaultValue : reverseValue
    ) as D | R

    const toggle = () =>
      setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue))
    const set = (value: D | R) => setState(value)
    const setLeft = () => setState(defaultValue)
    const setRight = () => setState(reverseValueOrigin)

    return {
      set,
      toggle,
      setLeft,
      setRight,
    }
  }, [])

  return [state, actions]
}

export default useToggle
