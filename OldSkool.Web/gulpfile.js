/// <binding BeforeBuild='default' />

var gulp = require('gulp'),
    typescript = require("gulp-typescript"),
    tsProject = typescript.createProject("tsconfig.json"),
    del = require("del");

var webroot = "./wwwroot/";

gulp.task('default', function () {
    // Clean old js files
    del([webroot + "/js/**/*"]);

    // Compile TypeScript
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(webroot + "js/"));
});