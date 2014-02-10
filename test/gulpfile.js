var gulp = require("gulp"),
	js1k = require("..");

/**
 * Big file task which will build but notify of fail.
 */
gulp.task("little", function() {
	gulp.src("bubbly.js")
		.pipe(js1k())
		.pipe(gulp.dest("./js1k/"));
});

gulp.task("big", function() {
	gulp.src("through2.js")
		.pipe(js1k())
		.pipe(gulp.dest("./js1k/"));
});

// Run tests
gulp.task("test", ["big", "little"]);