'use strict';

var Router = require('ampersand-router');
var Store = require('./Store');
var config = require('./config');
var actions = require('./Actions');

module.exports = Router.extend({
    initialize(options) {
        options = options || {};
        this.context = options.context;
        var store = this.context.getStore(Store);
        this.listenTo(store, 'change', () => {
            console.log('updated');
        })
    }
});