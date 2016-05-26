var React = require('react');
var UsersContainer = require('../containers/UsersContainer');

function Home (props){
	return (
		<div>
			<UsersContainer step={50}/>
		</div>
	)
};

module.exports = Home;