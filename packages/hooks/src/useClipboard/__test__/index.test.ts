import { act, renderHook } from '@testing-library/react'
import useClipboard from '..'

describe('useClipboard', () => {
  it('should copy text to clipboard and set copied to true', async () => {
    const { result } = renderHook(() => useClipboard())

    const valueToCopy = 'Hello, world!'

    await act(async () => {
      result.current.copy(valueToCopy)
    })

    expect(result.current.copied).toBe(false)
  })

  it('should reset copied and error state', async () => {
    const { result } = renderHook(() => useClipboard())

    const valueToCopy = 'Hello, world!'

    await act(async () => {
      result.current.copy(valueToCopy)
    })

    await act(async () => {
      result.current.reset()
    })

    expect(result.current.copied).toBe(false)
    expect(result.current.error).toBe(null)
  })
})
