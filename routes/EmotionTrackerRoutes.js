exports.view = function (req, res) {
    var EmotionInfo = {
        "AspectName": "Emotion Tracker",
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/"
    };

    res.render("EmotionTracker", EmotionInfo);
};