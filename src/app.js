angular.module('ngify', []);

module.exprts = opsdui = angular.module('opsdui', ['multipleSelection', 'multipleDrag', 'ngify', "chart.js"])
    .controller('opsdui-controller', ['$scope', 'PageLayoutService', function ($scope, PageLayoutService) {
        $scope.page = PageLayoutService;
    }])
    .constant('__env', window.__env)
    .config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            responsive: false,
            animation: false,
        });
        // Configure all line charts
        ChartJsProvider.setOptions('Line', {
            datasetFill: true
        });
    }]);

require('angular-multiple-selection');
require('angular-multiple-drag');
require('chart.js');
require('angular-chart.js');
require('./services');
require('./controllers');
require('./filters');
require('./directives');
