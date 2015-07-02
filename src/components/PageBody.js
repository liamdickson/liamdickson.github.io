'use strict';

var React = require('react');
var TopWell = require('./TopWell');
var PicasaAlbum = require('./PicasaAlbum');
var Photoswipe = require('./Photoswipe');

var PageNav = module.exports = React.createClass({
	openPhotoswipe: function(e) {
		if(e){
			e.preventDefault();
		}
		var pswpElement = document.querySelectorAll('.pswp')[0];
		// build items array
		var items = [
		    {
		        src: 'https://lh3.googleusercontent.com/-lXmBoaWzAAU/Unc9N6-zNZI/AAAAAAAAAPE/e_KqkD3zhNU/DSC_0209.JPG',
		        w: 512,
		        h: 511
		    },
		    {
		        src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
		        w: 1024,
		        h: 683
		    }
		];
		var options = {
		    history: false,
		    focus: false,
		    showAnimationDuration: 0,
		    hideAnimationDuration: 0
		};
		var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	},
	render: function () {
		return (
			<div className='pageBody container'>
				<TopWell />
				<PicasaAlbum {...this.props} openPhotoswipe={this.openPhotoswipe} />
				<Photoswipe {...this.props} openPhotoswipe={this.openPhotoswipe} />
			</div>
		);
	}
});