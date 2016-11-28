var ProfileEmotions = require('../ProfileInfo.json');
var FileIO = require('fs');

exports.view = function (req, res) {
    var EmotionInfo = {
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
    };

    res.render("EmotionTracker", EmotionInfo);
};

exports.getInfo = function (req, res) {
	res.json(ProfileEmotions);
}

exports.saveInfo = function (req, res) {
	var ProfileID = parseInt(ProfileEmotions["UserID"]);
    var ProfileUser = ProfileEmotions["AllProfiles"][ProfileID];
	if(req.body.jsonStr == "")
	{
	    if (Object.keys(ProfileUser["Entries"]).length > 0) {
	        ProfileUser["Entries"].pop();
	    }
		
		FileIO.writeFile("./ProfileInfo.json", JSON.stringify(ProfileEmotions), 'utf8');
		
	}
	else {
		var Info = JSON.parse(req.body.jsonStr);
	
		ProfileUser["Entries"].push(Info);
	
		FileIO.writeFile("./ProfileInfo.json", JSON.stringify(ProfileEmotions), 'utf8');
	}
}