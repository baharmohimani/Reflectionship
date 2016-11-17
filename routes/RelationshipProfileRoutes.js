/* Loads the relationship profile page. */

exports.personal = function (req, res) {
    // Required for data.
    /* var Profile = require("./public/json/RelationshipProfile.json");
    
    // First, grab the required data for all Profiles.
    var HomeButton = Profile["HomeButton"];
    var HomeLink = Profile["HomeLink"];

    // Then, grab the specific Profile.
    var ProfileID = Profile["UserID"];
    var ProfileUsername = Profile["AllProfiles"][ProfileID]["Name"];
    var Detail = Profile["AllProfiles"][ProfileID]["Info"];

    // Combine the data together.
    var ProfileData = { HomeButton, HomeLink, ProfileUsername, Detail };

    // Render the page using the person's information.
    res.render("RelationshipProfile", ProfileData); */
    res.render("RelationshipProfile");
};
/*
exports.getDetails = function (req, res) {
    var Profile = require("./public/json/RelationshipProfile.json");
    var ProfileID = Profile["UserID"];
    var Detail = null;
    switch (req.params.DetailID) {
        case "0":
            Detail = Profile["AllProfiles"][ProfileID]["Info"];
            break;
        case "1":
            Detail = Profile["AllProfiles"][ProfileID]["Likes"];
            break;
        case "2":
            Detail = Profile["AllProfiles"][ProfileID]["Dislikes"];
            break;
        default:
            break;
    }

    var ProfileUsername = Profile["AllProfiles"][ProfileID]["Name"];

    var ProfileData = { ProfileUsername, Detail };

    // Send JSON along.
    res.json(ProfileData);
}

exports.submitInfo = function (req) {
    var FileIO = require('fs');
    var Profile = require("./public/json/RelationshipProfile.json");
    var ProfileID = Profile["UserID"];
    var ProfileUser = Profile["AllProfiles"][ProfileID];

    switch (req.body.detail) {
        case '0':
            ProfileUser["Info"]["TableBodyRows"] = JSON.parse(req.body.jsonStr);
            break;
        case '1':
            ProfileUser["Likes"]["TableBodyRows"] = JSON.parse(req.body.jsonStr);
            break;
        case '2':
            ProfileUser["Dislikes"]["TableBodyRows"] = JSON.parse(req.body.jsonStr);
            break;
        default:
            break;
    }

    FileIO.writeFile("./public/json/RelationshipProfile.json", JSON.stringify(Profile), 'utf8');
} */