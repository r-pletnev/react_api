var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;

function Main (props){
	return (
		<div className="container">
			<div className="row">
				{props.children}
			</div>
		</div>

	)

}

module.exports = Main;