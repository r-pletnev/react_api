var _ = require('lodash');
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
	updateUsersRegistry: function(){
		randomUserHelper.getUsersInfo(this.props.step)
			.then(function(users) {
				this.setState({
					usersRegistry: _.assign(this.state.usersRegistry, users)
				})
			}.bind(this))
	},

	handleOnScroll: function(event){
		// console.log(event);
	},

	componentDidMount: function(){
		return this.updateUsersRegistry();
	},
	render: function(){
		return(
			<div>
				<Sidebar />
				 <UserList header="People" users={this.state.usersRegistry} onScrollHandler={this.handleOnScroll} />
			</div>
		)
	}
});



module.exports = UsersContainer;