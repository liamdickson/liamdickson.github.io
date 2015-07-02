'use strict';

var React = require('react');
var {Row, Col, Well, Button} = require('react-bootstrap');

var TopWell = module.exports = React.createClass({
	render: function () {
		return (
			<Well>
			    <h1>The Song Dickson Family</h1>
			    <Row>
			        <Col>
			            <p className={'padded-text'}>Welcome to our website. The purpose of this site is to allow us to share our family photos with others. Thank you.</p>
			        </Col>
			    </Row>
			</Well>
		)
	}
});