'use strict';

var React = require('react');
var PageNav = require('./PageNav');
var PageBody = require('./PageBody');

var PageWrapper = module.exports = React.createClass({
	render: function () {
		return (
			<div className="pageWrapper">
				<PageNav />
				<PageBody />
			</div>
		);
	}
});