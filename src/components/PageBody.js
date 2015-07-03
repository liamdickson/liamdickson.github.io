'use strict';

var React = require('react');
var TopWell = require('./TopWell');
var PicasaAlbum = require('./PicasaAlbum');
var Photoswipe = require('./Photoswipe');
var actions = require('../Actions');
var {Well} = require('react-bootstrap');
var $ = require('jquery');
var _ = require('underscore');
var Q = require('q');

var PageNav = module.exports = React.createClass({
	componentDidMount: function () {
		this.props.context.executeAction(actions.loadPictures);
	},
	openPhotoswipe: function(e) {
		if(e){
			e.preventDefault();
		}
		var promises = [];
		var pswpElement = document.querySelectorAll('.pswp')[0];
		// build items array
		var items = _.map(this.props.model.pictures, (item)=>{
			var photo = item.photo;
			var width = new Q.defer();
			var height = new Q.defer();

			$("<img/>").attr("src", photo).load(function() {
			    width.resolve(this.width);
			    height.resolve(this.height);
			});

			promises.push(width.promise, height.promise);

			return {
				src: photo,
				width: width.promise,
				height: height.promise
			}
		});

		_.forEach(items, (item)=>{
			Q.all([item.width, item.height]).done((values)=>{
				item.w = values[0];
				item.h = values[1];
			});
		});

		var options = {
		    history: false,
		    focus: false,
		    showAnimationDuration: 0,
		    hideAnimationDuration: 0
		};
		var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

		Q.allSettled(promises).then(()=>{
			gallery.init();
		});
	},
	render: function () {
		return (
			<div className='page-body container'>
				<TopWell />
				{this.props.model.isLoading ? <Well><p>Photos are loading...</p></Well> : <PicasaAlbum {...this.props} openPhotoswipe={this.openPhotoswipe} />}
				<Photoswipe {...this.props} openPhotoswipe={this.openPhotoswipe} />
			</div>
		);
	}
});