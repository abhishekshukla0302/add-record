define(['angular'], function(angular) {
    'use strict';
    return ['recordService', function(recordService) {
        'use strict';
        var ctrl = this;
        var resetRecord = function() {
            ctrl.record = {
                'file': null,
                'key': '',
                'secret': '',
                'uploadedBy': '',
            };
            angular.element(".file-path").val("");
        };
        var showSuccessAlert = function() {
            ctrl.message = "Data Saved Successfully";
            angular.element('#alertModal').openModal();
        };
        var showErrorAlert = function() {
            ctrl.message = "There was an error while saving data";
            angular.element('#alertModal').openModal();
        };


        ctrl.saveRecord = function() {
            ctrl.saving = true;
            var successCallback = function() {
                resetRecord();
                showSuccessAlert();
                ctrl.saving = false;
            };
            var errorCallback = function() {
                resetRecord();
                showErrorAlert();
                ctrl.saving = false;
            };
            recordService.saveRecord(ctrl.record).then(successCallback, errorCallback);
        };
        resetRecord();
    }];
});
