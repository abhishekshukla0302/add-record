define([
    'angular',
    'components/index',
    'directives/index',
    'appRoutes'
], function(angular,componentsModule,directivesModule,appRoutes) {//function(angular,componentsModule,directivesModule,servicesModule,appRoutes) {
    'use strict';
    return angular.module('simulatorApp', [
        'ui.router',
        'simulatorApp.directives',
        'simulatorApp.components',
    ]).config(appRoutes);
});
