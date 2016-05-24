var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;


function Main (props){
	return (
		<Jumbotron>
			<h1>This is Main!</h1>
			{props.children}
		</Jumbotron>


	)

}

module.exports = Main;