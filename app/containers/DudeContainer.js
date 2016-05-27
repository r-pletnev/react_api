var React = require('react');
var PropTypes = React.PropTypes;
var UserCard = require('../components/UserCard');

var dudeContainer = React.createClass({
	propTypes: {
		name: PropTypes.string.isRequired,
		surname: PropTypes.string.isRequired,
		nat: PropTypes.string.isRequired,
		thumbnail_url: PropTypes.string.isRequired,
		gender: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	},
	getInitialState: function(){
		return{
			fullName: '',
			description: []
		};
	},
	componentDidMount: function(){
		this.setState({
			fullName: this.props.title + " " + this.props.name + " " + this.props.surname,
			description: [['Nationality', this.props.nat], ['Sex', this.props.gender], ['City', this.props.city]]
		});
	},
	render: function(){
		return (
			<UserCard 
				fullName={this.state.fullName}
				thumbnail_url={this.props.thumbnail_url}
				description={this.state.description}
				key={this.props.id + 'UC'}
				onClick={this.handleClick}
			/>
		)
	}
});


module.exports = dudeContainer;