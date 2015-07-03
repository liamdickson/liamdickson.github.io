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

    modifyUrl(URL, size) {
        var mURL = URL.split('/');
        mURL[mURL.length-2] = size;
        return mURL.join('/');
    }

    loadPictures() {
        this.loading(true);
        var ts = config.DEFAULT_THUMBSIZE;
        var ps = config.DEFAULT_PHOTOSIZE;
        var m = config.DEFAULT_MARGIN;

        var $j = jQuery.noConflict();
        $j.getJSON("https://picasaweb.google.com/data/feed/base/user/" + config.userID +
            "/album/" + config.albumID + "?kind=photo&access=public&alt=json-in-script&callback=?",
        (data, status)=>{
            var albumTitle = data.feed.title.$t
            var albumSubtitle = data.feed.subtitle.$t

            data.feed.entry.forEach( (pic, i)=>{
                var thumb = pic.media$group.media$thumbnail[ts];
                var url = thumb.url;
                var photo = this.modifyUrl(thumb.url,'s0');
                var desc = pic.media$group.media$description.$t;

                var pictures = this.model.pictures;
                pictures[url] = {thumb, photo, desc};
                this.model.set({pictures});
            });
            this.loading(false);
        });
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
    'loading' : 'loading',
    'loadPictures' : 'loadPictures'
};

module.exports = Store;