'use strict';

var React = require('react');
var TopWell = require('./TopWell');
var Photoswipe = require('./Photoswipe');

var PageNav = module.exports = React.createClass({
	render: function () {
		return (
			<div className='pageBody container'>
				<TopWell />
				<Photoswipe />
			</div>
		);
	}
});