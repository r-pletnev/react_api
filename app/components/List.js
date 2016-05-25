var React = require('react');
var Panel = require('react-bootstrap').Panel; 
var ListGroup = require('react-bootstrap').ListGroup;
var Col = require('react-bootstrap').Col;
var PropTypes = React.PropTypes



function List(props){
	var title = (<h3>{props.title}</h3>)
	return (
		<Col sm={10}>
			<Panel header={title} bsStyle="primary">
				<ListGroup fill>
					{props.children}
				</ListGroup>
			</Panel>
		</Col>
	)
}

List.propTypes = {
	title: PropTypes.string
}

module.exports = List;