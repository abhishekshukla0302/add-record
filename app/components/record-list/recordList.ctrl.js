define(['angular'], function(angular) {
    'use strict';
    return  ['records', 'recordService', function(records, recordService) {
        'use strict';
        var ctrl = this;
        ctrl.records = recordService.getRecordsData();
        console.log(ctrl.records);
        ctrl.deleteRecord = function($index) {
            recordService.deleteRecord($index);
            ctrl.records = recordService.getRecordsData();
        }
        ctrl.recordsEmpty = function() {
            return this.records && this.records.length > 0;
        }
    }]
});
