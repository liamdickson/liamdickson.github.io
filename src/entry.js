'use strict';

var React = require('react');
var app = require('./app');
var Router = require('./Router');

var router;

var context = window.context = app.createContext();

// router = new Router({context: context.getComponentContext()});
// router.history.start({pushState: true});

React.render(
	context.createElement(),
    document.getElementById('main')
);