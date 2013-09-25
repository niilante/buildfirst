'use strict';

var nconf = require('nconf');
var path = require('path');

nconf.use('memory');
nconf.argv();
nconf.env();
nconf.file('dev', 'development.json');

module.exports = nconf.get.bind(nconf);