require('./reportWindow.html');

module.exports = reportWindow = ['$templateCache', function ($templateCache) {
    return {
        transclude: true,
        restrict: 'E',
        template: $templateCache.get('reportWindow.html')
    };
}];