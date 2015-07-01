'use strict';

var React = require('react');

// Indexes to standard thumbnails returned by Picasa API
var THUMB_SMALL  = 0;
var THUMB_MEDIUM = 1;
var THUMB_LARGE  = 2;

// Sizes for photographs to be displayed by slimbox
var PHOTO_SMALL  = 640;
var PHOTO_MEDIUM = 800;
var PHOTO_LARGE  = 1024;

var DEFAULT_MARGIN    = 5;
var DEFAULT_THUMBSIZE = THUMB_MEDIUM;
var DEFAULT_PHOTOSIZE = PHOTO_MEDIUM;

var PicasaAlbum = module.exports = React.createClass({
	loadPicasaAlbum: function(userid, albumid, thumbsize, photosize, margin) {
		var ts = thumbsize || DEFAULT_THUMBSIZE;
		var ps = photosize || DEFAULT_PHOTOSIZE;
		var m = margin || DEFAULT_MARGIN;

		var $j = jQuery.noConflict();
		$j.getJSON("https://picasaweb.google.com/data/feed/base/user/" + userid +
			"/album/" + albumid + "?kind=photo&access=public&alt=json-in-script&callback=?",
		(data, status)=>{
			var albumTitle = data.feed.title.$t
			var albumSubtitle = data.feed.subtitle.$t

			data.feed.entry.forEach( (pic, i)=>{
				var thumb = pic.media$group.media$thumbnail[ts];
				var url = thumb.url;
				var photo = pic.media$group.media$content[0];
				var desc = pic.media$group.media$description.$t;
				this.setState({urls: {url, photo: photo.url}});
			});
		});
	},
	componentDidMount: function () {
		this.loadPicasaAlbum('liamsdickson','ProfilePhotos03');
	},
	render: function() {
		// FIX: Needs to be refactored to use stores and more views.
		var url = '';
		var photo = '';
		if (this.state) {
			url = this.state.urls ? this.state.urls.url : '';
			photo = this.state.urls.photo ? this.state.urls.photo : '';
		}
		return <div className="well"><a href={photo}><img src={url} /></a></div>
	}
})