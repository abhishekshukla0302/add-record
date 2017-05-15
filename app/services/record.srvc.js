define(['angular'], function (angular) {
    'use strict';
    return ['$http', function($http) {
        var simulatorURL = '/lti_qa_simulator/rest/', records = [],
        getRecords = function() {
            return $http.get(simulatorURL + 'imscc').then(function(response) {
                if (response.data) {
                    records = response.data;
                } else {
                    records = [];
                }
                return response.data;
            });
        };
        var getRecordsData = function() {
            return records;
        }
        var saveRecord = function(record) {
            var formdata = new FormData();
            formdata.append('file', record.file);
            formdata.append('uploadedBy', record.uploadedBy);
            formdata.append('key', record.key);
            formdata.append('secret', record.secret);
            return $http.post(simulatorURL + 'importtcc', formdata, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).then(function(response) {
                return response.data;
            });
        };
        var saveDummyRecord = function(record, successCallback) {
            records.push(record);
            if (successCallback) {
                successCallback();
            }
        }
        var getIndexFromId = function(id) {
            if (records) {
                for (var i = 0; i < records.length; i++) {
                    if (records[i].id == id) {
                        return i;
                    }
                }
                return -1;
            } else {
                return -1;
            }
        }
        var deleteRecord = function(id) {
            return $http.delete(simulatorURL + 'imscc/' + id).then(function(response) {
                records.splice(getIndexFromId(id), 1);
            });
        };

        return {
            getRecords: getRecords,
            saveRecord: saveRecord,
            deleteRecord: deleteRecord,
            getRecordsData: getRecordsData,
            saveDummyRecord: saveDummyRecord
        };

    }];
});
