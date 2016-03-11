require('./opsduiLineGraph.html');

module.exports = opsduiLineGraph = function ($templateCache, $timeout) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('opsduiLineGraph.html'),
        link: function ($scope, attrs) {

            $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
            $scope.series = ['Series A', 'Series B'];
            $scope.data = [
                [65, 59, 80, 81, 56, 55, 40]
            ];
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };

            // Simulate async data update
            $timeout(function () {

                $scope.labels = ["February", "March", "April", "May", "June", "July", "August"];
                $scope.data = [
                    [59, 80, 81, 56, 55, 40, 55]
                ];
            }, 3000);
        }
    };
}
