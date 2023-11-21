---
nav:
  path: /hooks
---

# useResetState

提供重置 state 方法的 Hooks，用法与 `React.useState` 基本一致。

## 代码演示

<code hideActions='["CSB"]' src="./example/example.tsx"></code>

## API

```typescript
const [state, setState, reset] = useResetState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, () => void]
```
