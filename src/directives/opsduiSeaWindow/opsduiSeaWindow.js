require('./opsduiSeaWindow.html');

module.exports = opsduiSeaWindow = function (AbstractDataService, $templateCache) {
    return {
        transclude: true,
        restrict: 'E',
        template: $templateCache.get('opsduiSeaWindow.html'),
        link: function (scope) {
            AbstractDataService.test('test1', 'test2', 'test3', 'test4')
                .then(function (response) {
                    console.log(response);
                })
        }
    };
}