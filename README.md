# gulp-js1k
Automatically minify, print some stats about your code size and shove your code into a shim so you can open it in the browser for the [js1k](http://js1k.com/) competition.

Usage:

	$ npm install gulp-js1k

Add it to your gulp file: (gulpfile.js)

```js
var js1k = require("gulp-js1k");

// Print some stats (js1k elgibility), minify and output to "/submission/"
gulp.task("js1k", function() {
	gulp.src("js1k-app.js")
		.pipe(js1k())
		.pipe(gulp.dest("./submission/"));
});

// Print some stats (js1k elgibility), minify, output to "/submission/" with the shim html file 
gulp.task("js1k-with-shim", function() {
	gulp.src("js1k-app.js")
		.pipe(js1k(true)) // Notice the true
		.pipe(gulp.dest("./submission"));
});
```

Run `gulp <task-name>` and done!

File greater that 1k?

	[gulp] gulp-js1k ✘ Minified code is greater than 1024 bytes. 530 characters over the limit (1554 bytes in size).

File less than 1k?

	[gulp] gulp-js1k ✔ Less than 1024 bytes. 102 characters left (922 bytes in size). Good to go.


License: MIT