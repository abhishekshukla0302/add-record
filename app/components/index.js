define(['angular','services/index', 'components/record-form/recordForm.ctrl', 'components/record-list/recordList.ctrl'], function(angular,services, recordFormCtrl, recordListCtrl) {
    'use strict';
    var controllers = angular.module('simulatorApp.components', ['simulatorApp.services']);
    controllers.controller('RecordFormController', recordFormCtrl);
    controllers.controller('RecordListController', recordListCtrl);
    return controllers;
});
