import { act, renderHook } from '@testing-library/react'
import useCallbackRef from '..'

describe('useCallbackRef', () => {
  test('should return a function that invokes the callback with given arguments', () => {
    const mockCallback = jest.fn((arg1, arg2) => arg1 + arg2)

    const { result } = renderHook(() => useCallbackRef(mockCallback))
    const callbackFn = result.current

    expect(callbackFn(2, 3)).toBe(5)
    expect(mockCallback).toHaveBeenCalledWith(2, 3)

    expect(callbackFn('Hello', 'World')).toBe('HelloWorld')
    expect(mockCallback).toHaveBeenCalledWith('Hello', 'World')
  })

  test('should update the callback reference when the callback prop changes', () => {
    const initialCallback = jest.fn()
    const updatedCallback = jest.fn()

    const { result, rerender } = renderHook(
      ({ callback }) => useCallbackRef(callback),
      {
        initialProps: { callback: initialCallback },
      },
    )

    const callbackFn = result.current

    act(() => {
      callbackFn()
    })

    expect(initialCallback).toHaveBeenCalledTimes(1)

    rerender({ callback: updatedCallback })

    act(() => {
      callbackFn()
    })

    expect(updatedCallback).toHaveBeenCalledTimes(1)
    expect(initialCallback).toHaveBeenCalledTimes(1)
  })

  test('should return the same callback function reference on subsequent renders', () => {
    const callback = jest.fn()

    const { result, rerender } = renderHook(() => useCallbackRef(callback))

    const callbackFn1 = result.current

    rerender()

    const callbackFn2 = result.current

    expect(callbackFn1).toBe(callbackFn2)
  })
})
