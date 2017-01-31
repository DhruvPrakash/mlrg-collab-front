'use strict';

var angular = require('angular');
require('angular-animate');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('sweetalert');
require('angular-sweetalert');
var states = require('./states');
require('./home');
require('./bib-create');
require('./search')
require('./directives');
var app = angular.module('mlrg',['ui.bootstrap','ui.router','mlrg.home','mlrg.bibcreate','mlrg.search','mlrg.directives','oitozero.ngSweetAlert','ngAnimate']);

app.config(states);







module.exports = app;