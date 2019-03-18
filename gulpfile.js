/*
 * @Author: 刘祥祥 
 * @Date: 2019-03-18 08:44:53 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-18 09:40:14
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('gulp-webserver');

const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('scss', () => { //scss任务，进行scss文件编译,并且压缩css 
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(clean())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('minJs', () => { //js任务编译js文件，合并所有js，并且压缩
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./src/js'))
});

gulp.task('watch', () => { //watch任务，进行js，css文件监听
    gulp.watch(['./src/scss/**/*.scss', './src/js/**/*.js'], gulp.series('scss', 'minJs'))
});

gulp.task('server', () => {
    return gulp.src('./src')
        .pipe(server({
            prot: 8989,
            open: true,
            livereload: true,
            fallback: 'index.html'
        }));
});

//default任务，默认执行browserSync服务，js，css，watch任务
gulp.task('default', gulp.series('scss', 'minJs', 'server', 'watch'));