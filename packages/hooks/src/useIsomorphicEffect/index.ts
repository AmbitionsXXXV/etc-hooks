import { DependencyList, EffectCallback, useEffect, useLayoutEffect } from 'react'

const useIsomorphicEffect: (
  effect: EffectCallback,
  deps?: DependencyList,
) => void = () => (typeof document !== 'undefined' ? useLayoutEffect : useEffect)

export default useIsomorphicEffect
