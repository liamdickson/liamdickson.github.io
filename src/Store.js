'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var State = require('./State');
var config = require('./config.js');

class Store extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new State();
        this.model.on('change', this.emitChange, this);
    }

    getModel() {
        return this.model;
    }

    loading(bool) {
        this.model.set('isLoading', bool);
    }

    set(payload) {
        this.model.set(payload);
    }
}

Store.storeName = 'Store';
Store.handlers = {
    'navigate' : 'set',
    'set' : 'set',
    'loading': 'loading'
};

module.exports = Store;