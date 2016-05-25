var React = require('react');
var Bootstrap = require('react-bootstrap');
var Col = Bootstrap.Col;
var Button = Bootstrap.Button;
var ButtonToolBar = Bootstrap.ButtonToolBar;

function SideBar(props){
	return(
		<Col sm={2}>
			<ButtonToolBar>
				<Button bsStyle="primary" onClick={props.startHandler}>
					Start
				</Button>
				<Button bsStyle="danger" onClick={props.clearHandler}>
					Clear
				</Button>
			</ButtonToolBar>
		</Col>
	)
}


module.exports = SideBar;
