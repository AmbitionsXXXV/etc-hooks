import { useCallback, useEffect, useState } from 'react'
import useWindowEvent from '../useWindowEvent'

interface NetworkStatus {
  downlink?: number
  downlinkMax?: number
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g'
  rtt?: number
  saveData?: boolean
  type?:
    | 'bluetooth'
    | 'cellular'
    | 'ethernet'
    | 'wifi'
    | 'wimax'
    | 'none'
    | 'other'
    | 'unknown'
}

function getConnection(): NetworkStatus {
  if (typeof navigator === 'undefined') {
    return {}
  }

  const _navigator = navigator as any
  const connection: any =
    _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection

  if (!connection) {
    return {}
  }

  return {
    rtt: connection?.rtt,
    type: connection?.type,
    saveData: connection?.saveData,
    downlink: connection?.downlink,
    downlinkMax: connection?.downlinkMax,
    effectiveType: connection?.effectiveType,
  }
}

export default function useNetwork() {
  const [status, setStatus] = useState<{ online: boolean } & NetworkStatus>({
    online: true,
  })
  const handleConnectionChange = useCallback(
    () => setStatus((current) => ({ ...current, ...getConnection() })),
    [],
  )

  useWindowEvent('online', () => setStatus({ online: true, ...getConnection() }))
  useWindowEvent('offline', () => setStatus({ online: false, ...getConnection() }))

  useEffect(() => {
    const _navigator = navigator as any

    if (_navigator.connection) {
      setStatus({ online: _navigator.onLine, ...getConnection() })
      _navigator.connection.addEventListener('change', handleConnectionChange)
      return () =>
        _navigator.connection.removeEventListener('change', handleConnectionChange)
    }

    return undefined
  }, [])

  return status
}
