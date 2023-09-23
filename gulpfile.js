const gulp = require('gulp')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const del = require('del')

// step 1: 如果有对应的产物，此时需要删除 umd cjs esm
gulp.task('clean', async () => {
  await del('lib/**')
  await del('cjs/**')
  await del('es/**')
})

// step 2: 针对不同类型进行构建
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

gulp.task('es', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  })

  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'))
})

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

gulp.task('copyReadme', async () => {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'))
})

exports.default = gulp.series('clean', 'es', 'cjs', 'declaration', 'copyReadme')
