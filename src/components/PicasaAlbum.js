'use strict';

var React = require('react');
var _ = require('underscore')
var {Well, Col, Row} = require('react-bootstrap');
var partial = require('lodash.partial');

var PicasaAlbum = module.exports = React.createClass({
	render: function() {
		var index = 0;
		return (
			<Well>
				<div className="gallery-box">
				{_.map(this.props.model.pictures, (item, url)=>{
					return (
						<a key={url} className="thumbnail gallery-cell" href={item.photo}>
							<img className="img-responsive" src={url} onClick={partial(this.props.openPhotoswipe, index++)} />
						</a>
					);
				})}
				</div>
			</Well>
		)
	}
});