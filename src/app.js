angular.module('ngify', []);

angular.module('opsdui', ['multipleSelection', 'ngify', "chart.js"])
    .controller('opsdui-controller', ['$scope', 'PageLayoutService', '$timeout', function ($scope, PageLayoutService, $timeout) {
        $scope.page = PageLayoutService;
    }])
    .constant('__env', window.__env)
    .config(['$provide', 'ChartJsProvider', function ($provide, ChartJsProvider) {
        $provide.decorator('$log', ['$delegate', function ($delegate) {
            var dateFormatter = function (date) {
                var formatNum = function (num) {
                    if (parseInt(num) && parseInt(num) < 10 && parseInt(num) > 0) {
                        return '0' + num;
                    }
                    return num;
                };
                return date.getFullYear() + '-' + formatNum(date.getMonth()) + '-' + formatNum(date.getDay()) + ' ' + formatNum(date.getHours()) + ':' + formatNum(date.getMinutes()) + ':' + formatNum(date.getSeconds());
            };
            var debugFn = $delegate.debug;

            $delegate.debug = function () {
                var args = [].slice.call(arguments);
                var now = dateFormatter(new Date());

                // Prepend timestamp
                args[0] = now + ' - ' + args[0];

                // Call the original with the output prepended with formatted timestamp
                debugFn.apply(null, args)
            };

            return $delegate;
        }]);

        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#FF5252', '#FF8A80'],
            responsive: false
        });
        // Configure all line charts
        ChartJsProvider.setOptions('Line', {
            datasetFill: false
        });
    }]);

require('angular-multiple-selection');
require('chart.js');
require('angular-chart.js');
require('./services');
require('./controllers');
require('./filters');
require('./directives');
