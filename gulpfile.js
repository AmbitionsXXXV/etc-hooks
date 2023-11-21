const gulp = require('gulp')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const del = require('del')
const swc = require('gulp-swc')

// step 1: 如果有对应的产物，此时需要删除 umd cjs esm
gulp.task('clean', async () => {
  // 删除 lib 目录下的所有文件
  await del('lib/**')
  // 删除 cjs 目录下的所有文件
  await del('cjs/**')
  // 删除 es 目录下的所有文件
  await del('es/**')
})

// step 2: 针对不同类型进行构建

// 将 es 目录下的文件经过 Babel 转译后复制到 lib 目录下
gulp.task('cjs', () =>
  gulp
    .src(['./es/**/*.js'])
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/')),
)

// 使用 TypeScript 编译配置文件 tsconfig.pro.json 中指定的 TypeScript 文件，并经过 Babel 转译后复制到 es 目录下
gulp.task('es', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  })

  return tsProject.src().pipe(tsProject()).pipe(swc()).pipe(gulp.dest('es/'))
})

// 使用 TypeScript 编译配置文件 tsconfig.pro.json 中指定的 TypeScript 文件，并生成声明文件，然后将它们复制到 es 和 lib 目录下
gulp.task('declaration', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  })

  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest('es/'))
    .pipe(gulp.dest('lib/'))
})

// 复制根目录下的 README.md 文件到 packages/hooks 目录下
gulp.task('copyReadme', async () => {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'))
})

// 默认任务，默认执行 clean、es、cjs、declaration 和 copyReadme 五个任务
exports.default = gulp.series('clean', 'es', 'cjs', 'declaration', 'copyReadme')
