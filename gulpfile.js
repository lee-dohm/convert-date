const exec = require('child_process').exec
const gulp = require('gulp')
const standard = require('gulp-standard')

gulp.task('standard', () => {
  return gulp.src(['lib/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('atomTest', (callback) => {
  exec('atom --test spec', (err, stdout, stderr) => {
    if (err) {
      console.log(stdout)
      callback(err)
    } else {
      callback()
    }
  })
})

gulp.task('test', ['standard', 'atomTest'])
gulp.task('default', ['test'])
