require('./chartLine.html');

module.exports = chartLine = ['$templateCache', 'SeaDataService', function ($templateCache, SeaDataService) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('chartLine.html'),
        link: function ($scope, attrs) {

            $scope.chartData = SeaDataService.getChartData('line');

            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
        }
    };
}];
