var ProfileInfo = require('../RelationshipProfile.json');

exports.getProfileInfo = function(req, res) {
	res.json(ProfileInfo);
}