define(['angular','directives/fileUpload.dir'], function(angular,fileUploadDir) {
    'use strict';
    return angular.module('simulatorApp.directives', []).directive('fileModel',fileUploadDir);
});
