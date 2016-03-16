(function (window) {
    window.__env = window.__env || {};

    // API url
    window.__env.apiUrl = 'https://ven01247.service-now.com/tesm_ng_api.do';
    window.__env.apiVersion = 'stable';
    window.__env.apiCommands = {
        api: 'api'
    }

    // Base url
    window.__env.baseUrl = '/';

    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = true;
}(this));