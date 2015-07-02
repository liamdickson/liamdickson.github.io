'use strict';

var AState = require('ampersand-state');
var config = require('./config');

module.exports = AState.extend({
    extraProperties: 'reject',
    props: {
        items: {
            'type': 'object'
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