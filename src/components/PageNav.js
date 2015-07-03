'use strict';

var React = require('react');
var {Navbar} = require('react-bootstrap');

var PageNav = module.exports = React.createClass({
	render: function () {
		return (
			<Navbar inverse brand='SongDickson.com' />
		);
	}
});