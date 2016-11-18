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