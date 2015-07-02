'use strict';

var {Fluxible} = require('fluxible');
var PageWrapper = require('./components/PageWrapper');
var Store = require('./Store');

var app = new Fluxible({
    component: PageWrapper
});

app.registerStore(Store);

module.exports = app;