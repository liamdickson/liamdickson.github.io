'use strict';

module.exports = {
    navigate(actionContext, payload) {
        actionContext.dispatch('navigate', payload);
    },
    loadPictures(actionContext, payload) {
        actionContext.dispatch('loadPictures');
    },
    setState(actionContext, payload) {
        actionContext.dispatch('set', payload);
    }
};