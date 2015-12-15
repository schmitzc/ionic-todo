var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var closureCompiler = require('gulp-closure-compiler');

var paths = {
  sass: ['./scss/**/*.scss'],
  javascript: [
    './www/app/app.js',
    './www/app/**/*.js',
    '!./www/app/**/*.spec.js',
    '!./www/lib/**'
  ]
};

gulp.task('default', ['sass', 'scripts']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('scripts', function() {
  return gulp.src(paths.javascript)
    .pipe(closureCompiler({
      compilerPath: './node_modules/google-closure-compiler/compiler.jar',
      fileName: 'all.js',
      continueWithWarnings: true,
      tieredCompilation: true
    }))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.javascript, ['scripts']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('test-ios', runAppiumSpecsOnIos);
gulp.task('test-android', runAppiumSpecsOnAndroid);

function runAppiumSpecs(platform) {
  sh.exec('PLATFORM=' + platform + ' mocha spec/appium/**/*.spec.js');
}

function runAppiumSpecsOnIos() {
  runAppiumSpecs('ios');
}

function runAppiumSpecsOnAndroid() {
  runAppiumSpecs('android');
}
