'use strict';

var React = require('react');
var app = require('./app');

var router;

var context = window.context = app.createContext();

React.render(
	context.createElement(),
    document.getElementById('main')
);