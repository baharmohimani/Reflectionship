exports.view = function (req, res) {
    var ConversationInfo = {
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
        // "get question": "/getQuestion"
    };

    res.render("ConversationIdeas", ConversationInfo);
};

