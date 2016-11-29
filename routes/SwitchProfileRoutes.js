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

exports.deleteInfo = function (req, res) {

}

exports.addInfo = function (req, res) {

}