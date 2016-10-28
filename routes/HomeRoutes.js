/* Load the home page. */

exports.view = function (req, res) {
    var Aspects = {
        // Top row - contains emotion tracker and conversation ideas aspects.
        "AspectTopColumns": [
            {
                "ImageHolder": "images/ImageHolder.png",
                "TextBox": "images/EmotionTracker.png",
                "Image": "images/Emotion.png",
                "Link": "/EmotionTracker"
            },
            {
                "ImageHolder": "images/ImageHolder.png",
                "TextBox": "images/ConversationIdeas.png",
                "Image": "images/Conversation.png",
                "Link": "/ConversationIdeas"
            }
        ],
        // Bottom row - contains relationship profile and switch profile aspects.
        "AspectBotColumns": [
            {
                "ImageHolder": "images/ImageHolder.png",
                "TextBox": "images/RelationshipProfile.png",
                "Image": "images/Relationship.png",
                "Link": "/RelationshipProfile/Obama"
            },
            {
                "ImageHolder": "images/ImageHolder.png",
                "TextBox": "images/SwitchProfile.png",
                "Image": "images/Switch.png",
                "Link": "/SwitchProfile"
            }
        ],
        "HomeButton": "images/HomeSymbol.png"
    };

    // Send this data to Home.handlebars.
    res.render("Home", Aspects);
};