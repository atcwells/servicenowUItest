require('./chartDoughnut.html');

module.exports = chartDoughnut = ['$templateCache', 'SeaDataService', function ($templateCache, SeaDataService) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('chartDoughnut.html'),
        link: function ($scope, attrs) {

            $scope.chartData = SeaDataService.getChartData('doughnut');

            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
        }
    };
}];
