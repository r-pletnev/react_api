var React = require('react');
var ReactDOM = require('react-dom');
var Panel = require('react-bootstrap').Panel; 
var ListGroup = require('react-bootstrap').ListGroup;
var Col = require('react-bootstrap').Col;
var styles = require('../styles');
var dragula = require('react-dragula');
var PropTypes = React.PropTypes;


var List = React.createClass({

	ScrollHandler: function(){
		var node = document.getElementById('test');
		return this.props.onScrollHandler(

				 {'scrollHeight': node.scrollHeight,
				   'scrollTop': node.scrollTop,
				   'clientHeight': node.clientHeight

				}
			)
	},
	componentDidMount: function(){
		var container = document.getElementById(this);
		dragula([container]);

	},
	render: function(){
		var title = (<h3>{this.props.header}</h3>);
		return (
			<Col sm={10}>
				<Panel id="test" header={title} bsStyle="primary" style={styles.scrollable} onScroll={this.ScrollHandler}>
					<ListGroup fill >
						{this.props.children}
					</ListGroup>
				</Panel>
			</Col>
	)}
})
module.exports = List;