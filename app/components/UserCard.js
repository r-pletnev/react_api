var React = require('react');
var Bootstrap = require('react-bootstrap');
var ListGroupItem = Bootstrap.ListGroupItem;
var Col = Bootstrap.Col;
var Row = Bootstrap.Row;
var Image = Bootstrap.Image;
var PropTypes = React.PropTypes;

function UserCard(user){
	var userDescription = user.description.map(function(prop, index){
		return (
			<span key={index}>
				<strong>{prop[0]} :</strong> {prop[1]} {' '}
			</span>
		)
	});
	return (
		<ListGroupItem key={user.id}>
			<Row>
				<Col sm={2}>
					<Image src={user.thumbnail_url} circle/>
				</Col>
				<Col sm={10}>
					<h4>{user.fullName}</h4>
					<div>{userDescription}</div>
				</Col>
			</Row>
		</ListGroupItem>
	)

}

UserCard.propTypes = {
	thumbnail_url: PropTypes.string.isRequired,
	fullName: PropTypes.string.isRequired,
	description: PropTypes.array.isRequired,
}



module.exports = UserCard;