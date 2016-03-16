require('./chartBar.html');

module.exports = chartBar = ['$templateCache', 'SeaDataService', function ($templateCache, SeaDataService) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('chartBar.html'),
        link: function ($scope, attrs) {

            $scope.chartData = SeaDataService.getChartData('bar');

            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
        }
    };
}];
