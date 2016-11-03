/* Load the home page. */

exports.view = function (req, res) {
    var Aspects = {
        // Contains the top and bottom row of aspects.            
		"AspectRows": [
			{
				"AspectColumns": [
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "Image": "images/Emotion.png",
                        "ImageText": "images/EmotionTrackerText.png",
                        "AspectLink": "/EmotionTracker",
                        "ImageClass": "top-image",
                        "HolderClass": "top-holder"
                    },
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "Image": "images/Conversation.png",
                        "ImageText": "images/ConversationIdeasText.png",
                        "AspectLink": "/ConversationIdeas",
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
                        "AspectLink": "/RelationshipProfile/Personal",
                        "ImageClass": "bottom-image",
                        "HolderClass": "bottom-holder"
                    },
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "Image": "images/Switch.png",
                        "ImageText": "images/SwitchProfileText.png",
                        "AspectLink": "/SwitchProfile",
                        "ImageClass": "bottom-image",
                        "HolderClass": "bottom-holder"
                    }
                ]
            }
        ],
		"LoginDetails":
		{
			"LoginName": "Obama",
			"LoginImage": "images/Login.jpg",
			"AspectLink": "/Login"
		}
    };

    // Send this data to Home.handlebars.
    res.render("Home", Aspects);
};