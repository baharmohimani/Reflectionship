/* Load the home page. */

exports.view = function (req, res) {
    var Aspects = {
        // Contains the top and bottom row of aspects.
        "AspectRows": [
            // Top row - contains the emotion tracker and conversation ideas aspects.
            {
                "AspectColumns": [
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "Image": "images/Emotion.png",
                        "ImageText": "images/EmotionTrackerText.png",
                        "Link": "/EmotionTracker",
                        "ImageClass": "top-image",
                        "HolderClass": "top-holder"
                    },
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "Image": "images/Conversation.png",
                        "ImageText": "images/ConversationIdeasText.png",
                        "Link": "/ConversationIdeas",
                        "ImageClass": "top-image",
                        "HolderClass": "top-holder"
                    }
                ]
            },
            // Bottom row - contains the relationship profile and switch profile aspects.
            {
                "AspectColumns": [
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "Image": "images/Relationship.png",
                        "ImageText": "images/RelationshipProfileText.png",
                        "Link": "/RelationshipProfile/Obama",
                        "ImageClass": "bottom-image",
                        "HolderClass": "bottom-holder"
                    },
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "Image": "images/Switch.png",
                        "ImageText": "images/SwitchProfileText.png",
                        "Link": "/SwitchProfile",
                        "ImageClass": "bottom-image",
                        "HolderClass": "bottom-holder"
                    }
                ]
            }
        ],
        "HomeButton": "images/HomeSymbol.png"
    };

    // Send this data to Home.handlebars.
    res.render("Home", Aspects);
};