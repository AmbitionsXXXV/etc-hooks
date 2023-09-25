---
nav:
  path: /hooks
---

# useToggle

进行值切换的基础 hook

## 基础使用

<code src="./example/example.tsx">

## 两个值切换以及设置指定值

<code src="./example/example2.tsx">

## params

```ts
// 不传参数，第一个参数有默认值为 false
function useToggle<T = boolean>(): [boolean, Actions<T>]

// 传一个参数，默认值为传入的参数
function useToggle<T>(defaultValue: T): [T, Actions<T>]

// 传两个参数，第一个参数为默认值，第二个参数为切换值
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>]
```
