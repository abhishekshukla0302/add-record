/**
 * bootstraps angular onto the window.document node
 */
define([
    'domReady',
    'angular',
    'angular-ui-router',
    'jquery',
    'app',
], function (domReady, angular,uiRouter,jquery,app) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap(document,["simulatorApp"]);
    });

});
