var axios = require('axios');

function getRandomUsersData(step){
	return axios.get("https://randomuser.me/api/?results=" + step + "&exc=login");
}

var helper = {
	getUsersInfo: function(step){
		return getRandomUsersData(step)
			.then(function(response){
				var obj = {};
				response.data.results.forEach(function(row){
					obj[row.id.value] = row;
				});
				return obj;
			})
			.catch(function(err){ console.warn('Error in getUsersInfo', err)})
	}
}


module.exports = helper;