'use strict';
var app = require('angular').module('opsdui');

// angular-chart directives, wrapped and extended a little
app.directive('chartBar', require('./charts/chartBar/chartBar'));
app.directive('chartDoughnut', require('./charts/chartDoughnut/chartDoughnut'));
app.directive('chartLine', require('./charts/chartLine/chartLine'));
app.directive('chartRadar', require('./charts/chartRadar/chartRadar'));
app.directive('chartPie', require('./charts/chartPie/chartPie'));
app.directive('chartPolar', require('./charts/chartPolar/chartPolar'));


app.directive('options', require('./options/options'));
app.directive('reportWindow', require('./reportWindow/reportWindow'));
app.directive('seaCard', require('./seaCard/seaCard'));
app.directive('seaFilter', require('./seaFilter/seaFilter'));
app.directive('seaWindow', require('./seaWindow/seaWindow'));
