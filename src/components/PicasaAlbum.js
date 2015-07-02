'use strict';

var React = require('react');
var actions = require('../Actions');

var PicasaAlbum = module.exports = React.createClass({
	loadPicasaAlbum: function(userid, albumid, thumbsize, photosize, margin) {
	},
	componentDidMount: function () {
		this.props.context.executeAction(actions.loadPictures);
	},
	render: function() {
		if (this.props.model.isLoading) {
			return <div>Is Loading...</div>;
		}
		var url = '';
		console.log(this.props.model.pictures);
		return <div className="well"><a href='#' onClick={this.props.openPhotoswipe}><img src={url} /></a></div>
	}
});