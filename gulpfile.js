// const gulp = require('gulp');
// const browserSync = require('browser-sync').create();
// const cleanCSS = require('gulp-clean-css');
// const rename = require("gulp-rename");

// // Static server
// gulp.task('browser-sync', function() {
//   browserSync.init({
//       server: {
//           baseDir: "./"
//       }
//   });
//   gulp.watch("./*.html").on('change', browserSync.reload);
// });

// // Minify and rename CSS files
// gulp.task('mincss', function() {
//   return gulp.src("./css/*.css")  
//   .pipe(rename({suffix: ".min"}))  
//   .pipe(cleanCSS())  
//   .pipe(gulp.dest("./css"));  
// });


const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./src"
      }
  });
  watch("./src/*.html").on('change', browserSync.reload);
  watch("./src/sass/**/*.sass", serveSass);
  watch("./src/js/*.js").on('change', browserSync.reload);
};

// Sass compile in CSS
function serveSass() {
  return src('./src/sass/*.sass')
      .pipe(sass())
      .pipe(dest('./src/css'))
      .pipe(browserSync.stream());
};

// Minify and rename CSS files
function minCSS() {
  return src("./src/css/*.css")  
  .pipe(rename({suffix: ".min"}))  
  .pipe(cleanCSS())  
  .pipe(dest("./src/css"));  
};

exports.serve = bs;