---
nav:
  path: /hooks
---

# useCallbackRef

优雅的管理回调函数的 Hook

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./example/example.tsx"></code>

## API

```typescript
const memoizedCallback = useCallbackRef(callback: Callback);
```

### Params

| 参数       | 说明           | 类型               | 默认值                                 |
|----------|--------------|------------------|-------------------------------------|
| callback | 必填，传入默认的状态值  | `Callback`       | -                                   |

### `Callback`

| 参数       | 说明   | 类型       | 默认值        |
|----------|------|----------|------------|
| Callback | 回掉函数 | `(...args: any[]) => any` | -          |

### ReturnType

| 参数               | 说明  | 类型       | 
|------------------|-----|----------|
| memoizedCallback | 经过 Hook 处理后的回调函数 | `Callback` | 

