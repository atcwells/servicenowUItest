require('./seaFilter.html');

module.exports = seaFilter = ['$templateCache', function ($templateCache) {
    return {
        restrict: 'E',
        transclude: true,
        template: $templateCache.get('seaFilter.html')
    };
}];
