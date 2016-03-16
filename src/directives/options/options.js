require('./options.html');

module.exports = options = ['$templateCache', function ($templateCache) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('options.html')
    }
}];