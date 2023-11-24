import { TablePaginationConfig } from 'antd'
import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
} from 'antd/es/table/interface'
import React, { useState } from 'react'

export interface IGenPaginationReturnType<T> {
  current: number
  pageSize: number
  pagination: TablePaginationConfig
  handleTableChange: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | Array<SorterResult<T>>,
    extra: TableCurrentDataSource<T>,
  ) => void
}

export default function useAntPagination<T = any>(
  total = 0,
  options?: TablePaginationConfig,
): IGenPaginationReturnType<T> {
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  const onChange = (_current?: number, _pageSize?: number) => {
    if (_current && _pageSize) {
      setCurrent(_current)
      setPageSize(_pageSize)
    }
  }

  const pagination: TablePaginationConfig = {
    total: total ?? 0,
    current,
    pageSize,
    onChange,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ['10', '20', '50'],
    showTotal: (_total: number) => <span>共 {_total} 条</span>,
    ...options,
  }

  const handleTableChange = (_pagination: TablePaginationConfig) => {
    if (_pagination.pageSize !== pageSize) {
      onChange(1, _pagination.pageSize)
      return
    }
    onChange(_pagination.current, _pagination.pageSize)
  }

  return { current, pageSize, pagination, handleTableChange }
}
