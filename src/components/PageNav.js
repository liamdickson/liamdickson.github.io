'use strict';

var React = require('react');
var {Navbar} = require('react-bootstrap');

var PageNav = module.exports = React.createClass({
	render: function () {
		return (
			<Navbar inverse className='navbar-fixed-top' brand='SongDickson.com' toggleNavKey={0} />
		);
	}
});