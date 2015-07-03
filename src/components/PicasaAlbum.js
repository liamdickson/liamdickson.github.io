'use strict';

var React = require('react');
var _ = require('underscore')
var {Well, Col, Row} = require('react-bootstrap');

var PicasaAlbum = module.exports = React.createClass({
	render: function() {
		return (
			<Well>
				<Row>
				{_.map(this.props.model.pictures, (item, url)=>{
					return (
						<Col key={url} md={4} xs={6} className="thumb">
							<a className="thumbnail" href={item.photo}>
								<img className="img-responsive" src={url} onClick={this.props.openPhotoswipe} />
							</a>
						</Col>
					);
				})}
				</Row>
			</Well>
		)
	}
});