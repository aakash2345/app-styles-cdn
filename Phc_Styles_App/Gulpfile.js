/// <binding AfterBuild='sass' />
var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// other content removed
gulp.task("sass", function () {
    return gulp.src('Styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./wwwroot/css'));
});

gulp.task("css-concat", function () {
    return gulp.src([
        'wwwroot/lib/bootstrap-4.0.0/dist/css/bootstrap.min.css',
        'wwwroot/lib/font-awesome/css/font-awesome.min.css',
        'wwwroot/lib/kendo-ui/styles/kendo.common-bootstrap.min.css',
        'wwwroot/lib/kendo-ui/styles/kendo.bootstrap.min.css',
        'wwwroot/css/global-styles.css'
    ])
        .pipe(concat('app-min-styles.css'))
        .pipe(gulp.dest('wwwroot/css'))
})

gulp.task("js", function () {
    return gulp.src(['wwwroot/lib/jquery/dist/jquery.js',
        'wwwroot/lib/popper/popper.js',
        'wwwroot/lib/bootstrap/dist/js/bootstrap.js',
        'wwwroot/lib/kendo-ui/js/kendo.all.min.js',
        'wwwroot/lib/kendo-ui/js/kendo.aspnetmvc.min.js',
        'wwwroot/lib/metisMenu/metisMenu.js',
        'wwwroot/lib/jquery-slimscroll/jquery-slimscroll.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('wwwroot/js'));
})

gulp.task("js-min", function () {
    return gulp.src('wwwroot/js/*.js')
        .pipe(uglify('app.min.js'))
        .pipe(gulp.dest('wwwroot/js/js-min/'));
})


    
    
    
    
    
    


