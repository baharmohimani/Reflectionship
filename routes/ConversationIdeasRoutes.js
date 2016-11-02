exports.view = function (req, res) {
    var ConversationInfo = {
        "AspectName": "Conversation Ideas",
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/"
    };

    res.render("ConversationIdeas", ConversationInfo);
};