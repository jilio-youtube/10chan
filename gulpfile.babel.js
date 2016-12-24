const gulp = require('gulp');
const plugin = require('gulp-load-plugins')();

gulp.task('build', () =>
  gulp.src('src/wishmaster.js')
    .pipe(plugin.babel({ presets: ['react', 'es2015'] }))
    .pipe(plugin.browserify({ insertGlobals: true }))
    .pipe(gulp.dest('public'))
);
