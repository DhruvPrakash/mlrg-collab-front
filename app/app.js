'use strict';

var angular = require('angular');
require('angular-cookies');
require('angular-animate');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('sweetalert');
require('angular-sweetalert');
require('angular-ui-router-uib-modal');
var states = require('./states');
require('./home');
require('./bib-create');
require('./search');
require('./directives');
var app = angular.module('mlrg',['ui.bootstrap','ui.router','mlrg.home','mlrg.bibcreate','mlrg.search','mlrg.directives','oitozero.ngSweetAlert','ngAnimate', 'ui.router.modal', 'ngCookies']);

app.config(states);







module.exports = app;