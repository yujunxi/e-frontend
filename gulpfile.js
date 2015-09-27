'use strict';

var gulp = require('gulp'),
	connect = require('gulp-connect'),
	serve = require('gulp-serve');


//css

//js

//watch
gulp.task('watch',function(){
	gulp.watch(['./www/*.html'],['html']);
})

//server
gulp.task('server', function () {
    connect.server({
    	port:3000,
    	livereload:true
    });
});
 
//default
gulp.task('default', ['server']);