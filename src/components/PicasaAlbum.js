'use strict';

var React = require('react');
var _ = require('underscore')
var {Well, Col, Row} = require('react-bootstrap');
var partial = require('lodash.partial');

var PicasaAlbum = module.exports = React.createClass({
	render: function() {
		var i = 0;
		return (
			<Well className="clearfix-container">
				{_.map(this.props.model.pictures, (item, url)=>{
					return (
						<div>
							<Col key={url} md={4} xs={6} className="thumb">
								<a className="thumbnail" href={item.photo}>
									<img className="img-responsive" src={url} onClick={partial(this.props.openPhotoswipe,i)} />
								</a>
							</Col>
							{i % 2 === 1 ? <div className="clearfix hidden-md hidden-lg" /> : ''}
							{i++ % 3 === 2 ? <div className="clearfix hidden-xs hidden-sm" /> : ''}
						</div>
					);
				})}
			</Well>
		)
	}
});