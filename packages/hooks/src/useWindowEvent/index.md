---
nav:
  path: /hooks
---

# useWindowEvent

`useWindowEvent` 钩子允许您方便地在 React 组件中为窗口（window）对象添加事件监听器。当组件挂载时，该钩子会添加监听器，并在组件卸载时自动移除监听器。此钩子支持标准的窗口事件以及自定义事件。

## API

该钩子接收三个参数：

1. **type** (`K extends string`): 要监听的事件类型。此类型可以是 `WindowEventMap` 中的任何标准事件类型，如 `'click'`、`'resize'` 等，或者是自定义事件的字符串。

2. **listener** (`Function`): 事件处理函数。此函数的类型依赖于 `type` 参数。如果 `type` 是标准窗口事件的一部分，则函数类型将匹配相应的事件处理程序类型；对于自定义事件，它将是一个处理 `CustomEvent` 的函数。

3. **options** (`boolean | AddEventListenerOptions`): 可选参数，用于指定事件监听器的行为。这可以是一个布尔值（如 `true` 表示 `capture`）或一个更详细的配置对象（如 `{ capture: true, once: true }`）。

## 示例用法

<code src="./example/example.tsx"></code>

在上面的示例中，`useWindowEvent` 用于在组件中监听窗口大小更改和自定义事件。当这些事件发生时，相应的处理函数将被调用。

---

这个文档补充提供了 `useWindowEvent` 钩子的基本描述、API 使用方法和一个简单的示例。这样的文档结构和内容有助于用户快速理解和使用这个自定义钩子。
