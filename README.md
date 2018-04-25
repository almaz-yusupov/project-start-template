# project-start-template
This little template serves to the quick launch and optimize your new project. 
It uses gulp task-manager with a number of pluggins:

-browser-sync<br>
-gulp-sass<br> 
-gulp-clean-css<br> 
-gulp-concat<br>
-gulp-uglifyjs<br>
-gulp-rename<br>
-gulp-wait

To get start you should to install all pluggins in CLI in the project directory 
by command: 
> npm i <br>


And then just launch the gulp, deafult task launchs browser-sync and watch-functions 
to track all your *.html, *css, *.scss, *.js files.

In template included jQuery v3.3.1.

If you use sass-syntax, correct the masks in the gulpfile in next tasks: -sass  -sass:build  -watch. 

    For the best optimization JS-files of your using pluggins should be plugged in gulpfile.js,
    CSS-files - in '_libs.sass' in the directory '/app/sass/'

Task "build" compiles, minifies and moves the project to directory 'dist'. All dependences of project's root structure can be seemed in gulpfile.js.

In next versions I will add a few useful pluggins, like a autoprefixer, rsync and image optimizator. 

