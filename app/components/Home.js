var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Sidebar = require('./Sidebar');
// var List = require('./List');
var UserContainer = require('../containers/UserContainer');

function Home (props){
	return (
		<div>
			<UserContainer />
		</div>

	)
}

module.exports = Home;