exports.view = function (req, res) {
    var EmotionInfo = {
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
    };

    res.render("EmotionTrackerRedone", EmotionInfo);
};