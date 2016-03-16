require('./chartRadar.html');

module.exports = chartRadar = ['$templateCache', 'SeaDataService', function ($templateCache, SeaDataService) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('chartRadar.html'),
        link: function ($scope, attrs) {

            $scope.chartData = SeaDataService.getChartData('radar');

            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
        }
    };
}];
