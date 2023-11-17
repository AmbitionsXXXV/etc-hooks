import { TablePaginationConfig } from 'antd'
import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
} from 'antd/es/table/interface'
import React, { Dispatch, SetStateAction } from 'react'

export interface IGenPaginationReturnType<T> {
  pagination: TablePaginationConfig
  handleTableChange: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | Array<SorterResult<T>>,
    extra: TableCurrentDataSource<T>,
  ) => void
}

export function useAntPagination<T = any>(
  current = 1,
  pageSize = 10,
  total = 0,
  setCurrent: Dispatch<SetStateAction<number>>,
  setPageSize: Dispatch<SetStateAction<number>>,
  options?: TablePaginationConfig,
): IGenPaginationReturnType<T> {
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
    onChange(_pagination.current, _pagination.pageSize)
  }

  return { pagination, handleTableChange }
}
