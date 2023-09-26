---
nav:
  path: /hooks
---

# useCounter

优雅的管理计数状态的 Hook。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./example/example.tsx" />

## API

```typescript
const [state, { set, reset, increment, decrement }] = useCounter(
  initialValue: number,
  options: counterOptions
);
```

### Params

| 参数           | 说明           | 类型        | 默认值                                 |
|--------------|--------------|-----------|-------------------------------------|
| initialValue | 必填，传入默认的状态值  | `number`  | -                                   |
| options      | 可选项，传入默认的状态值 | `counterOptions` | `{ min: -Infinity, max: Infinity }` |

### counterOptions

| 参数  | 说明  | 类型       | 默认值   |
|-----|-----|----------|-------|
| min | 最小值 | `number` | `-Infinity` |
| max | 最大值 | `number` |   `Infinity`    |

### Actions

| 参数       | 说明         | 类型                        |
|----------|------------|---------------------------|
| set      | 设置 couter  | `(value: number) => void` |
| reset    | 重置 couter  | `() => void`              |
| increment  | couter + 1 | `() => void`              |
| decrement | couter - 1 | `() => void`                |
