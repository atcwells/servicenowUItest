'use strict';
var app = require('angular').module('opsdui');

app.factory('PageLayoutService', require('./PageLayoutService/PageLayoutService'));
app.factory('SeaDataService', require('./SeaDataService/SeaDataService'));