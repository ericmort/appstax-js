var gulp = require('gulp');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var concat = require('gulp-concat');

gulp.task('default', ['js', 'js-vendor', 'html', 'css']);
gulp.task('deploy', ['js', 'js-vendor', 'html', 'css']);
gulp.task('serve', ['deploy','server']);

gulp.task('clean', function() {
    return gulp.src('dist')
               .pipe(clean());
});

gulp.task('js', function(){
    gulp.src(['app/module.js', 'app/modules/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('js-vendor', function(){
    gulp.src([
            'app/vendor/**/*.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/spin.js/spin.js'
            ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('html', function(){
    gulp.src(['app/index.html', 'app/modules/**/*html'],{base: './app'})
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function(){
    gulp.src(['bower_components/**/*.css', 'app/styles/**/*.css'])
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('server', function() {
    connect.server({
        port:9000,
        root: ['.', 'dist']
    });
});
