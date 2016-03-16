'use strict';
var app = require('angular').module('opsdui');

app.filter('truncTextFilter', require('./truncTextFilter/truncTextFilter'));