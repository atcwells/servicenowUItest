require('./seaWindow.html');

module.exports = seaWindow = ['SeaDataService', '$templateCache', function (SeaDataService, $templateCache) {
    return {
        transclude: true,
        restrict: 'E',
        template: $templateCache.get('seaWindow.html'),
        link: function (scope) {
            scope.seas = {};
            SeaDataService.getAlerts()
                .then(function (alerts) {
                    scope.seas = alerts;
                })
        }
    };
}];