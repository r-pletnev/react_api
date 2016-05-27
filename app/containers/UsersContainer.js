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
			usersRegistry: {},
			isLoading: true
		}
	},
	updateUsersRegistry: function(){
		this.setState({
			isLoading: true
		})
		randomUserHelper.getUsersInfo(this.props.step)
			.then(function(users) {
				this.setState({
					usersRegistry: _.assign(this.state.usersRegistry, users),
					isLoading: false

				})
			}.bind(this))
	},

	handleOnScroll: function(event){
		if(!this.state.isLoading && (event.clientHeight + event.scrollTop) > event.scrollHeight / 1.5){
			this.updateUsersRegistry();
		}
	},

	handleOnClickClear: function(event){
		this.setState({
			usersRegistry: {}
		})

	},

	handleOnStart: function(event){
		this.updateUsersRegistry();
	},

	componentDidMount: function(){
		return this.updateUsersRegistry();
	},
	render: function(){
		return(
			<div>
				<Sidebar clearHandler={this.handleOnClickClear} startHandler={this.handleOnStart}/>
				 <UserList header="People" users={this.state.usersRegistry} onScrollHandler={this.handleOnScroll} />
			</div>
		)
	}
});



module.exports = UsersContainer;