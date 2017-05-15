'use strict';
require.config({
  // alias libraries paths
    paths: {
        'domReady': '../bower_components/domReady/domReady',
        'angular': '../bower_components/angular/angular',
        'jquery': '../bower_components/jquery/dist/jquery',
        'angular-ui-router' : '../bower_components/angular-ui-router/release/angular-ui-router',
        'ngload': '../bower_components/angularAMD/ngload'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular',
            deps : ['jquery']
        },
        'angular-ui-router':{
            exports : 'uirouter',
            deps : ['angular']
        }
    },
    // kick start application
    deps: ['bootstrap']
});
