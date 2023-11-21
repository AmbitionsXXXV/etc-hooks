import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import useMemoizedFn from '../useMemoizedFn'

type ResetState = () => void

const useResetState = <S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, ResetState] => {
  const [state, setState] = useState(initialState)

  const reset = useMemoizedFn(() => {
    setState(initialState)
  })

  return [state, setState, reset]
}

export default useResetState
