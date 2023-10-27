---
nav:
  path: /hooks
---

# useColorSchema

优雅的管理计数状态的 Hook。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./example/example.tsx"></code>

## API

```typescript
const colorScheme: 'dark' | 'light' = useColorScheme(
  initialValue?: 'dark' | 'light',
  options?: UseMediaQueryOptions
);
```

### Params

| 参数         | 说明                     | 类型                   | 默认值                              |
| ------------ | ------------------------ | ---------------------- | ----------------------------------- |
| initialValue | 可选，传入默认的颜色方案 | `'dark' \| 'light'`    | `'light'`                           |
| options      | 可选，传入额外选项       | `UseMediaQueryOptions` | `{ getInitialValueInEffect: true }` |

### UseMediaQueryOptions

| 参数                    | 说明                                 | 类型      | 默认值 |
| ----------------------- | ------------------------------------ | --------- | ------ |
| getInitialValueInEffect | 可选，指定是否在组件挂载时获取初始值 | `boolean` | `true` |
