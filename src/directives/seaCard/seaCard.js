require('./seaCard.html');

module.exports = seaCard = ['$templateCache', function ($templateCache) {
    return {
        restrict: 'E',
        priority: 100,
        transclude: true,
        template: $templateCache.get('seaCard.html'),
        link: function (scope, attrs) {
            scope.card.assignedTo = (scope.card.assigned_to != '') ? scope.card.assigned_to : 'Unassigned';
            scope.card.assignedToImage = (scope.card.assigned_to != '') ? scope.card.assigned_to : 'http://semantic-ui.com/images/avatar/small/matt.jpg';
        }
    };
}];