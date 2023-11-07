# Etc hooks

## ✨ 特性

- 可靠的代码健壮：使用 `Typescript` 构建，提供完善的类型定义文件
- 完善的文档能力：支持文档记录，支持 `demo` 演示
- 完整的测试用例：配套完整的测试用例，帮助您提升项目健壮性

## 📦 安装

```bash
$ pnpm install etc-hooks --save
```

## 🔨 使用

参考 `Hooks`内容，使用如下：

```ts
import { useToggle } from 'etc-hooks'
```

## 可能出现的问题

### node17 及以上版本

```shell
# Error message "error:0308010C:digital envelope routines::unsupported"

# 解决方案

# On Unix-like (Linux, macOS, Git bash, etc.):
export NODE_OPTIONS=--openssl-legacy-provider

# On Windows (cmd.exe):
set NODE_OPTIONS=--openssl-legacy-provider

# On Windows (PowerShell):
$env:NODE_OPTIONS = "--openssl-legacy-provider"

# or use nvm/n to downgrade node version to 16
```
