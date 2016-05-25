var React = require('react');
var Bootstrap = require('react-bootstrap');
var ListGroupItem = Bootstrap.ListGroupItem;
var Col = Bootstrap.Col;
var Row = Bootstrap.Row;
var PropTypes = React.PropTypes;

function UserItem(user){
	var userDescription = user.description.map(function(prop){
		return (
			<span>
				<strong>{prop[0]} :</strong> prop[1]
			</span>
		)
	});
	return (
		<ListGroupItem>
			<Row>
				<Col sm={2}>
					<Image src={user.thumbnail_url} rounded/>
				</Col>
				<Col sm={10}>
					<h4>{user.fullName}</h4>
					<div>{userDescription}</div>
				</Col>
			</Row>
		</ListGroupItem>
	)

}

randomUser.propTypes{
	thumbnail_url: PropTypes.string.isRequired,
	fullName: PropTypes.string.isRequired,
	description: PropTypes.array.isRequired
}



module.exports = UserItem;