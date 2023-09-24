import useToggle from '../index'
import { renderHook } from '@testing-library/react'

describe('useToggle', () => {
  it('针对 useToggle 基本功能的测试', () => {
    const hook = renderHook(() => useToggle())

    console.log('hooks', hook.result.current[0])
    expect(hook.result.current[0]).toBeFalsy()
  })
})
