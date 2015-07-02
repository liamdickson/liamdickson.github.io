'use strict';

var React = require('react');
var PageNav = require('./PageNav');
var PageBody = require('./PageBody');
var Store = require('../Store');
var connectToStores = require('fluxible/addons/connectToStores');

var PageWrapper = React.createClass({
	render: function () {
		return (
			<div className="pageWrapper">
				<PageNav {...this.props} />
				<PageBody {...this.props} />
			</div>
		);
	}
});

PageWrapper = connectToStores(PageWrapper, [Store], function (stores) {
    return {
        model: stores.Store.getModel()
    };
});

module.exports = PageWrapper;