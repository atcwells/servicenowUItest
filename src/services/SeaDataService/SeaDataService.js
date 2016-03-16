module.exports = SeaDataService = ['AbstractDataService', '$timeout', function (AbstractDataService, $timeout) {

    var chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
            [65, 59, 80, 81, 56, 55, 40]
        ],
    }

    // Simulate async data update
    $timeout(function () {

        chartData.labels = chartData.labels.slice(1);
        chartData.data[0] = chartData.data[0].slice(1);

        chartData.labels.push("August");
        chartData.data[0].push(55);
    }, 3000);

    return {
        getAlerts: function() {
            return AbstractDataService.getAlerts().then(function(response) {
                var records = {}
                for (var key in response) {
                    records[response[key].sys_id] = response[key];
                }
                return records;
            })
        },
        getChartData: function (chartType) {
            return chartData;
        }
    };
}];