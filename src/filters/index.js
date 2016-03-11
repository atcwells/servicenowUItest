'use strict';
var app = require('angular').module('opsdui');

app.filter('truncFilter', require('./truncFilter/truncFilter'));