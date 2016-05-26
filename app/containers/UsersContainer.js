var React = require('react');
var randomUserHelper = require('../utils/randomUserHelper');
var PropTypes = React.PropTypes;
var UserList = require('../components/UserList');
var Sidebar = require('../components/Sidebar');

var UsersContainer = React.createClass({
	propTypes: {
		step: PropTypes.number.isRequired
	},
	getInitialState: function(){
		return {
			usersRegistry: {}
		}
	},
	componentDidMount: function(){
		randomUserHelper.getUsersInfo(this.props.step)
			.then(function(users) {
				this.setState({
					usersRegistry: users
				})
			}.bind(this))
	},
	render: function(){
		return(
			<div>
				<Sidebar />
				<UserList header="People" users={this.state.usersRegistry} />
			</div>
		)
	}
});



module.exports = UsersContainer;