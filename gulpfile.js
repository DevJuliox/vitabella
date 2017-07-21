//Aqui se importan los modulos y plugin que se usaran. Cada uno se importa con require('modulo')
// palabras para comprimir css con scss Nested, Expanded, compact, compressed


var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./scss/estilos.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
    
});


gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./scss/estilos.scss", ['sass']);
    gulp.watch("./*html").on('change', browserSync.reload);
});