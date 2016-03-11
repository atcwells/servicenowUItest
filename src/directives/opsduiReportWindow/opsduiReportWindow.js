require('./opsduiReportWindow.html');

module.exports = opsduiReportWindow = function ($templateCache) {
    return {
        transclude: true,
        restrict: 'E',
        template: $templateCache.get('opsduiReportWindow.html')
    };
}