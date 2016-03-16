require('./chartPie.html');

module.exports = chartPie = ['$templateCache', 'SeaDataService', function ($templateCache, SeaDataService) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('chartPie.html'),
        link: function ($scope, attrs) {

            $scope.chartData = SeaDataService.getChartData('pie');

            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
        }
    };
}];
