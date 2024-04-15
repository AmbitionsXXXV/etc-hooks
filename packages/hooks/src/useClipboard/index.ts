import { useState } from 'react'
import { toast } from 'sonner'

const useClipboard = ({ timeout = 2000 } = {}) => {
  const [error, setError] = useState<Error | null>(null)
  const [copied, setCopied] = useState(false)
  const [copyTimeout, setCopyTimeout] = useState<number | null>(null)

  const handleCopyResult = (value: boolean) => {
    window.clearTimeout(copyTimeout!)

    setCopyTimeout(window.setTimeout(() => setCopied(false), timeout))
    setCopied(value)
  }

  const copy = (valueToCopy: any) => {
    if ('clipboard' in navigator) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => {
          handleCopyResult(true)
          toast.success('已复制到剪贴板')
        })
        .catch((err) => setError(err))
    } else {
      setError(new Error('useClipboard: navigator.clipboard is not supported'))
    }
  }

  const reset = () => {
    setCopied(false)
    setError(null)

    window.clearTimeout(copyTimeout!)
  }

  return { copy, reset, error, copied }
}

export default useClipboard
