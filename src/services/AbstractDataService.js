module.exports = AbstractDataService = function ($http, $log, __env) {
    return {
        test: function (a, b, c, d) {
            return this._makeRequest('test', {
                a: a,
                b: b,
                c: c,
                d: c
            })
        },
        _makeRequest: function (command, params) {
            var payload = {
                params: params,
                command: command
            }
            return $http({
                method: 'GET',
                url: __env.apiUrl + '?command=' + __env.apiCommands.api + '&request_payload=' + JSON.stringify(payload)
            }).then(function success(response) {
                if (response.data.error) {
                    $log.error(response.data.message);
                } else {
                    $log.debug(response.data.data);
                    return response.data.data;
                }
            }, function error(response) {
                $log.debug(response);
                return response;
            })
        }
    }
}