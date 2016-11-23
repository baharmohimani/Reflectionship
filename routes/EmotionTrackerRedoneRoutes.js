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
/*
 * GET home page.
 */
function keysrt(key, desc) {
    return function (a, b) {
        return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    }
}

exports.saveInfo = function (req, res) {
	var ProfileID = parseInt(ProfileEmotions["UserID"]);
    var ProfileUser = ProfileEmotions["AllProfiles"][ProfileID];
	if(req.body.jsonStr == "")
	{
		ProfileUser["Entries"].pop()
		
		FileIO.writeFile("./EmotionTracker.json", JSON.stringify(ProfileEmotions), 'utf8');
		
	}
	else {
		var Info = JSON.parse(req.body.jsonStr);
	
		ProfileUser["Entries"].push(Info);
        ProfileUser["Entries"].sort(keysrt('properDate', false));
	
		FileIO.writeFile("./EmotionTracker.json", JSON.stringify(ProfileEmotions), 'utf8');
	}
}