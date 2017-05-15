define(['angular','services/record.srvc'], function (angular,recordService) {
    'use strict';
    return angular.module('simulatorApp.services', []).factory('recordService',recordService);
});
