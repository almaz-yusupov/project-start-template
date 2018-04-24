# project-start-template
This little template serves to the quick launch of your new project. 
It uses gulp task manager with a number of pluggins:

-browser-sync<br>
-bower<br>
-gulp-sass<br> 
-gulp-clean-css<br> 
-gulp-concat<br>
-gulp-uglifyjs<br>
-gulp-rename<br>

For start you should to install all pluggins in CLI in the project directory 
by command: 
> npm i <br>


And then just launch the gulp, deafult task launchs browser-sync and watch-functions 
to track all your *.html, *css, *.sass, *.js files. 

If you are using scss-syntax, correct the mask in the gulpfile in next tasks: -sass  -sass:build  -watch. 

    JS-files of your using pluggins for best optimization should be plugged in gulpfile.js,
    for CSS-files created '_libs.sass' in the directory '/app/sass/'

Task "build" compiles, minifies and moves the project to directory 'dist'. All dependences of project's root structure can be seemed in gulpfile.js.

In next versions I will add a few useful pluggins, like a autoprefixer, rsync and image optimizator. 


#html #css #js #starttemplate
