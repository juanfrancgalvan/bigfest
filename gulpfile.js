const { src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const terser = require('gulp-terser')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

function styles() {
  return src('source/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(plumber())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/styles'))
}

function scripts() {
  return src('source/scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/scripts'))
}

function images() {
  // const optimization = [imagemin.mozjpeg({quality: 20}), imagemin.optipng({optimizationLevel: 5})]
  return src('source/images/*')
    .pipe(imagemin())
    .pipe(webp())
    .pipe(dest('build/images'))
}

function watchFiles() {
  watch("source/styles/**/*.scss", styles)
  watch("source/scripts/**/*.js", scripts)
}

exports.styles = styles
exports.scripts = scripts
exports.images = images
exports.default = parallel(styles, scripts, watchFiles)