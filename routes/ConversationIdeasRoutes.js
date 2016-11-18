exports.view = function (req, res) {
    var ConversationInfo = {
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
    };

    res.render("ConversationIdeas", ConversationInfo);
};

