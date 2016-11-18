/* Loads the relationship profile page. */

var ProfileInfo = require('../RelationshipProfile.json');

exports.getProfileInfo = function (req, res) {
    res.json(ProfileInfo);
}

exports.personal = function (req, res) {
    res.render("RelationshipProfile");
};
