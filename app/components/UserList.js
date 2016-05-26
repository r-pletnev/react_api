var React = require('react');
var List = require('./List');
var DudeContainer = require('../containers/DudeContainer');
var PropTypes = React.PropTypes;

function UserList (props){
	var usersNodes = Object.keys(props.users).map(function(value){
			return(
				<DudeContainer	
					name={props.users[value].name.first}
					surname={props.users[value].name.last}
					nat={props.users[value].nat}
					thumbnail_url={props.users[value].picture.medium}
					gender={props.users[value].gender}
					city={props.users[value].location.city}
					key={props.users[value].id.value}
					title={props.users[value].name.title}
				/>
			);
		}
	);
	return (
		<List header={props.header} onScrollHandler={props.onScrollHandler}>
			{usersNodes}
		</List>
	)
}

UserList.propTypes = {
	header: PropTypes.string.isRequired,
	users: PropTypes.object.isRequired,
	onScrollHandler: PropTypes.func.isRequired
}

module.exports = UserList;