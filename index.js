var uglify = require("uglify-js"),
	gulputil = require("gulp-util"),
	through = require("through2");

module.exports = function js1k() {
	return through.obj(function(file, encoding, callback) {
		// Uglify the contents
		var minified = uglify.minify(file.contents.toString("utf8"), { fromString: true }).code,	
			length = minified.length;

		file.contents = new Buffer(minified);

		if(minified.length > 1024) gulputil.log("gulp-js1k", gulputil.colors.red("✘ Minified code is greater than 1024 bytes. " + (length - 1024) + " characters over the limit (" + length + " bytes in size)."));
		else gulputil.log("gulp-js1k", gulputil.colors.green("✔ Less than 1024 bytes. " + (1024 - length) + " characters left (" + length + " bytes in size). Good to go."));

		this.push(file);

		callback();
	});
};