/* Loads the relationship profile page. */

exports.personal = function (req, res) {
    var Profile = require("./public/json/RelationshipProfile.json");
    console.log(window.location.pathname);
    // First, grab the required data for all Profiles.
    var HomeButton = null;

    res.json(Profile);
};