require('./opsduiFilter.html');

module.exports = opsduiFilter = function ($templateCache) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('opsduiFilter.html')
    };
}
