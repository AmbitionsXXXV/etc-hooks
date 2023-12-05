---
nav:
  path: /hooks
---

# useNetwork

`useNetwork` 钩子用于追踪和响应网络状态的变化。它提供了一个实时的网络状态对象，其中包含了网络连接的详细信息，如实时往返时间（RTT）、连接类型、是否启用了数据保存模式、下行速度等。

## API

此钩子不接受任何参数，并返回一个 `NetworkStatus` 对象，该对象包含以下字段：

- `online` (`boolean`): 表示设备是否在线。
- `rtt` (`number`): 网络的实时往返时间。
- `type` (`string`): 网络连接类型（例如 'wifi', 'cellular'）。
- `saveData` (`boolean`): 是否启用了数据保存模式。
- `downlink` (`number`): 下行速度（以兆比特/秒为单位）。
- `downlinkMax` (`number`): 最大下行速度（以兆比特/秒为单位）。
- `effectiveType` (`string`): 网络的有效类型（例如 '4g', '3g'）。

## 示例用法

<code src="./example/example.tsx"></code>

在上述示例中，`useNetwork` 钩子被用于获取网络状态。该状态被展示在组件中，以便用户可以看到当前的网络连接详细信息。
