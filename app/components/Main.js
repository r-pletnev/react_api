var React = require('react');
var styles = require('../styles/')

function Main (props){
	return (
		<div className="container" style={styles.space}>
			<div className="row">
				{props.children}
			</div>
		</div>

	)

}

module.exports = Main;