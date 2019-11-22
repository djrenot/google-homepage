const gulp = require('gulp');
// const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');
// const rename = require('gulp-rename');
const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');

const paths = {
  'src': {
    'scss': 'style/*.scss',
  },
  'dist': {
    'css': 'style/',
  }
};

gulp.task('sass', done => {
  gulp.src(paths.src.scss)
  .pipe(sass({
    outputStyle: 'expanded',
  }).on('error', sass.logError))
  .pipe(gulp.dest(paths.dist.css));
  done();
});

gulp.task('dev', () => {
  gulp.watch(paths.src.scss, gulp.task('sass'));
});