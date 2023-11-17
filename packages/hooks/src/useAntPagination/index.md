---
nav:
  path: /hooks
---

# useAntPagination

快速生成基于 Antd 的分页器配置。

## Params

| 参数        | 说明                     | 类型                         | 默认值 |
| ----------- | ------------------------ | ---------------------------- | ------ |
| current     | 必传，当前页数           | `number`                     | `1`    |
| pageSize    | 必传，每页条数           | `number`                     | `10`   |
| total       | 必传，总条数             | `number`                     | `0`    |
| setCurrent  | 必传，设置当前页数的回调 | `(current: number) => void`  | -      |
| setPageSize | 必传，设置每页条数的回调 | `(pageSize: number) => void` | -      |
| options     | 可选，分页器配置项       | `TablePaginationConfig`      | -      |
