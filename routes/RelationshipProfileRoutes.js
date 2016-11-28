/* Loads the relationship profile page. */

var ProfileInfo = require('../RelationshipProfile.json');
var FileIO = require('fs');

exports.view = function (req, res) {
    var Info= {
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
        // "get question": "/getQuestion"
    };
    res.render("RelationshipProfile");
};

exports.getProfileInfo = function (req, res) {
    res.json(ProfileInfo);
}

exports.personal = function (req, res) {
    var Info= {
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
    };
    res.render("RelationshipProfile", Info);
}

exports.saveInfo = function (req, res) {
    var ProfileID = parseInt(Profile["UserID"]);
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

    fs.writeFile("./RelationshipProfile.json", JSON.stringify(Profile), 'utf8');
}

