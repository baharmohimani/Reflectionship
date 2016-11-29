var ProfileInfo = require("../ProfileInfo.json");
var FileIO = require("fs");

exports.view = function (req, res) {
    var SwitchInfo = {
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
    };

    res.render("SwitchProfile", SwitchInfo);
};

exports.getInfo = function (req, res) {
    res.json(ProfileInfo);
}

exports.changeUser = function (req, res) {
    ProfileInfo["UserID"] = parseInt(req.body.ID);

    FileIO.writeFile("./ProfileInfo.json", JSON.stringify(ProfileInfo), 'utf8');
}

exports.deleteInfo = function (req, res) {
    ProfileInfo["AllProfiles"].splice(parseInt(req.body.ID), 1);

    FileIO.writeFile("./ProfileInfo.json", JSON.stringify(ProfileInfo), 'utf8');
}

exports.addInfo = function (req, res) {
    ProfileInfo["AllProfiles"].push(req.body);
    ProfileInfo["UserID"] = 0;
    FileIO.writeFile("./ProfileInfo.json", JSON.stringify(ProfileInfo), 'utf8');
}