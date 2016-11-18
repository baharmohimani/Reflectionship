/* Loads the relationship profile page. */

var ProfileInfo = require('../RelationshipProfile.json');
var FileIO = require('fs');

exports.getProfileInfo = function (req, res) {
    // First, grab the required data for all Profiles.
    var HomeButton = ProfileInfo["HomeButton"];
    var HomeLink = ProfileInfo["HomeLink"];

    // Then, grab the specific Profile.
    var ProfileID = ProfileInfo["UserID"];
    var ProfileUsername = ProfileInfo["AllProfiles"][ProfileID]["Name"];
    var Detail = ProfileInfo["AllProfiles"][ProfileID]["Info"];

    // Combine the data together.
    var ProfileData = { HomeButton, HomeLink, ProfileUsername, Detail };

    res.json(ProfileData);
}

exports.personal = function (req, res) {
    res.render("RelationshipProfile");
};
