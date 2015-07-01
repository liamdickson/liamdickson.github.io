'use strict';

var State = require('ampersand-state');
var config = require('./config');

module.exports = State.extend({
    extraProperties: 'reject',
    props: {
        items: {
            'type': 'object',
            'default': {}
        },
        isLoading: {
            'type': 'boolean',
            'default': true
        }
    },
    toUrlString() {
        return `/`;
    }
});