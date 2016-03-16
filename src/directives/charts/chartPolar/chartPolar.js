require('./chartPolar.html');

module.exports = chartPolar = ['$templateCache', 'SeaDataService', function ($templateCache, SeaDataService) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('chartPolar.html'),
        link: function ($scope, attrs) {

            $scope.chartData = SeaDataService.getChartData('polar');

            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
        }
    };
}];
