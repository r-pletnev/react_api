var React = require('react');
var ReactDOM = require('react-dom');
var Panel = require('react-bootstrap').Panel; 
var ListGroup = require('react-bootstrap').ListGroup;
var Col = require('react-bootstrap').Col;
var styles = require('../styles');
var PropTypes = React.PropTypes;

// function List(props){
// 	var title = (<h3>{props.header}</h3>);
// 	var ScrollHandler = function(){
// 		props.onScrollHandler(this);
// 	}; 
// 	return (
// 		<Col sm={10}>
// 			<Panel header={title} bsStyle="primary" style={styles.scrollable} onScroll={ScrollHandler}>
// 				<ListGroup fill >
// 					{props.children}
// 				</ListGroup>
// 			</Panel>
// 		</Col>
// 	)
// }

// List.propTypes = {
// 	header: PropTypes.string.isRequired,
// 	onScrollHandler: PropTypes.func.isRequired
// }

var List = React.createClass({

	ScrollHandler: function(){
		// console.log(this);
		console.log(ReactDOM.findDOMNode(this).scrollTop);
		return this.props.onScrollHandler(
				 {'scrollHeight': ReactDOM.findDOMNode(this).scrollHeight,
				   'scrollTop': ReactDOM.findDOMNode(this).scrollTop}
			)
	},
	componentDidUpdate: function(){
		// console.log(ReactDOM.findDOMNode(this).scrollTop);
	},

	render: function(){
		var title = (<h3>{this.props.header}</h3>);
		return (
			<Col sm={10}>
				<Panel header={title} ref="test" bsStyle="primary" style={styles.scrollable} onScroll={this.ScrollHandler}>
					<ListGroup fill >
						{this.props.children}
					</ListGroup>
				</Panel>
			</Col>
	)}
})
module.exports = List;