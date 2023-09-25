import useToggle, { Actions } from '../index'
import { act, renderHook, RenderHookResult } from '@testing-library/react'

const execToggle = (hook: RenderHookResult<[string, Actions<string>], unknown>) => {
  act(() => {
    hook.result.current[1].toggle()
  })
}

const execSetLeft = (hook: RenderHookResult<[string, Actions<string>], unknown>) => {
  act(() => {
    hook.result.current[1].setLeft()
  })
}

const execSetRight = (
  hook: RenderHookResult<[string, Actions<string>], unknown>,
) => {
  act(() => {
    hook.result.current[1].setRight()
  })
}

const execSet = (hook: RenderHookResult<[string, Actions<string>], unknown>) => {
  act(() => {
    hook.result.current[1].set('Milet')
  })
}

describe('useToggle', () => {
  it('针对 useToggle 基本功能的测试', () => {
    const hook = renderHook(() => useToggle())

    console.log('hooks', hook.result.current[0])
    expect(hook.result.current[0]).toBeFalsy()
  })

  it('针对手动切换 useToggle 的测试', () => {
    const hook = renderHook(() => useToggle('OOR', 'Aimyon'))

    expect(hook.result.current[0]).toBe('OOR')

    execToggle(hook)
    expect(hook.result.current[0]).toBe('Aimyon')

    execSetLeft(hook)
    expect(hook.result.current[0]).toBe('OOR')

    execSetRight(hook)
    expect(hook.result.current[0]).toBe('Aimyon')

    execSet(hook)
    expect(hook.result.current[0]).toBe('Milet')
  })
})
