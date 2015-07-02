'use strict';

var ARouter = require('ampersand-router');
var Store = require('./Store');
var config = require('./config');
var actions = require('./Actions');

module.exports = ARouter.extend({
    routes: {
        '(:page)(/)' : 'goToUrl'
    },
    goToUrl(page) {
        this.context.executeAction(actions.navigate, {page});
    }
});