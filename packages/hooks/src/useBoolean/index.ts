import { useMemo } from 'react'
import useToggle, { ToggleFn } from '../useToggle'
import { isBoolean } from 'lodash-es'

export interface Actions {
  toggle: ToggleFn
  setTrue: ToggleFn
  setFalse: ToggleFn
  set: (value: boolean) => void
}

export default function useBoolean(defaultValue = false): [boolean, Actions] {
  if (!isBoolean(defaultValue)) {
    defaultValue = false
  }

  const [state, { toggle, set }] = useToggle(defaultValue)

  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true)
    const setFalse = () => set(false)

    return {
      toggle,
      setTrue,
      setFalse,
      set: (v) => set(v),
    }
  }, [])

  return [state, actions]
}
