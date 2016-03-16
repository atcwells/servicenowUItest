module.exports = PageLayoutService = function () {

    var components = {
        header: {},
        main: {
            seaWindow: {
                position: 'right',
                gridSize: 'ten'
            },
            reportWindow: {
                position: 'left',
                gridSize: 'six'
            }
        },
        footer: {}
    }

    var semanticGridNumberMappings = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen'
    ];

    return {
        getPosition: function (section, component) {
            return 'align ' + components[section][component].position;
        },
        getGridSize: function (section, component) {
            return components[section][component].gridSize + ' wide column';
        },
        increaseBox: function (direction) {
            if (direction == 'left') {
                if (semanticGridNumberMappings.indexOf($scope['right']) <= 0) {
                    return;
                }
                $scope['left'] = semanticGridNumberMappings[semanticGridNumberMappings.indexOf($scope['left']) + 1];
                $scope['right'] = semanticGridNumberMappings[semanticGridNumberMappings.indexOf($scope['right']) - 1];
            } else {
                if (semanticGridNumberMappings.indexOf($scope['left']) <= 0) {
                    return;
                }
                $scope['left'] = semanticGridNumberMappings[semanticGridNumberMappings.indexOf($scope['left']) - 1];
                $scope['right'] = semanticGridNumberMappings[semanticGridNumberMappings.indexOf($scope['right']) + 1];
            }
        }
    }
}