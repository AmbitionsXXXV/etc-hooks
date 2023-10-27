---
nav:
  path: /hooks
---

# useClipboard

基于 `window.clipboard` 的剪贴板 Hook

## 代码演示

### 基础用法

<code src="./example/example.tsx"></code>

## API

```typescript
const clipboard = useClipboard(options?: { timeout: number });
```

### Params

| 参数      | 说明           | 类型               | 默认值            |
|---------|--------------|------------------|----------------|
| options | 非必填，传入默认的状态值 | `{ timeout: number }`       | timeout = 2000 |

### ReturnType

| 参数   | 说明  | 类型                              | 
|------|-----|---------------------------------|
| copy | 经过 Hook 处理后的剪贴板复制函数。该函数需要传入一个要复制到剪贴板的字符串作为参数，并返回一个 void 类型值。如果复制成功，会将 copied 状态设置为 true；否则，将 error 状态设置为相应的错误信息。 | `(valueToCopy: string) => void` | 
| reset | 重置剪贴板状态和错误信息的函数 | `() => void`                    | 
| error | 剪贴板操作过程中的错误信息 | `Error`                         | 
| copied | 表示是否已成功复制到剪贴板的状态 | `boolean`                       | 

