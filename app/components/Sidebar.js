var React = require('react');
var Bootstrap = require('react-bootstrap');
var Col = Bootstrap.Col;
var Button = Bootstrap.Button;
var ButtonGroup = Bootstrap.ButtonGroup;

function Sidebar(props){
	buttonSize = 'large';
	return(
		<Col sm={2}>
				<Button bsStyle="primary" block bsSize={buttonSize} onClick={props.startHandler}>
					Start
				</Button>
				<Button bsStyle="danger" block bsSize={buttonSize} onClick={props.clearHandler}>
					Clear
				</Button>
		</Col>
	)
}


module.exports = Sidebar;
