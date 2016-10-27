/* Load the home page. */

exports.view = function (req, res) {
    var Aspects = {
        "AspectRows": [
            {
                // Top row - contains emotion tracker and conversation ideas aspects.
                "AspectColumns": [
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "TextBox": "images/AspectBox.png",
                        "AspectTextTop": "Emotion",
                        "AspectTextBot": "Tracker"
                    },
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "TextBox": "images/AspectBox.png",
                        "AspectTextTop": "Conversation",
                        "AspectTextBot": "Ideas"
                    }
                ]
            },
            {
                // Bottom row - contains relationship profile and swi2tch profile aspects.
                "AspectColumns": [
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "TextBox": "images/AspectBox.png",
                        "AspectTextTop": "Relationship",
                        "AspectTextBot": "Profile"
                    },
                    {
                        "ImageHolder": "images/ImageHolder.png",
                        "TextBox": "images/AspectBox.png",
                        "AspectTextTop": "Switch",
                        "AspectTextBot": "Profile"
                    }
                ]
            }
        ],
        "HomeButton": "images/HomeSymbol.png"
    };

    // Send this data to Home.handlebars.
    res.render("Home", Aspects);
};