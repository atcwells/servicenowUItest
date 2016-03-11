require('./opsduiOptions.html');

module.exports = opsduiOptions = function ($templateCache) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('opsduiOptions.html')
    }
}