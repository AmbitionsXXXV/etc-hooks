import { useNetwork } from 'etc-hooks'
import React from 'react'

export default () => {
  const networkStatus = useNetwork()

  return (
    <div>
      <p>在线状态: {networkStatus.online ? '在线' : '离线'}</p>
      <p>网络类型: {networkStatus.type}</p>
      <p>实时往返时间: {networkStatus.rtt}</p>
      <p>下行速度: {networkStatus.downlink}</p>
      {/* 其他网络信息的显示 */}
    </div>
  )
}
