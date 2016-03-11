'use strict';
var app = require('angular').module('opsdui');

app.directive('opsduiFilter', require('./opsduiFilter/opsduiFilter'));
app.directive('opsduiLineGraph', require('./opsduiLineGraph/opsduiLineGraph'));
app.directive('opsduiOptions', require('./opsduiOptions/opsduiOptions'));
app.directive('opsduiReportWindow', require('./opsduiReportWindow/opsduiReportWindow'));
app.directive('opsduiSeaCard', require('./opsduiSeaCard/opsduiSeaCard'));
app.directive('opsduiSeaWindow', require('./opsduiSeaWindow/opsduiSeaWindow'));