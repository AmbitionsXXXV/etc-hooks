---
nav:
  path: /hooks
---

# useAntPagination

快速生成基于 Antd 的分页器配置。

## Params

| 参数    | 说明               | 类型                    | 默认值 |
| ------- | ------------------ | ----------------------- | ------ |
| total   | 必传，总条数       | `number`                | `0`    |
| options | 可选，分页器配置项 | `TablePaginationConfig` | -      |

## Return

| 参数             | 说明                 | 类型                                       |
| ---------------- | -------------------- | ------------------------------------------ |
| current          | 当前页数             | `number`                                   |
| pageSize         | 每页条数             | `number`                                   |
| pagination       | 分页器配置项         | `TablePaginationConfig`                    |
| handlePageChange | 页码改变时的回调函数 | `(page: number, pageSize: number) => void` |
