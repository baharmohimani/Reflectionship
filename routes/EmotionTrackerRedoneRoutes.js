var ProfileEmotions = require('../EmotionTracker.json');
var FileIO = require('fs');

exports.view = function (req, res) {
    var EmotionInfo = {
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
    };

    res.render("EmotionTrackerRedone", EmotionInfo);
};

exports.getInfo = function (req, res) {
	res.json(ProfileEmotions);
}

exports.saveInfo = function (req, res) {
	var ProfileID = parseInt(ProfileEmotions["UserID"]);
    var ProfileUser = ProfileEmotions["AllProfiles"][ProfileID];
	var Info = JSON.parse(req.body.jsonStr);
	
	ProfileUser["Entries"].push(Info);
	
    FileIO.writeFile("./EmotionTracker.json", JSON.stringify(ProfileEmotions), 'utf8');
}