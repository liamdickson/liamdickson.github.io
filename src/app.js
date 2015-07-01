'use strict';

var {Fluxible} = require('fluxible');
var PageWrapper = require('./PageWrapper');
var Store = require('./Store');

var app = new Fluxible({
    component: PageWrapper
});

app.registerStore(BeastMasterStore);

module.exports = app;