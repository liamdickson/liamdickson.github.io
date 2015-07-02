'use strict';

var Router = require('./Router');
var React = require('react');
var app = require('./app');

var mRouter;

var context = window.context = app.createContext();

mRouter = new Router({context: context.getComponentContext()});
mRouter.history.start({pushState: true});

React.render(
	context.createElement(),
    document.getElementById('main')
);