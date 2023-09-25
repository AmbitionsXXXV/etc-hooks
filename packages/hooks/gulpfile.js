const gulp = require('gulp')
const fg = require('fast-glob')
const fs = require('fs')
const fse = require('fs-extra')
const gm = require('gray-matter')
const commonConfig = require('../../gulpfile')

// 生成 markdown 文件的描述信息
const genDesc = async (mdPath) => {
  // 如果 markdown 文件不存在，则直接返回
  if (!fs.existsSync(mdPath)) {
    return
  }

  // 读取 markdown 文件的内容
  const mdFile = fs.readFileSync(mdPath, 'utf8')
  // 使用 gray-matter 解析 markdown 文件的内容
  const { content } = gm(mdFile)

  // 使用正则表达式匹配标题行和描述内容，并提取描述
  let description =
    (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) ||
      [])[1] || ''

  // 修整描述：去掉多余的空格和换行符，并将首字母转为小写
  description = description.trim()
  description = description.charAt(0).toLowerCase() + description.slice(1)

  return description
}

// 生成文档的元数据对象
const genMetadata = async () => {
  const metadata = {
    functions: [],
  }

  // 使用 fast-glob 找到指定目录下的以 'use' 开头的文件夹（hooks）
  const hooks = fg
    // 只匹配目录
    .sync('src/use*', {
      onlyDirectories: true,
    })
    // 去掉路径前缀
    .map((hook) => hook.replace('src/', ''))
    // 排序
    .sort()

  // 遍历每个 hook，生成对应的描述信息，并存储到元数据对象中
  await Promise.allSettled(
    hooks.map(async (hook) => {
      const description = await genDesc(`src/${hook}/index.md`)

      return {
        name: hook,
        description,
      }
    }),
  ).then((res) => {
    // 将结果存储到元数据对象的 functions 属性中
    metadata.functions = res.map((item) =>
      item.status === 'fulfilled' ? item.value : null,
    )
  })

  return metadata
}

// 生成并写入元数据的 gulp 任务
gulp.task('metadata', async () => {
  const metadata = await genMetadata()

  // 使用 fs-extra 将元数据对象以 JSON 格式写入文件 metadata.json
  await fse.writeJson('metadata.json', metadata, { spaces: 2 })
})

// 导出默认的 gulp 任务，默认执行 commonConfig.default 和 metadata 两个任务
exports.default = gulp.series(commonConfig.default, 'metadata')
