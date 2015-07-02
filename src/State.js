'use strict';

var AState = require('ampersand-state');
var config = require('./config');

module.exports = AState.extend({
    extraProperties: 'reject',
    props: {
        pictures: {
            'type': 'object',
            'default': function () { return {}; }
        },
        isLoading: {
            'type': 'boolean',
            'default': true
        }
    }
});