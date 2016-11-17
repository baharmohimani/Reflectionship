/* Loads the relationship profile page. */

exports.personal = function (req, res) {
    var Profile = require("./public/json/RelationshipProfile.json");

    // First, grab the required data for all Profiles.
    var HomeButton = Profile["HomeButton"];
    var HomeLink = Profile["HomeLink"];

    // Then, grab the specific Profile.
    var ProfileID = Profile["UserID"];
    var ProfileUsername = Profile["AllProfiles"][ProfileID]["Name"];
    var Detail = Profile["AllProfiles"][ProfileID]["Info"];

    // Combine the data together.
    var ProfileData = { HomeButton, HomeLink, ProfileUsername, Detail };

    res.render("RelationshipProfile");
};