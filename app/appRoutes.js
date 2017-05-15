define(['angular'], function () {
    'use strict';
    return ['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
        'use strict';
        $stateProvider
            .state('add', {
                url: '/add',
                templateUrl: 'app/components/record-form/recordForm.html',
                controller: 'RecordFormController',
                controllerAs: 'recordFormCtrl',
            })
            .state('list', {
                url: '/list',
                templateUrl: 'app/components/record-list/recordList.html',
                controller: 'RecordListController',
                controllerAs: 'recordListCtrl',
                resolve: {
                    'records': ['recordService', function(recordService) {
                        return recordService.getRecords();
                    }]
                }
            });
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/add');

    }];
});
