---
nav:
  path: /hooks
---

# useToggle

进行值切换的基础 hook

## 基础使用

<code src="./example/example.tsx"></code>

## 两个值切换以及设置指定值

<code src="./example/example2.tsx"></code>

### Params

| 参数         | 说明                     | 类型 | 默认值  |
| ------------ | ------------------------ | ---- | ------- |
| defaultValue | 可选项，传入默认的状态值 | `T`  | `false` |
| reverseValue | 可选项，传入取反的状态值 | `U`  | -       |

### Result

| 参数    | 说明     | 类型           |
| ------- | -------- |--------------|
| state   | 状态值   | -            |
| actions | 操作集合 | `Actions<T>` |

### Actions

| 参数     | 说明                                                                            | 类型                        |
| -------- | ------------------------------------------------------------------------------- |---------------------------|
| toggle   | 切换 state                                                                      | `ToggleFn: () => void`    |
| set      | 修改 state                                                                      | `(state: T \| U) => void` |
| setLeft  | 设置为 defaultValue                                                             | `ToggleFn`              |
| setRight | 如果传入了 reverseValue, 则设置为 reverseValue。 否则设置为 defaultValue 的反值 | `ToggleFn`              |
