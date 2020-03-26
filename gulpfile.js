// // Minify and rename CSS files
// gulp.task('mincss', function() {
//   return gulp.src("./css/*.css")  
//   .pipe(rename({suffix: ".min"}))  
//   .pipe(cleanCSS())  
//   .pipe(gulp.dest("./css"));  
// });


const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

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
  watch("./src/sass/**/*.scss", serveSass);
  watch("./src/js/*.js").on('change', browserSync.reload);
};

// Sass compile in CSS
function serveSass() {
  return src('./src/sass/**/*.sass', './src/sass/**/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false,
        flexbox: true
      }))
      .pipe(dest('./src/css'))
      .pipe(browserSync.stream());
};

// Minify and rename CSS files
function buildCSS(done) {
  src("./src/css/**/**.css")
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest("./dist/css/"));
  done();
};

function buildJS(done) {
  src(["./src/js/**.js", "!./src/js/**.min.js"])
    .pipe(minify({ext:{
        min:'.js'
      },
      noSource: true
  }))
    .pipe(dest("./dist/js/"));
  src("./src/js/**.min.js")
    .pipe(dest("./dist/js/"));
  done();
};

function html(done) {
  src("./src/**.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./dist/"));
  done();
};

function php(done) {
  src("./src/**.php")
    .pipe(dest("./dist/"));
  src("./src/phpmailer/**.php")
    .pipe(dest("./dist/phpmailer/"));
  done();
};

function fonts(done) {
  src("./src/fonts/**/**")
    .pipe(dest("./dist/fonts/"));
  done();
};

function imagemin(done) {
  src("./src/img/**/*.{png,jpg,jpeg}")
    .pipe(tinypng({ key: 'vyWhJRVB3GCGMl3gYCJ6yg3Qtbflgbjv', }))
    .pipe(dest("./dist/img/"));
  src("./src/img/**/*.svg")
    .pipe(dest("./dist/img/"));
  done();
}

exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, fonts);