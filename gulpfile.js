const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


/* SASS Compiler */


function style() {
    return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
}

function js() {
    return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js')
    .pipe(gulp.dest('./src/js'))
    .pipe(browserSync.stream());
}

function watch () {
    browserSync.init ({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/*.scss', style, js)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.js = js;
exports.watch = watch;