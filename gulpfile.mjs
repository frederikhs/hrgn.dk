import gulp       from 'gulp';
import rev        from 'gulp-rev';
import revReplace from 'gulp-rev-replace';
import clean      from 'gulp-clean';
import htmlmin    from 'gulp-htmlmin';

function cleanUp() {
    return gulp.src('dist', {allowEmpty: true})
        .pipe(clean({force: true}));
}

function revisionCss() {
    return gulp.src('build/tailwind.css')
        .pipe(rev())
        .pipe(gulp.dest('dist/css'))
        .pipe(rev.manifest('rev-css-manifest.json'))
        .pipe(gulp.dest('tmp'));
}

function rewrite() {
    const manifest = gulp.src(['tmp/rev-css-manifest.json']);

    return gulp.src('src/index.html')
        .pipe(revReplace({manifest: manifest}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
}

function robots() {
    return gulp.src('src/robots.txt')
        .pipe(gulp.dest('dist'));
}

export default gulp.series(cleanUp, revisionCss, rewrite, robots);
