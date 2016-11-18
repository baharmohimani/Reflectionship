/* Loads the relationship profile page. */

var ProfileInfo = require('../RelationshipProfile.json');
var FileIO = require('fs');

exports.getProfileInfo = function (req, res) {
    console.log("Hello");
    console.log(ProfileInfo);
    res.json(ProfileInfo);
}

exports.personal = function (req, res) {
    res.render("RelationshipProfile");
};
