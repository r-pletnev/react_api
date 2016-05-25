var React = require('react');
var UserItem = require('../components/UserItem');
var randomuserHelper = require('../utils/randomuserHelper');
var PropTypes = React.PropTypes;
var List = require('../components/List');
var Sidebar = require('../components/Sidebar');
var UserList = require('../components/UserList');

var UsersContainer = React.createClass({
	propTypes: {
		step: 50
	},
	getInitialState: function(){
		return {
			usersRegistry: {}
		}
	},
	componentDidMount: function(){
		randomuserHelper.getUsers(50)
			.then(function(users) {
				this.setState({
					usersRegistry: users
				})
			}.bind(this))
	},
	render: function(){
		return(
			<Sidebar />
			<UserList />


		)
	}


});



module.exports = UsersContainer;